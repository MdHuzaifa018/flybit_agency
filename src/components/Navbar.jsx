import React, { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100)
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '24px 0',
          background: scrolled ? 'rgba(249,247,242,0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          transition: 'all 400ms cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Logo — Flybit Falcon brand */}
          <a
            href="#"
            aria-label="Flybit Agency - Home"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            {/* Flame icon matching Flybit Falcon brand */}
            <div style={{
              width: '38px', height: '38px',
              borderRadius: '10px',
              background: '#1A1916',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <svg width="22" height="22" viewBox="0 0 40 40" fill="none">
                {/* Flame shape inspired by Flybit Falcon logo */}
                <path d="M20 4C20 4 28 10 28 20C28 26 24 30 20 32C16 30 12 26 12 20C12 14 15 9 17 7C17 7 16 12 19 14C19 14 18 10 20 4Z" fill="#D4A017"/>
                <path d="M20 16C20 16 24 19 24 23C24 26.5 22 28.5 20 30C18 28.5 16 26.5 16 23C16 20 18 17.5 19 16.5C19 16.5 18.5 19 20 20C20 20 19.5 17.5 20 16Z" fill="#FFD700"/>
              </svg>
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '15px', fontWeight: '800',
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}>
                FlyBit
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '8px', letterSpacing: '0.22em',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                lineHeight: 1, marginTop: '2px',
              }}>
                AGENCY
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hide-mobile" aria-label="Main navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '36px', listStyle: 'none' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px', fontWeight: '400',
                      color: 'var(--text-secondary)',
                      letterSpacing: '0.01em',
                      transition: 'color 200ms ease',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTAs */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); handleNavClick('#work') }}
              className="btn btn-secondary"
              style={{ padding: '10px 20px', fontSize: '12px' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              className="btn btn-primary"
              style={{ padding: '10px 20px', fontSize: '12px' }}
            >
              Book a Call ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="show-mobile"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '44px', height: '44px',
              display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'center',
              gap: menuOpen ? '0' : '5px',
              cursor: 'pointer',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              position: 'relative', zIndex: 1002,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: 'block', width: i === 2 ? (menuOpen ? '18px' : '12px') : '18px',
                height: '1.5px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
                transform: menuOpen && i === 0 ? 'rotate(45deg) translateY(1px)' :
                           menuOpen && i === 2 ? 'rotate(-45deg) translateY(-1px)' : 'none',
                opacity: menuOpen && i === 1 ? 0 : 1,
                position: menuOpen && i === 1 ? 'absolute' : 'static',
              }} />
            ))}
          </button>
        </div>
      </header>

      {/* Mobile fullscreen menu */}
      <div
        role="dialog" aria-modal="true" aria-label="Navigation menu"
        style={{
          position: 'fixed', inset: 0, zIndex: 999,
          background: 'var(--bg-base)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: '2rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 500ms cubic-bezier(0.16,1,0.3,1)',
        }}
      >
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px', pointerEvents: 'none',
        }} />

        <nav aria-label="Mobile navigation">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.label} style={{
                borderBottom: '1px solid var(--border-subtle)',
                transform: menuOpen ? 'translateX(0)' : 'translateX(40px)',
                opacity: menuOpen ? 1 : 0,
                transition: `all 500ms cubic-bezier(0.16,1,0.3,1) ${i * 60}ms`,
              }}>
                <a
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                  style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '24px 0',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 8vw, 3rem)', fontWeight: '700',
                    color: 'var(--text-primary)',
                    letterSpacing: '-0.02em', textDecoration: 'none',
                  }}
                >
                  {item.label}
                  <span style={{ color: 'var(--accent-gold)', fontSize: '1rem' }}>↗</span>
                </a>
              </li>
            ))}
          </ul>

          <div style={{
            marginTop: '48px', display: 'flex', flexDirection: 'column', gap: '12px',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transition: 'all 500ms cubic-bezier(0.16,1,0.3,1) 350ms',
          }}>
            <a href="#contact" className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact') }}
              style={{ justifyContent: 'center', fontSize: '14px' }}>
              Book a Strategy Call ↗
            </a>
            <a href="#work" className="btn btn-secondary"
              onClick={(e) => { e.preventDefault(); handleNavClick('#work') }}
              style={{ justifyContent: 'center', fontSize: '14px' }}>
              View Our Work
            </a>
          </div>

          <div style={{
            marginTop: '40px',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            opacity: menuOpen ? 1 : 0,
            transition: 'all 500ms cubic-bezier(0.16,1,0.3,1) 420ms',
          }}>
            <a href="https://flybitfalcon.com" target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-mono)', fontSize: '11px',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'var(--text-secondary)',
              }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
              Also visit Flybit Falcon — Education Platform
            </a>
          </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar
