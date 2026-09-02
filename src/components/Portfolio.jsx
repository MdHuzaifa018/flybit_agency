import React, { useState } from 'react'

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'meta', label: 'Meta Ads' },
  { id: 'google', label: 'Google Ads' },
  { id: 'websites', label: 'Websites' },
  { id: 'video', label: 'Video Editing' },
  { id: 'design', label: 'Graphic Design' },
  { id: 'funnels', label: 'Funnels' },
  { id: 'social', label: 'Social Media' },
  { id: 'ugc', label: 'UGC Content' },
]

const PORTFOLIO_ITEMS = [
  {
    id: 'p1',
    title: 'EdTech Scaler Meta Campaign',
    category: 'meta',
    tags: ['Meta Ads', 'Scale-Up'],
    color: '#1A65E3',
    icon: '⚡',
    metric: '4.8x ROAS · ₹18L Rev',
    desc: 'Targeted lookalike audiences and dynamic creative testing on Facebook & Instagram feeds.',
  },
  {
    id: 'p2',
    title: 'Modern Agency & EdTech Portal',
    category: 'websites',
    tags: ['Next.js', 'Vite', 'Design'],
    color: '#7c3aed',
    icon: '💻',
    metric: '99 Performance · Sub 1s',
    desc: 'High-speed React architecture with editorial aesthetics and dynamic lead capture.',
  },
  {
    id: 'p3',
    title: 'Viral Instagram Hook Reels Pack',
    category: 'video',
    tags: ['4K Reels', 'Motion Graphics'],
    color: '#e11d48',
    icon: '🎬',
    metric: '3.4M Organic Views',
    desc: 'Retention-optimized typography, sound design, and pattern interrupts for reels.',
  },
  {
    id: 'p4',
    title: 'High-Intent Search Campaign',
    category: 'google',
    tags: ['Google Search', 'High Intent'],
    color: '#16a34a',
    icon: '🎯',
    metric: 'Top #1 Ad Impression Share',
    desc: 'Negative keyword sculpting and structured search ads driving high commercial intent clicks.',
  },
  {
    id: 'p5',
    title: 'Luxury Brand Identity & Design System',
    category: 'design',
    tags: ['Brand Kit', 'Ad Graphics'],
    color: '#FFB800',
    icon: '✦',
    metric: 'Full Brand Suite',
    desc: 'Editorial color palette, typography hierarchy, social templates, and high-CTR ad creatives.',
  },
  {
    id: 'p6',
    title: 'Automated 3-Step Webinar Funnel',
    category: 'funnels',
    tags: ['Sales Funnel', 'WhatsApp CRM'],
    color: '#5C9900',
    icon: '⬡',
    metric: '34% Opt-in Rate',
    desc: 'High-converting opt-in page with countdown timers, automated SMS, and Stripe/Razorpay integration.',
  },
  {
    id: 'p7',
    title: 'Organic Brand Social Growth System',
    category: 'social',
    tags: ['Feed Design', 'Strategy'],
    color: '#ea580c',
    icon: '🔥',
    metric: '+85K Followers in 90 Days',
    desc: 'Cohesive grid aesthetic, daily carousel masterclasses, and viral short-form distribution.',
  },
  {
    id: 'p8',
    title: 'Creator UGC Ad Creative Bundle',
    category: 'ugc',
    tags: ['Direct Response', 'UGC'],
    color: '#0891b2',
    icon: '📱',
    metric: '2.8% Link CTR',
    desc: 'Authentic creator testimonial ads, unboxings, and problem-solution product hooks.',
  },
  {
    id: 'p9',
    title: 'D2C Retargeting & Cart Recovery',
    category: 'meta',
    tags: ['Meta Catalog', 'Dynamic Ads'],
    color: '#1A65E3',
    icon: '⚡',
    metric: '6.2x Retargeting ROAS',
    desc: 'Segmented custom audiences by cart abandonment timeframe with dynamic discount offers.',
  },
  {
    id: 'p10',
    title: 'Boutique E-Commerce Storefront',
    category: 'websites',
    tags: ['Shopify', 'Speed Optimization'],
    color: '#7c3aed',
    icon: '🛍️',
    metric: '+48% Mobile Conversion',
    desc: 'Custom liquid theme build optimized for 1-click checkout and seamless mobile experience.',
  },
  {
    id: 'p11',
    title: 'Founder Podcast & Longform Editing',
    category: 'video',
    tags: ['Podcast', 'Multi-Cam'],
    color: '#e11d48',
    icon: '🎙️',
    metric: '50+ Episodes Produced',
    desc: 'Studio-grade audio mastering, color grading, multi-camera switching, and short clip clipping.',
  },
  {
    id: 'p12',
    title: 'Local Service Google Lead Ads',
    category: 'google',
    tags: ['PMax', 'Local Lead Gen'],
    color: '#16a34a',
    icon: '📍',
    metric: '₹45 Cost Per Qualified Lead',
    desc: 'Local search grid domination with verified call-only ads and direct WhatsApp messaging.',
  },
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
            <span className="text-label">Agency Portfolio</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ maxWidth: '600px', marginBottom: '16px' }}>
            Proof of{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Real Growth Systems.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            maxWidth: '480px',
            lineHeight: '1.7',
          }}>
            Explore our curated work across performance ads, video production, web engineering, and conversion funnels.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="reveal-up" style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '40px',
          padding: '6px',
          background: 'var(--bg-elevated)',
          borderRadius: 'var(--radius-full)',
          border: '1px solid var(--border-subtle)',
          width: 'fit-content',
          boxShadow: '0 2px 10px rgba(0,0,0,0.03)',
        }}>
          {FILTERS.map((filter) => (
            <button
              key={filter.id}
              id={`filter-${filter.id}`}
              onClick={() => setActiveFilter(filter.id)}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: '600',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                padding: '8px 16px',
                borderRadius: 'var(--radius-full)',
                border: 'none',
                background: activeFilter === filter.id ? 'var(--text-primary)' : 'transparent',
                color: activeFilter === filter.id ? 'var(--bg-elevated)' : 'var(--text-secondary)',
                transition: 'all 250ms var(--ease-out)',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Portfolio grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 300px), 1fr))',
          gap: '20px',
        }}>
          {filtered.map((item, i) => (
            <PortfolioCard key={item.id} item={item} index={i} />
          ))}
        </div>
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
        background: hovered ? '#17150F' : 'var(--bg-elevated)',
        border: `1.5px solid ${hovered ? item.color : 'var(--border-subtle)'}`,
        overflow: 'hidden',
        transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), border-color 550ms cubic-bezier(0.25, 1, 0.5, 1), transform 550ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 550ms cubic-bezier(0.16, 1, 0.3, 1)',
        transform: hovered ? 'translateY(-8px) scale(1.01)' : 'none',
        boxShadow: hovered ? `0 28px 60px -10px ${item.color}35, 0 0 25px ${item.color}20` : '0 2px 10px rgba(0,0,0,0.03)',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="VIEW"
    >
      {/* Visual Header Mockup */}
      <div style={{
        height: '140px',
        background: `linear-gradient(145deg, ${item.color}20 0%, ${item.color}08 100%)`,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '16px',
        position: 'relative',
        borderBottom: `1px solid ${hovered ? `${item.color}40` : 'var(--border-subtle)'}`,
        transition: 'border-color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
      }}>
        {/* Top badge row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{
            width: '36px', height: '36px',
            borderRadius: '10px',
            background: hovered ? item.color : 'var(--bg-elevated)',
            border: `1px solid ${item.color}30`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: '18px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            color: hovered ? '#FFFFFF' : 'inherit',
            transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            {item.icon}
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '9px',
            fontWeight: '700',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            padding: '4px 10px',
            borderRadius: '100px',
            background: hovered ? '#17150F' : 'var(--bg-elevated)',
            color: item.color,
            border: `1px solid ${item.color}40`,
            transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), border-color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            {item.metric}
          </span>
        </div>

        {/* Decorative subtle pattern */}
        <div style={{
          display: 'flex', gap: '6px', alignItems: 'center',
        }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, opacity: 0.9, boxShadow: `0 0 8px ${item.color}` }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: hovered ? 'rgba(255,255,255,0.7)' : 'var(--text-secondary)', fontWeight: '600', transition: 'color 550ms cubic-bezier(0.25, 1, 0.5, 1)' }}>
            Verified Deliverable
          </span>
        </div>
      </div>

      {/* Info Body */}
      <div style={{ padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          {/* Tags */}
          <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
            {item.tags.map((tag) => (
              <span key={tag} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '9px',
                padding: '3px 8px',
                borderRadius: '6px',
                background: hovered ? 'rgba(255, 255, 255, 0.08)' : 'var(--bg-surface)',
                color: hovered ? '#FFFFFF' : 'var(--text-secondary)',
                letterSpacing: '0.04em',
                fontWeight: '600',
                transition: 'background-color 550ms cubic-bezier(0.25, 1, 0.5, 1), color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
              }}>
                {tag}
              </span>
            ))}
          </div>

          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '16px',
            fontWeight: '800',
            color: hovered ? '#FFFFFF' : 'var(--text-primary)',
            marginBottom: '8px',
            letterSpacing: '-0.02em',
            lineHeight: 1.25,
            transition: 'color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            {item.title}
          </div>

          <p style={{
            fontSize: '13px',
            color: hovered ? 'rgba(255,255,255,0.72)' : 'var(--text-secondary)',
            lineHeight: '1.6',
            marginBottom: '16px',
            transition: 'color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
          }}>
            {item.desc}
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: `1px solid ${hovered ? 'rgba(255,255,255,0.12)' : 'var(--border-subtle)'}`,
          paddingTop: '12px',
          transition: 'border-color 550ms cubic-bezier(0.25, 1, 0.5, 1)',
        }}>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '10px',
            color: item.color,
            fontWeight: '700',
            letterSpacing: '0.04em',
          }}>
            Case Overview ➔
          </span>
          <div style={{
            color: hovered ? item.color : 'var(--text-muted)',
            transition: 'all 200ms ease',
            transform: hovered ? 'translate(3px, -3px)' : 'none',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
