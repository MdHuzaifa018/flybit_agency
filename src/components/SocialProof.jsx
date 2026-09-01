import React, { useEffect, useRef, useState } from 'react'

const STATS = [
  { value: 6, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Brands Scaled' },
  { value: 200, suffix: '+', label: 'Assets Created' },
]

const MARQUEE_ITEMS = [
  'Meta & Instagram Ads', 'Google Search & PMax', 'Viral Video Editing',
  'Sales Funnels', 'Web Engineering', 'Social Media Growth', 'UGC Creator Ads',
  'Graphic Design', 'Lead Generation', 'Conversion Rate Optimization',
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
  const count = useCountUp(stat.value, active, 1600 + index * 150)
  return (
    <div style={{ textAlign: 'center', padding: 'clamp(24px, 4vw, 36px) 16px' }}>
      <div style={{
        fontFamily: 'var(--font-display)',
        fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
        fontWeight: '800', letterSpacing: '-0.05em', lineHeight: 1,
        color: 'var(--text-primary)',
      }}>
        {active ? count : 0}
        <span style={{ color: '#FFB800' }}>{stat.suffix}</span>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px',
        letterSpacing: '0.1em', textTransform: 'uppercase',
        color: 'var(--text-secondary)', marginTop: '8px',
        fontWeight: '600',
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
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} style={{ background: 'var(--bg-surface)', overflow: 'hidden' }}>
      {/* Stats grid */}
      <div className="container" style={{ paddingBlock: 'clamp(3rem, 6vw, 5rem)' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 140px), 1fr))',
          gap: '1px',
          background: 'var(--border-subtle)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: '0 2px 10px rgba(0,0,0,0.02)',
        }}>
          {STATS.map((stat, i) => (
            <div key={stat.label} style={{ background: 'var(--bg-elevated)' }}>
              <StatItem stat={stat} active={active} index={i} />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee ticker */}
      <div style={{
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        padding: '16px 0', overflow: 'hidden', position: 'relative',
        background: 'var(--bg-elevated)',
        width: '100%',
      }}>
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to right, var(--bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '80px', background: 'linear-gradient(to left, var(--bg-elevated), transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ display: 'flex', animation: 'marquee 25s linear infinite', width: 'max-content' }}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '0 24px', whiteSpace: 'nowrap' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-secondary)', fontWeight: '600' }}>
                {item}
              </span>
              <span style={{ color: '#FFB800', fontSize: '12px' }}>✦</span>
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
