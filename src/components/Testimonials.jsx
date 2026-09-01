import React, { useState } from 'react'

const TESTIMONIALS = [
  {
    id: 't1',
    quote: '[Replace with real client testimonial — what specific result did they get, what was the experience like working with you, what would they say to a business owner considering hiring you?]',
    name: '[Client Name]',
    role: '[Job Title / Role]',
    company: '[Company Name]',
    industry: '[Industry]',
    accent: '#5b8fff',
  },
  {
    id: 't2',
    quote: '[Replace with real client testimonial. The most powerful testimonials focus on specific, measurable outcomes and describe the experience of working with the agency, not just generic praise.]',
    name: '[Client Name]',
    role: '[Job Title / Role]',
    company: '[Company Name]',
    industry: '[Industry]',
    accent: '#C8F135',
  },
  {
    id: 't3',
    quote: '[Replace with real client testimonial. Ideal length is 2-3 sentences. Focus on before/after, specific numbers if possible, and the emotional relief of having a reliable partner handling their digital growth.]',
    name: '[Client Name]',
    role: '[Job Title / Role]',
    company: '[Company Name]',
    industry: '[Industry]',
    accent: '#E8D4A0',
  },
]

const Testimonials = () => {
  const [active, setActive] = useState(0)
  const current = TESTIMONIALS[active]

  return (
    <section
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: 'clamp(3rem, 6vw, 6rem)',
        }}>
          <div>
            <div className="section-eyebrow reveal-fade">
              <span className="text-label">Testimonials</span>
            </div>
            <h2 className="text-display-md reveal-up">
              Trusted By The People{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-gold), #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                We Work With.
              </span>
            </h2>
          </div>

          {/* Navigation dots */}
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                id={`testimonial-dot-${i}`}
                onClick={() => setActive(i)}
                aria-label={`View testimonial ${i + 1}`}
                style={{
                  width: i === active ? '32px' : '8px',
                  height: '8px',
                  borderRadius: '100px',
                  background: i === active ? 'var(--accent-gold)' : 'var(--text-muted)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 400ms var(--ease-out)',
                }}
              />
            ))}
          </div>
        </div>

        {/* Active testimonial — large quote */}
        <div
          style={{
            maxWidth: '900px',
            margin: '0 auto',
            textAlign: 'center',
            position: 'relative',
          }}
        >
          {/* Quote mark */}
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '8rem',
            fontWeight: '800',
            lineHeight: 0.8,
            color: current.accent,
            opacity: 0.12,
            marginBottom: '16px',
            letterSpacing: '-0.05em',
          }}>
            "
          </div>

          {/* Quote text */}
          <blockquote
            key={current.id}
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
              fontWeight: '500',
              lineHeight: '1.5',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              marginBottom: '48px',
              animation: 'fadeIn 500ms var(--ease-out)',
            }}
          >
            {current.quote}
          </blockquote>

          {/* Client info */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            animation: 'fadeIn 500ms var(--ease-out)',
          }}>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '16px',
              fontWeight: '700',
              color: 'var(--text-primary)',
            }}>
              {current.name}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: current.accent,
            }}>
              {current.role} · {current.company}
            </div>
            <span className="tag" style={{ marginTop: '8px' }}>{current.industry}</span>
          </div>
        </div>

        {/* Other testimonials preview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '16px',
          marginTop: '64px',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '48px',
        }}>
          {TESTIMONIALS.map((t, i) => (
            <div
              key={t.id}
              onClick={() => setActive(i)}
              style={{
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                background: i === active ? `${t.accent}08` : 'var(--bg-card)',
                border: `1px solid ${i === active ? `${t.accent}30` : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                transition: 'all 300ms var(--ease-out)',
              }}
              data-cursor="VIEW"
            >
              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: '1.6',
                marginBottom: '16px',
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}>
                {t.quote}
              </p>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--text-primary)',
              }}>
                {t.name}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: t.accent,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '2px',
              }}>
                {t.company}
              </div>
            </div>
          ))}
        </div>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginTop: '32px',
          letterSpacing: '0.08em',
        }}>
          * Testimonials are placeholders — replace with real client reviews
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}

export default Testimonials
