import React from 'react'
import { LazyMotion, domAnimation } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import CustomCursor from './components/CustomCursor'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-white relative">
        <ScrollProgress />
        <CustomCursor />
        <FloatingWhatsApp />
        <Header />
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <CTA />
        <FAQ />
        <Footer />
      </div>
    </LazyMotion>
  )
}

export default App