import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const WHATSAPP_PROOFS = [
  {
    id: 'wp1',
    name: 'Karan',
    handle: 'Karan Bhai FLP',
    company: 'FLP Network & Lead Gen',
    tag: 'Meta Lead Ads',
    metric: '117 Leads in 24h',
    badge: '🔥 Record Result',
    color: '#FFB800',
    summary: 'Tere ad ne dil jeet liya bhai kal 117 form fill hue the. Kya response aaya hai bhai unbelievable yrr!',
    date: 'Yesterday',
    image: '/reviews/review3.jpg',
    stats: [
      { label: 'Forms Filled', val: '117 Leads' },
      { label: 'Timeline', val: '1 Single Day' },
      { label: 'Status', val: 'Active & Scaling' },
    ]
  },
  {
    id: 'wp2',
    name: 'Sneha Sapra',
    handle: 'Sneha Sapra (Growth Associate)',
    company: 'Affiliate & Growth Network',
    tag: 'WhatsApp Lead Ads',
    metric: 'Non-stop WhatsApp Leads',
    badge: '🚀 Instant Inflow',
    color: '#22c55e',
    summary: 'Sir leads aana start ho gyi hai, continuous messages aa rahe hain. Thank you so much ❤️😊',
    date: 'Today',
    image: '/reviews/review4.jpg',
    stats: [
      { label: 'Lead Flow', val: '10+ msgs/hr' },
      { label: 'Channel', val: 'Direct WhatsApp' },
      { label: 'Quality', val: '100% Target' },
    ]
  },
  {
    id: 'wp3',
    name: 'Jatin',
    handle: 'Jatin Bhai GA',
    company: 'Growth Associate Campaign',
    tag: 'Cost Optimization',
    metric: '₹3.69 Per Lead',
    badge: '⚡ Lowest CPL',
    color: '#1A65E3',
    summary: '13 messaging leads @ ₹3.69 cost per lead. Total ad spend only ₹47.93! "Badiya hai bhai continue rakho 🤝"',
    date: 'Today',
    image: '/reviews/review1.jpg',
    stats: [
      { label: 'Cost/Lead', val: '₹3.69' },
      { label: 'Spent', val: '₹47.93' },
      { label: 'Conversations', val: '13 Leads' },
    ]
  },
  {
    id: 'wp4',
    name: 'Freed Ali',
    handle: 'Ali Bhai GA',
    company: 'Growth Associate Scaling',
    tag: 'Traffic & Quality',
    metric: '₹2.68 CPC · 18+ Quality',
    badge: '🎯 Verified Quality',
    color: '#7c3aed',
    summary: '20 Link clicks generated in just ₹53.58. High quality 18+ audience with active closing.',
    date: 'Today',
    image: '/reviews/review2.jpg',
    stats: [
      { label: 'Cost/Click', val: '₹2.68' },
      { label: 'Total Clicks', val: '20 Clicks' },
      { label: 'Quality', val: '18+ High Intent' },
    ]
  },
]

// Web Development & Tech Client Card Reviews (Photo & Card Type with Large Images)
const WEB_DEV_REVIEWS = [
  {
    id: 'wd1',
    name: 'Abhay Raj',
    role: 'Founder & Director',
    company: 'Abhay Foundation (NGO)',
    metric: '10,000+ Visits · Donations',
    tag: 'Full-Stack Web App',
    rating: 5,
    image: 'https://www.foundationabhay.org/_next/image?url=%2Fteam%2Fceo.png&w=640&q=75',
    color: '#16a34a',
    quote: 'Huzaifa built a flawless donation platform and custom admin dashboard for our NGO. The website is blazing fast, beautiful on mobile, and streamlined our entire operations with zero issues.',
    verified: 'Verified Client'
  },
  {
    id: 'wd2',
    name: 'Amritaansh Sinha',
    role: 'Founder',
    company: 'TechUgrow Startup',
    metric: 'Sub-1s Speed · 99 Score',
    tag: 'Startup Web Platform',
    rating: 5,
    image: 'https://res.cloudinary.com/qpxxnswd/image/upload/v1785381988/techugrow/xoo5ibyhkvqfgs04xx0x.png',
    color: '#1A65E3',
    quote: 'Working with Huzaifa was an absolute game changer. The UI/UX animations, responsive architecture, and backend integrations helped us establish immediate trust with our startup users.',
    verified: 'Verified Client'
  },
  {
    id: 'wd3',
    name: 'Dr. K. Subrahmanya',
    role: 'Director',
    company: 'Subrahmanya Educational Institute',
    metric: '5k+ Active Inquiries',
    tag: 'Educational Portal',
    rating: 5,
    image: 'https://sri-subramanya-educational-institut.vercel.app/img/dir.jpg',
    color: '#7c3aed',
    quote: 'The portal handles student admissions, course catalogs, and automated inquiry capture smoothly. Huzaifa delivered beyond our expectations with clean modern code and incredible support.',
    verified: 'Verified Client'
  },
  {
    id: 'wd4',
    name: 'Rajesh Kumar',
    role: 'Founder & Head Coach',
    company: 'Coaching Institute Portal',
    metric: '300% Higher Conversions',
    tag: 'Coaching Website',
    rating: 5,
    image: 'https://inspector-coaching-web.vercel.app/founder2.jpg',
    color: '#FFB800',
    quote: 'Our old website was slow and losing leads. The new high-retention React application built by Huzaifa loaded instantly and tripled our student lead flow in the first month itself.',
    verified: 'Verified Client'
  }
]

const Testimonials = () => {
  const [activeCategory, setActiveCategory] = useState('all') // 'all' | 'whatsapp' | 'webdev'
  const [selectedImage, setSelectedImage] = useState(null)
  const [activeProofIndex, setActiveProofIndex] = useState(0)

  const activeProof = WHATSAPP_PROOFS[activeProofIndex]

  return (
    <section
      id="reviews"
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(4rem, 8vw, 7rem) 0',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background ambient lighting */}
      <div style={{
        position: 'absolute', top: '15%', right: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255, 184, 0, 0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', left: '-5%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(22, 163, 74, 0.06) 0%, transparent 70%)',
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
          marginBottom: 'clamp(2.5rem, 5vw, 3.5rem)',
        }}>
          <div>
            <div className="reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '14px' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '6px 14px', borderRadius: '100px',
                background: 'rgba(34, 197, 94, 0.12)', border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#16a34a', fontWeight: '800', display: 'inline-flex', alignItems: 'center', gap: '6px'
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#22c55e', display: 'inline-block' }} />
                Client Testimonials & Live Proofs
              </span>
            </div>
            
            <h2 className="reveal-up" style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)',
              fontWeight: '800',
              lineHeight: '1.08',
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              maxWidth: '650px'
            }}>
              Real Chats. Real Results.<br />
              <span style={{
                background: 'linear-gradient(135deg, #FFB800 0%, #C49A0A 60%, #8A6800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Tested & Proven by Clients.
              </span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="reveal-fade" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'var(--bg-elevated)',
            border: '1px solid var(--border-medium)',
            borderRadius: '100px',
            padding: '6px',
            flexWrap: 'wrap',
          }}>
            <button
              onClick={() => setActiveCategory('all')}
              style={{
                padding: '8px 16px',
                borderRadius: '100px',
                background: activeCategory === 'all' ? 'var(--text-primary)' : 'transparent',
                color: activeCategory === 'all' ? 'var(--bg-base)' : 'var(--text-secondary)',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              All Reviews
            </button>
            <button
              onClick={() => setActiveCategory('whatsapp')}
              style={{
                padding: '8px 16px',
                borderRadius: '100px',
                background: activeCategory === 'whatsapp' ? '#22c55e' : 'transparent',
                color: activeCategory === 'whatsapp' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              💬 WhatsApp Proofs
            </button>
            <button
              onClick={() => setActiveCategory('webdev')}
              style={{
                padding: '8px 16px',
                borderRadius: '100px',
                background: activeCategory === 'webdev' ? '#1A65E3' : 'transparent',
                color: activeCategory === 'webdev' ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                fontFamily: 'var(--font-display)',
                fontSize: '12px',
                fontWeight: '700',
                cursor: 'pointer',
                transition: 'all 200ms ease',
              }}
            >
              💻 Web Dev Client Reviews
            </button>
          </div>
        </div>

        {/* 1. WHATSAPP CHAT PROOFS SECTION (Visible if 'all' or 'whatsapp') */}
        {(activeCategory === 'all' || activeCategory === 'whatsapp') && (
          <div style={{ marginBottom: activeCategory === 'all' ? '60px' : '0px' }}>
            {activeCategory === 'all' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '800', color: '#16a34a', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  🔥 Ad Campaigns & WhatsApp Proofs
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-subtle)' }} />
              </div>
            )}

            {/* Hero Interactive WhatsApp Showcase with Bigger Screenshot */}
            <div className="reveal-up" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
              gap: 'clamp(1.5rem, 3vw, 2.5rem)',
              background: 'var(--bg-elevated)',
              border: '1.5px solid var(--border-medium)',
              borderRadius: '28px',
              padding: 'clamp(1.5rem, 3.5vw, 3rem)',
              boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
              marginBottom: '28px',
              alignItems: 'center',
            }}>
              {/* Left Column: Client Chat Summary & Stats */}
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '800',
                    padding: '4px 12px', borderRadius: '100px',
                    background: `${activeProof.color}15`, border: `1px solid ${activeProof.color}35`,
                    color: activeProof.color,
                  }}>
                    {activeProof.badge}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)',
                  }}>
                    💬 WhatsApp Chat Proof
                  </span>
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: '800',
                  color: 'var(--text-primary)',
                  lineHeight: '1.2',
                  marginBottom: '8px',
                }}>
                  {activeProof.name}
                </h3>
                
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                }}>
                  {activeProof.company} · <strong style={{ color: activeProof.color }}>{activeProof.tag}</strong>
                </p>

                {/* Quote / Highlight */}
                <div style={{
                  background: 'var(--bg-surface)',
                  borderLeft: `4px solid ${activeProof.color}`,
                  padding: '18px 20px',
                  borderRadius: '0 16px 16px 0',
                  marginBottom: '24px',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '15px',
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    lineHeight: '1.6',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    "{activeProof.summary}"
                  </p>
                </div>

                {/* Metric Pills */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '12px',
                  marginBottom: '28px',
                }}>
                  {activeProof.stats.map((stat, i) => (
                    <div key={i} style={{
                      padding: '12px 14px',
                      borderRadius: '14px',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
                      textAlign: 'center',
                    }}>
                      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '4px' }}>
                        {stat.label}
                      </div>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '13px', fontWeight: '800', color: activeProof.color }}>
                        {stat.val}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Switch Buttons */}
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginRight: '6px' }}>
                    Select Proof:
                  </span>
                  {WHATSAPP_PROOFS.map((proof, idx) => (
                    <button
                      key={proof.id}
                      onClick={() => setActiveProofIndex(idx)}
                      style={{
                        padding: '8px 14px',
                        borderRadius: '100px',
                        background: activeProofIndex === idx ? proof.color : 'var(--bg-surface)',
                        color: activeProofIndex === idx ? '#fff' : 'var(--text-primary)',
                        border: `1px solid ${activeProofIndex === idx ? proof.color : 'var(--border-medium)'}`,
                        fontSize: '11px',
                        fontWeight: '700',
                        cursor: 'pointer',
                        transition: 'all 200ms ease',
                      }}
                    >
                      {proof.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Big Screenshot Card (Click to Enlarge) */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div
                  onClick={() => setSelectedImage(activeProof.image)}
                  style={{
                    position: 'relative',
                    width: '100%',
                    maxWidth: '380px',
                    height: '520px',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    boxShadow: '0 24px 50px rgba(0,0,0,0.15)',
                    border: '4px solid #1f2c34',
                    cursor: 'pointer',
                    transition: 'transform 300ms ease, box-shadow 300ms ease',
                    background: '#0b141a',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)'
                    e.currentTarget.style.boxShadow = '0 30px 65px rgba(0,0,0,0.22)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1) translateY(0)'
                    e.currentTarget.style.boxShadow = '0 24px 50px rgba(0,0,0,0.15)'
                  }}
                >
                  <img
                    src={activeProof.image}
                    alt={`${activeProof.name} WhatsApp Review`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top',
                    }}
                  />

                  {/* Click to Zoom Hover Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 60%)',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'center',
                    padding: '20px',
                  }}>
                    <div style={{
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(8px)',
                      color: '#17150F',
                      padding: '10px 18px',
                      borderRadius: '100px',
                      fontSize: '12px',
                      fontWeight: '800',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                    }}>
                      🔍 Click to View Full Screenshot
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. WEB DEVELOPMENT & CLIENT CARD REVIEWS WITH SWIPER.JS (Auto Scroll Right-to-Left + Arrows) */}
        {(activeCategory === 'all' || activeCategory === 'webdev') && (
          <div style={{ position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', fontWeight: '800', color: '#1A65E3', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                  💻 Web Development & Tech Client Reviews
                </span>
                <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                  (Swipe / Auto-scrolling ⇄)
                </span>
              </div>

              {/* Navigation Arrows for Swiper */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <button
                  id="prevReviewBtn"
                  aria-label="Previous Review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-elevated)',
                    border: '1.5px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '700',
                    transition: 'all 200ms ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1A65E3'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = '#1A65E3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                  }}
                >
                  ‹
                </button>
                <button
                  id="nextReviewBtn"
                  aria-label="Next Review"
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--bg-elevated)',
                    border: '1.5px solid var(--border-medium)',
                    color: 'var(--text-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    fontSize: '18px',
                    fontWeight: '700',
                    transition: 'all 200ms ease',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.04)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#1A65E3'
                    e.currentTarget.style.color = '#fff'
                    e.currentTarget.style.borderColor = '#1A65E3'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--bg-elevated)'
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.borderColor = 'var(--border-medium)'
                  }}
                >
                  ›
                </button>
              </div>
            </div>

            {/* SWIPER COMPONENT */}
            <Swiper
              modules={[Autoplay, Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              speed={800}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              navigation={{
                prevEl: '#prevReviewBtn',
                nextEl: '#nextReviewBtn',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 1.5,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
              }}
              style={{ paddingBottom: '48px' }}
            >
              {WEB_DEV_REVIEWS.map((rev) => (
                <SwiperSlide key={rev.id} style={{ height: 'auto', display: 'flex' }}>
                  <div
                    style={{
                      background: 'var(--bg-elevated)',
                      border: '1.5px solid var(--border-subtle)',
                      borderRadius: '26px',
                      padding: '28px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      boxShadow: '0 12px 36px rgba(0,0,0,0.03)',
                      transition: 'transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease',
                      width: '100%',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-6px)'
                      e.currentTarget.style.borderColor = rev.color
                      e.currentTarget.style.boxShadow = `0 20px 48px ${rev.color}18`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.borderColor = 'var(--border-subtle)'
                      e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.03)'
                    }}
                  >
                    <div>
                      {/* Top Row: Stars + Project Tag */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                        <div style={{ color: '#FFB800', fontSize: '15px', letterSpacing: '1px' }}>
                          {'★'.repeat(rev.rating)}
                        </div>
                        <span style={{
                          fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '800',
                          color: rev.color, background: `${rev.color}15`,
                          padding: '4px 12px', borderRadius: '100px',
                        }}>
                          {rev.tag}
                        </span>
                      </div>

                      {/* Result Metric */}
                      <div style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '11px',
                        fontWeight: '800',
                        color: 'var(--text-primary)',
                        background: 'var(--bg-surface)',
                        border: '1px solid var(--border-subtle)',
                        padding: '6px 12px',
                        borderRadius: '8px',
                        marginBottom: '18px',
                        display: 'inline-block',
                      }}>
                        ⚡ Result: {rev.metric}
                      </div>

                      {/* Quote */}
                      <blockquote style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.7',
                        marginBottom: '24px',
                        margin: 0,
                      }}>
                        "{rev.quote}"
                      </blockquote>
                    </div>

                    {/* Client Info with Big Photo / Avatar */}
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '16px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '20px',
                      marginTop: '16px',
                    }}>
                      <div style={{ position: 'relative' }}>
                        <img
                          src={rev.image}
                          alt={rev.name}
                          style={{
                            width: '64px',
                            height: '64px',
                            borderRadius: '16px',
                            objectFit: 'cover',
                            border: `2.5px solid ${rev.color}`,
                            boxShadow: `0 6px 16px ${rev.color}25`,
                          }}
                        />
                        <div style={{
                          position: 'absolute',
                          bottom: '-4px',
                          right: '-4px',
                          width: '18px',
                          height: '18px',
                          borderRadius: '50%',
                          background: '#22c55e',
                          color: '#fff',
                          fontSize: '10px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '800',
                          border: '2px solid var(--bg-elevated)'
                        }}>
                          ✓
                        </div>
                      </div>
                      <div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '16px', fontWeight: '800', color: 'var(--text-primary)' }}>
                          {rev.name}
                        </div>
                        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)', marginTop: '3px' }}>
                          {rev.role} · <strong style={{ color: rev.color }}>{rev.company}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}
      </div>

      {/* Lightbox Modal for Full WhatsApp Screenshot View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              maxHeight: '90vh',
              maxWidth: 'min(92vw, 480px)',
              background: '#0b141a',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.6)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Modal Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 18px',
              background: '#1f2c34',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              color: '#fff',
            }}>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '700' }}>
                WhatsApp Verified Result
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: '20px',
                  cursor: 'pointer',
                  padding: '2px 8px',
                  borderRadius: '50%',
                }}
              >
                ✕
              </button>
            </div>

            {/* Modal Image */}
            <div style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 60px)' }}>
              <img
                src={selectedImage}
                alt="Full WhatsApp Review Screenshot"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Testimonials
