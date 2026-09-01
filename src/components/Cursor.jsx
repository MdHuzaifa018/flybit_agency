import React, { useEffect, useRef } from 'react'

const Cursor = () => {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const labelRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    // Don't show custom cursor on touch devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ringEl = ringRef.current
    const labelEl = labelRef.current
    if (!dot || !ringEl) return

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`

      // Cursor label from data-cursor attribute
      const target = e.target.closest('[data-cursor]')
      if (target && labelEl) {
        labelEl.textContent = target.dataset.cursor
        labelEl.style.opacity = '1'
      } else if (labelEl) {
        labelEl.style.opacity = '0'
      }
    }

    const lerp = (a, b, n) => a + (b - a) * n

    const animate = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12)
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12)
      ringEl.style.transform = `translate(${ring.current.x - 20}px, ${ring.current.y - 20}px)`
      rafRef.current = requestAnimationFrame(animate)
    }

    const onEnterLink = () => {
      ringEl.style.width = '52px'
      ringEl.style.height = '52px'
      ringEl.style.borderColor = 'rgba(23,21,15,0.6)'
    }
    const onLeaveLink = () => {
      ringEl.style.width = '40px'
      ringEl.style.height = '40px'
      ringEl.style.borderColor = 'rgba(23,21,15,0.25)'
    }

    document.querySelectorAll('a, button, [data-cursor]').forEach((el) => {
      el.addEventListener('mouseenter', onEnterLink)
      el.addEventListener('mouseleave', onLeaveLink)
    })

    window.addEventListener('mousemove', onMove, { passive: true })
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      {/* Dot */}
      <div ref={dotRef} className="hide-mobile" aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '8px', height: '8px', borderRadius: '50%',
        background: 'var(--text-primary)',
        pointerEvents: 'none', zIndex: 99999,
        mixBlendMode: 'normal',
        transition: 'opacity 200ms ease',
      }} />

      {/* Ring */}
      <div ref={ringRef} className="hide-mobile" aria-hidden="true" style={{
        position: 'fixed', top: 0, left: 0,
        width: '40px', height: '40px', borderRadius: '50%',
        border: '1.5px solid rgba(23,21,15,0.25)',
        pointerEvents: 'none', zIndex: 99998,
        transition: 'width 300ms var(--ease-spring), height 300ms var(--ease-spring), border-color 300ms ease',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {/* Label inside ring */}
        <span ref={labelRef} aria-hidden="true" style={{
          fontFamily: 'var(--font-mono)', fontSize: '8px',
          fontWeight: '600', letterSpacing: '0.08em',
          textTransform: 'uppercase', color: 'var(--text-primary)',
          opacity: 0, transition: 'opacity 200ms ease',
          userSelect: 'none',
        }} />
      </div>
    </>
  )
}

export default Cursor
