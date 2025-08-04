# AstaFacile

**La tua casa all'asta, senza stress**

AstaFacile è una piattaforma web statica che semplifica l'accesso alle aste immobiliari in Italia, guidando i compratori alle prime armi attraverso tutto il processo di registrazione.

## 🚀 Avvio Rapido

```bash
# Installa le dipendenze
npm install

# Avvia il server di sviluppo
npm run dev

# Build per produzione
npm run build

# Anteprima build di produzione
npm run preview
```

## 🏗️ Stack Tecnologico

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS
- **Hosting**: Vercel/Netlify (statico)
- **Integrazioni**: WhatsApp, Google Forms, Email

## 📱 Caratteristiche

- ✅ Design mobile-first e completamente responsive
- ✅ Interfaccia in italiano ottimizzata per il mercato locale
- ✅ Integrazione WhatsApp per contatto diretto
- ✅ Form esterni per raccolta dati sicura
- ✅ Nessun backend - architettura completamente statica
- ✅ Conformità GDPR e massima sicurezza
- ✅ Ottimizzato per SEO e performance

## 🔧 Configurazione

Prima del deploy, aggiorna i seguenti elementi:

1. **WhatsApp**: Sostituisci `393XXXXXXXXX` con il numero reale nei componenti
2. **Google Forms**: Aggiorna `YOUR_FORM_ID` con l'ID del form reale
3. **Email**: Configura l'indirizzo email reale (attualmente `info@astafacile.it`)
4. **Dominio**: Aggiorna per il dominio finale `astafacile.it`

## 📂 Struttura del Progetto

```
src/
├── components/          # Componenti React
│   ├── Header.jsx      # Navigazione e menu
│   ├── Hero.jsx        # Sezione hero con CTA principali
│   ├── HowItWorks.jsx  # Processo a 4 step
│   ├── WhyChooseUs.jsx # Vantaggi e differenziatori
│   ├── Testimonials.jsx # Recensioni clienti
│   ├── CTA.jsx         # Call-to-action finale
│   ├── FAQ.jsx         # Domande frequenti
│   └── Footer.jsx      # Footer con contatti e link
├── App.jsx             # Componente principale
├── main.jsx           # Entry point
└── index.css          # Stili Tailwind e utility
```

## 🎯 Obiettivi di Business

- Conversion rate > 25% da click a contatto
- Tempo medio registrazione < 48h
- Customer satisfaction ≥ 4.7/5
- Tasso di referral > 15%

## 📈 Metriche di Performance

Il sito è ottimizzato per:
- Core Web Vitals eccellenti
- Caricamento < 3 secondi su 3G
- Accessibilità WCAG 2.1 AA
- SEO score > 95

## 🚀 Deploy

Il progetto è configurato per deploy automatico su Vercel/Netlify:

1. Collega il repository GitHub
2. Configura le variabili d'ambiente se necessario
3. Il deploy avviene automaticamente ad ogni push su main

## 📞 Supporto

Per domande tecniche o modifiche, contatta il team di sviluppo.