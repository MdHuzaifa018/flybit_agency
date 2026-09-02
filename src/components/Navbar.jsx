import React, { useState, useEffect } from 'react'
import logoImg from '../assets/logo.png'

const NAV_ITEMS = [
  { label: 'Services', href: '#services', desc: 'Performance ads, funnels & tech' },
  { label: 'Work', href: '#work', desc: 'Case studies & proven results' },
  { label: 'About', href: '#about', desc: 'Adnan Qureshi & philosophy' },
  { label: 'Process', href: '#process', desc: 'Our 5-step growth system' },
  { label: 'Reviews', href: '#reviews', desc: 'Verified client feedback' },
  { label: 'Contact', href: '#contact', desc: 'Start your growth journey' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' })
      }, 150)
    }
  }

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled ? 'rgba(249,247,242,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent',
          transition: 'all 350ms cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
      >
        <div className="container-wide" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

          {/* Brand Logo & Name */}
          <a
            href="#"
            aria-label="Flybit Falcon - Home"
            style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', zIndex: 1001 }}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          >
            <img
              src={logoImg}
              alt="Flybit Falcon Logo"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                objectFit: 'cover',
                flexShrink: 0,
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 4vw, 22px)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                color: '#17150F',
                lineHeight: 1,
              }}>
                Flybit
              </span>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(18px, 4vw, 22px)',
                fontWeight: '800',
                letterSpacing: '-0.03em',
                color: '#FFB800',
                lineHeight: 1,
              }}>
                falcon
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '8px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-secondary)',
                marginLeft: '6px',
                padding: '2px 5px',
                borderRadius: '4px',
                background: 'rgba(0,0,0,0.06)',
                border: '1px solid rgba(0,0,0,0.08)',
                fontWeight: '700',
              }}>
                AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hide-mobile" aria-label="Main navigation">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '32px', listStyle: 'none', margin: 0, padding: 0 }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '14px',
                      fontWeight: '500',
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

          {/* Desktop Action Buttons */}
          <div className="hide-mobile" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a
              href="#work"
              onClick={(e) => { e.preventDefault(); handleNavClick('#work') }}
              className="btn btn-secondary"
              style={{ padding: '9px 18px', fontSize: '12px' }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')); setMenuOpen(false) }}
              className="btn btn-primary"
              style={{ padding: '9px 20px', fontSize: '12px' }}
            >
              Book a Call ↗
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="show-mobile"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '42px',
              height: '42px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: menuOpen ? '0' : '5px',
              cursor: 'pointer',
              background: 'var(--bg-elevated)',
              border: '1.5px solid rgba(0,0,0,0.1)',
              borderRadius: '10px',
              zIndex: 1002,
              padding: 0,
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
            }}
          >
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              background: '#17150F',
              borderRadius: '2px',
              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
              transform: menuOpen ? 'rotate(45deg) translateY(1.5px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '14px',
              height: '2px',
              background: '#FFB800',
              borderRadius: '2px',
              transition: 'all 200ms ease',
              opacity: menuOpen ? 0 : 1,
              alignSelf: 'flex-start',
              marginLeft: '11px',
            }} />
            <span style={{
              display: 'block',
              width: '20px',
              height: '2px',
              background: '#17150F',
              borderRadius: '2px',
              transition: 'all 300ms cubic-bezier(0.16,1,0.3,1)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-1.5px)' : 'none',
            }} />
          </button>
        </div>
      </header>

      {/* Side Slide-In Mobile Drawer Backdrop */}
      <div
        onClick={() => setMenuOpen(false)}
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(15, 14, 11, 0.6)',
          backdropFilter: 'blur(6px)',
          zIndex: 9998,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
          transition: 'opacity 350ms ease',
        }}
      />

      {/* Side Slide-In Navigation Drawer from RIGHT */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: 'min(86vw, 360px)',
          background: 'var(--bg-elevated)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '24px 20px',
          boxShadow: '-10px 0 40px rgba(0,0,0,0.2)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          overflowY: 'auto',
        }}
      >
        {/* Drawer Header */}
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <img src={logoImg} alt="Logo" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '800', color: '#17150F' }}>
                  Flybit <span style={{ color: '#FFB800' }}>falcon</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', color: 'var(--text-muted)' }}>GROWTH AGENCY</div>
              </div>
            </div>

            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
              style={{
                width: '34px',
                height: '34px',
                borderRadius: '50%',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                color: 'var(--text-primary)',
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </div>

          {/* Navigation Links */}
          <nav aria-label="Mobile menu list">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {NAV_ITEMS.map((item, i) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '12px 14px',
                      borderRadius: '10px',
                      background: 'transparent',
                      textDecoration: 'none',
                      transition: 'all 200ms ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-surface)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
                  >
                    <div>
                      <div style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '17px',
                        fontWeight: '700',
                        color: 'var(--text-primary)',
                        letterSpacing: '-0.02em',
                      }}>
                        {item.label}
                      </div>
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '10px',
                        color: 'var(--text-muted)',
                        marginTop: '2px',
                      }}>
                        {item.desc}
                      </div>
                    </div>
                    <span style={{ color: '#FFB800', fontSize: '14px', fontWeight: '800' }}>➔</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Drawer Footer Actions */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <a
            href="#contact"
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')); setMenuOpen(false) }}
            style={{ justifyContent: 'center', fontSize: '13px', padding: '13px', width: '100%' }}
          >
            Book Strategy Call ↗
          </a>

          <a
            href="tel:+919137568285"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '700',
              padding: '10px',
              borderRadius: '100px',
              background: 'rgba(22, 163, 74, 0.1)',
              border: '1px solid rgba(22, 163, 74, 0.25)',
              color: '#16a34a',
              textDecoration: 'none',
            }}
          >
            📞 WhatsApp / Call: +91 91375 68285
          </a>

          <a
            href="https://flybitfalcon.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              marginTop: '4px',
            }}
          >
            <span>Visit Flybit Falcon Education</span>
            <span style={{ color: '#FFB800' }}>↗</span>
          </a>
        </div>
      </aside>
    </>
  )
}

export default Navbar
