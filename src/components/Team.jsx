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
    social: { linkedin: '#', github: '#' }
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
                    <>
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>LinkedIn</a>
                      )}
                      {member.social.instagram && (
                        <a href={member.social.instagram} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>Instagram</a>
                      )}
                      {member.social.github && (
                        <a href={member.social.github} style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-primary)', textDecoration: 'none' }}>GitHub</a>
                      )}
                    </>
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
