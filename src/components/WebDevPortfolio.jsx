import React, { useState } from 'react'

const WEB_PROJECTS = [
  {
    title: 'Website for Flybit Falcon',
    client: 'Flybit Falcon',
    metric: 'Sub-1s Load Time',
    desc: 'A high-performance Next.js application built for scale. Includes secure video streaming, user dashboards, and integrated payment gateways.',
    tags: ['React','framer-motion' , 'shadcn ui'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200',
    color: '#1A65E3'
  },
  {
    title: 'Abhay Foundation (NGO)',
    client: 'Abhay Foundation (NGO)',
    metric: '10k+ Visits',
    desc: 'full stack web application with custom admin dashboard and secure payment gateways.',
    tags: ['UI/UX', 'Next.js', 'Payment Gateways', 'Admin Dashboard','framer-motion','shadcn ui'],
    image: 'https://iili.io/nHdsaoX.md.png',
    color: '#16a34a'
  },
  {
    title: 'Digital Marketing Landing Page',
    client: 'Flybit Falcon',
    metric: '₹25L Monthly Sales',
    desc: 'Custom landing page designed for high-converting digital marketing campaigns.',
    tags: ['React', 'Framer Motion', 'Animations', 'High-Converting'],
    image: 'https://iili.io/BQ901pa.md.png',
    color: '#e11d48'
  }
]

const WebDevPortfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="web-development" className="section" style={{ background: '#0F0E0B', color: '#F9F7F2', position: 'relative', overflow: 'hidden' }}>
      {/* Background Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '-10%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(26,101,227,0.1) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0', right: '-10%', width: '800px', height: '800px', background: 'radial-gradient(circle, rgba(255,184,0,0.05) 0%, transparent 70%)', borderRadius: '50%', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 'clamp(4rem, 8vw, 6rem)' }}>
          <div className="reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '6px 14px', borderRadius: '100px',
              background: 'rgba(26,101,227,0.15)', border: '1px solid rgba(26,101,227,0.3)',
              color: '#38BDF8', fontWeight: '700'
            }}>
              Digital Ecosystems
            </span>
          </div>
          
          <h2 className="reveal-up" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: '800',
            lineHeight: '1',
            letterSpacing: '-0.04em',
            marginBottom: '24px'
          }}>
            High-Performance<br />
            <span style={{ background: 'linear-gradient(135deg, #1A65E3 0%, #38BDF8 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Web Development
            </span>
          </h2>
          
          <p className="reveal-up delay-1" style={{ fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', color: 'rgba(249,247,242,0.6)', maxWidth: '600px', lineHeight: '1.7' }}>
            We don't just build websites. We engineer high-speed, conversion-optimized digital assets that turn your traffic into revenue.
          </p>
        </div>

        {/* Projects Showcase */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(4rem, 8vw, 8rem)' }}>
          {WEB_PROJECTS.map((project, i) => {
            const isEven = i % 2 === 0
            
            return (
              <div 
                key={i} 
                className={`reveal-up delay-${i % 3}`}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
                  gap: 'clamp(2rem, 5vw, 4rem)',
                  alignItems: 'center',
                }}
              >
                {/* Text Content */}
                <div style={{ order: isEven ? 1 : 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '1px', background: project.color }} />
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', color: project.color, fontWeight: '700' }}>
                      {project.client}
                    </span>
                  </div>
                  
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3vw, 2.5rem)', fontWeight: '700', marginBottom: '20px', lineHeight: '1.1' }}>
                    {project.title}
                  </h3>
                  
                  <p style={{ fontSize: '15px', color: 'rgba(249,247,242,0.7)', lineHeight: '1.7', marginBottom: '28px' }}>
                    {project.desc}
                  </p>
                  
                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '32px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{
                        padding: '6px 14px', borderRadius: '100px',
                        background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
                        fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'rgba(249,247,242,0.8)'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Metric Box */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '12px 20px', borderRadius: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: project.color, boxShadow: `0 0 10px ${project.color}` }} />
                    <span style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Result: {project.metric}</span>
                  </div>
                </div>

                {/* Image Showcase */}
                <div 
                  style={{ 
                    order: isEven ? 2 : 1, 
                    position: 'relative',
                    perspective: '1000px'
                  }}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div style={{
                    position: 'relative',
                    width: '100%',
                    paddingTop: '65%',
                    borderRadius: '24px',
                    overflow: 'hidden',
                    transform: hoveredIndex === i ? 'scale(1.02) rotateY(0deg)' : `scale(1) rotateY(${isEven ? '-5deg' : '5deg'})`,
                    transition: 'transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 24px 48px rgba(0,0,0,0.4)',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {/* Fake Browser Top Bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '30px', background: 'rgba(0,0,0,0.8)', borderBottom: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', padding: '0 12px', gap: '6px', zIndex: 10 }}>
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#eab308' }} />
                      <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22c55e' }} />
                    </div>
                    
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{
                        position: 'absolute', top: '30px', left: 0, width: '100%', height: 'calc(100% - 30px)',
                        objectFit: 'cover',
                        transform: hoveredIndex === i ? 'scale(1.05)' : 'scale(1)',
                        transition: 'transform 700ms ease'
                      }}
                    />
                    
                    {/* Overlay Glow */}
                    <div style={{
                      position: 'absolute', inset: 0,
                      background: `linear-gradient(to bottom, transparent 50%, ${project.color}30 100%)`,
                      pointerEvents: 'none',
                      opacity: hoveredIndex === i ? 1 : 0,
                      transition: 'opacity 500ms ease'
                    }} />
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Global CTA */}
        <div className="reveal-up" style={{ textAlign: 'center', marginTop: 'clamp(4rem, 8vw, 8rem)', paddingTop: 'clamp(3rem, 6vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '18px', color: 'rgba(249,247,242,0.8)', marginBottom: '24px' }}>
            Need a high-performance website for your brand?
          </p>
          <a
            href="#book"
            onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')) }}
            className="btn btn-primary"
            style={{ fontSize: '14px', padding: '16px 36px', background: 'linear-gradient(135deg, #1A65E3 0%, #38BDF8 100%)', border: 'none', color: '#fff' }}
          >
            Start Your Web Project ↗
          </a>
        </div>
      </div>
    </section>
  )
}

export default WebDevPortfolio
