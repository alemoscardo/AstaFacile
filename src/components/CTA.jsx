import React from 'react'

const CTA = () => {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=Ciao! Ho visto il vostro sito e vorrei iniziare il processo per partecipare a un'asta immobiliare. Potete aiutarmi?`
    window.open(whatsappUrl, '_blank')
  }

  const handleFormClick = () => {
    window.open('https://forms.google.com/YOUR_FORM_ID', '_blank')
  }

  const handleEmailClick = () => {
    const emailUrl = `mailto:${import.meta.env.VITE_EMAIL}?subject=Richiesta informazioni asta immobiliare&body=Ciao, vorrei maggiori informazioni sui vostri servizi per le aste immobiliari.`
    window.location.href = emailUrl
  }

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="container-max section-padding">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto a Trovare la Tua Casa all'Asta?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Non aspettare oltre. Inizia oggi il tuo percorso verso la casa dei tuoi sogni 
            con il supporto di esperti nelle aste immobiliari.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors flex items-center gap-3"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.403"/>
              </svg>
              Inizia su WhatsApp
            </button>

            <button 
              onClick={handleFormClick}
              className="bg-white text-primary-700 font-semibold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors"
            >
              Compila il Form
            </button>
          </div>

          <div className="text-center">
            <p className="text-primary-200 mb-2">O scrivici via email:</p>
            <button 
              onClick={handleEmailClick}
              className="text-primary-100 hover:text-white underline transition-colors"
              >
              {import.meta.env.VITE_EMAIL}
            </button>
          </div>

          <div className="mt-12 border-t border-primary-500 pt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold mb-2">Gratuita</div>
                <div className="text-primary-200">Prima consulenza</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">48h</div>
                <div className="text-primary-200">Tempo medio registrazione</div>
              </div>
              <div>
                <div className="text-2xl font-bold mb-2">24/7</div>
                <div className="text-primary-200">Supporto su WhatsApp</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA