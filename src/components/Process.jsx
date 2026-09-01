import React, { useEffect, useRef, useState } from 'react'

const STEPS = [
  {
    num: '01', title: 'Discover', color: '#1A65E3',
    description: 'Understand your business, market, audience, goals, and current digital footprint before anything is built.',
    details: ['Business Audit', 'Competitor Research', 'Audience Mapping', 'Goal Definition', 'Channel Analysis'],
  },
  {
    num: '02', title: 'Strategize', color: '#5C9900',
    description: 'Build a customized strategy that connects every service into a single goal-driven system — not isolated tactics.',
    details: ['Strategy Document', 'Channel Selection', 'Budget Planning', 'Creative Direction', 'KPI Setting'],
  },
  {
    num: '03', title: 'Create', color: '#C49A0A',
    description: 'Develop creatives, campaigns, content, websites, and systems with quality, intention, and brand alignment.',
    details: ['Ad Creatives', 'Website Build', 'Video Production', 'Funnel Design', 'Content Production'],
  },
  {
    num: '04', title: 'Launch', color: '#dc2626',
    description: 'Execute the strategy with precision — every element tested, every campaign structured for maximum impact from day one.',
    details: ['Campaign Launch', 'A/B Testing Setup', 'Tracking Setup', 'Initial Optimization', 'Review Cycle'],
  },
  {
    num: '05', title: 'Optimize', color: '#ea580c',
    description: 'Analyze performance, identify what\'s working, cut what isn\'t, and scale what delivers real results.',
    details: ['Performance Reports', 'Creative Refresh', 'Scale Decisions', 'ROI Analysis', 'Ongoing Refinement'],
  },
]

const Process = () => {
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return
      const { top, height } = sectionRef.current.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = Math.max(0, Math.min(1, (windowH - top) / (height + windowH * 0.5)))
      setActiveStep(Math.min(Math.floor(progress * STEPS.length), STEPS.length - 1))
      if (progressRef.current) progressRef.current.style.height = `${progress * 100}%`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const step = STEPS[activeStep]

  return (
    <section id="process" ref={sectionRef} style={{
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border-subtle)',
      padding: 'clamp(4.5rem, 8vw, 8rem) 0',
    }}>
      <div className="container">
        <div style={{ maxWidth: '600px', marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
          <div className="section-eyebrow reveal-fade">
            <span className="text-label">How We Work</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ marginBottom: '14px' }}>
            Great Work Needs{' '}
            <span style={{ background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              A Clear Process.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
            Every project follows the same five-step system — adapted to your specific goals, timeline, and market.
          </p>
        </div>

        {/* Mobile Horizontal Step Selector (< 768px) */}
        <div className="show-mobile" style={{
          overflowX: 'auto',
          display: 'flex',
          gap: '8px',
          paddingBottom: '16px',
          marginBottom: '20px',
          width: '100%',
        }}>
          {STEPS.map((s, i) => (
            <button
              key={s.num}
              onClick={() => setActiveStep(i)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 14px',
                borderRadius: '100px',
                background: activeStep === i ? s.color : 'var(--bg-elevated)',
                color: activeStep === i ? '#fff' : 'var(--text-primary)',
                border: `1px solid ${activeStep === i ? s.color : 'var(--border-subtle)'}`,
                whiteSpace: 'nowrap',
                fontWeight: '700',
                fontSize: '12px',
                flexShrink: 0,
              }}
            >
              <span>{s.num}</span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Desktop & Tablet Timeline Layout */}
        <div className="process-desktop-layout">
          {/* Timeline column */}
          <div className="process-timeline-track" style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute', left: '23px', top: '24px', bottom: '24px',
              width: '1px', background: 'var(--border-medium)',
            }}>
              <div ref={progressRef} style={{
                width: '1px', height: '0%',
                background: `linear-gradient(to bottom, ${step.color}, #C49A0A)`,
                transition: 'height 500ms var(--ease-out)',
              }} />
            </div>

            {STEPS.map((s, i) => (
              <button key={s.num} onClick={() => setActiveStep(i)} style={{
                display: 'flex', alignItems: 'center', marginBottom: '44px',
                background: 'none', border: 'none', cursor: 'pointer', padding: 0,
              }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '50%',
                  background: i <= activeStep ? s.color : 'var(--bg-elevated)',
                  border: `2px solid ${i <= activeStep ? s.color : 'var(--border-medium)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 400ms var(--ease-out)', flexShrink: 0,
                  boxShadow: i === activeStep ? `0 0 20px ${s.color}30` : 'none',
                }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '700', color: i <= activeStep ? '#fff' : 'var(--text-muted)' }}>
                    {s.num}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Active step content */}
          <div style={{ paddingTop: '4px', width: '100%' }}>
            {STEPS.map((s, i) => (
              <div key={s.num} style={{ display: i === activeStep ? 'block' : 'none', animation: i === activeStep ? 'fadeSlideIn 350ms var(--ease-out)' : 'none' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: s.color, fontWeight: '700' }}>
                    Phase {s.num}
                  </span>
                  <div style={{ width: '32px', height: '1.5px', background: s.color }} />
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 4vw, 3.2rem)', fontWeight: '800', letterSpacing: '-0.035em', color: 'var(--text-primary)', marginBottom: '14px', lineHeight: 1 }}>
                  {s.title}
                </h3>

                <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: '28px', maxWidth: '520px' }}>
                  {s.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                  {s.details.map((d) => (
                    <div key={d} style={{
                      padding: '8px 14px', borderRadius: 'var(--radius-lg)',
                      background: `${s.color}08`, border: `1px solid ${s.color}25`,
                      fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.04em',
                      color: s.color, textTransform: 'uppercase', fontWeight: '700',
                    }}>
                      {d}
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {i > 0 && (
                    <button onClick={() => setActiveStep(i - 1)} className="btn btn-secondary" style={{ fontSize: '12px', padding: '10px 18px' }}>← Previous</button>
                  )}
                  {i < STEPS.length - 1 && (
                    <button onClick={() => setActiveStep(i + 1)} className="btn btn-primary" style={{ fontSize: '12px', padding: '10px 20px' }}>Next Step →</button>
                  )}
                  {i === STEPS.length - 1 && (
                    <a href="#contact" className="btn btn-primary" style={{ fontSize: '12px', padding: '10px 22px' }}
                      onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}>
                      Start Your Growth Engine ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .process-desktop-layout {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: clamp(1.5rem, 4vw, 4rem);
          position: relative;
        }
        @media (max-width: 768px) {
          .process-desktop-layout {
            grid-template-columns: 1fr !important;
          }
          .process-timeline-track {
            display: none !important;
          }
        }
        @keyframes fadeSlideIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
      `}</style>
    </section>
  )
}

export default Process
