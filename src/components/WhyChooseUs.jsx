import React from 'react'
import { m } from 'framer-motion'
import { Trophy, Handshake, Zap, Shield, Gem, Smartphone } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from './AnimatedSection'

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const benefits = [
    {
      title: 'Esperienza Comprovata',
      description: 'Oltre 150 registrazioni completate con successo e un tasso di soddisfazione del 95%',
      icon: Trophy,
      color: 'text-yellow-500'
    },
    {
      title: 'Supporto Completo',
      description: 'Ti accompagniamo dall\'inizio alla fine, senza lasciare nulla al caso',
      icon: Handshake,
      color: 'text-green-500'
    },
    {
      title: 'Velocità Garantita',
      description: 'Completiamo la registrazione in media entro 48 ore dal primo contatto',
      icon: Zap,
      color: 'text-yellow-400'
    },
    {
      title: 'Massima Sicurezza',
      description: 'Lavoriamo solo con servizi certificati e non conserviamo i tuoi dati',
      icon: Shield,
      color: 'text-blue-500'
    },
    {
      title: 'Trasparenza Totale',
      description: 'Costi chiari fin dall\'inizio, nessuna sorpresa o costo nascosto',
      icon: Gem,
      color: 'text-purple-500'
    },
    {
      title: 'Risposta Immediata',
      description: 'Rispondiamo su WhatsApp entro pochi minuti, anche nei weekend',
      icon: Smartphone,
      color: 'text-primary-600'
    }
  ]

  return (
    <section id="perche-noi" className="py-20 bg-gradient-to-br from-gray-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <m.div
        className="absolute top-20 right-10 w-40 h-40 bg-primary-200 rounded-full opacity-10"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <m.div
        className="absolute bottom-20 left-10 w-32 h-32 bg-primary-300 opacity-15"
        style={{ clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)' }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180, -360],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-max section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perché Scegliere AstaFacile
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quello che ci distingue nel mercato delle aste immobiliari
          </p>
        </AnimatedSection>

        <m.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <m.div 
              key={index} 
              className="glass-card rounded-lg p-6 relative group cursor-pointer overflow-hidden"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -8, 
                scale: 1.03,
                boxShadow: "0 20px 40px rgba(2, 132, 199, 0.1)"
              }}
            >
              {/* Particle burst effect on hover */}
              <m.div
                className="absolute inset-0 pointer-events-none"
                initial={false}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                {[...Array(6)].map((_, i) => (
                  <m.div
                    key={i}
                    className="absolute w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </m.div>

              <m.div 
                className="mb-4 relative z-10"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                <benefit.icon className={`w-12 h-12 ${benefit.color}`} />
              </m.div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3 relative z-10">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed relative z-10">
                {benefit.description}
              </p>

              {/* Glow effect */}
              <m.div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(circle at center, ${benefit.color.includes('yellow') ? '#fbbf24' : benefit.color.includes('green') ? '#10b981' : benefit.color.includes('blue') ? '#3b82f6' : benefit.color.includes('purple') ? '#8b5cf6' : '#0284c7'} 0%, transparent 70%)`
                }}
              />
            </m.div>
          ))}
        </m.div>

        <AnimatedSection className="mt-16" delay={0.6}>
          <m.div 
            className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 rounded-lg p-8 text-center text-white relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated background glow */}
            <m.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 opacity-20"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative z-10">
              <m.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                La Prima Consulenza è Sempre Gratuita
              </m.h3>
              
              <m.p 
                className="text-primary-100 mb-6 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Parliamo del tuo progetto senza impegno. Ti spiegheremo tutto il processo 
                e ti daremo un preventivo personalizzato.
              </m.p>
              
              <m.button 
                onClick={() => {
                  const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Vorrei una consulenza gratuita per un'asta immobiliare.`
                  window.open(whatsappUrl, '_blank')
                }}
                className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg transition-all duration-300 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
              >
                <span className="relative z-10">Richiedi Consulenza Gratuita</span>
                <m.div
                  className="absolute inset-0 bg-gray-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </m.button>
            </div>
          </m.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default WhyChooseUs