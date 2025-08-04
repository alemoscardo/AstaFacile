import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App