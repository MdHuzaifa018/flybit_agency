import React, { useState } from 'react'

const PROJECTS = [
  {
    id: 'project-1',
    num: '01',
    name: 'Flybit Falcon Course & Ads Growth Engine',
    client: 'Flybit Falcon Ecosystem',
    industry: 'EdTech & Digital Skills',
    services: ['Meta Ads', 'Funnel Building', 'Video Creatives', 'Conversion Optimization'],
    description: 'Engineered an end-to-end performance acquisition funnel — starting from high-converting Meta hook videos, lead capture landing page, automated WhatsApp reminders, to direct checkout for digital marketing masterclasses.',
    result: '₹18L+ Monthly GMV · 4.8x Meta ROAS · 12,000+ Enrolled',
    accent: '#1A65E3',
    tag: 'Performance Marketing',
    stats: [
      { label: 'ROAS', val: '4.8x' },
      { label: 'CPA Reduction', val: '-42%' },
      { label: 'Conversion Rate', val: '6.4%' },
    ],
    mockupType: 'funnel',
  },
  {
    id: 'project-2',
    num: '02',
    name: 'D2C Lifestyle Brand Scale-Up System',
    client: 'Velour Apparel & Living',
    industry: 'E-Commerce & Retail',
    services: ['Website Development', 'Google Ads', 'UGC Creatives', 'Retargeting'],
    description: 'Revamped the brand e-commerce storefront for ultra-fast load times (sub 1.2s), launched TikTok/Instagram creator UGC reels, and deployed Google Performance Max campaigns to scale national sales.',
    result: '3.9x Blended ROAS · ₹42L Revenue in 60 Days · +180% Repeat Rate',
    accent: '#FFB800',
    tag: 'E-Commerce Scale',
    stats: [
      { label: 'Blended ROAS', val: '3.9x' },
      { label: 'Total Revenue', val: '₹42L' },
      { label: 'Page Speed', val: '98/100' },
    ],
    mockupType: 'ecommerce',
  },
  {
    id: 'project-3',
    num: '03',
    name: 'High-Ticket Lead Generation Architecture',
    client: 'Apex Commercial Properties',
    industry: 'Real Estate & B2B Consulting',
    services: ['Meta Lead Ads', 'Funnel Systems', 'Graphic Design', 'CRM Automation'],
    description: 'Designed a multi-step qualification questionnaire funnel filtering high net-worth investors, backed by geo-targeted Meta carousel ads and instant automated lead routing to sales closers.',
    result: '920+ Verified Inquiries · ₹38 Cost Per Qualified Lead · ₹3.2Cr Pipeline',
    accent: '#16a34a',
    tag: 'Lead Generation',
    stats: [
      { label: 'Qualified Leads', val: '920+' },
      { label: 'Cost Per Lead', val: '₹38' },
      { label: 'Pipeline Value', val: '₹3.2Cr' },
    ],
    mockupType: 'leads',
  },
]

// Interactive visual mockups
const ProjectMockup = ({ project, hovered }) => {
  if (project.mockupType === 'funnel') {
    return (
      <div style={{
        width: '100%', height: '100%',
        padding: '24px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(145deg, #0F172A 0%, #1E293B 100%)',
        borderRadius: 'var(--radius-xl)', color: '#fff',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
      }}>
        {/* Browser Top Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'rgba(255,255,255,0.6)', background: 'rgba(255,255,255,0.06)', padding: '3px 12px', borderRadius: '100px' }}>
            flybitfalcon.com/mastery-funnel
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#38bdf8' }}>LIVE ⚡</span>
        </div>

        {/* Dashboard Content */}
        <div style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {project.stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#94a3b8', textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', color: '#38bdf8', marginTop: '4px' }}>{s.val}</div>
            </div>
          ))}
        </div>

        {/* Mini Funnel Flow Visualization */}
        <div style={{
          background: 'rgba(56, 189, 248, 0.08)',
          border: '1px solid rgba(56, 189, 248, 0.2)',
          borderRadius: '12px', padding: '16px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-around',
        }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px' }}>🎯</div>
            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>Meta Ad Hook</div>
          </div>
          <div style={{ color: '#38bdf8', fontSize: '14px' }}>➔</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px' }}>⚡</div>
            <div style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px' }}>Landing Page</div>
          </div>
          <div style={{ color: '#38bdf8', fontSize: '14px' }}>➔</div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '18px' }}>💰</div>
            <div style={{ fontSize: '10px', color: '#22c55e', marginTop: '4px', fontWeight: '700' }}>Direct Sale</div>
          </div>
        </div>
      </div>
    )
  }

  if (project.mockupType === 'ecommerce') {
    return (
      <div style={{
        width: '100%', height: '100%',
        padding: '24px', display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between',
        background: 'linear-gradient(145deg, #1C1917 0%, #292524 100%)',
        borderRadius: 'var(--radius-xl)', color: '#fff',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
          <div style={{ display: 'flex', gap: '6px' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#FFB800' }}>
            STOREFRONT + ADS 📈
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#22c55e' }}>+180% REVENUE</span>
        </div>

        <div style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
          {project.stats.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 12px' }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#a8a29e', textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', color: '#FFB800', marginTop: '4px' }}>{s.val}</div>
            </div>
          ))}
        </div>

        <div style={{
          background: 'rgba(255, 184, 0, 0.08)',
          border: '1px solid rgba(255, 184, 0, 0.25)',
          borderRadius: '12px', padding: '14px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,184,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
              🛍️
            </div>
            <div>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#fff' }}>Shopify Performance + UGC Ads</div>
              <div style={{ fontSize: '10px', color: '#a8a29e' }}>Scaled across Instagram & Google PMax</div>
            </div>
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#FFB800', fontWeight: '700' }}>3.9x ROAS</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      width: '100%', height: '100%',
      padding: '24px', display: 'flex', flexDirection: 'column',
      justifyContent: 'space-between',
      background: 'linear-gradient(145deg, #064E3B 0%, #022C22 100%)',
      borderRadius: 'var(--radius-xl)', color: '#fff',
      boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.1)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '12px' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
          <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4ade80' }}>
          LEAD GENERATION ENGINE
        </div>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: '#4ade80' }}>920+ LEADS</span>
      </div>

      <div style={{ margin: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
        {project.stats.map((s, i) => (
          <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '14px 12px' }}>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: '#a7f3d0', textTransform: 'uppercase' }}>{s.label}</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '800', color: '#4ade80', marginTop: '4px' }}>{s.val}</div>
          </div>
        ))}
      </div>

      <div style={{
        background: 'rgba(74, 222, 128, 0.08)',
        border: '1px solid rgba(74, 222, 128, 0.25)',
        borderRadius: '12px', padding: '14px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(74,222,128,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>
            🏢
          </div>
          <div>
            <div style={{ fontSize: '12px', fontWeight: '700', color: '#fff' }}>Automated CRM & Lead Routing</div>
            <div style={{ fontSize: '10px', color: '#a7f3d0' }}>Instant WhatsApp alert to sales team</div>
          </div>
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: '#4ade80', fontWeight: '700' }}>₹38 / Lead</div>
      </div>
    </div>
  )
}

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
              <span className="text-label">Featured Case Studies</span>
            </div>
            <h2 className="text-display-md reveal-up">
              Proven Results That Speak{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Louder Than Words.
              </span>
            </h2>
            <p className="reveal-up delay-1" style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginTop: '16px',
            }}>
              A showcase of actual growth systems, campaigns, and digital architectures built
              and scaled by Flybit Agency.
            </p>
          </div>

          <a
            href="#portfolio"
            className="btn btn-secondary reveal-fade"
            style={{ fontSize: '12px', flexShrink: 0 }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Filter All Works ↗
          </a>
        </div>

        {/* Projects — alternating editorial layout */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 7rem)' }}>
          {PROJECTS.map((project, i) => (
            <article
              key={project.id}
              id={project.id}
              className="reveal-up"
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1.1fr 1fr' : '1fr 1.1fr',
                gap: 'clamp(2rem, 4vw, 5rem)',
                alignItems: 'center',
              }}
            >
              {/* Visual panel */}
              <div
                style={{
                  order: i % 2 === 0 ? 1 : 2,
                  position: 'relative',
                  aspectRatio: '16/11',
                  borderRadius: 'var(--radius-2xl)',
                  transition: 'transform 350ms var(--ease-spring)',
                  transform: hoveredProject === project.id ? 'translateY(-6px)' : 'none',
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <ProjectMockup project={project} hovered={hoveredProject === project.id} />
              </div>

              {/* Text panel */}
              <div style={{ order: i % 2 === 0 ? 2 : 1 }}>
                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '10px',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: `${project.accent}12`,
                    border: `1px solid ${project.accent}30`,
                    color: project.accent,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                  }}>
                    {project.tag}
                  </span>
                  {project.services.map((s) => (
                    <span key={s} className="tag" style={{ background: 'var(--bg-elevated)', border: '1px solid var(--border-subtle)' }}>{s}</span>
                  ))}
                </div>

                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  letterSpacing: '0.12em',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  marginBottom: '10px',
                  fontWeight: '600',
                }}>
                  {project.client} · {project.industry}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.2vw, 2rem)',
                  fontWeight: '800',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  marginBottom: '16px',
                  lineHeight: 1.15,
                }}>
                  {project.name}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.75',
                  marginBottom: '24px',
                }}>
                  {project.description}
                </p>

                {/* Result callout */}
                <div style={{
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-elevated)',
                  border: `1.5px solid ${project.accent}35`,
                  marginBottom: '28px',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: project.accent,
                    marginBottom: '4px',
                    fontWeight: '700',
                  }}>
                    Verified Outcome
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: '800',
                    color: 'var(--text-primary)',
                  }}>
                    {project.result}
                  </div>
                </div>

                <a
                  href="#contact"
                  className="btn btn-primary"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                  style={{
                    fontSize: '12px',
                    padding: '12px 24px',
                  }}
                >
                  Scale Your Business Like This ↗
                </a>
              </div>
            </article>
          ))}
        </div>
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
