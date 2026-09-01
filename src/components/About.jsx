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
        padding: 'clamp(4.5rem, 8vw, 8rem) 0',
      }}
    >
      {/* Side accent glow */}
      <div style={{
        position: 'absolute', right: 0, top: '20%',
        width: '400px', maxWidth: '100%', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,184,0,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Section eyebrow */}
        <div className="section-eyebrow reveal-fade">
          <span className="text-label">Founder & Leadership</span>
        </div>

        <div className="about-layout-grid">
          {/* Left — Founder Photo & Floating Badges */}
          <div className="about-photo-wrapper reveal-up" style={{ position: 'relative', maxWidth: '440px', margin: '0 auto', width: '100%' }}>
            <div style={{
              width: '100%',
              aspectRatio: '3/4',
              borderRadius: 'var(--radius-2xl)',
              border: '1.5px solid rgba(0,0,0,0.08)',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
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
              <div style={{
                position: 'absolute', bottom: 0, left: 0, right: 0,
                height: '35%',
                background: 'linear-gradient(to top, rgba(249,247,242,0.6), transparent)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Floating name card */}
            <div style={{
              position: 'absolute',
              bottom: '-12px', right: '10px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(255,184,0,0.4)',
              borderRadius: 'var(--radius-lg)',
              padding: '12px 18px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '15px',
                fontWeight: '800', color: 'var(--text-primary)', marginBottom: '2px',
              }}>
                Adnan Qureshi
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px',
                letterSpacing: '0.1em', color: '#B57C00', textTransform: 'uppercase',
                fontWeight: '700',
              }}>
                Founder & CEO · 6+ Yrs Exp
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute', top: '16px', left: '10px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(255,184,0,0.4)',
              borderRadius: 'var(--radius-lg)',
              padding: '8px 14px',
              boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
              display: 'flex', alignItems: 'center', gap: '8px',
            }}>
              <div style={{
                width: '28px', height: '28px', borderRadius: '6px',
                background: 'rgba(255,184,0,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '14px',
              }}>
                ⭐
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '12px', fontWeight: '800', color: 'var(--text-primary)', lineHeight: 1.1 }}>
                  6+ Years
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '8px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B57C00', fontWeight: '700' }}>
                  Proven Track Record
                </div>
              </div>
            </div>
          </div>

          {/* Right — Story & Vision */}
          <div>
            <h2 className="text-display-md reveal-up" style={{ marginBottom: '20px' }}>
              A digital entrepreneur with{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
              }}>
                6+ years of experience
              </span>{' '}
              scaling brands and building digital ecosystems.
            </h2>

            <p className="reveal-up delay-1" style={{
              fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '18px',
            }}>
              Adnan Qureshi, Founder & CEO of Fly Bit Falcon and Flybit Agency, is a dynamic entrepreneur committed to revolutionizing digital marketing. With over <strong>6+ years of deep expertise</strong> in business strategy, online revenue generation, and performance marketing, he has built Fly Bit Falcon into a thriving hub for aspiring professionals and high-growth businesses.
            </p>

            <p className="reveal-up delay-2" style={{
              fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '32px',
            }}>
              His vision empowers businesses with cutting-edge marketing strategies, high-converting funnel architectures, paid media mastery (Meta & Google Ads), and high-impact digital content designed to scale revenue consistently.
            </p>

            {/* Two brand ecosystem grid */}
            <div className="reveal-up delay-3" style={{
              display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '14px', marginBottom: '36px',
            }}>
              <div style={{
                padding: '18px', borderRadius: 'var(--radius-lg)',
                background: 'rgba(26,101,227,0.05)',
                border: '1px solid rgba(26,101,227,0.15)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#1A65E3', marginBottom: '6px', fontWeight: '700',
                }}>
                  Education Ecosystem
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Flybit Falcon
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Courses, training & digital monetization skills for the next generation.
                </div>
              </div>

              <div style={{
                padding: '18px', borderRadius: 'var(--radius-lg)',
                background: 'rgba(255,184,0,0.07)',
                border: '1px solid rgba(255,184,0,0.25)',
              }}>
                <div style={{
                  fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: '0.12em',
                  textTransform: 'uppercase', color: '#B57C00', marginBottom: '6px', fontWeight: '700',
                }}>
                  Performance Agency
                </div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '15px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
                  Flybit Agency
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  Strategy, media buying, video creative, and conversion-first digital systems.
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-primary reveal-up delay-4"
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{ fontSize: '13px', padding: '14px 28px' }}
            >
              Work Directly With Adnan ↗
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .about-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: clamp(2.5rem, 5vw, 6rem);
          align-items: center;
        }
        @media (max-width: 868px) {
          .about-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
        }
      `}</style>
    </section>
  )
}

export default About
