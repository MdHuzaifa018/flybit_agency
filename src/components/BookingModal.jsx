import React, { useState, useEffect } from 'react'

const BookingModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    website: '',
    revenue: '',
    challenge: ''
  })

  useEffect(() => {
    const handleOpen = () => setIsOpen(true)
    window.addEventListener('open-booking-modal', handleOpen)
    return () => window.removeEventListener('open-booking-modal', handleOpen)
  }, [])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format message for WhatsApp
    const message = `*New Strategy Call Booking!* 🚀

*Name:* ${formData.name}
*WhatsApp/Phone:* ${formData.phone}
*Website/Social:* ${formData.website || 'Not provided'}
*Current Revenue:* ${formData.revenue}
*Biggest Challenge:*
${formData.challenge}

I would like to book a 1-on-1 strategy session.`

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/919137568285?text=${encodedMessage}`
    
    // Redirect to WhatsApp
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
    
    // Reset form optionally
    setFormData({
      name: '', phone: '', website: '', revenue: '', challenge: ''
    })
  }

  if (!isOpen) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '20px',
    }}>
      {/* Backdrop */}
      <div 
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          backdropFilter: 'blur(8px)',
          cursor: 'pointer'
        }}
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div style={{
        position: 'relative',
        width: '100%', maxWidth: '600px',
        background: 'var(--bg-elevated)',
        borderRadius: '24px',
        boxShadow: '0 24px 60px rgba(0,0,0,0.4)',
        border: '1px solid var(--border-medium)',
        overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        maxHeight: '90vh',
      }}>
        {/* Header */}
        <div style={{
          padding: '24px 32px',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'var(--bg-surface)'
        }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '24px', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '4px' }}>
              Book Strategy Call
            </h3>
            <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
              Fill out the details to schedule your 1-on-1 Zoom session.
            </p>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            style={{
              width: '40px', height: '40px', borderRadius: '50%',
              background: 'rgba(0,0,0,0.05)', border: 'none',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--text-secondary)',
              transition: 'background 200ms ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {/* Body / Form */}
        <div style={{ padding: '32px', overflowY: 'auto' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Split row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name *</label>
                <input 
                  type="text" name="name" required
                  value={formData.name} onChange={handleChange}
                  placeholder="John Doe"
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-medium)', background: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', transition: 'border-color 200ms ease' }}
                  onFocus={(e) => e.target.style.borderColor = '#1A65E3'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>WhatsApp Number *</label>
                <input 
                  type="tel" name="phone" required
                  value={formData.phone} onChange={handleChange}
                  placeholder="+91 98765 43210"
                  style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-medium)', background: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', transition: 'border-color 200ms ease' }}
                  onFocus={(e) => e.target.style.borderColor = '#1A65E3'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
                />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Website or Instagram URL</label>
              <input 
                type="text" name="website"
                value={formData.website} onChange={handleChange}
                placeholder="https://yourbrand.com"
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-medium)', background: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', transition: 'border-color 200ms ease' }}
                onFocus={(e) => e.target.style.borderColor = '#1A65E3'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Current Monthly Revenue *</label>
              <select 
                name="revenue" required
                value={formData.revenue} onChange={handleChange}
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-medium)', background: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', cursor: 'pointer', appearance: 'none' }}
              >
                <option value="" disabled>Select revenue range</option>
                <option value="Just starting ($0 - $2k)">Just starting ($0 - $2k)</option>
                <option value="Growing ($2k - $10k)">Growing ($2k - $10k)</option>
                <option value="Scaling ($10k - $50k)">Scaling ($10k - $50k)</option>
                <option value="Established ($50k+)">Established ($50k+)</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>What is your biggest challenge right now? *</label>
              <textarea 
                name="challenge" required
                value={formData.challenge} onChange={handleChange}
                placeholder="E.g., I need more leads, my ROAS is dropping, I want to redesign my website..."
                rows="3"
                style={{ width: '100%', padding: '14px 16px', borderRadius: '12px', border: '1px solid var(--border-medium)', background: 'var(--bg-base)', color: 'var(--text-primary)', fontSize: '15px', outline: 'none', transition: 'border-color 200ms ease', resize: 'vertical' }}
                onFocus={(e) => e.target.style.borderColor = '#1A65E3'}
                onBlur={(e) => e.target.style.borderColor = 'var(--border-medium)'}
              />
            </div>

            <button 
              type="submit"
              style={{
                width: '100%',
                background: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)',
                color: '#fff', border: 'none', borderRadius: '12px',
                padding: '18px', fontSize: '16px', fontWeight: '700',
                cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                marginTop: '10px', boxShadow: '0 8px 24px rgba(22,163,74,0.3)',
                transition: 'transform 200ms ease, box-shadow 200ms ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 30px rgba(22,163,74,0.4)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(22,163,74,0.3)' }}
            >
              Continue to WhatsApp
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.01 2.013c-5.459 0-9.897 4.437-9.897 9.897 0 1.947.538 3.821 1.543 5.437L2.01 22.01l4.82-1.636c1.558.932 3.36 1.433 5.18 1.433 5.459 0 9.897-4.437 9.897-9.897 0-5.46-4.438-9.897-9.897-9.897zm5.556 14.195c-.237.669-1.378 1.282-1.921 1.34-.509.055-1.164.103-3.69-1.025-3.08-1.373-5.06-4.526-5.213-4.731-.153-.205-1.246-1.658-1.246-3.161 0-1.503.785-2.247 1.062-2.544.278-.297.604-.372.805-.372.201 0 .402.003.578.012.186.009.435-.07.68.528.248.604.846 2.072.923 2.228.077.155.128.337.026.541-.102.204-.153.33-.306.51-.153.18-.32.392-.457.545-.153.166-.316.347-.137.656.179.309.799 1.319 1.719 2.138 1.185 1.055 2.184 1.381 2.493 1.535.309.155.489.129.673-.077.184-.206.794-.925 1.008-1.241.214-.316.427-.263.705-.16.278.103 1.758.828 2.059.98.301.152.502.227.575.35.073.123.073.716-.164 1.385z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BookingModal
