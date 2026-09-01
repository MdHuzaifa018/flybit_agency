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
                fontFamily: 'var(--font-display)', fontSize: '16px',
                fontWeight: '700', color: 'var(--text-primary)', marginBottom: '4px',
              }}>
                Adnan Qureshi
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px',
                letterSpacing: '0.12em', color: 'var(--accent-gold)', textTransform: 'uppercase',
                fontWeight: '600',
              }}>
                Founder & CEO · 6+ Yrs Exp
              </div>
            </div>

            {/* Experience badge */}
            <div style={{
              position: 'absolute', top: '20px', left: '-16px',
              background: 'var(--bg-elevated)',
              border: '1px solid rgba(196,154,10,0.3)',
              borderRadius: 'var(--radius-lg)',
              padding: '10px 16px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'rgba(255,184,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
              }}>
                ⭐
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  lineHeight: 1.1,
                }}>
                  6+ Years
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '8px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-gold)',
                  fontWeight: '600',
                }}>
                  Experience
                </div>
              </div>
            </div>
          </div>

          {/* Right — Story */}
          <div>
            <h2 className="text-display-md reveal-up" style={{ marginBottom: '24px' }}>
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
              fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '20px',
            }}>
              Adnan Qureshi, Founder & CEO of Fly Bit Falcon and Flybit Agency, is a dynamic entrepreneur committed to revolutionizing digital marketing. With over <strong>6+ years of deep expertise</strong> in business strategy, online revenue generation, and performance marketing, he has built Fly Bit Falcon into a thriving hub for aspiring professionals and high-growth businesses.
            </p>

            <p className="reveal-up delay-2" style={{
              fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '40px',
            }}>
              His vision empowers businesses with cutting-edge marketing strategies, high-converting funnel architectures, paid media mastery (Meta & Google Ads), and high-impact digital content designed to scale revenue consistently.
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
