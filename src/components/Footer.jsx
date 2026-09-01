import React from 'react'
import logoImg from '../assets/logo.png'

const FOOTER_SERVICES = [
  'Meta & Instagram Ads',
  'Google Search & PMax',
  'Viral Video Editing',
  'Graphic Design & Branding',
  'Sales Funnels & CRM',
  'High-Speed Websites',
  'Social Media Growth',
  'Creator UGC Content',
]

const POPULAR_COURSES = [
  { label: 'Elite Package', href: 'https://flybitfalcon.com' },
  { label: 'Star Package', href: 'https://flybitfalcon.com' },
  { label: 'Branding Package', href: 'https://flybitfalcon.com' },
  { label: 'Trend Mastery', href: 'https://flybitfalcon.com' },
  { label: "FlyAd's Mastery", href: 'https://flybitfalcon.com' },
]

const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/flybitfalcon.co?igsh=MW41cXQ2ZWVvNDZzMg==',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/share/1Amgop9wKe/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@flybitfalcon',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
  },
]

const Footer = () => {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#0F0E0B', color: '#F9F7F2', paddingTop: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: 'clamp(2rem, 4vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand & Mission */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img
                src={logoImg}
                alt="Flybit Falcon Logo"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  flexShrink: 0,
                  boxShadow: '0 0 12px rgba(255,184,0,0.3)',
                }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.03em', color: '#F9F7F2', lineHeight: 1 }}>Flybit</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', letterSpacing: '-0.03em', color: '#FFB800', lineHeight: 1 }}>falcon</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginLeft: '6px', padding: '1px 5px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)', fontWeight: '600' }}>AGENCY</span>
              </div>
            </div>

            <p style={{ fontSize: '13px', color: 'rgba(249,247,242,0.65)', lineHeight: '1.7', maxWidth: '280px', marginBottom: '22px' }}>
              Helping Businesses Grow & People Earn with Our Expert-Led Courses & Performance Ad Services.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(249,247,242,0.8)',
                    transition: 'all 250ms ease',
                    textDecoration: 'none',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFB800'
                    e.currentTarget.style.color = '#000'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.color = 'rgba(249,247,242,0.8)'
                    e.currentTarget.style.transform = 'none'
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Agency Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '18px', fontWeight: '700' }}>
              Agency Services
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    style={{ fontSize: '13px', color: 'rgba(249,247,242,0.6)', transition: 'color 200ms ease', textDecoration: 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#FFB800'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.6)'}
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem Courses */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '18px', fontWeight: '700' }}>
              Popular Courses
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0 }}>
              {POPULAR_COURSES.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: '13px', color: 'rgba(249,247,242,0.6)', transition: 'color 200ms ease', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#38bdf8'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.6)'}
                  >
                    {item.label}
                    <span style={{ fontSize: '10px', opacity: 0.7 }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#FFB800', marginBottom: '18px', fontWeight: '700' }}>
              Get In Touch
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Phone</div>
                <a href="tel:+918318956754" style={{ fontSize: '14px', fontWeight: '700', color: '#F9F7F2', textDecoration: 'none' }}>
                  +91 8318956754
                </a>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Email</div>
                <a href="mailto:support@flybitfalcon.com" style={{ fontSize: '14px', fontWeight: '600', color: '#FFB800', textDecoration: 'none' }}>
                  support@flybitfalcon.com
                </a>
              </div>

              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase' }}>Headquarters</div>
                <div style={{ fontSize: '13px', color: 'rgba(249,247,242,0.7)' }}>
                  Lucknow, Uttar Pradesh, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          padding: '24px 0',
        }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(249,247,242,0.4)' }}>
            Copyright © {new Date().getFullYear()} All Rights Reserved By Flybitfalcon · Adnan Qureshi
          </div>

          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            {['Disclaimer', 'Privacy Policy', 'Refund Policy', 'Terms & Conditions'].map((item) => (
              <a
                key={item}
                href="https://flybitfalcon.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(249,247,242,0.4)', textDecoration: 'none' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FFB800'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.4)'}
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#FFB800',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
