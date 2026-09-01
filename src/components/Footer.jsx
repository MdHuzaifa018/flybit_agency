import React from 'react'

const FOOTER_SERVICES = ['Meta Ads', 'Google Ads', 'Video Editing', 'Graphic Design', 'Funnel Building', 'Website Development', 'Social Media', 'UGC Videos']
const FOOTER_NAV = [
  { label: 'Services', href: '#services' }, { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' }, { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' }, { label: 'FAQ', href: '#faq' },
]
const SOCIAL_LINKS = [
  { name: 'Instagram', href: '#', icon: 'IG' }, { name: 'LinkedIn', href: '#', icon: 'LI' },
  { name: 'Twitter / X', href: '#', icon: 'X' }, { name: 'Facebook', href: '#', icon: 'FB' },
]

const Footer = () => {
  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <footer style={{ background: 'var(--text-primary)', paddingTop: 'clamp(4rem, 8vw, 7rem)' }}>
      <div className="container">
        {/* Top row */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: 'clamp(2rem, 4vw, 5rem)',
          paddingBottom: 'clamp(3rem, 6vw, 5rem)',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '36px', height: '36px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #C49A0A, #5C9900)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
                  <path d="M20 4C20 4 28 10 28 20C28 26 24 30 20 32C16 30 12 26 12 20C12 14 15 9 17 7C17 7 16 12 19 14C19 14 18 10 20 4Z" fill="rgba(23,21,15,0.9)"/>
                  <path d="M20 16C20 16 24 19 24 23C24 26.5 22 28.5 20 30C18 28.5 16 26.5 16 23C16 20 18 17.5 19 16.5C19 16.5 18.5 19 20 20C20 20 19.5 17.5 20 16Z" fill="rgba(23,21,15,0.7)"/>
                </svg>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '800', letterSpacing: '-0.02em', color: '#F9F7F2', lineHeight: 1 }}>FlyBit</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.22em', color: '#C49A0A', textTransform: 'uppercase', lineHeight: 1, marginTop: '2px' }}>AGENCY</div>
              </div>
            </div>
            <p style={{ fontSize: '13px', color: 'rgba(249,247,242,0.55)', lineHeight: '1.7', maxWidth: '220px', marginBottom: '22px' }}>
              Creative thinking. Performance-driven execution. Real digital growth — for businesses ready to take the next step.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
                  style={{ width: '34px', height: '34px', borderRadius: '8px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '600', color: 'rgba(249,247,242,0.5)', transition: 'all 200ms ease' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#C49A0A' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(249,247,242,0.5)' }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(249,247,242,0.35)', marginBottom: '18px' }}>Services</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('#services') }}
                    style={{ fontSize: '13px', color: 'rgba(249,247,242,0.55)', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F9F7F2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.55)'}
                  >{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(249,247,242,0.35)', marginBottom: '18px' }}>Navigation</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {FOOTER_NAV.map((item) => (
                <li key={item.label}>
                  <a href={item.href} onClick={(e) => { e.preventDefault(); scrollTo(item.href) }}
                    style={{ fontSize: '13px', color: 'rgba(249,247,242,0.55)', transition: 'color 200ms ease' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#F9F7F2'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.55)'}
                  >{item.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ecosystem + Contact */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(249,247,242,0.35)', marginBottom: '18px' }}>The Ecosystem</div>
            <div style={{ padding: '18px', borderRadius: 'var(--radius-lg)', background: 'rgba(26,101,227,0.12)', border: '1px solid rgba(26,101,227,0.25)', marginBottom: '16px' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: '#F9F7F2', marginBottom: '6px' }}>Flybit Falcon</div>
              <div style={{ fontSize: '12px', color: 'rgba(249,247,242,0.55)', lineHeight: '1.5', marginBottom: '12px' }}>
                Learn digital marketing skills with industry-proven courses.
              </div>
              <a href="https://flybitfalcon.com" target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5b8fff' }}>
                flybitfalcon.com ↗
              </a>
            </div>
            <div>
              <a href="mailto:hello@flybitagency.com" style={{ fontSize: '13px', color: '#C49A0A', display: 'block', marginBottom: '3px' }}>
                hello@flybitagency.com
              </a>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'rgba(249,247,242,0.3)', letterSpacing: '0.06em' }}>
                [Replace with real email]
              </span>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', padding: '24px 0' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(249,247,242,0.3)' }}>
            © {new Date().getFullYear()} Flybit Agency · Adnan Qureshi. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            {['Privacy Policy', 'Terms of Service'].map((item) => (
              <a key={item} href="#" style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.06em', color: 'rgba(249,247,242,0.3)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.6)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.3)'}
              >{item}</a>
            ))}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top"
            style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(249,247,242,0.4)', background: 'none', border: 'none', cursor: 'pointer', transition: 'color 200ms ease' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#C49A0A'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(249,247,242,0.4)'}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
