import React from 'react'
import { m } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { ShieldCheck, FileCheck, MessageCircle, Handshake } from 'lucide-react'

const Transparency = () => {
  return (
    <section id="trasparenza" className="py-20 bg-gradient-to-br from-white via-gray-50 to-primary-50 relative overflow-hidden">
      <div className="container-max section-padding relative z-10">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trasparenza e Garanzie</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Siamo una realtà nuova: niente recensioni finte. La consulenza iniziale è gratuita; la registrazione all'asta è a pagamento e parte solo se decidi di procedere.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[{
            icon: ShieldCheck,
            title: 'Dati al sicuro',
            desc: 'Non conserviamo i tuoi documenti. Utilizziamo servizi sicuri come SPID/CIE, DocuSign e Google Forms.'
          },{
            icon: FileCheck,
            title: 'Contratto chiaro',
            desc: 'Condizioni trasparenti, nessun costo nascosto. Prima consulenza sempre gratuita.'
          },{
            icon: Handshake,
            title: 'Senza forzature',
            desc: 'Nessun anticipo non necessario. Decidi tu se procedere dopo la consulenza.'
          },{
            icon: MessageCircle,
            title: 'Supporto reale',
            desc: 'WhatsApp ed email con risposte rapide e precise, anche solo per chiarimenti.'
          }].map((item, idx) => (
            <m.div
              key={idx}
              className="glass-card rounded-lg p-6 h-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <item.icon className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </m.div>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" delay={0.2}>
          <m.div className="max-w-2xl mx-auto">
            <p className="text-gray-700 mb-4">
              Vuoi approfondire? Leggi la nostra <a className="text-primary-600 underline" href="/privacy.html">Privacy Policy</a> e i <a className="text-primary-600 underline" href="/terms.html">Termini di Servizio</a>.
            </p>
            <p className="text-gray-700">
              Preferisci parlarne? Contattaci su WhatsApp o via email: <span className="font-medium">{import.meta.env.VITE_EMAIL || 'borella.brianzaimmobiliare@gmail.com'}</span>
            </p>
          </m.div>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default Transparency


