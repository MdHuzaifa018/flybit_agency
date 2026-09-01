import React, { useEffect, useRef, useState } from 'react'

const SERVICE_NODES = [
  { id: 'meta', label: 'Meta Ads', icon: '◈', color: '#1A65E3', angle: 0 },
  { id: 'google', label: 'Google Ads', icon: '◉', color: '#16a34a', angle: 45 },
  { id: 'video', label: 'Video', icon: '▶', color: '#dc2626', angle: 90 },
  { id: 'design', label: 'Design', icon: '✦', color: '#C49A0A', angle: 135 },
  { id: 'funnels', label: 'Funnels', icon: '⬡', color: '#5C9900', angle: 180 },
  { id: 'web', label: 'Websites', icon: '⬚', color: '#7c3aed', angle: 225 },
  { id: 'social', label: 'Social', icon: '◎', color: '#ea580c', angle: 270 },
  { id: 'ugc', label: 'UGC', icon: '⊕', color: '#0891b2', angle: 315 },
]

const Hero = () => {
  const canvasRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
    resize()
    window.addEventListener('resize', resize)

    let t = 0

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cx = canvas.width / 2
      const cy = canvas.height / 2
      const orbit = Math.min(canvas.width, canvas.height) * 0.38
      const mxOffset = (mouseRef.current.x - 0.5) * 18
      const myOffset = (mouseRef.current.y - 0.5) * 18

      // Center glow — warm gold on light
      const grd = ctx.createRadialGradient(cx + mxOffset * 0.3, cy + myOffset * 0.3, 0, cx + mxOffset * 0.3, cy + myOffset * 0.3, 90)
      grd.addColorStop(0, 'rgba(196,154,10,0.10)')
      grd.addColorStop(1, 'transparent')
      ctx.fillStyle = grd
      ctx.beginPath()
      ctx.arc(cx + mxOffset * 0.3, cy + myOffset * 0.3, 90, 0, Math.PI * 2)
      ctx.fill()

      SERVICE_NODES.forEach((node, i) => {
        const angleRad = (node.angle * Math.PI) / 180 + t * 0.1 + i * 0.05
        const wobble = Math.sin(t * 0.8 + i) * 8
        const nx = cx + (orbit + wobble) * Math.cos(angleRad) + mxOffset * (0.6 + i * 0.05)
        const ny = cy + (orbit + wobble) * Math.sin(angleRad) + myOffset * (0.6 + i * 0.05)

        // Connection line
        ctx.beginPath()
        ctx.moveTo(cx + mxOffset * 0.3, cy + myOffset * 0.3)
        ctx.lineTo(nx, ny)
        const lineGrd = ctx.createLinearGradient(cx, cy, nx, ny)
        lineGrd.addColorStop(0, 'rgba(196,154,10,0.30)')
        lineGrd.addColorStop(1, 'rgba(196,154,10,0.02)')
        ctx.strokeStyle = lineGrd
        ctx.lineWidth = 0.8
        ctx.stroke()

        // Outer ring
        ctx.beginPath()
        ctx.arc(nx, ny, 32, 0, Math.PI * 2)
        ctx.strokeStyle = `${node.color}25`
        ctx.lineWidth = 1.5
        ctx.stroke()

        // Inner fill
        ctx.beginPath()
        ctx.arc(nx, ny, 20, 0, Math.PI * 2)
        const nodeGrd = ctx.createRadialGradient(nx, ny, 0, nx, ny, 20)
        nodeGrd.addColorStop(0, `${node.color}18`)
        nodeGrd.addColorStop(1, `${node.color}05`)
        ctx.fillStyle = nodeGrd
        ctx.fill()
        ctx.strokeStyle = `${node.color}40`
        ctx.lineWidth = 1
        ctx.stroke()

        // Icon
        ctx.fillStyle = node.color
        ctx.font = '11px JetBrains Mono, monospace'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.icon, nx, ny)

        // Label
        ctx.fillStyle = 'rgba(23,21,15,0.45)'
        ctx.font = '9px Inter, sans-serif'
        ctx.fillText(node.label.toUpperCase(), nx, ny + 46)
      })

      // Center node
      ctx.beginPath()
      ctx.arc(cx + mxOffset * 0.3, cy + myOffset * 0.3, 48, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(196,154,10,0.5)'
      ctx.lineWidth = 1.5
      ctx.stroke()

      ctx.beginPath()
      ctx.arc(cx + mxOffset * 0.3, cy + myOffset * 0.3, 36, 0, Math.PI * 2)
      const centerGrd = ctx.createRadialGradient(cx + mxOffset * 0.3, cy + myOffset * 0.3, 0, cx + mxOffset * 0.3, cy + myOffset * 0.3, 36)
      centerGrd.addColorStop(0, 'rgba(196,154,10,0.15)')
      centerGrd.addColorStop(1, 'rgba(196,154,10,0.04)')
      ctx.fillStyle = centerGrd
      ctx.fill()

      ctx.fillStyle = 'rgba(23,21,15,0.75)'
      ctx.font = 'bold 9px Inter, sans-serif'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText('YOUR', cx + mxOffset * 0.3, cy + myOffset * 0.3 - 6)
      ctx.fillText('BRAND', cx + mxOffset * 0.3, cy + myOffset * 0.3 + 6)

      t += 0.005
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  useEffect(() => {
    const onMouseMove = (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      }
    }
    window.addEventListener('mousemove', onMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMouseMove)
  }, [])

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        background: 'var(--bg-base)',
      }}
    >
      {/* Subtle dot grid */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.06) 1px, transparent 1px)',
        backgroundSize: '32px 32px',
        pointerEvents: 'none',
      }} />

      {/* Warm gold glow top-right */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: '50vw', height: '50vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,10,0.07) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main hero grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
        minHeight: '100vh',
        maxWidth: '1440px',
        margin: '0 auto',
        width: '100%',
        padding: 'clamp(6rem, 10vw, 10rem) clamp(1.5rem, 5vw, 5rem) clamp(3rem, 5vw, 5rem)',
        gap: '4rem',
      }}>
        {/* Left — Text */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          {/* Eyebrow badge */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '6px 16px', borderRadius: '100px',
            border: '1.5px solid rgba(92,153,0,0.30)',
            background: 'rgba(92,153,0,0.07)',
            marginBottom: '40px',
          }}>
            <div style={{
              width: '6px', height: '6px', borderRadius: '50%',
              background: '#5C9900',
              boxShadow: '0 0 8px rgba(92,153,0,0.5)',
              animation: 'pulse 2s infinite',
            }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#5C9900', fontWeight: '500',
            }}>
              Now Accepting Clients
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 5.5vw, 5.5rem)',
            fontWeight: '800',
            lineHeight: '0.94',
            letterSpacing: '-0.035em',
            color: 'var(--text-primary)',
            marginBottom: '32px',
          }}>
            <span style={{ display: 'block' }}>Creative</span>
            <span style={{ display: 'block' }}>Thinking.</span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>
              Performance
            </span>
            <span style={{ display: 'block' }}>Execution.</span>
          </h1>

          {/* Sub */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            fontWeight: '400',
            lineHeight: '1.7',
            color: 'var(--text-secondary)',
            maxWidth: '440px',
            marginBottom: '48px',
          }}>
            We build the digital systems that help modern businesses attract
            attention, build trust, and convert customers — across ads, content,
            websites, and funnels.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}>
            <a href="#contact" className="btn btn-primary" data-cursor="START"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px', padding: '14px 28px' }}>
              Start a Project
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
            <a href="#work" className="btn btn-secondary" data-cursor="VIEW"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px', padding: '14px 28px' }}>
              View Our Work
            </a>
          </div>

          {/* Stats strip */}
          <div style={{
            marginTop: '56px', paddingTop: '28px',
            borderTop: '1px solid var(--border-subtle)',
            display: 'flex', gap: '40px', flexWrap: 'wrap',
          }}>
            {[
              { num: '[XX]+', label: 'Projects' },
              { num: '[XX]+', label: 'Brands' },
              { num: '[XX]+', label: 'Industries' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.75rem',
                  fontWeight: '800', letterSpacing: '-0.04em',
                  color: 'var(--text-primary)', lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginTop: '4px',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Canvas */}
        <div style={{ position: 'relative', height: 'clamp(400px, 50vw, 580px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="hide-mobile">
          <canvas ref={canvasRef} style={{ width: '100%', height: '100%', borderRadius: '50%' }}
            aria-label="Interactive digital ecosystem showing agency services" />
          <div style={{
            position: 'absolute', inset: '-20px', borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.05)', pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: '-60px', borderRadius: '50%',
            border: '1px dashed rgba(196,154,10,0.12)', pointerEvents: 'none',
            animation: 'spin 60s linear infinite',
          }} />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="show-mobile" style={{ padding: '2rem', paddingTop: '8rem', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px',
          borderRadius: '100px', border: '1.5px solid rgba(92,153,0,0.30)',
          background: 'rgba(92,153,0,0.06)', marginBottom: '28px',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#5C9900' }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#5C9900' }}>
            Now Accepting Clients
          </span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 12vw, 4rem)',
          fontWeight: '800', lineHeight: '0.94', letterSpacing: '-0.035em',
          color: 'var(--text-primary)', marginBottom: '20px',
        }}>
          <span style={{ display: 'block' }}>Creative</span>
          <span style={{ display: 'block' }}>Thinking.</span>
          <span style={{ display: 'block', background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Performance
          </span>
          <span style={{ display: 'block' }}>Execution.</span>
        </h1>

        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '36px' }}>
          We build digital systems that help modern businesses attract attention, build trust, and convert customers.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <a href="#contact" className="btn btn-primary" style={{ justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
            Start a Project ↗
          </a>
          <a href="#work" className="btn btn-secondary" style={{ justifyContent: 'center' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}>
            View Our Work
          </a>
        </div>

        <div style={{ marginTop: '36px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {SERVICE_NODES.map((node) => (
            <span key={node.id} style={{
              display: 'inline-flex', alignItems: 'center', gap: '5px',
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase',
              padding: '5px 12px', borderRadius: '100px',
              background: `${node.color}10`, border: `1px solid ${node.color}30`, color: node.color,
            }}>
              {node.icon} {node.label}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', opacity: 0.35,
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
          Scroll
        </div>
        <div style={{
          width: '1px', height: '40px',
          background: 'linear-gradient(to bottom, var(--accent-gold), transparent)',
          animation: 'scrollPulse 2s ease-in-out infinite',
        }} />
      </div>

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes scrollPulse { 0%,100%{opacity:0.4;transform:scaleY(1)} 50%{opacity:1;transform:scaleY(0.6)} }
      `}</style>
    </section>
  )
}

export default Hero
