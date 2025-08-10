import React, { Suspense } from 'react'
import { m } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'
import { LazyParticleBackground } from '../utils/lazyComponents'
import LoadingFallback from './LoadingFallback'

const Hero = () => {
  const [statsRef] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const handleWhatsAppClick = () => {
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Ho visto AstaFacile e vorrei maggiori informazioni per partecipare a un'asta immobiliare.`
    window.open(whatsappUrl, '_blank')
  }

  const handleFormClick = () => {
    window.open('https://forms.google.com/YOUR_FORM_ID', '_blank')
  }

  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 overflow-hidden">
      <Suspense fallback={<LoadingFallback type="particles" />}>
        <LazyParticleBackground />
      </Suspense>
      <div className="absolute inset-0 gradient-glow opacity-30" />
      
      {/* Floating geometric shapes */}
      <m.div
        className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <m.div
        className="absolute top-40 right-20 w-16 h-16 bg-primary-300 opacity-20"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <m.div
        className="absolute bottom-20 left-1/4 w-12 h-12 bg-primary-400 opacity-20"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        animate={{
          y: [0, -25, 0],
          rotate: [0, 360],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <m.h1 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'Registrati all\'asta,',
                1000,
                'Registrati all\'asta, senza stress',
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: 'inherit', display: 'inline-block' }}
              repeat={0}
            />
            {' '}
            <m.span 
              className="text-primary-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.5 }}
            >
              
            </m.span>
          </m.h1>
          
          <m.p 
            className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            Consulenza iniziale gratuita: analizziamo il tuo caso, condividiamo una checklist dei documenti e un preventivo.
            La registrazione all'asta è un servizio a pagamento che avviamo solo su tua decisione.
          </m.p>

          <m.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.5 }}
          >
            <m.button 
              onClick={handleWhatsAppClick}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-2 btn-magnetic"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 30px rgba(2, 132, 199, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <m.svg 
                className="w-6 h-6" 
                fill="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403"/>
              </m.svg>
              Contatta su WhatsApp
            </m.button>
            
            <m.button 
              onClick={handleFormClick}
              className="btn-secondary text-lg px-8 py-4 btn-magnetic"
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: "0 10px 30px rgba(2, 132, 199, 0.1)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Inizia Ora
            </m.button>
          </m.div>

          <m.div 
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <m.div 
              className="glass-card rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">Gratuita</div>
              <div className="text-gray-600">Prima consulenza</div>
            </m.div>
            <m.div 
              className="glass-card rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">Processo chiaro</div>
              <div className="text-gray-600">Contratto senza sorprese</div>
            </m.div>
            <m.div 
              className="glass-card rounded-lg p-6 hover:scale-105 transition-transform duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="text-3xl font-bold text-primary-600 mb-2">Dati al sicuro</div>
              <div className="text-gray-600">Non conserviamo i tuoi documenti</div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  )
}

export default Hero