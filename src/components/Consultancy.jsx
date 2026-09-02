import React from 'react'

const Consultancy = () => {
  return (
    <section id="consultancy" className="section" style={{ background: 'var(--bg-surface)', position: 'relative', overflow: 'hidden' }}>
      {/* Background elements */}
      <div style={{ position: 'absolute', top: 0, right: 0, width: '40%', height: '100%', background: 'linear-gradient(90deg, transparent, rgba(255, 184, 0, 0.05))', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(26, 101, 227, 0.06) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container">
        <div style={{
          background: 'var(--bg-elevated)',
          borderRadius: '24px',
          border: '1px solid var(--border-subtle)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          position: 'relative',
        }}>
          {/* Left: Content */}
          <div style={{ padding: 'clamp(3rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div className="reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: '100px',
                background: 'rgba(26, 101, 227, 0.1)', border: '1px solid rgba(26, 101, 227, 0.2)',
                color: '#1A65E3', fontWeight: '700'
              }}>
                Exclusive Access
              </span>
            </div>

            <h2 className="reveal-up" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: '800',
              lineHeight: '1.05',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '20px'
            }}>
              1-on-1 Strategic<br />
              <span style={{ background: 'linear-gradient(135deg, #1A65E3 0%, #38BDF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Growth Consultancy
              </span>
            </h2>

            <p className="reveal-up delay-1" style={{
              fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
              color: 'var(--text-secondary)',
              lineHeight: '1.6',
              marginBottom: '40px',
              maxWidth: '90%'
            }}>
              Skip the guesswork. Book a private Zoom session with our lead growth architects. 
              We'll audit your current systems, identify bottlenecks, and map out a custom 
              action plan for your brand's explosive growth.
            </p>

            <ul className="reveal-up delay-2" style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'Deep-Dive Business Audit',
                'Ad Account & Funnel Review',
                'Custom 90-Day Action Plan',
                'Live Q&A Strategy Session'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(26,101,227,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1A65E3' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ fontSize: '15px', fontWeight: '500', color: 'var(--text-primary)' }}>{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal-up delay-3">
              <a
                href="#book"
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')) }}
                className="btn btn-primary"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #1A65E3 0%, #0EA5E9 100%)',
                  color: '#fff',
                  border: 'none',
                  boxShadow: '0 8px 24px rgba(26,101,227,0.3)',
                  padding: '16px 36px',
                  fontSize: '14px',
                  fontWeight: '700'
                }}
              >
                Book Your Zoom Meeting
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: '8px' }}>
                  <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Visual Mockup / Calendar Vibe */}
          <div style={{
            background: 'var(--bg-base)',
            borderLeft: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(2rem, 5vw, 4rem)',
            position: 'relative',
          }}>
            <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(0,0,0,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
            
            <div className="reveal-up delay-2" style={{
              width: '100%',
              maxWidth: '380px',
              background: 'var(--bg-elevated)',
              borderRadius: '20px',
              boxShadow: '0 24px 48px rgba(0,0,0,0.06)',
              border: '1px solid var(--border-subtle)',
              padding: '24px',
              position: 'relative',
              zIndex: 2,
            }}>
              {/* Meeting Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '32px', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '20px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#1A65E3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="3" y1="10" x2="21" y2="10"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '18px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>Strategy Call</div>
                  <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>45 Minutes • Video Meeting</div>
                </div>
              </div>

              {/* Fake Calendar Slots */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Available Times</div>
                {[
                  { time: '10:00 AM', available: true },
                  { time: '02:30 PM', available: true },
                  { time: '04:00 PM', available: true },
                ].map((slot, i) => (
                  <div key={i} style={{
                    padding: '14px 20px',
                    borderRadius: '12px',
                    border: '1px solid rgba(26,101,227,0.2)',
                    color: '#1A65E3',
                    fontWeight: '600',
                    fontSize: '14px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'rgba(26,101,227,0.03)',
                    cursor: 'pointer',
                    transition: 'all 200ms ease',
                  }}
                  onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(26,101,227,0.08)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(26,101,227,0.03)' }}
                  >
                    <span>{slot.time}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consultancy
