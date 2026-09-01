import React, { useState } from 'react'

const REVIEWS = [
  {
    id: 'r1',
    name: 'Vikramaditya Sharma',
    role: 'Founder & Managing Director',
    company: 'UrbanNest Living Spaces',
    industry: 'Real Estate & Infrastructure',
    rating: 5,
    metric: '920+ Leads @ ₹38 CPL',
    quote: 'Working with Adnan and Flybit Agency changed our entire lead acquisition. Within 45 days, our cost-per-lead dropped by 60% while lead quality improved dramatically. Their automated WhatsApp routing system alone closed 14 high-ticket property deals.',
    avatar: 'VS',
    color: '#1A65E3',
    verified: 'Verified Client',
    tag: 'Lead Generation',
  },
  {
    id: 'r2',
    name: 'Ananya Deshmukh',
    role: 'CEO & Creative Head',
    company: 'Velour Beauty & Skincare',
    industry: 'D2C E-Commerce',
    rating: 5,
    metric: '4.8x Blended ROAS',
    quote: 'Flybit Agency completely revamped our Meta ad creatives and UGC strategy. Their video editing team knows how to hook attention in the first 2 seconds. We scaled from ₹8L/month to ₹38L/month in revenue while maintaining healthy profit margins.',
    avatar: 'AD',
    color: '#FFB800',
    verified: 'Verified Client',
    tag: 'E-Commerce Scale',
  },
  {
    id: 'r3',
    name: 'Rahul Singhania',
    role: 'Head of Growth',
    company: 'SkillUp Digital Institute',
    industry: 'EdTech & Courses',
    rating: 5,
    metric: '12,000+ Enrolled',
    quote: 'Adnan is a true funnel architect. He built our course landing page, automated webinar reminders, and Meta retargeting campaigns. The conversion rate jumped from 1.8% to 6.4%. If you want someone who actually understands digital revenue, hire Flybit.',
    avatar: 'RS',
    color: '#5C9900',
    verified: 'Verified Client',
    tag: 'Funnel & Courses',
  },
  {
    id: 'r4',
    name: 'Tanmay Saxena',
    role: 'Co-Founder',
    company: 'NovaHealth Clinics',
    industry: 'Healthcare & Wellness',
    rating: 5,
    metric: 'Top #1 Google Rank',
    quote: 'Our Google Ads and local search presence were completely disorganized before Flybit took over. Now our consultation calendar is fully booked 3 weeks in advance. The level of reporting and transparent communication is unmatched.',
    avatar: 'TS',
    color: '#ea580c',
    verified: 'Verified Client',
    tag: 'Google Ads',
  },
  {
    id: 'r5',
    name: 'Pooja Mehta',
    role: 'Brand Director',
    company: 'Aura Fine Jewels',
    industry: 'Luxury Retail',
    rating: 5,
    metric: '+240% Repeat Orders',
    quote: 'Their aesthetic sense matches top global design agencies. The website they developed for us is blazing fast and our customers constantly compliment the visual experience. Adnan’s strategic input at every stage was invaluable.',
    avatar: 'PM',
    color: '#7c3aed',
    verified: 'Verified Client',
    tag: 'Web & Branding',
  },
  {
    id: 'r6',
    name: 'Mohit Rawat',
    role: 'Operations Director',
    company: 'Apex Logistics & B2B',
    industry: 'Logistics & Supply Chain',
    rating: 5,
    metric: '₹2.8Cr Sales Pipeline',
    quote: 'We were skeptical about digital marketing for B2B, but Flybit proved us wrong. Their targeted LinkedIn and Meta funnel generated corporate contracts worth crores. They deliver actual business outcomes, not just vanity metrics.',
    avatar: 'MR',
    color: '#0891b2',
    verified: 'Verified Client',
    tag: 'B2B Growth',
  },
]

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState(0)
  const featured = REVIEWS[activeTab]

  return (
    <section
      id="reviews"
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(4rem, 8vw, 8rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%',
        width: '50vw', height: '50vw', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 184, 0, 0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container">
        {/* Header Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '24px',
          marginBottom: 'clamp(2.5rem, 5vw, 4.5rem)',
        }}>
          <div>
            <div className="section-eyebrow reveal-fade">
              <span className="text-label">Client Reviews & Proof</span>
            </div>
            <h2 className="text-display-md reveal-up" style={{ maxWidth: '640px' }}>
              Real Feedback From{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Brands We Scaled.
              </span>
            </h2>
          </div>

          {/* Aggregate Rating Pill */}
          <div className="reveal-fade" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--bg-elevated)',
            border: '1px solid rgba(255,184,0,0.3)',
            borderRadius: '100px',
            padding: '8px 18px',
            boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'flex', color: '#FFB800', fontSize: '14px', gap: '2px' }}>
              ★★★★★
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '700',
              color: 'var(--text-primary)',
            }}>
              4.9/5 · 50+ Happy Clients
            </div>
          </div>
        </div>

        {/* Featured Review Hero Card */}
        <div
          className="reveal-up"
          style={{
            background: 'var(--bg-elevated)',
            border: '1.5px solid rgba(255, 184, 0, 0.25)',
            borderRadius: 'var(--radius-2xl)',
            padding: 'clamp(1.75rem, 4vw, 3.5rem)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.05)',
            position: 'relative',
            marginBottom: '40px',
          }}
        >
          {/* Top Row: Stars + Metric */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ color: '#FFB800', fontSize: '18px', letterSpacing: '2px' }}>★★★★★</div>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                padding: '3px 10px',
                borderRadius: '100px',
                background: 'rgba(22, 163, 74, 0.1)',
                color: '#16a34a',
                fontWeight: '700',
              }}>
                ✓ {featured.verified}
              </span>
            </div>

            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '800',
              color: featured.color,
              background: `${featured.color}12`,
              border: `1px solid ${featured.color}30`,
              padding: '6px 14px',
              borderRadius: '100px',
              letterSpacing: '0.04em',
            }}>
              {featured.metric}
            </div>
          </div>

          {/* Large Quote */}
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.15rem, 2.2vw, 1.6rem)',
            fontWeight: '600',
            lineHeight: '1.55',
            color: 'var(--text-primary)',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
          }}>
            "{featured.quote}"
          </blockquote>

          {/* Client Details */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
            borderTop: '1px solid var(--border-subtle)',
            paddingTop: '20px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${featured.color}, #17150F)`,
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontWeight: '800',
                fontSize: '15px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.12)',
              }}>
                {featured.avatar}
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '16px',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  lineHeight: 1.2,
                }}>
                  {featured.name}
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  color: 'var(--text-secondary)',
                  marginTop: '2px',
                }}>
                  {featured.role} · <strong style={{ color: featured.color }}>{featured.company}</strong>
                </div>
              </div>
            </div>

            {/* Quick Switch Buttons */}
            <div style={{ display: 'flex', gap: '8px' }}>
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  aria-label={`View review ${i + 1}`}
                  style={{
                    width: activeTab === i ? '28px' : '9px',
                    height: '9px',
                    borderRadius: '100px',
                    background: activeTab === i ? '#FFB800' : 'var(--border-medium)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 300ms ease',
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Responsive Grid of All Reviews */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '16px',
        }}>
          {REVIEWS.map((rev, idx) => (
            <div
              key={rev.id}
              onClick={() => setActiveTab(idx)}
              style={{
                padding: '22px',
                borderRadius: 'var(--radius-xl)',
                background: activeTab === idx ? `${rev.color}08` : 'var(--bg-elevated)',
                border: `1.5px solid ${activeTab === idx ? rev.color : 'var(--border-subtle)'}`,
                cursor: 'pointer',
                transition: 'all 300ms var(--ease-spring)',
                boxShadow: activeTab === idx ? `0 10px 24px ${rev.color}18` : '0 2px 8px rgba(0,0,0,0.02)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ color: '#FFB800', fontSize: '13px' }}>★★★★★</div>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '9px',
                    color: rev.color,
                    fontWeight: '700',
                    background: `${rev.color}12`,
                    padding: '2px 8px',
                    borderRadius: '100px',
                  }}>
                    {rev.metric}
                  </span>
                </div>
                <p style={{
                  fontSize: '13px',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.65',
                  marginBottom: '16px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  "{rev.quote}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderTop: '1px solid var(--border-subtle)', paddingTop: '12px' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: rev.color,
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-display)',
                  fontWeight: '800',
                  fontSize: '11px',
                }}>
                  {rev.avatar}
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {rev.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)' }}>
                    {rev.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
