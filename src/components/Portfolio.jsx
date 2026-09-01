import React, { useState } from 'react'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'meta', label: 'Meta Ads' },
  { id: 'google', label: 'Google Ads' },
  { id: 'websites', label: 'Websites' },
  { id: 'video', label: 'Video' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'funnels', label: 'Funnels' },
  { id: 'social', label: 'Social Media' },
  { id: 'ugc', label: 'UGC' },
]

const PORTFOLIO_ITEMS = [
  { id: 'p1', title: '[Campaign Name]', category: 'meta', tags: ['Meta Ads', 'Lead Gen'], color: '#5b8fff', metric: '[Result]' },
  { id: 'p2', title: '[Website Project]', category: 'websites', tags: ['Web Dev', 'Design'], color: '#a78bfa', metric: '[Result]' },
  { id: 'p3', title: '[Video Series]', category: 'video', tags: ['Video Editing', 'Reels'], color: '#f472b6', metric: '[Result]' },
  { id: 'p4', title: '[Ad Campaign]', category: 'google', tags: ['Google Ads', 'Search'], color: '#4ade80', metric: '[Result]' },
  { id: 'p5', title: '[Brand Design]', category: 'design', tags: ['Graphic Design', 'Brand'], color: '#E8D4A0', metric: '[Result]' },
  { id: 'p6', title: '[Funnel Build]', category: 'funnels', tags: ['Funnels', 'Landing Page'], color: '#C8F135', metric: '[Result]' },
  { id: 'p7', title: '[Social Profile]', category: 'social', tags: ['Social Media', 'Content'], color: '#fb923c', metric: '[Result]' },
  { id: 'p8', title: '[UGC Package]', category: 'ugc', tags: ['UGC Video', 'Ad Creative'], color: '#34d399', metric: '[Result]' },
  { id: 'p9', title: '[Meta Campaign]', category: 'meta', tags: ['Meta Ads', 'Retargeting'], color: '#5b8fff', metric: '[Result]' },
  { id: 'p10', title: '[E-commerce Site]', category: 'websites', tags: ['Web Dev', 'E-comm'], color: '#a78bfa', metric: '[Result]' },
  { id: 'p11', title: '[Reel Bundle]', category: 'video', tags: ['Short-form', 'Reels'], color: '#f472b6', metric: '[Result]' },
  { id: 'p12', title: '[Google Leads]', category: 'google', tags: ['Google Ads', 'Lead Gen'], color: '#4ade80', metric: '[Result]' },
]

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter((item) => item.category === activeFilter)

  return (
    <section
      id="portfolio"
      style={{
        background: 'var(--bg-surface)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: 'clamp(2rem, 4vw, 4rem)' }}>
          <div className="section-eyebrow reveal-fade">
            <span className="text-label">Portfolio</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ maxWidth: '500px', marginBottom: '16px' }}>
            Proof of{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-gold), #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Real Work.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '440px',
            lineHeight: '1.7',
          }}>
            Filter by service to see exactly what we've built in each discipline.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal-up" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '48px',
          padding: '6px',
          background: 'var(--bg-card)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          width: 'fit-content',
        }}>
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              id={`filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeFilter === filter.id ? 'var(--text-primary)' : 'transparent',
                color: activeFilter === filter.id ? 'var(--bg-base)' : 'var(--text-secondary)',
                transition: 'all 250ms var(--ease-out)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.color = 'var(--text-primary)'
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== filter.id) {
                  e.currentTarget.style.color = 'var(--text-secondary)'
                }
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>

        {/* Note */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          textAlign: 'center',
          marginTop: '48px',
          letterSpacing: '0.08em',
        }}>
          * All portfolio items are placeholders — add real screenshots, mockups, and client details
        </p>
      </div>
    </section>
  )
}

const PortfolioCard = ({ item, index }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      style={{
        borderRadius: 'var(--radius-xl)',
        background: 'var(--bg-card)',
        border: `1px solid ${hovered ? `${item.color}40` : 'var(--border-subtle)'}`,
        overflow: 'hidden',
        transition: 'all 350ms var(--ease-out)',
        transform: hovered ? 'translateY(-6px)' : 'none',
        animationDelay: `${index * 50}ms`,
        cursor: 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="VIEW"
    >
      {/* Visual placeholder */}
      <div style={{
        aspectRatio: '4/3',
        background: `linear-gradient(160deg, ${item.color}12 0%, rgba(0,0,0,0) 100%)`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderBottom: `1px solid ${hovered ? `${item.color}20` : 'var(--border-subtle)'}`,
        transition: 'border-color 350ms ease',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '10px',
          color: 'var(--text-muted)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          position: 'relative',
          zIndex: 1,
        }}>
          [Add Mockup]
        </div>
        {/* Category dot */}
        <div style={{
          position: 'absolute',
          top: '16px',
          right: '16px',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: item.color,
          boxShadow: `0 0 ${hovered ? '12px' : '4px'} ${item.color}80`,
          transition: 'box-shadow 350ms ease',
        }} />
      </div>

      {/* Info */}
      <div style={{ padding: '20px' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
          {item.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              padding: '3px 8px',
              borderRadius: '100px',
              background: `${item.color}10`,
              border: `1px solid ${item.color}25`,
              color: item.color,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--font-display)',
          fontSize: '15px',
          fontWeight: '700',
          color: 'var(--text-primary)',
          marginBottom: '8px',
          letterSpacing: '-0.01em',
        }}>
          {item.title}
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: item.color,
            letterSpacing: '0.06em',
          }}>
            {item.metric}
          </div>
          <div style={{
            color: hovered ? item.color : 'var(--text-muted)',
            transition: 'color 300ms ease, transform 300ms ease',
            transform: hovered ? 'translate(3px, -3px)' : 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
