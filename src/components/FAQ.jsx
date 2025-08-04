import React, { useState } from 'react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'Quanto costa il vostro servizio?',
      answer: 'La prima consulenza è sempre gratuita. I nostri costi dipendono dalla complessità della pratica, ma sono sempre trasparenti e concordati prima di iniziare. Nessun costo nascosto, solo tariffe chiare e competitive.'
    },
    {
      question: 'Quanto tempo ci vuole per registrarsi a un\'asta?',
      answer: 'In media completiamo la registrazione entro 48 ore dal primo contatto. Dipende dalla velocità con cui ci fornisci i documenti necessari e dalla specifica asta a cui vuoi partecipare.'
    },
    {
      question: 'Che documenti servono per partecipare a un\'asta?',
      answer: 'I documenti variano in base al tipo di asta, ma generalmente servono: documento d\'identità, codice fiscale, ISEE o documentazione reddituale, e la cauzione. Ti guideremo passo dopo passo per preparare tutto correttamente.'
    },
    {
      question: 'Conservate i miei documenti?',
      answer: 'No, non conserviamo alcun documento personale. Tutto viene gestito tramite servizi sicuri di terze parti come Google Forms e DocuSign. La tua privacy e sicurezza sono la nostra priorità.'
    },
    {
      question: 'Cosa succede se non vinco l\'asta?',
      answer: 'Se non vinci l\'asta, potrai partecipare ad altre aste utilizzando la stessa documentazione (se ancora valida). Ti aiuteremo a trovare altre opportunità adatte alle tue esigenze.'
    },
    {
      question: 'Posso annullare la mia partecipazione?',
      answer: 'Sì, puoi annullare la tua partecipazione fino ai termini previsti dal bando di asta. Ti informeremo sempre sui tempi e le modalità di recesso per ogni specifica asta.'
    },
    {
      question: 'Lavorate in tutta Italia?',
      answer: 'Sì, possiamo assisterti per aste immobiliari in tutta Italia. Il nostro servizio è completamente digitale, quindi non importa dove ti trovi o dove si trova l\'immobile che ti interessa.'
    },
    {
      question: 'Avete una garanzia di successo?',
      answer: 'Garantiamo la corretta registrazione alla procedura d\'asta, ma non possiamo garantire la vincita (che dipende dall\'offerta e dalla concorrenza). Il nostro tasso di successo nelle registrazioni è del 95%.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container-max section-padding">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Domande Frequenti
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tutte le risposte alle domande più comuni sulle aste immobiliari
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="w-full bg-white rounded-lg p-6 text-left hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-primary-600 transform transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-lg p-6 max-w-2xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Non trovi la risposta che cerchi?
            </h3>
            <p className="text-gray-600 mb-4">
              Contattaci direttamente e ti risponderemo in pochi minuti
            </p>
            <button 
              onClick={() => window.open('https://wa.me/393493394926?text=Ciao! Ho una domanda che non ho trovato nelle FAQ...', '_blank')}
              className="btn-primary"
            >
              Fai una Domanda
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ