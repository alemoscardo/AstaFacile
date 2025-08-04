import React, { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/393493394926?text=Ciao! Ho visto AstaFacile e vorrei maggiori informazioni per partecipare a un\'asta immobiliare.', '_blank')
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-max section-padding">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-700">AstaFacile</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
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
              className="btn-primary"
            >
              Contattaci
            </button>
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
    </header>
  )
}

export default Header