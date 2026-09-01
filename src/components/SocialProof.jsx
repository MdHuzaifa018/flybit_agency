import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 6, suffix: '+', label: 'Years of Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Brands Scaled' },
  { value: 200, suffix: '+', label: 'Digital Assets Created' },
]

const MARQUEE_ITEMS = [
  'Performance Marketing', 'Meta Ads', 'Google Ads', 'Video Editing',
  'Funnel Building', 'Web Development', 'Social Media', 'UGC Videos',
  'Graphic Design', 'Lead Generation', 'Brand Strategy', 'Content Systems',
]

const useCountUp = (target, active, duration = 1800) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    const start = performance.now()
    const update = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(update)
    }
    requestAnimationFrame(update)
  }, [active, target, duration])
  return count
}

const StatItem = ({ stat, active, index }) => {
  const count = useCountUp(stat.value, active, 1800 + index * 200)
  return (
    <div className="reveal-up" style={{ textAlign: 'center', padding: '40px 20px', transitionDelay: `${index * 100}ms` }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.5rem, 4vw, 4rem)',
        fontWeight: '800', letterSpacing: '-0.05em', lineHeight: 1,
        color: 'var(--text-primary)',
      }}>
        {active ? count : 0}
        <span style={{ color: '#5C9900' }}>{stat.suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px',
        letterSpacing: '0.12em', textTransform: 'uppercase',
        color: 'var(--text-muted)', marginTop: '12px',
      }}>
        {stat.label}
      </div>
    </div>
  )
}

const SocialProof = () => {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true) },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>
      {/* Stats grid */}
      <div className="container" style={{ paddingBlock: 'clamp(4rem, 8vw, 7rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '1px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
        }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ background: 'var(--bg-surface)' }}>
              <StatItem stat={stat} active={active} index={i} />
            </div>
          ))}
        </div>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: '10px',
          color: 'var(--text-muted)', textAlign: 'center',
          marginTop: '14px', letterSpacing: '0.08em',
        }}>
          * Numbers marked [Replace] are placeholders — update with verified data
        </p>
      </div>

      {/* Marquee */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '18px 0', overflow: 'hidden', position: 'relative',
        background: 'var(--bg-elevated)',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to right, var(--bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', background: 'linear-gradient(to left, var(--bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', animation: 'marquee 30s linear infinite', width: 'max-content' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '28px', padding: '0 28px', whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>
                {item}
              </span>
              <span style={{ color: 'var(--accent-gold)', fontSize: '10px' }}>✦</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
      `}</style>
    </section>
  )
}

export default SocialProof
