import React from 'react'

const HowItWorks = () => {
  const steps = [
    {
      number: '1',
      title: 'Trovi la casa',
      description: 'Scopri l\'immobile che ti interessa su Immobiliare.it o altri portali',
      icon: '🏠'
    },
    {
      number: '2',
      title: 'Ci contatti',
      description: 'Clicca su "Hai bisogno di aiuto?" e scrivici su WhatsApp',
      icon: '💬'
    },
    {
      number: '3',
      title: 'Ti guidiamo',
      description: 'Prepariamo insieme tutti i documenti necessari per l\'asta',
      icon: '📋'
    },
    {
      number: '4',
      title: 'Registrazione',
      description: 'Gestiamo per te tutta la procedura di registrazione all\'asta',
      icon: '✅'
    }
  ]

  return (
    <section id="come-funziona" className="py-20 bg-white">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Come Funziona
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Un processo semplice e guidato per partecipare alle aste immobiliari senza complicazioni
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-primary-200 -translate-x-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-primary-50 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-primary-800 font-medium">
              💡 <strong>Importante:</strong> Non conserviamo i tuoi documenti. 
              Tutto viene gestito tramite servizi sicuri di terze parti.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks