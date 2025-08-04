import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
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
    }
  ]

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star 
        key={index} 
        className={`w-5 h-5 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <section id="testimonianze" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Storie di successo di chi ha trovato casa grazie al nostro aiuto
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-gray-50 rounded-lg p-6 flex flex-col h-full hover:bg-gray-100 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-${(index + 1) * 200}`}>
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4 mt-auto">
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-primary-600">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-success-50 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="text-success-600 font-bold text-2xl mb-2">4.8/5</div>
            <div className="text-success-800">Valutazione media dei nostri clienti</div>
            <div className="text-success-600 text-sm mt-1">Basata su 127 recensioni verificate</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials