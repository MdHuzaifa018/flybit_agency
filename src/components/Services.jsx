import React, { useState } from 'react'

const SERVICES = [
  {
    num: '01',
    name: 'Meta Ads',
    short: 'Facebook & Instagram',
    description: 'Campaign strategy, creative production, audience targeting, and performance optimization that drives real leads and sales — not just impressions.',
    deliverables: ['Ad Creative Production', 'Audience Research', 'Campaign Setup & Structure', 'Lead Generation Funnels', 'Retargeting Systems', 'Performance Optimization'],
    icon: '◈',
    color: '#5b8fff',
    accent: 'rgba(91,143,255,0.08)',
    border: 'rgba(91,143,255,0.15)',
    size: 'large',
  },
  {
    num: '02',
    name: 'Google Ads',
    short: 'Search & Display',
    description: 'Capture high-intent traffic with precisely structured Search and Display campaigns built around keyword strategy and conversion goals.',
    deliverables: ['Keyword Strategy', 'Search Campaign Setup', 'Display Advertising', 'Performance Max', 'Lead Capture'],
    icon: '◉',
    color: '#4ade80',
    accent: 'rgba(74,222,128,0.08)',
    border: 'rgba(74,222,128,0.15)',
    size: 'small',
  },
  {
    num: '03',
    name: 'Video Editing',
    short: 'Content & Ads',
    description: 'Short-form reels, performance ad creatives, brand videos, and podcast editing — crafted for attention spans that are shrinking, not growing.',
    deliverables: ['Short-form Reels', 'Ad Creative Videos', 'Podcast Editing', 'Brand Videos', 'Promo Content'],
    icon: '▶',
    color: '#f472b6',
    accent: 'rgba(244,114,182,0.08)',
    border: 'rgba(244,114,182,0.15)',
    size: 'small',
  },
  {
    num: '04',
    name: 'Graphic Design',
    short: 'Creative & Brand Assets',
    description: 'Social media creatives, advertising visuals, brand assets, and campaign designs that look premium and convert on every platform.',
    deliverables: ['Social Media Creatives', 'Ad Designs', 'Brand Assets', 'Campaign Visuals', 'Marketing Graphics'],
    icon: '✦',
    color: '#E8D4A0',
    accent: 'rgba(232,212,160,0.08)',
    border: 'rgba(232,212,160,0.15)',
    size: 'large',
  },
  {
    num: '05',
    name: 'Funnel Building',
    short: 'Conversion Systems',
    description: 'End-to-end customer journey systems — from landing page to lead capture to sale — built with one purpose: converting visitors into clients.',
    deliverables: ['Landing Pages', 'Lead Capture Funnels', 'Sales Funnels', 'Email Sequences', 'Thank You Systems'],
    icon: '⬡',
    color: '#C8F135',
    accent: 'rgba(200,241,53,0.08)',
    border: 'rgba(200,241,53,0.15)',
    size: 'small',
  },
  {
    num: '06',
    name: 'Website Development',
    short: 'Digital Presence',
    description: 'Business websites, portfolio sites, landing pages, and custom digital experiences built for clarity, speed, and conversion — not just aesthetics.',
    deliverables: ['Business Websites', 'Portfolio Sites', 'Landing Pages', 'E-commerce', 'Custom Experiences'],
    icon: '⬚',
    color: '#a78bfa',
    accent: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.15)',
    size: 'small',
  },
  {
    num: '07',
    name: 'Social Media',
    short: 'Management & Growth',
    description: 'Full social media management — content strategy, creative production, scheduling, and brand presence management across all platforms.',
    deliverables: ['Content Strategy', 'Feed Design', 'Content Creation', 'Community Management', 'Brand Presence'],
    icon: '◎',
    color: '#fb923c',
    accent: 'rgba(251,146,60,0.08)',
    border: 'rgba(251,146,60,0.15)',
    size: 'large',
  },
  {
    num: '08',
    name: 'UGC Videos',
    short: 'Authentic Content',
    description: 'User-generated content style videos for ads and social media — product showcases, creator-style content, and social proof videos that feel real.',
    deliverables: ['Product Showcase Videos', 'Ad-style UGC', 'Testimonial Videos', 'Creator Style Content', 'Social Proof Assets'],
    icon: '⊕',
    color: '#34d399',
    accent: 'rgba(52,211,153,0.08)',
    border: 'rgba(52,211,153,0.15)',
    size: 'small',
  },
]

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false)
  const isLarge = service.size === 'large'

  return (
    <div
      className="reveal-up"
      style={{
        gridColumn: isLarge ? 'span 2' : 'span 1',
        transitionDelay: `${index * 60}ms`,
      }}
    >
      <div
        style={{
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          borderRadius: 'var(--radius-xl)',
          background: hovered ? service.accent : 'var(--bg-card)',
          border: `1px solid ${hovered ? service.border : 'var(--border-subtle)'}`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          transition: 'all 350ms var(--ease-out)',
          transform: hovered ? 'translateY(-4px)' : 'none',
          cursor: 'none',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="VIEW"
      >
        {/* Subtle glow on hover */}
        <div style={{
          position: 'absolute',
          top: 0, right: 0,
          width: '200px', height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${service.color}15 0%, transparent 70%)`,
          transform: 'translate(40%, -40%)',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 400ms ease',
          pointerEvents: 'none',
        }} />

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.12em',
              color: 'var(--text-muted)',
              marginBottom: '8px',
            }}>
              {service.num}
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: isLarge ? 'clamp(1.25rem, 2vw, 1.75rem)' : '1.25rem',
              fontWeight: '700',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              {service.name}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: service.color,
              marginTop: '4px',
              textTransform: 'uppercase',
            }}>
              {service.short}
            </div>
          </div>

          <div style={{
            width: '44px', height: '44px',
            borderRadius: '10px',
            background: `${service.color}15`,
            border: `1px solid ${service.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: service.color,
            flexShrink: 0,
            transition: 'transform 300ms var(--ease-spring)',
            transform: hovered ? 'scale(1.1) rotate(5deg)' : 'none',
          }}>
            {service.icon}
          </div>
        </div>

        {/* Description */}
        <p style={{
          fontSize: '14px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          flex: 1,
        }}>
          {service.description}
        </p>

        {/* Deliverables */}
        {isLarge && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {service.deliverables.map((d) => (
              <span key={d} style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                padding: '4px 10px',
                borderRadius: '100px',
                background: `${service.color}10`,
                border: `1px solid ${service.color}25`,
                color: service.color,
                letterSpacing: '0.06em',
              }}>
                {d}
              </span>
            ))}
          </div>
        )}

        {/* Arrow */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: hovered ? service.color : 'var(--text-muted)',
          transition: 'color 300ms ease',
        }}>
          {hovered ? 'Learn More' : 'Service'}
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2"
            style={{ transform: hovered ? 'translate(4px, -4px)' : 'none', transition: 'transform 300ms ease' }}
          >
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </div>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section
      id="services"
      style={{
        background: 'var(--bg-base)',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ maxWidth: '680px', marginBottom: 'clamp(3rem, 6vw, 6rem)' }}>
          <div className="section-eyebrow reveal-fade">
            <span className="text-label">Services</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ marginBottom: '20px' }}>
            Everything Your Digital Presence Needs.{' '}
            <span style={{
              background: 'linear-gradient(135deg, var(--accent-gold), #fff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Connected Under One Strategy.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
          }}>
            Eight core services working together as one connected system — not
            isolated deliverables, but a cohesive digital growth engine.
          </p>
        </div>

        {/* Bento grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
        }}>
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal-up" style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ fontSize: '13px', padding: '16px 32px' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Discuss Your Project ↗
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services .bento-grid { grid-template-columns: 1fr 1fr !important; }
          #services .reveal-up[style*="span 2"] { grid-column: span 2; }
        }
        @media (max-width: 600px) {
          #services div[style*="grid-template-columns: repeat(3, 1fr)"] {
            grid-template-columns: 1fr !important;
          }
          #services .reveal-up { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}

export default Services
