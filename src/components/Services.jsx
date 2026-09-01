import React, { useState } from 'react'

const SERVICES = [
  {
    num: '01',
    name: 'Meta Ads',
    short: 'Facebook & Instagram',
    description: 'Campaign strategy, creative testing, high-intent audience targeting, and performance scaling that drives real leads and sales — not just vanity impressions.',
    deliverables: ['Creative Video Hooks', 'Custom Audience Funnels', 'Lead Generation Systems', 'Retargeting & LTV Scaling'],
    icon: '⚡',
    color: '#1A65E3',
    accent: 'rgba(26, 101, 227, 0.04)',
    border: 'rgba(26, 101, 227, 0.2)',
    size: 'large',
  },
  {
    num: '02',
    name: 'Google Ads',
    short: 'Search & PMax',
    description: 'Capture high-intent buyers with keyword sculpting, Search Ads, Performance Max, and conversion tracking.',
    deliverables: ['Keyword Intent Mapping', 'Search Ads Structure', 'Performance Max Setup'],
    icon: '🎯',
    color: '#16a34a',
    accent: 'rgba(22, 163, 74, 0.04)',
    border: 'rgba(22, 163, 74, 0.2)',
    size: 'small',
  },
  {
    num: '03',
    name: 'Video Editing',
    short: 'Viral Reels & Ads',
    description: 'Short-form reels, ad creatives, podcast clips, and YouTube content — engineered for maximum watch-time and CTR.',
    deliverables: ['High-Retention Reels', 'Direct Response Ads', 'Motion Graphics & Hooks'],
    icon: '🎬',
    color: '#e11d48',
    accent: 'rgba(225, 29, 72, 0.04)',
    border: 'rgba(225, 29, 72, 0.2)',
    size: 'small',
  },
  {
    num: '04',
    name: 'Graphic Design',
    short: 'Brand & Creative Assets',
    description: 'High-converting social creatives, advertising carousels, sales deck designs, and cohesive visual identities that stand out.',
    deliverables: ['Ad Creative Packs', 'Brand Design Systems', 'Social Media Templates', 'Sales Presentations'],
    icon: '✦',
    color: '#C49A0A',
    accent: 'rgba(196, 154, 10, 0.04)',
    border: 'rgba(196, 154, 10, 0.2)',
    size: 'large',
  },
  {
    num: '05',
    name: 'Funnel Building',
    short: 'Conversion Systems',
    description: 'Automated sales funnels, webinar landing pages, and lead capture workflows with integrated CRM and WhatsApp follow-ups.',
    deliverables: ['High-Converting Landers', 'WhatsApp Automation', 'Payment Gateway Integration'],
    icon: '⬡',
    color: '#5C9900',
    accent: 'rgba(92, 153, 0, 0.04)',
    border: 'rgba(92, 153, 0, 0.2)',
    size: 'small',
  },
  {
    num: '06',
    name: 'Website Development',
    short: 'Fast Modern Sites',
    description: 'Custom portfolio sites, e-commerce storefronts, and web platforms built for lightning speed, mobile responsiveness, and SEO.',
    deliverables: ['React & Next.js Builds', 'Mobile Optimization', 'Conversion-First UI/UX'],
    icon: '💻',
    color: '#7c3aed',
    accent: 'rgba(124, 58, 237, 0.04)',
    border: 'rgba(124, 58, 237, 0.2)',
    size: 'small',
  },
  {
    num: '07',
    name: 'Social Media Management',
    short: 'Organic Brand Growth',
    description: 'Full-stack organic growth strategy: content calendar planning, daily creative publishing, community engagement, and brand scaling.',
    deliverables: ['Content Calendar & Grid', 'Carousel Masterclasses', 'Community Management', 'Distribution Strategy'],
    icon: '🔥',
    color: '#ea580c',
    accent: 'rgba(234, 88, 12, 0.04)',
    border: 'rgba(234, 88, 12, 0.2)',
    size: 'large',
  },
  {
    num: '08',
    name: 'UGC Content',
    short: 'Authentic Creator Ads',
    description: 'User-generated content videos and creator reviews that look real, build trust instantly, and outperform standard corporate ads.',
    deliverables: ['Creator Testimonials', 'Unboxing & Demo Hooks', 'Direct Response Scripts'],
    icon: '📱',
    color: '#0891b2',
    accent: 'rgba(8, 145, 178, 0.04)',
    border: 'rgba(8, 145, 178, 0.2)',
    size: 'small',
  },
]

const ServiceCard = ({ service, index }) => {
  const [hovered, setHovered] = useState(false)
  const isLarge = service.size === 'large'

  return (
    <div
      className={`service-item ${isLarge ? 'service-span-2' : 'service-span-1'}`}
      style={{
        transitionDelay: `${index * 50}ms`,
      }}
    >
      <div
        style={{
          padding: 'clamp(1.5rem, 3vw, 2.5rem)',
          borderRadius: 'var(--radius-xl)',
          background: hovered ? 'var(--bg-elevated)' : 'var(--bg-elevated)',
          border: `1.5px solid ${hovered ? service.color : 'var(--border-subtle)'}`,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
          transition: 'all 300ms var(--ease-spring)',
          transform: hovered ? 'translateY(-6px)' : 'none',
          boxShadow: hovered ? `0 16px 36px ${service.color}15, 0 2px 8px rgba(0,0,0,0.04)` : '0 2px 10px rgba(0,0,0,0.02)',
          position: 'relative',
          overflow: 'hidden',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        data-cursor="VIEW"
      >
        {/* Glow corner */}
        <div style={{
          position: 'absolute', top: 0, right: 0,
          width: '180px', height: '180px', borderRadius: '50%',
          background: `radial-gradient(circle, ${service.color}18 0%, transparent 70%)`,
          transform: 'translate(30%, -30%)',
          opacity: hovered ? 1 : 0.4,
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
              color: service.color,
              marginBottom: '6px',
              fontWeight: '700',
            }}>
              SERVICE // {service.num}
            </div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: isLarge ? 'clamp(1.35rem, 2vw, 1.75rem)' : '1.35rem',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
              lineHeight: 1.2,
            }}>
              {service.name}
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '10px',
              letterSpacing: '0.08em',
              color: 'var(--text-secondary)',
              marginTop: '4px',
              textTransform: 'uppercase',
              fontWeight: '600',
            }}>
              {service.short}
            </div>
          </div>

          <div style={{
            width: '44px', height: '44px',
            borderRadius: '12px',
            background: `${service.color}12`,
            border: `1px solid ${service.color}30`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            flexShrink: 0,
            transition: 'transform 300ms var(--ease-spring)',
            transform: hovered ? 'scale(1.12)' : 'none',
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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {service.deliverables.map((d) => (
            <span key={d} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '9px',
              padding: '4px 10px',
              borderRadius: '100px',
              background: `${service.color}08`,
              border: `1px solid ${service.color}20`,
              color: service.color,
              letterSpacing: '0.04em',
              fontWeight: '700',
            }}>
              {d}
            </span>
          ))}
        </div>

        {/* Bottom CTA Arrow */}
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
          fontWeight: '700',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '14px',
        }}>
          <span>Get Started With {service.name}</span>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5"
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
        <div style={{ maxWidth: '680px', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="section-eyebrow reveal-fade">
            <span className="text-label">Agency Capabilities</span>
          </div>
          <h2 className="text-display-md reveal-up" style={{ marginBottom: '18px' }}>
            Everything Your Brand Needs to Scale.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Under One Connected Strategy.
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: '1.7',
          }}>
            Eight core disciplines operating together as one growth engine — no scattered freelancers, no disconnects.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="services-bento-grid">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.num} service={service} index={i} />
          ))}
        </div>

        {/* Center Action */}
        <div className="reveal-up" style={{
          marginTop: '48px',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <a
            href="#contact"
            className="btn btn-primary"
            style={{ fontSize: '13px', padding: '16px 36px', boxShadow: '0 8px 25px rgba(0,0,0,0.15)' }}
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Request a Custom Strategy ↗
          </a>
        </div>
      </div>

      <style>{`
        .services-bento-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .service-span-2 {
          grid-column: span 2;
        }
        .service-span-1 {
          grid-column: span 1;
        }
        @media (max-width: 960px) {
          .services-bento-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .service-span-2 {
            grid-column: span 2 !important;
          }
        }
        @media (max-width: 640px) {
          .services-bento-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .service-span-2, .service-span-1 {
            grid-column: span 1 !important;
          }
        }
      `}</style>
    </section>
  )
}

export default Services
