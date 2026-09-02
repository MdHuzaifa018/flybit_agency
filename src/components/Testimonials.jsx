import React, { useState } from 'react'

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

const Testimonials = () => {
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
          marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
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
                Verified Live Client Proofs
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
              Real Chats. Real Leads.<br />
              <span style={{
                background: 'linear-gradient(135deg, #FFB800 0%, #C49A0A 60%, #8A6800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Zero Fake Promises.
              </span>
            </h2>
          </div>

          {/* Rating Badge */}
          <div className="reveal-fade" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--bg-elevated)',
            border: '1.5px solid rgba(255,184,0,0.35)',
            borderRadius: '100px',
            padding: '10px 22px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'flex', color: '#FFB800', fontSize: '15px', gap: '2px' }}>
              ★★★★★
            </div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: '800',
              color: 'var(--text-primary)',
            }}>
              100% Verified WhatsApp Proofs
            </div>
          </div>
        </div>

        {/* Hero Interactive WhatsApp Showcase */}
        <div className="reveal-up" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2.5rem)',
          background: 'var(--bg-elevated)',
          border: '1.5px solid var(--border-medium)',
          borderRadius: '28px',
          padding: 'clamp(1.5rem, 3.5vw, 3rem)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.04)',
          marginBottom: '40px',
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
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginRight: '6px' }}>
                Select Review:
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
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px'
                  }}
                >
                  {proof.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Screenshot Card (Click to Enlarge) */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              onClick={() => setSelectedImage(activeProof.image)}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '360px',
                height: '480px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.12)',
                border: '4px solid #1f2c34', // WhatsApp dark header frame
                cursor: 'pointer',
                transition: 'transform 300ms ease, box-shadow 300ms ease',
                background: '#0b141a',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02) translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 28px 60px rgba(0,0,0,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.12)'
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
                background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)',
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

        {/* 4-Card Responsive Grid for All Reviews */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 270px), 1fr))',
          gap: '20px',
        }}>
          {WHATSAPP_PROOFS.map((proof, idx) => (
            <div
              key={proof.id}
              onClick={() => setActiveProofIndex(idx)}
              style={{
                background: activeProofIndex === idx ? `${proof.color}08` : 'var(--bg-elevated)',
                border: `1.5px solid ${activeProofIndex === idx ? proof.color : 'var(--border-subtle)'}`,
                borderRadius: '20px',
                padding: '20px',
                cursor: 'pointer',
                transition: 'all 250ms ease',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: activeProofIndex === idx ? `0 12px 28px ${proof.color}20` : '0 2px 10px rgba(0,0,0,0.02)',
              }}
            >
              <div>
                {/* Top Badge & Metric */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '10px', fontWeight: '800',
                    color: proof.color, background: `${proof.color}15`,
                    padding: '3px 10px', borderRadius: '100px',
                  }}>
                    {proof.metric}
                  </span>
                  <span style={{ color: '#22c55e', fontSize: '11px', fontWeight: '700' }}>
                    ✓ Verified
                  </span>
                </div>

                {/* Snippet */}
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
                  "{proof.summary}"
                </p>
              </div>

              {/* Bottom Client Info */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '12px',
              }}>
                <div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '14px', fontWeight: '800', color: 'var(--text-primary)' }}>
                    {proof.name}
                  </div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--text-muted)' }}>
                    {proof.company}
                  </div>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedImage(proof.image)
                  }}
                  style={{
                    background: 'var(--bg-surface)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: '8px',
                    padding: '6px 10px',
                    fontSize: '11px',
                    fontWeight: '700',
                    color: 'var(--text-primary)',
                    cursor: 'pointer',
                  }}
                >
                  View 👁️
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Full Screenshot View */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.88)',
            backdropFilter: 'blur(10px)',
            zIndex: 99999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 200ms ease',
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
