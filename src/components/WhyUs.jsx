import React from 'react'

const PILLARS = [
  {
    icon: '◈', title: 'Strategy Before Execution',
    description: 'We understand what you\'re trying to achieve before we build anything. Every deliverable is connected to a specific business objective — not just a task on a list.',
    color: '#1A65E3',
  },
  {
    icon: '✦', title: 'Creativity With Purpose',
    description: 'Design that looks good and actually performs. Every creative decision — from ad copy to visual layout — is made with conversion and clarity as the priority.',
    color: '#C49A0A',
  },
  {
    icon: '⬡', title: 'Connected Digital Systems',
    description: 'Ads, content, websites, and funnels built to work together. Not isolated deliverables handed over independently — a cohesive system built for one outcome.',
    color: '#5C9900',
  },
  {
    icon: '◎', title: 'Transparent Collaboration',
    description: 'You\'ll always know what\'s happening, why decisions are being made, and what results are coming in. No black boxes. No confusing dashboards. Direct communication.',
    color: '#ea580c',
  },
]

const WhyUs = () => {
  return (
    <section style={{
      background: 'var(--bg-surface)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'clamp(5rem, 10vw, 10rem) 0',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px', pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '640px', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div className="section-eyebrow reveal-fade">
            <span className="text-label">Why Work With Us</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ marginBottom: '16px' }}>
            Built For Businesses That Want More Than{' '}
            <span style={{ background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Just Deliverables.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Most agencies give you outputs. We give you outcomes — built on a foundation of
            strategy, connected systems, and honest collaboration.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: '20px' }}>
          {PILLARS.map((pillar, i) => (
            <div key={pillar.title} className="reveal-up"
              style={{
                transitionDelay: `${i * 80}ms`,
                padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                borderRadius: 'var(--radius-xl)',
                background: 'var(--bg-elevated)',
                border: '1px solid var(--border-subtle)',
                position: 'relative', overflow: 'hidden',
                transition: 'all 350ms var(--ease-out)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${pillar.color}40`
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.10)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-subtle)'
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.04)'
              }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, ${pillar.color}, transparent)`, opacity: 0.7 }} />
              <div style={{
                width: '52px', height: '52px', borderRadius: '12px',
                background: `${pillar.color}10`, border: `1px solid ${pillar.color}20`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '22px', color: pillar.color, marginBottom: '20px',
              }}>
                {pillar.icon}
              </div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: '700', letterSpacing: '-0.02em', color: 'var(--text-primary)', marginBottom: '10px' }}>
                {pillar.title}
              </h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        <div className="reveal-up" style={{ marginTop: '56px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
          <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic' }}>
            Ready to see if we're the right fit?
          </p>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: '13px', padding: '14px 28px' }}
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')) }}>
            Book a Strategy Call ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
