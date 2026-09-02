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
  // Reveal animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
    )

    const revealElements = document.querySelectorAll('.reveal-up, .reveal-fade')
    revealElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <>
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
