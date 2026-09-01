import React, { useState } from 'react'

const FAQS = [
  {
    q: 'What services do you provide?',
    a: 'We provide eight core digital services: Meta Ads, Google Ads, Video Editing, Graphic Design, Funnel Building, Website Development, Social Media Management, and UGC Videos. Each service is available independently or as part of an integrated digital growth package.',
  },
  {
    q: 'Can I hire you for only one service?',
    a: 'Yes. You can hire us for a single service like video editing or Meta Ads management without committing to a full package. However, our results are strongest when multiple services work together under one unified strategy.',
  },
  {
    q: 'Do you provide complete digital marketing solutions?',
    a: 'Yes. We can manage your full digital presence — from ad campaigns and content creation to website development and funnel systems. Everything is built to work as a connected system, not isolated deliverables.',
  },
  {
    q: 'How do you start a project?',
    a: 'We start with a strategy call to understand your business, goals, current situation, and market. From there, we build a customized plan and send you a proposal. Once approved, we move into the discovery and creation phase.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing varies based on the scope, services required, and duration of engagement. Some services are offered at a fixed project rate (websites, funnels), while ongoing services (ads management, social media) are on monthly retainers. Book a call to get a tailored quote.',
  },
  {
    q: 'How long does a website take to build?',
    a: 'A standard business website typically takes 2–4 weeks from kickoff to launch, depending on scope and content readiness. Landing pages can be completed faster. Custom e-commerce or complex builds may take longer.',
  },
  {
    q: 'Do you offer ongoing support after project completion?',
    a: 'Yes. We offer ongoing retainers for ads management, social media, and content production. For websites and funnels, we offer maintenance and optimization plans to keep everything performing at its best.',
  },
  {
    q: 'How can I book a consultation?',
    a: 'Click the "Book a Strategy Call" button anywhere on this page, or scroll down to the contact section and fill in your details. We\'ll review your information and get back to you within 24–48 hours to schedule a call.',
  },
]

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false)

  return (
    <div
      style={{
        borderBottom: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      <button
        id={`faq-${index}`}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          padding: '24px 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          gap: '24px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
          fontWeight: '600',
          color: open ? 'var(--text-primary)' : 'var(--text-secondary)',
          letterSpacing: '-0.01em',
          transition: 'color 250ms ease',
          flex: 1,
        }}>
          {item.q}
        </span>

        <div style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: open ? 'var(--accent-lime)' : 'var(--bg-elevated)',
          border: `1px solid ${open ? 'var(--accent-lime)' : 'var(--border-subtle)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 300ms var(--ease-out)',
        }}>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={open ? 'var(--bg-base)' : 'var(--text-secondary)'}
            strokeWidth="2"
            style={{
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 300ms var(--ease-out)',
            }}
          >
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
      </button>

      {/* Answer — expand/collapse */}
      <div style={{
        maxHeight: open ? '400px' : '0',
        overflow: 'hidden',
        transition: 'max-height 400ms var(--ease-out)',
      }}>
        <div style={{
          paddingBottom: '24px',
          fontSize: '15px',
          color: 'var(--text-secondary)',
          lineHeight: '1.7',
          maxWidth: '680px',
        }}>
          {item.a}
        </div>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section
      id="faq"
      style={{
        background: 'var(--bg-base)',
        borderTop: '1px solid var(--border-subtle)',
        padding: 'clamp(5rem, 10vw, 10rem) 0',
      }}
    >
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(3rem, 6vw, 8rem)',
          alignItems: 'start',
        }}>
          {/* Left — header */}
          <div style={{ position: 'sticky', top: '120px' }}>
            <div className="section-eyebrow reveal-fade">
              <span className="text-label">FAQ</span>
            </div>
            <h2 className="text-display-md reveal-up" style={{ marginBottom: '20px' }}>
              Questions{' '}
              <span style={{
                background: 'linear-gradient(135deg, var(--accent-gold), #fff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Answered.
              </span>
            </h2>
            <p className="reveal-up delay-1" style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '32px',
            }}>
              Have something we haven't covered? Book a call and we'll answer it directly.
            </p>
            <a
              href="#contact"
              className="btn btn-primary reveal-up delay-2"
              style={{ fontSize: '12px', padding: '12px 24px' }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Book a Call ↗
            </a>
          </div>

          {/* Right — accordion */}
          <div className="reveal-up">
            {FAQS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
