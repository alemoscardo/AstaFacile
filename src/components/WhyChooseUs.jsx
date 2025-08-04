import React from 'react'

const WhyChooseUs = () => {
  const benefits = [
    {
      title: 'Esperienza Comprovata',
      description: 'Oltre 100 registrazioni completate con successo e un tasso di soddisfazione del 95%',
      icon: '🏆'
    },
    {
      title: 'Supporto Completo',
      description: 'Ti accompagniamo dall\'inizio alla fine, senza lasciare nulla al caso',
      icon: '🤝'
    },
    {
      title: 'Velocità Garantita',
      description: 'Completiamo la registrazione in media entro 48 ore dal primo contatto',
      icon: '⚡'
    },
    {
      title: 'Massima Sicurezza',
      description: 'Lavoriamo solo con servizi certificati e non conserviamo i tuoi dati',
      icon: '🔒'
    },
    {
      title: 'Trasparenza Totale',
      description: 'Costi chiari fin dall\'inizio, nessuna sorpresa o costo nascosto',
      icon: '💎'
    },
    {
      title: 'Risposta Immediata',
      description: 'Rispondiamo su WhatsApp entro pochi minuti, anche nei weekend',
      icon: '📱'
    }
  ]

  return (
    <section id="perche-noi" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Perché Scegliere AstaFacile
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Quello che ci distingue nel mercato delle aste immobiliari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-700 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            La Prima Consulenza è Sempre Gratuita
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Parliamo del tuo progetto senza impegno. Ti spiegheremo tutto il processo 
            e ti daremo un preventivo personalizzato.
          </p>
          <button 
            onClick={() => window.open('https://wa.me/393493394926?text=Ciao! Vorrei una consulenza gratuita per un\'asta immobiliare.', '_blank')}
            className="bg-white text-primary-700 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Richiedi Consulenza Gratuita
          </button>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs