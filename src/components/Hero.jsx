import React, { useEffect, useRef, useState } from 'react'
import logoImg from '../assets/logo.png'

const SERVICE_NODES = [
  {
    id: 'meta',
    label: 'Meta Ads',
    sub: 'Scaling & ROAS',
    icon: '⚡',
    color: '#1A65E3',
    bg: 'rgba(26, 101, 227, 0.08)',
    border: 'rgba(26, 101, 227, 0.25)',
    angle: 0,
    metric: '4.8x ROAS',
  },
  {
    id: 'google',
    label: 'Google Ads',
    sub: 'High-Intent Search',
    icon: '🎯',
    color: '#16a34a',
    bg: 'rgba(22, 163, 74, 0.08)',
    border: 'rgba(22, 163, 74, 0.25)',
    angle: 45,
    metric: 'Top #1 Rank',
  },
  {
    id: 'video',
    label: 'Video Editing',
    sub: 'Viral Short-Form',
    icon: '🎬',
    color: '#e11d48',
    bg: 'rgba(225, 29, 72, 0.08)',
    border: 'rgba(225, 29, 72, 0.25)',
    angle: 90,
    metric: '10M+ Views',
  },
  {
    id: 'design',
    label: 'Graphic Design',
    sub: 'Premium Branding',
    icon: '✦',
    color: '#C49A0A',
    bg: 'rgba(196, 154, 10, 0.08)',
    border: 'rgba(196, 154, 10, 0.25)',
    angle: 135,
    metric: 'Visual Identity',
  },
  {
    id: 'funnels',
    label: 'Funnel Building',
    sub: 'High Conversion',
    icon: '⬡',
    color: '#5C9900',
    bg: 'rgba(92, 153, 0, 0.08)',
    border: 'rgba(92, 153, 0, 0.25)',
    angle: 180,
    metric: '32% Conv Rate',
  },
  {
    id: 'web',
    label: 'Websites',
    sub: 'Modern & Fast',
    icon: '💻',
    color: '#7c3aed',
    bg: 'rgba(124, 58, 237, 0.08)',
    border: 'rgba(124, 58, 237, 0.25)',
    angle: 225,
    metric: '99 Speed Score',
  },
  {
    id: 'social',
    label: 'Social Growth',
    sub: 'Content Systems',
    icon: '🔥',
    color: '#ea580c',
    bg: 'rgba(234, 88, 12, 0.08)',
    border: 'rgba(234, 88, 12, 0.25)',
    angle: 270,
    metric: '+150K Reach',
  },
  {
    id: 'ugc',
    label: 'UGC Content',
    sub: 'Authentic Creator Ads',
    icon: '📱',
    color: '#0891b2',
    bg: 'rgba(8, 145, 178, 0.08)',
    border: 'rgba(8, 145, 178, 0.25)',
    angle: 315,
    metric: 'High CTR',
  },
]

const Hero = () => {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })
  const [activeNode, setActiveNode] = useState(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      if (!canvas.parentElement) return
      canvas.width = canvas.parentElement.offsetWidth
      canvas.height = canvas.parentElement.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let t = 0

    // Particle sparkle points
    const sparkles = Array.from({ length: 35 }, () => ({
      x: Math.random(),
      y: Math.random(),
      speed: 0.002 + Math.random() * 0.004,
      size: 1 + Math.random() * 2,
      opacity: 0.2 + Math.random() * 0.6,
      color: Math.random() > 0.5 ? '#FFB800' : '#1A65E3',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const orbit = Math.min(canvas.width, canvas.height) * 0.38
      const mxOffset = (mouseRef.current.x - 0.5) * 24
      const myOffset = (mouseRef.current.y - 0.5) * 24

      // Draw particle sparkles
      sparkles.forEach((s) => {
        s.y -= s.speed
        if (s.y < 0) s.y = 1
        const px = s.x * canvas.width + Math.sin(t * 2 + s.x * 10) * 8
        const py = s.y * canvas.height
        ctx.beginPath()
        ctx.arc(px, py, s.size, 0, Math.PI * 2)
        ctx.fillStyle = `${s.color}${Math.floor(s.opacity * 255).toString(16).padStart(2, '0')}`
        ctx.fill()
      })

      // Pulsing central radar ripples
      for (let r = 1; r <= 3; r++) {
        const pulseRadius = ((t * 25 + r * 60) % (orbit * 1.15)) + 45
        const alpha = Math.max(0, 0.25 - pulseRadius / (orbit * 1.3))
        ctx.beginPath()
        ctx.arc(cx + mxOffset * 0.3, cy + myOffset * 0.3, pulseRadius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 184, 0, ${alpha})`
        ctx.lineWidth = 1.2
        ctx.stroke()
      }

      // Orbit tracks
      ctx.beginPath()
      ctx.arc(cx + mxOffset * 0.2, cy + myOffset * 0.2, orbit, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.lineWidth = 1
      ctx.stroke()

      // Laser lines connecting center to satellites
      SERVICE_NODES.forEach((node, i) => {
        const angleRad = (node.angle * Math.PI) / 180 + t * 0.08 + i * 0.02
        const wobble = Math.sin(t * 1.2 + i * 1.5) * 6
        const nx = cx + (orbit + wobble) * Math.cos(angleRad) + mxOffset * 0.7
        const ny = cy + (orbit + wobble) * Math.sin(angleRad) + myOffset * 0.7

        // Beam gradient
        const beam = ctx.createLinearGradient(cx + mxOffset * 0.3, cy + myOffset * 0.3, nx, ny)
        beam.addColorStop(0, 'rgba(255, 184, 0, 0.45)')
        beam.addColorStop(0.5, `${node.color}35`)
        beam.addColorStop(1, `${node.color}70`)

        ctx.beginPath()
        ctx.moveTo(cx + mxOffset * 0.3, cy + myOffset * 0.3)
        ctx.lineTo(nx, ny)
        ctx.strokeStyle = beam
        ctx.lineWidth = activeNode === node.id ? 2.5 : 1.2
        ctx.stroke()

        // Flowing light pulses along the connection
        const pulsePos = (t * 0.4 + i * 0.25) % 1
        const px = (cx + mxOffset * 0.3) * (1 - pulsePos) + nx * pulsePos
        const py = (cy + myOffset * 0.3) * (1 - pulsePos) + ny * pulsePos
        ctx.beginPath()
        ctx.arc(px, py, 3, 0, Math.PI * 2)
        ctx.fillStyle = node.color
        ctx.shadowColor = node.color
        ctx.shadowBlur = 8
        ctx.fill()
        ctx.shadowBlur = 0
      })

      t += 0.008
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [activeNode])

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      }
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      id="hero"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'var(--bg-base)',
      }}
    >
      {/* Background decorations */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
        pointerEvents: 'none',
      }} />

      <div style={{
        position: 'absolute', top: '-15%', right: '-8%',
        width: '55vw', height: '55vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 184, 0, 0.12) 0%, rgba(26, 101, 227, 0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        filter: 'blur(40px)',
      }} />

      {/* Main Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1.1fr 1fr',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(6rem, 10vw, 9rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vw, 5rem)',
        gap: 'clamp(2rem, 5vw, 5rem)',
      }}>
        {/* Left Column — Editorial Hero Content */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '7px 18px', borderRadius: '100px',
            border: '1px solid rgba(255, 184, 0, 0.4)',
            background: 'rgba(255, 184, 0, 0.10)',
            marginBottom: '32px',
            backdropFilter: 'blur(8px)',
            boxShadow: '0 4px 16px rgba(255, 184, 0, 0.15)',
          }}>
            <div style={{
              width: '8px', height: '8px', borderRadius: '50%',
              background: '#FFB800',
              boxShadow: '0 0 10px #FFB800',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: '#B57C00', fontWeight: '700',
            }}>
              Now Accepting Growth Projects
            </span>
          </div>

          {/* Bold Display Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 5.5vw, 5.6rem)',
            fontWeight: '800',
            lineHeight: '0.94',
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            <span style={{ display: 'block' }}>Creative</span>
            <span style={{ display: 'block' }}>Thinking.</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #FFB800 0%, #C49A0A 60%, #8A6800 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Performance
            </span>
            <span style={{ display: 'block' }}>Execution.</span>
          </h1>

          {/* Subtext */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            fontWeight: '400',
            lineHeight: '1.75',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            marginBottom: '42px',
          }}>
            We build high-converting growth systems for ambitious brands. From Meta & Google Ads
            to automated sales funnels, high-impact video creative, and bespoke digital platforms.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a
              href="#contact"
              className="btn btn-primary"
              data-cursor="START"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px', padding: '15px 32px', boxShadow: '0 8px 25px rgba(0,0,0,0.18)' }}
            >
              Book a Strategy Call
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
            <a
              href="#work"
              className="btn btn-secondary"
              data-cursor="VIEW"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px', padding: '15px 30px' }}
            >
              Explore Portfolio
            </a>
          </div>

          {/* Stats Bar */}
          <div style={{
            marginTop: '48px', paddingTop: '24px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex', gap: '36px', flexWrap: 'wrap',
          }}>
            {[
              { num: '6+', label: 'Years Experience' },
              { num: '50+', label: 'Projects Delivered' },
              { num: '30+', label: 'Brands Scaled' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.8rem',
                  fontWeight: '800', letterSpacing: '-0.04em',
                  color: 'var(--text-primary)', lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginTop: '5px',
                  fontWeight: '600',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column — 3D Interactive Ecosystem with Flybit Falcon Centerpiece */}
        <div
          className="hide-mobile"
          style={{
            position: 'relative',
            height: 'clamp(460px, 52vw, 600px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Laser canvas */}
          <canvas
            ref={canvasRef}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />

          {/* Central Flybit Falcon Logo Centerpiece */}
          <div
            style={{
              position: 'relative',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {/* Pulsing halo */}
            <div style={{
              position: 'absolute',
              width: '140px',
              height: '140px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 184, 0, 0.35) 0%, rgba(255, 184, 0, 0) 70%)',
              animation: 'centerPulse 3s ease-in-out infinite',
              pointerEvents: 'none',
            }} />

            {/* Emblem circle */}
            <div style={{
              width: '100px',
              height: '100px',
              borderRadius: '50%',
              background: '#141310',
              padding: '6px',
              border: '3px solid #FFB800',
              boxShadow: '0 12px 40px rgba(255, 184, 0, 0.35), 0 0 20px rgba(0,0,0,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              transition: 'transform 300ms var(--ease-spring)',
            }}>
              <img
                src={logoImg}
                alt="Flybit Falcon Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Badge pill */}
            <div style={{
              marginTop: '10px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(255, 184, 0, 0.4)',
              borderRadius: '100px',
              padding: '4px 14px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: '800',
                letterSpacing: '-0.02em',
                color: '#17150F',
              }}>
                Flybit
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '11px',
                fontWeight: '800',
                color: '#FFB800',
              }}>
                Agency
              </span>
            </div>
          </div>

          {/* Interactive Floating Service Cards surrounding the center */}
          {SERVICE_NODES.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180
            const radiusPx = 185
            const x = Math.cos(rad) * radiusPx
            const y = Math.sin(rad) * radiusPx

            return (
              <div
                key={node.id}
                onMouseEnter={() => setActiveNode(node.id)}
                onMouseLeave={() => setActiveNode(null)}
                style={{
                  position: 'absolute',
                  transform: `translate(${x}px, ${y}px)`,
                  zIndex: 20,
                  transition: 'all 300ms var(--ease-spring)',
                  cursor: 'pointer',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 14px',
                    borderRadius: '100px',
                    background: 'var(--bg-elevated)',
                    border: `1.5px solid ${activeNode === node.id ? node.color : node.border}`,
                    boxShadow: activeNode === node.id
                      ? `0 10px 28px ${node.color}35, 0 2px 8px rgba(0,0,0,0.08)`
                      : '0 4px 16px rgba(0,0,0,0.06)',
                    transform: activeNode === node.id ? 'scale(1.12)' : 'scale(1)',
                    transition: 'all 250ms ease',
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <span style={{
                    fontSize: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: node.bg,
                  }}>
                    {node.icon}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '11px',
                      fontWeight: '700',
                      color: 'var(--text-primary)',
                      lineHeight: 1.1,
                      whiteSpace: 'nowrap',
                    }}>
                      {node.label}
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '8px',
                      color: node.color,
                      fontWeight: '600',
                      letterSpacing: '0.04em',
                      lineHeight: 1,
                      marginTop: '2px',
                    }}>
                      {node.metric}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile view */}
      <div className="show-mobile" style={{ padding: '2rem', paddingTop: '7rem', position: 'relative', zIndex: 10 }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: '10px',
          marginBottom: '20px',
        }}>
          <img
            src={logoImg}
            alt="Flybit Falcon Logo"
            style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid #FFB800' }}
          />
          <div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '800', color: '#17150F' }}>
              Flybit <span style={{ color: '#FFB800' }}>falcon</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)' }}>GROWTH AGENCY</div>
          </div>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2.4rem, 10vw, 3.5rem)',
          fontWeight: '800', lineHeight: '0.96', letterSpacing: '-0.035em',
          color: 'var(--text-primary)', marginBottom: '18px',
        }}>
          Creative Thinking. <br />
          <span style={{ background: 'linear-gradient(135deg, #FFB800 0%, #C49A0A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Performance
          </span> Execution.
        </h1>

        <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '28px' }}>
          We build digital systems that help modern businesses scale: Meta Ads, Google Ads, Funnels, Video Creative, and Web Development.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Book a Strategy Call ↗
          </a>
          <a
            href="#work"
            className="btn btn-secondary"
            style={{ justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View Portfolio
          </a>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {SERVICE_NODES.map((node) => (
            <div key={node.id} style={{
              padding: '10px 14px', borderRadius: '12px',
              background: 'var(--bg-elevated)', border: `1px solid ${node.border}`,
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span>{node.icon}</span>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '11px', fontWeight: '700', color: 'var(--text-primary)' }}>{node.label}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: node.color, fontWeight: '600' }}>{node.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes centerPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.35); opacity: 0.2; } }
      `}</style>
    </section>
  )
}

export default Hero
