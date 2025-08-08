import React, { useState, useEffect, useRef } from 'react'
import { m, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()
  const menuRef = useRef(null)
  
  const headerOpacity = useTransform(scrollY, [0, 100], [0.95, 0.98])
  const headerBlur = useTransform(scrollY, [0, 100], [8, 16])

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', updateScrolled)
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  // Click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  // Body scroll lock when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleWhatsAppClick = () => {
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Ho visto AstaFacile e vorrei maggiori informazioni per partecipare a un'asta immobiliare.`
    window.open(whatsappUrl, '_blank')
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleMenuItemClick = () => {
    setIsMenuOpen(false)
  }

  // Animated Hamburger Icon Component
  const AnimatedHamburger = ({ isOpen }) => (
    <m.div 
      className="w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
      animate={isOpen ? "open" : "closed"}
    >
      <m.span
        className="block h-0.5 w-6 bg-gray-700"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: 45, y: 6 }
        }}
        transition={{ duration: 0.3 }}
      />
      <m.span
        className="block h-0.5 w-6 bg-gray-700 my-1"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 }
        }}
        transition={{ duration: 0.3 }}
      />
      <m.span
        className="block h-0.5 w-6 bg-gray-700"
        variants={{
          closed: { rotate: 0, y: 0 },
          open: { rotate: -45, y: -6 }
        }}
        transition={{ duration: 0.3 }}
      />
    </m.div>
  )

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
              href="#trasparenza" 
              className="text-gray-700 hover:text-primary-600 transition-colors relative group"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Trasparenza
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

          <m.button 
            className="md:hidden p-3 relative z-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <AnimatedHamburger isOpen={isMenuOpen} />
          </m.button>
        </div>

        {/* Backdrop Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div 
              ref={menuRef}
              id="mobile-menu"
              className="md:hidden absolute top-full left-0 right-0 z-50 glass-nav shadow-xl border-t border-white/20"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ 
                duration: 0.3, 
                ease: "easeOut",
                type: "spring",
                stiffness: 300,
                damping: 30
              }}
            >
              <nav className="py-6 px-4" role="navigation" aria-label="Menu mobile">
                <div className="flex flex-col space-y-1">
                  <m.a 
                    href="#come-funziona" 
                    className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    onClick={handleMenuItemClick}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Come Funziona
                  </m.a>
                  <m.a 
                    href="#perche-noi" 
                    className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    onClick={handleMenuItemClick}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    Perché Noi
                  </m.a>
                  <m.a 
                    href="#trasparenza" 
                    className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    onClick={handleMenuItemClick}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Trasparenza
                  </m.a>
                  <m.a 
                    href="#faq" 
                    className="text-gray-700 hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-lg transition-all duration-200 font-medium"
                    onClick={handleMenuItemClick}
                    whileHover={{ x: 4 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 }}
                  >
                    FAQ
                  </m.a>
                  <m.button 
                    onClick={() => {
                      handleWhatsAppClick()
                      handleMenuItemClick()
                    }}
                    className="btn-primary w-full mt-4 text-center py-4 text-lg font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  >
                    Contattaci
                  </m.button>
                </div>
              </nav>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </m.header>
  )
}

export default Header