import React from 'react'

const FlybitFalcon = () => {
  return (
    <section style={{
      background: 'var(--bg-elevated)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)',
      padding: 'clamp(5rem, 10vw, 10rem) 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '32px 32px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div className="section-eyebrow reveal-fade" style={{ justifyContent: 'center' }}>
            <span className="text-label">The Ecosystem</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ maxWidth: '600px', margin: '0 auto 16px' }}>
            One Vision.{' '}
            <span style={{ background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Two Ways
            </span>
            {' '}of Creating Impact.
          </h2>
          <p className="reveal-up delay-1" style={{ fontSize: '1rem', color: 'var(--text-secondary)', maxWidth: '480px', margin: '0 auto', lineHeight: '1.7' }}>
            Whether you want to learn digital skills or grow your business, we have the platform and expertise for both.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', maxWidth: '900px', margin: '0 auto' }}>
          {/* Flybit Falcon */}
          <div className="reveal-up" style={{
            padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-2xl)',
            background: 'rgba(26,101,227,0.04)', border: '1px solid rgba(26,101,227,0.15)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 400ms var(--ease-out)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,101,227,0.07)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(26,101,227,0.10)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26,101,227,0.04)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#1A65E3', boxShadow: '0 0 10px rgba(26,101,227,0.4)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#1A65E3' }}>
                Education Platform
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '14px' }}>
              Flybit Falcon
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '28px' }}>
              Learn the exact digital marketing skills used in real campaigns. Courses on Meta Ads,
              content creation, freelancing, and more — taught by someone who's done it in the field.
            </p>
            <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {['📚 Industry-Proven Courses', '💰 Earn While You Learn', '🔥 100% Practical Training'].map((item) => (
                <div key={item} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>{item}</div>
              ))}
            </div>
            <a href="https://flybitfalcon.com" target="_blank" rel="noopener noreferrer" data-cursor="EXPLORE"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '600',
                color: '#1A65E3', letterSpacing: '0.02em',
                borderBottom: '1.5px solid rgba(26,101,227,0.3)',
                paddingBottom: '2px',
              }}>
              Explore Flybit Falcon ↗
            </a>
          </div>

          {/* The Agency */}
          <div className="reveal-up delay-2" style={{
            padding: 'clamp(2rem, 4vw, 3rem)', borderRadius: 'var(--radius-2xl)',
            background: 'rgba(196,154,10,0.04)', border: '1px solid rgba(196,154,10,0.18)',
            position: 'relative', overflow: 'hidden',
            transition: 'all 400ms var(--ease-out)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(196,154,10,0.07)'; e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(196,154,10,0.10)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(196,154,10,0.04)'; e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-gold)', boxShadow: '0 0 10px rgba(196,154,10,0.4)' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                Creative Agency
              </span>
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: '800', letterSpacing: '-0.03em', color: 'var(--text-primary)', marginBottom: '14px' }}>
              Flybit Agency
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '28px' }}>
              Done-for-you digital growth services. We run your ads, build your funnels,
              create your content, develop your website, and manage your social media —
              all under one connected strategy.
            </p>
            <div style={{ marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              {['🎯 Strategy Before Execution', '⚡ Connected Digital Systems', '📈 Performance-Driven Results'].map((item) => (
                <div key={item} style={{ fontFamily: 'var(--font-body)', fontSize: '13px', color: 'var(--text-secondary)' }}>{item}</div>
              ))}
            </div>
            <a href="#services" className="btn btn-primary" style={{ fontSize: '12px' }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}>
              Explore Services ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlybitFalcon
