import React from 'react'

const TEAM_MEMBERS = [
  {
    name: 'Adnan Qureshi',
    role: 'Founder & Growth Director',
    image: 'https://flybitfalcon.com/wp-content/uploads/2025/04/Picsart_25-04-01_12-25-41-366-e1743514534437-847x1024.jpg',
    desc: 'Mastermind behind Flybit Falcon. Specializes in scaling brands through high-ROI Meta & Google ad campaigns.',
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Huzaifa',
    role: 'Lead Full-Stack Developer',
    image: 'https://res.cloudinary.com/qpxxnswd/image/upload/v1786433302/techugrow/nyhu86z23ho6skxvz1rd.jpg',
    desc: 'Architects high-performance, conversion-optimized web applications and digital ecosystems for our clients.',
    social: { linkedin: '#', whatsapp: 'https://wa.me/918318956754', portfolio: '#' }
  },
  {
    name: 'Marcus Vance',
    role: 'Senior UI/UX Designer',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    desc: 'Creative visionary crafting stunning brand identities and premium, conversion-focused website interfaces.',
    social: { linkedin: '#', instagram: '#' }
  },
  {
    name: 'Julian Reid',
    role: 'Lead Video Editor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    desc: 'Master of retention editing, dynamic motion graphics, and viral short-form content creation.',
    social: { instagram: '#' }
  }
]

const Team = () => {
  return (
    <section id="team" className="section" style={{ background: 'var(--bg-base)' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="reveal-fade" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.12em', textTransform: 'uppercase',
              padding: '6px 14px', borderRadius: '100px',
              background: 'rgba(255, 184, 0, 0.10)', border: '1px solid rgba(255, 184, 0, 0.3)',
              color: '#B57C00', fontWeight: '700'
            }}>
              Our Experts
            </span>
          </div>
          <h2 className="reveal-up" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '800',
            lineHeight: '1.05',
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px'
          }}>
            The Minds Behind<br />
            <span style={{ background: 'linear-gradient(135deg, #FFB800 0%, #C49A0A 60%, #8A6800 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Your Growth
            </span>
          </h2>
          <p className="reveal-up delay-1" style={{
            fontSize: 'clamp(1rem, 1.25vw, 1.15rem)', color: 'var(--text-secondary)',
            lineHeight: '1.7', maxWidth: '600px', margin: '0 auto',
          }}>
            A specialized team of media buyers, developers, and creatives dedicated to scaling your business.
          </p>
        </div>

        {/* Team Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '24px',
        }}>
          {TEAM_MEMBERS.map((member, i) => (
            <div key={i} className={`reveal-up delay-${i % 4}`} style={{
              background: 'var(--bg-elevated)',
              borderRadius: '24px',
              border: '1px solid var(--border-subtle)',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0,0,0,0.03)',
              display: 'flex', flexDirection: 'column',
              transition: 'transform 300ms ease, box-shadow 300ms ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'none'
              e.currentTarget.style.boxShadow = '0 12px 30px rgba(0,0,0,0.03)'
            }}
            >
              {/* Image Container */}
              <div style={{ position: 'relative', width: '100%', paddingTop: '100%', overflow: 'hidden', background: 'var(--bg-surface)' }}>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  style={{
                    position: 'absolute', inset: 0, width: '100%', height: '100%',
                    objectFit: 'cover', filter: 'grayscale(20%)', transition: 'filter 300ms ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(20%)'}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 40%)' }} />
                
                {/* Role Badge on Image */}
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FFB800', fontWeight: '700', marginBottom: '4px' }}>
                    {member.role}
                  </div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '20px', fontWeight: '700', color: '#fff' }}>
                    {member.name}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '24px' }}>
                  {member.desc}
                </p>
                
                {/* Social/Action Links */}
                <div style={{ display: 'flex', gap: '12px', borderTop: '1px solid var(--border-subtle)', paddingTop: '16px' }}>
                  {member.social.apply ? (
                    <a href={member.social.apply} style={{ fontSize: '12px', fontWeight: '700', color: '#1A65E3', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
                      onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-booking-modal')) }}>
                      Apply Now ↗
                    </a>
                  ) : (
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 200ms ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#0a66c2'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                        </a>
                      )}
                      {member.social.whatsapp && (
                        <a href={member.social.whatsapp} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 200ms ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#25D366'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
                        </a>
                      )}
                      {member.social.portfolio && (
                        <a href={member.social.portfolio} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 200ms ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#1A65E3'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                        </a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', transition: 'color 200ms ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#E1306C'} onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-secondary)'}>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
