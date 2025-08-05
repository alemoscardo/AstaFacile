import React, { useState } from 'react'
import { m, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import AnimatedSection from './AnimatedSection'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const testimonials = [
    {
      name: 'Giulia M.',
      location: 'Roma',
      text: 'Non avevo mai partecipato a un\'asta prima. Il team di AstaFacile mi ha guidato passo dopo passo e ora ho la casa dei miei sogni! Servizio impeccabile.',
      rating: 5
    },
    {
      name: 'Marco & Sara',
      location: 'Milano',
      text: 'Pensavamo fosse impossibile comprare casa a Milano con il nostro budget. Grazie ad AstaFacile abbiamo trovato un appartamento fantastico all\'asta.',
      rating: 5
    },
    {
      name: 'Antonio R.',
      location: 'Firenze',
      text: 'Processo velocissimo e trasparente. In 48 ore ero registrato per l\'asta. Il supporto su WhatsApp è stato fondamentale.',
      rating: 5
    },
    {
      name: 'Laura C.',
      location: 'Torino',
      text: 'Servizio professionale e competente. Mi hanno aiutato a vincere la mia prima asta immobiliare. Consigliatissimo!',
      rating: 5
    },
    {
      name: 'Francesco P.',
      location: 'Napoli',
      text: 'Esperienza fantastica! Grazie al loro supporto sono riuscito ad acquistare casa ad un prezzo incredibile.',
      rating: 5
    }
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating, index) => {
    return Array.from({ length: 5 }, (_, starIndex) => (
      <m.div
        key={starIndex}
        initial={{ scale: 0, rotate: -180 }}
        animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
        transition={{ 
          duration: 0.5, 
          delay: (index * 0.1) + (starIndex * 0.1),
          type: "spring",
          stiffness: 200
        }}
      >
        <Star 
          className={`w-5 h-5 ${starIndex < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
        />
      </m.div>
    ))
  }

  return (
    <section id="testimonianze" className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <m.div
        className="absolute top-10 left-1/4 w-24 h-24 bg-yellow-200 rounded-full opacity-20"
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="container-max section-padding relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Storie di successo di chi ha trovato casa grazie al nostro aiuto
          </p>
        </AnimatedSection>

        {/* Desktop: Traditional Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-8" ref={ref}>
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <m.div 
              key={index} 
              className="glass-card rounded-lg p-6 flex flex-col h-full group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : { opacity: 0, y: 50, rotateY: -15 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating, index)}
              </div>
              
              <m.p 
                className="text-gray-700 mb-6 italic leading-relaxed flex-grow relative z-10"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.3 + (index * 0.2) }}
              >
                "{testimonial.text}"
              </m.p>
              
              <div className="border-t pt-4 mt-auto relative z-10">
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-primary-600">{testimonial.location}</div>
                </div>
              </div>

              {/* Hover glow effect */}
              <m.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-primary-100 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"
              />
            </m.div>
          ))}
        </div>

        {/* Mobile: Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <m.div
                key={currentIndex}
                className="glass-card rounded-lg p-6 mx-4"
                initial={{ opacity: 0, x: 300, rotateY: 90 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -300, rotateY: -90 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex mb-4 justify-center">
                  {renderStars(testimonials[currentIndex].rating, 0)}
                </div>
                
                <p className="text-gray-700 mb-6 italic leading-relaxed text-center">
                  "{testimonials[currentIndex].text}"
                </p>
                
                <div className="text-center">
                  <div className="font-semibold text-gray-900">{testimonials[currentIndex].name}</div>
                  <div className="text-primary-600">{testimonials[currentIndex].location}</div>
                </div>
              </m.div>
            </AnimatePresence>

            {/* Navigation arrows */}
            <m.button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600"
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6" />
            </m.button>

            <m.button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary-600"
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6" />
            </m.button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <m.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary-600' : 'bg-gray-300'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
              />
            ))}
          </div>
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.8}>
          <m.div 
            className="glass-card rounded-lg p-6 max-w-2xl mx-auto bg-gradient-to-br from-green-50 to-emerald-50"
            whileHover={{ y: -2, scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <m.div 
              className="text-green-600 font-bold text-3xl mb-2 flex items-center justify-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
            >
              <Star className="w-8 h-8 text-yellow-400 fill-yellow-400" />
              4.8/5
            </m.div>
            <div className="text-green-800 font-medium">Valutazione media dei nostri clienti</div>
            <div className="text-green-600 text-sm mt-1">Basata su 127 recensioni verificate</div>
          </m.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Testimonials