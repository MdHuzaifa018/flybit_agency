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
          {PILLARS.map((pillar, i) => {
            const [isHovered, setIsHovered] = React.useState(false)
            return (
              <div key={pillar.title} className="reveal-up"
                style={{
                  transitionDelay: `${i * 80}ms`,
                  padding: 'clamp(1.5rem, 3vw, 2.5rem)',
                  borderRadius: 'var(--radius-xl)',
                  background: isHovered ? '#17150F' : 'var(--bg-elevated)',
                  border: `1.5px solid ${isHovered ? pillar.color : 'var(--border-subtle)'}`,
                  position: 'relative', overflow: 'hidden',
                  transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), border-color 550ms cubic-bezier(0.25, 1, 0.5, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 550ms cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHovered ? `0 24px 50px -10px ${pillar.color}30, 0 0 20px ${pillar.color}15` : '0 2px 12px rgba(0,0,0,0.04)',
                  transform: isHovered ? 'translateY(-8px) scale(1.01)' : 'none',
                  cursor: 'pointer',
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: `linear-gradient(to right, ${pillar.color}, transparent)`, opacity: isHovered ? 1 : 0.7, transition: 'opacity 550ms ease' }} />
                
                {/* Glow aura */}
                <div style={{
                  position: 'absolute', top: 0, right: 0,
                  width: '160px', height: '160px', borderRadius: '50%',
                  background: `radial-gradient(circle, ${pillar.color}25 0%, transparent 70%)`,
                  transform: 'translate(30%, -30%)',
                  opacity: isHovered ? 1 : 0,
                  transition: 'opacity 550ms cubic-bezier(0.25, 1, 0.5, 1)',
                  pointerEvents: 'none',
                }} />

                <div style={{
                  width: '52px', height: '52px', borderRadius: '14px',
                  background: isHovered ? pillar.color : `${pillar.color}10`,
                  border: `1px solid ${isHovered ? pillar.color : `${pillar.color}20`}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '22px', color: isHovered ? '#FFFFFF' : pillar.color,
                  marginBottom: '20px',
                  transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), color 550ms cubic-bezier(0.25, 1, 0.5, 1), border-color 550ms cubic-bezier(0.25, 1, 0.5, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1)',
                  transform: isHovered ? 'scale(1.1) rotate(4deg)' : 'none',
                  boxShadow: isHovered ? `0 8px 20px ${pillar.color}40` : 'none',
                }}>
                  {pillar.icon}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: '800',
                  letterSpacing: '-0.02em', color: isHovered ? '#FFFFFF' : 'var(--text-primary)',
                  marginBottom: '10px', transition: 'color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}>
                  {pillar.title}
                </h3>
                <p style={{
                  fontSize: '14px', color: isHovered ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)',
                  lineHeight: '1.7', transition: 'color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
                }}>
                  {pillar.description}
                </p>
              </div>
            )
          })}
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
