import React, { useState, useEffect } from 'react'
import { m, useScroll, useTransform } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  const handleWhatsAppClick = () => {
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Ho visto AstaFacile e vorrei maggiori informazioni per partecipare a un'asta immobiliare.`
    window.open(whatsappUrl, '_blank')
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <m.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-nav shadow-lg' : 'bg-white/50 backdrop-blur-sm'
      }`}
      style={{
        backgroundColor: isScrolled ? `rgba(255, 255, 255, ${headerOpacity.get()})` : 'rgba(255, 255, 255, 0.5)',
        backdropFilter: `blur(${headerBlur.get()}px)`
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container-max section-padding">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <m.button 
              onClick={handleLogoClick}
              className="text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <m.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                AstaFacile
              </m.span>
            </m.button>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <m.a 
              href="#come-funziona" 
              className="text-gray-700 hover:text-primary-600 transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Come Funziona
              <m.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </m.a>
            <m.a 
              href="#perche-noi" 
              className="text-gray-700 hover:text-primary-600 transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Perché Noi
              <m.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </m.a>
            <m.a 
              href="#testimonianze" 
              className="text-gray-700 hover:text-primary-600 transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Testimonianze
              <m.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </m.a>
            <m.a 
              href="#faq" 
              className="text-gray-700 hover:text-primary-600 transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              FAQ
              <m.div
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600 origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </m.a>
            <m.button 
              onClick={handleWhatsAppClick}
              className="btn-primary btn-magnetic"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6, type: "spring" }}
            >
              Contattaci
            </m.button>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#come-funziona" className="text-gray-700 hover:text-primary-600 transition-colors">
                Come Funziona
              </a>
              <a href="#perche-noi" className="text-gray-700 hover:text-primary-600 transition-colors">
                Perché Noi
              </a>
              <a href="#testimonianze" className="text-gray-700 hover:text-primary-600 transition-colors">
                Testimonianze
              </a>
              <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors">
                FAQ
              </a>
              <button 
                onClick={handleWhatsAppClick}
                className="btn-primary w-full"
              >
                Contattaci
              </button>
            </nav>
          </div>
        )}
      </div>
    </m.header>
  )
}

export default Header