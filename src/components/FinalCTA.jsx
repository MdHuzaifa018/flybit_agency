import React, { useEffect, useRef } from 'react'

const FinalCTA = () => {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize()
    window.addEventListener('resize', resize)

    const particles = Array.from({ length: 30 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      size: Math.random() * 2 + 0.5, opacity: Math.random() * 0.3 + 0.05,
      color: Math.random() > 0.6 ? '#C49A0A' : '#5C9900',
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p) => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.floor(p.opacity * 255).toString(16).padStart(2, '0')
        ctx.fill()
      })
      rafRef.current = requestAnimationFrame(draw)
    }

    rafRef.current = requestAnimationFrame(draw)
    return () => {
      window.removeEventListener('resize', resize)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section id="contact" style={{
      background: 'var(--text-primary)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'clamp(6rem, 12vw, 12rem) 0',
      position: 'relative', overflow: 'hidden',
      minHeight: '70vh', display: 'flex', alignItems: 'center',
    }}>
      <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', opacity: 0.5 }} aria-hidden="true" />

      {/* Central Background Glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', maxWidth: '100%', height: '800px', maxHeight: '100%', borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(196,154,10,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      {/* Dot grid */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
            padding: '6px 14px', borderRadius: '100px',
            background: 'rgba(196,154,10,0.15)', border: '1px solid rgba(196,154,10,0.3)',
            color: '#D4A017',
          }}>
            Let's Build Something
          </span>
        </div>

        <h2 className="reveal-up" style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.5rem, 7vw, 7rem)', fontWeight: '800',
          lineHeight: '0.92', letterSpacing: '-0.04em',
          color: '#F9F7F2',
          marginBottom: '32px', maxWidth: '900px', margin: '0 auto 32px',
        }}>
          Have Something{' '}
          <span style={{ background: 'linear-gradient(135deg, #D4A017 0%, #FFD700 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            Worth Building?
          </span>
        </h2>

        <p className="reveal-up delay-1" style={{
          fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', color: 'rgba(249,247,242,0.65)',
          lineHeight: '1.6', maxWidth: '500px', margin: '0 auto 52px',
        }}>
          Tell us where your business is today and where you want it to go.
          We'll build the system to close the gap.
        </p>

        <div className="reveal-up delay-2" style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap', marginBottom: '60px' }}>
          <a href="mailto:hello@flybitagency.com" data-cursor="START"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '100px',
              background: '#F9F7F2', color: '#17150F',
              transition: 'all 300ms var(--ease-out)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#F9F7F2'; e.currentTarget.style.transform = 'none' }}
          >
            Start a Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </a>
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" data-cursor="BOOK"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600',
              letterSpacing: '0.04em', textTransform: 'uppercase',
              padding: '16px 32px', borderRadius: '100px',
              background: 'transparent', color: '#F9F7F2',
              border: '1px solid rgba(249,247,242,0.25)',
              transition: 'all 300ms var(--ease-out)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(249,247,242,0.5)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(249,247,242,0.25)'; e.currentTarget.style.transform = 'none' }}
          >
            Book a Strategy Call ↗
          </a>
        </div>

        {/* Contact details */}
        <div className="reveal-up delay-3" style={{
          display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap',
          paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {[
            { label: 'Direct Call / WhatsApp', value: '+91 8318956754', href: 'tel:+918318956754' },
            { label: 'Official Email', value: 'support@flybitfalcon.com', href: 'mailto:support@flybitfalcon.com' },
            { label: 'Location', value: 'Lucknow, Uttar Pradesh' },
            { label: 'EdTech Platform', value: 'flybitfalcon.com ↗', href: 'https://flybitfalcon.com', external: true },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(249,247,242,0.4)', marginBottom: '6px' }}>
                {item.label}
              </div>
              {item.href ? (
                <a href={item.href} target={item.external ? '_blank' : undefined} rel={item.external ? 'noopener noreferrer' : undefined}
                  style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '600', color: '#FFB800', letterSpacing: '-0.01em', textDecoration: 'none' }}>
                  {item.value}
                </a>
              ) : (
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '600', color: 'rgba(249,247,242,0.85)' }}>
                  {item.value}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
