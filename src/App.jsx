import React, { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SocialProof from './components/SocialProof'
import About from './components/About'
import FlybitFalcon from './components/FlybitFalcon'
import Services from './components/Services'
import FeaturedWork from './components/FeaturedWork'
import Portfolio from './components/Portfolio'
import WebDevPortfolio from './components/WebDevPortfolio'
import Team from './components/Team'
import Process from './components/Process'
import WhyUs from './components/WhyUs'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Consultancy from './components/Consultancy'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'

function App() {
  const [scrollProgress, setScrollProgress] = React.useState(0)

  // Scroll Progress Calculation & Intersection Observer for Scroll Animations
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100
        setScrollProgress(currentProgress)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade')
    revealElements.forEach((el) => observer.observe(el))

    // Interactive mouse spotlight effect on cards
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card, .service-card, .portfolio-card')
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        card.style.setProperty('--mouse-x', `${x}px`)
        card.style.setProperty('--mouse-y', `${y}px`)
      })
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      {/* Top Glowing Scroll Progress Bar */}
      <div 
        className="scroll-progress-bar" 
        style={{ width: `${scrollProgress}%` }} 
        aria-hidden="true" 
      />

      {/* Global Booking Modal */}
      <BookingModal />

      {/* Film grain overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Custom cursor — desktop only */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />
        <SocialProof />
        <About />
        <FlybitFalcon />
        <Services />
        <FeaturedWork />
        <Portfolio />
        <WebDevPortfolio />
        <Process />
        <WhyUs />
        <Team />
        <Testimonials />
        <FAQ />
        <Consultancy />
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default App
