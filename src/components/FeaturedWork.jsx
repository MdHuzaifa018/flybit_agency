import React, { useState } from 'react'

const PROJECTS = [
  {
    id: 'project-1',
    num: '01',
    name: '[Project Name]',
    client: '[Client Name]',
    industry: '[Industry]',
    services: ['Meta Ads', 'Video Editing', 'Funnel Building'],
    description: '[Replace with real project description — what was the challenge, what was built, what made this project unique. Keep it direct and results-focused.]',
    result: '[Replace with verified outcome — e.g. 3.4x ROAS, 240 leads in 30 days, etc.]',
    accent: '#5b8fff',
    tag: 'Performance Marketing',
  },
  {
    id: 'project-2',
    num: '02',
    name: '[Project Name]',
    client: '[Client Name]',
    industry: '[Industry]',
    services: ['Website Development', 'Funnel Building', 'Google Ads'],
    description: '[Replace with real project description. Describe the business problem, the approach taken, and the specific deliverables created.]',
    result: '[Verified outcome placeholder]',
    accent: '#C8F135',
    tag: 'Web & Conversion',
  },
  {
    id: 'project-3',
    num: '03',
    name: '[Project Name]',
    client: '[Client Name]',
    industry: '[Industry]',
    services: ['Social Media Management', 'Graphic Design', 'UGC Videos'],
    description: '[Replace with real project description. Show the creative direction taken, the content strategy built, and the brand transformation achieved.]',
    result: '[Verified outcome placeholder]',
    accent: '#f472b6',
    tag: 'Brand & Content',
  },
]

const FeaturedWork = () => {
  const [hoveredProject, setHoveredProject] = useState(null)

  return (
    <section
      id="work"
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '32px',
          marginBottom: 'clamp(3rem, 6vw, 6rem)',
        }}>
          <div style={{ maxWidth: '600px' }}>
            <div className="section-eyebrow reveal-fade">
              <span className="text-label">Featured Work</span>
            </div>
            <h2 className="text-display-md reveal-up">
              Work That Speaks{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-gold), #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Before We Do.
              </span>
            </h2>
            <p className="reveal-up delay-1" style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginTop: '16px',
            }}>
              A selection of campaigns, creative projects, websites and digital
              systems built for real business goals.
            </p>
          </div>

          <a
            href="#portfolio"
            className="btn btn-secondary reveal-fade"
            style={{ fontSize: '12px', flexShrink: 0 }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            View All Work
          </a>
        </div>

        {/* Projects — alternating editorial layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 8rem)' }}>
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              id={project.id}
              className="reveal-up"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: 'clamp(2rem, 4vw, 6rem)',
                alignItems: 'center',
              }}
            >
              {/* Visual panel */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                  position: 'relative',
                }}
              >
                {/* Project visual placeholder */}
                <div
                  style={{
                    aspectRatio: '4/3',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    overflow: 'hidden',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 400ms var(--ease-out), border-color 400ms ease',
                    transform: hoveredProject === project.id ? 'scale(1.02)' : 'scale(1)',
                    borderColor: hoveredProject === project.id ? `${project.accent}50` : 'var(--border-subtle)',
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                  data-cursor="VIEW"
                >
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: `linear-gradient(160deg, ${project.accent}15 0%, rgba(0,0,0,0) 100%)`,
                  }} />
                  <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                    <div style={{
                      width: '64px', height: '64px',
                      borderRadius: '16px',
                      background: `${project.accent}20`,
                      border: `1px solid ${project.accent}30`,
                      margin: '0 auto 16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={project.accent} strokeWidth="1.5">
                        <rect x="3" y="3" width="18" height="18" rx="3"/>
                        <path d="M9 9l6 6M15 9l-6 6"/>
                      </svg>
                    </div>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                    }}>
                      [Add Project Screenshot / Mockup]
                    </div>
                  </div>

                  {/* Project number overlay */}
                  <div style={{
                    position: 'absolute',
                    top: '20px',
                    left: '20px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '4rem',
                    fontWeight: '800',
                    color: `${project.accent}12`,
                    lineHeight: 1,
                    letterSpacing: '-0.05em',
                  }}>
                    {project.num}
                  </div>
                </div>
              </div>

              {/* Text panel */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    padding: '4px 10px',
                    borderRadius: '100px',
                    background: `${project.accent}10`,
                    border: `1px solid ${project.accent}25`,
                    color: project.accent,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    {project.tag}
                  </span>
                  {project.services.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

                {/* Client / Industry */}
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '10px',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  {project.client} · {project.industry}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  fontWeight: '700',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  marginBottom: '20px',
                }}>
                  {project.name}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.8',
                  marginBottom: '24px',
                }}>
                  {project.description}
                </p>

                {/* Result callout */}
                <div style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: `${project.accent}08`,
                  border: `1px solid ${project.accent}20`,
                  marginBottom: '32px',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: project.accent,
                    marginBottom: '6px',
                  }}>
                    Result
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                  }}>
                    {project.result}
                  </div>
                </div>

                <a
                  href={`#${project.id}`}
                  className="btn btn-ghost"
                  data-cursor="VIEW"
                  style={{
                    color: project.accent,
                    borderBottomColor: 'transparent',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.borderBottomColor = project.accent}
                  onMouseLeave={(e) => e.currentTarget.style.borderBottomColor = 'transparent'}
                >
                  View Case Study ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginTop: '64px',
          letterSpacing: '0.08em',
        }}>
          * All project details are placeholders — replace with real client work and verified outcomes
        </p>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #work article {
            grid-template-columns: 1fr !important;
          }
          #work article > div:first-child,
          #work article > div:last-child {
            order: unset !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturedWork
