import React from 'react'

const FOUNDER_IMAGE = 'https://flybitfalcon.com/wp-content/uploads/2025/04/Picsart_25-04-01_12-25-41-366-e1743514534437-847x1024.jpg'

const About = () => {
  return (
    <section
      id="about"
      style={{
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
      }}
    >
      {/* Side accent */}
      <div style={{
        position: 'absolute', right: 0, top: '20%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(196,154,10,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Section eyebrow */}
        <div className="section-eyebrow reveal-fade">
          <span className="text-label">Behind The Work</span>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'start',
        }}>
          {/* Left — Founder photo */}
          <div className="reveal-up" style={{ position: 'relative' }}>
            <div style={{
              width: '100%', aspectRatio: '3/4',
              borderRadius: 'var(--radius-xl)',
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
            }}>
              <img
                src={FOUNDER_IMAGE}
                alt="Adnan Qureshi — Founder & CEO, Flybit Agency"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top center',
                }}
                loading="lazy"
              />
              {/* Subtle gradient overlay at bottom */}
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '30%',
                background: 'linear-gradient(to top, rgba(249,247,242,0.4), transparent)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating name card */}
            <div style={{
              position: 'absolute',
              bottom: '-20px', right: '-20px',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-lg)',
              padding: '16px 22px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '15px',
                fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px',
              }}>
                Adnan Qureshi
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px',
                letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase',
              }}>
                Founder & CEO
              </div>
            </div>

            {/* Award badge */}
            <div style={{
              position: 'absolute', top: '20px', left: '-16px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(196,154,10,0.25)',
              borderRadius: 'var(--radius-lg)',
              padding: '10px 14px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <span style={{ fontSize: '18px' }}>🏆</span>
              <div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--accent-gold)' }}>
                  Digital Expert
                </div>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div>
            <h2 className="text-display-md reveal-up" style={{ marginBottom: '24px' }}>
              A digital entrepreneur who's been{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                building in public
              </span>{' '}
              before it was a thing.
            </h2>

            <p className="reveal-up delay-1" style={{
              fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px',
            }}>
              Adnan Qureshi is a dynamic entrepreneur committed to transforming how businesses
              grow in the digital space. With deep expertise in performance marketing, business
              strategy, and online revenue generation, he has built one of the most recognizable
              digital brands in the region.
            </p>

            <p className="reveal-up delay-2" style={{
              fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '40px',
            }}>
              Every service offered through Flybit Agency comes from real, hands-on experience —
              running live campaigns, building funnels that convert, creating content that stops
              the scroll, and developing websites that actually drive business outcomes.
              This isn't theoretical knowledge. It's built from the field.
            </p>

            {/* Two brand ecosystem */}
            <div className="reveal-up delay-3" style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '40px',
            }}>
              <div style={{
                padding: '20px', borderRadius: 'var(--radius-lg)',
                background: 'rgba(26,101,227,0.05)',
                border: '1px solid rgba(26,101,227,0.15)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#1A65E3', marginBottom: '8px',
                }}>
                  Education
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Flybit Falcon
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Courses, learning, and digital skills for the next generation.
                </div>
              </div>

              <div style={{
                padding: '20px', borderRadius: 'var(--radius-lg)',
                background: 'rgba(196,154,10,0.06)',
                border: '1px solid rgba(196,154,10,0.18)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: 'var(--accent-gold)', marginBottom: '8px',
                }}>
                  Agency
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '6px' }}>
                  Flybit Agency
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Strategy, creative, advertising, and digital growth.
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary reveal-up delay-4"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px' }}>
              Let's Work Together ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
