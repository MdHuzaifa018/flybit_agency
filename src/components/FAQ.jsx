import React, { useState } from 'react'

const FAQS = [
  {
    q: 'What core services does Flybit Agency offer?',
    a: 'We provide eight end-to-end digital growth services: Meta Ads (Facebook & Instagram), Google Search & PMax Ads, High-Retention Video Editing, Graphic Design & Branding, Sales Funnel Building & WhatsApp Automation, High-Speed Web Development, Organic Social Media Management, and Direct-Response UGC Creator Videos.',
  },
  {
    q: 'Can I hire you for a single specific service or only full packages?',
    a: 'You can hire us for individual specialized services (like Meta Ads Scaling, Video Editing retainers, or Funnel Building) or a complete full-stack agency growth partnership. We tailor our engagement to exactly where your business needs the biggest leverage.',
  },
  {
    q: 'How does your onboarding and strategy process work?',
    a: 'We start with a comprehensive Strategy Audit of your business, audience, current ad spend, and conversion funnel. Within 48 hours of onboarding, we map out a 90-day growth roadmap, set up dedicated communication channels, and begin creative testing.',
  },
  {
    q: 'What kind of results can we expect and how soon?',
    a: 'For performance advertising (Meta & Google), initial campaign testing and optimization cycles typically yield positive ROAS within the first 14 to 21 days. For funnels and websites, builds are completed in 1 to 3 weeks with instant conversion uplift upon launch.',
  },
  {
    q: 'How is Flybit Agency connected to Flybit Falcon?',
    a: 'Flybit Falcon (founded by Adnan Qureshi) is our premier digital skills education platform training thousands of students. Flybit Agency is the dedicated high-performance agency arm handling done-for-you growth, media buying, and production for corporate brands and businesses.',
  },
  {
    q: 'How do we communicate and track campaign performance?',
    a: 'You receive access to a live real-time dashboard, dedicated WhatsApp / Slack channels with Adnan and project managers, plus weekly video reviews breaking down exact spend, revenue, ROAS, and upcoming scaling tests.',
  },
]

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(index === 0)

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
          padding: '22px 0',
          background: 'none',
          border: 'none',
          textAlign: 'left',
          cursor: 'pointer',
          gap: '16px',
        }}
      >
        <span style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.05rem, 1.4vw, 1.2rem)',
          fontWeight: '700',
          color: open ? 'var(--text-primary)' : 'var(--text-secondary)',
          letterSpacing: '-0.015em',
          transition: 'color 250ms ease',
          flex: 1,
        }}>
          {item.q}
        </span>

        <div style={{
          width: '34px',
          height: '34px',
          borderRadius: '50%',
          background: open ? '#FFB800' : 'var(--bg-elevated)',
          border: `1px solid ${open ? '#FFB800' : 'var(--border-subtle)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          transition: 'all 300ms var(--ease-spring)',
          boxShadow: open ? '0 4px 12px rgba(255,184,0,0.3)' : 'none',
        }}>
          <svg
            width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke={open ? '#17150F' : 'var(--text-secondary)'}
            strokeWidth="2.5"
            style={{
              transform: open ? 'rotate(45deg)' : 'rotate(0deg)',
              transition: 'transform 300ms var(--ease-spring)',
            }}
          >
            <path d="M12 5v14M5 12h14"/>
          </svg>
        </div>
      </button>

      {/* Answer */}
      <div style={{
        maxHeight: open ? '300px' : '0',
        overflow: 'hidden',
        transition: 'max-height 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
        <div style={{
          paddingBottom: '24px',
          fontSize: '14.5px',
          color: 'var(--text-secondary)',
          lineHeight: '1.75',
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
        padding: 'clamp(4.5rem, 8vw, 8rem) 0',
      }}
    >
      <div className="container">
        <div className="faq-layout-grid">
          {/* Left Column */}
          <div className="faq-sticky-header">
            <div className="section-eyebrow reveal-fade">
              <span className="text-label">Common Questions</span>
            </div>
            <h2 className="text-display-md reveal-up" style={{ marginBottom: '18px' }}>
              Clear Answers.{' '}
              <span style={{
                background: 'linear-gradient(135deg, #C49A0A 0%, #8a6800 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                No Agency Fluff.
              </span>
            </h2>
            <p className="reveal-up delay-1" style={{
              fontSize: '14px',
              color: 'var(--text-secondary)',
              lineHeight: '1.7',
              marginBottom: '28px',
            }}>
              Have a specific question about your brand’s ad spend or growth strategy? Book a direct call with Adnan.
            </p>
            <a
              href="#contact"
              className="btn btn-primary reveal-up delay-2"
              style={{ fontSize: '12px', padding: '14px 28px', boxShadow: '0 6px 20px rgba(0,0,0,0.12)' }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              Book a Strategy Call ↗
            </a>
          </div>

          {/* Right Column Accordion */}
          <div className="reveal-up" style={{ background: 'var(--bg-elevated)', padding: 'clamp(1.5rem, 4vw, 2.5rem)', borderRadius: 'var(--radius-2xl)', border: '1px solid var(--border-subtle)', boxShadow: '0 4px 20px rgba(0,0,0,0.02)' }}>
            {FAQS.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .faq-layout-grid {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: clamp(2.5rem, 5vw, 6rem);
          align-items: start;
        }
        .faq-sticky-header {
          position: sticky;
          top: 100px;
        }
        @media (max-width: 860px) {
          .faq-layout-grid {
            grid-template-columns: 1fr !important;
            gap: 2.5rem !important;
          }
          .faq-sticky-header {
            position: static !important;
          }
        }
      `}</style>
    </section>
  )
}

export default FAQ
