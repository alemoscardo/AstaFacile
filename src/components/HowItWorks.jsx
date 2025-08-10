import React from 'react'
import { m } from 'framer-motion'
import { Home, MessageCircle, FileText, CheckCircle, Lightbulb } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from './AnimatedSection'

const HowItWorks = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const handleWhatsAppClick = () => {
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Ho visto AstaFacile e vorrei maggiori informazioni per partecipare a un'asta immobiliare.`
    window.open(whatsappUrl, '_blank')
  }

  const steps = [
    {
      number: '1',
      title: 'Trovi la casa',
      description: 'Scopri l\'immobile che ti interessa su Immobiliare.it o altri portali',
      icon: Home
    },
    {
      number: '2',
      title: 'Ci contatti',
      description: (
        <span>
          Clicca su{' '}
          <button 
            onClick={handleWhatsAppClick}
            className="text-primary-600 hover:text-primary-700 underline font-medium transition-colors cursor-pointer"
          >
            "Hai bisogno di aiuto?"
          </button>
          {' '}e scrivici su WhatsApp
        </span>
      ),
      icon: MessageCircle
    },
    {
      number: '3',
      title: 'Ti guidiamo',
      description: 'Prepariamo insieme tutti i documenti necessari per l\'asta',
      icon: FileText
    },
    {
      number: '4',
      title: 'Registrazione',
      description: 'Gestiamo per te tutta la procedura di registrazione all\'asta',
      icon: CheckCircle
    }
  ]

  return (
    <section id="come-funziona" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-50 rounded-full opacity-30" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-primary-100 rounded-full opacity-40" />
      
      <div className="container-max section-padding">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processo semplice e guidato per partecipare alle aste immobiliari senza complicazioni
          </p>
        </AnimatedSection>

        <m.div 
          ref={ref}
          className="relative"
        >
          {/* Animated connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block">
            {steps.slice(0, -1).map((_, index) => (
              <m.path
                key={index}
                d={`M ${25 + (index * 25)}% 50% L ${25 + ((index + 1) * 25)}% 50%`}
                stroke="#0284c7"
                strokeWidth="2"
                fill="none"
                strokeDasharray="10,5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? { pathLength: 1, opacity: 0.5 } : { pathLength: 0, opacity: 0 }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.3) }}
              />
            ))}
          </svg>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <m.div 
                key={index} 
                className="text-center relative"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <m.div className="relative z-10">
                  <m.div 
                    className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 cursor-pointer"
                    whileHover={{ 
                      scale: 1.1, 
                      backgroundColor: "#e0f2fe",
                      boxShadow: "0 10px 30px rgba(2, 132, 199, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <m.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <step.icon className="w-8 h-8 text-primary-600" />
                    </m.div>
                  </m.div>
                  <m.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm"
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.2), type: "spring" }}
                  >
                    {step.number}
                  </m.div>
                </m.div>
                
                <m.h3 
                  className="text-xl font-semibold text-gray-900 mb-3"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + (index * 0.2) }}
                >
                  {step.title}
                </m.h3>
                <m.p 
                  className="text-gray-600 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                >
                  {step.description}
                </m.p>
              </m.div>
            ))}
          </div>
        </m.div>

        <AnimatedSection className="text-center mt-12" delay={0.8}>
          <m.div 
            className="glass-card rounded-lg p-6 max-w-2xl mx-auto"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <p className="text-primary-800 font-medium flex items-start justify-center gap-2">
              <m.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Lightbulb className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
              </m.div>
              <span><strong>Importante:</strong> Non conserviamo i tuoi documenti. 
              Tutto viene gestito tramite servizi sicuri di terze parti.</span>
            </p>
          </m.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default HowItWorks