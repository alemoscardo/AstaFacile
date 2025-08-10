import React, { useState, useEffect } from 'react'
import { m } from 'framer-motion'

const NetworkErrorFallback = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const handleRetry = () => {
    setRetryCount(prev => prev + 1)
    window.location.reload()
  }

  const handleContactSupport = () => {
    const message = 'Ho problemi di connessione con il sito AstaFacile. Potete aiutarmi?'
    const whatsappUrl = `${import.meta.env.VITE_WHATSAPP_URL}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-100 px-4">
      <m.div 
        className="max-w-md w-full bg-white rounded-xl shadow-xl p-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <m.div 
          className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
            isOnline ? 'bg-yellow-100' : 'bg-red-100'
          }`}
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {isOnline ? (
            <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          ) : (
            <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-12.728 12.728m0-12.728l12.728 12.728" />
            </svg>
          )}
        </m.div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          {isOnline ? 'Problema di Caricamento' : 'Connessione Assente'}
        </h2>
        
        <p className="text-gray-600 mb-6 leading-relaxed">
          {isOnline 
            ? 'Il sito non riesce a caricare correttamente. Potrebbero esserci problemi temporanei con il server.'
            : 'Sembra che tu non sia connesso a Internet. Controlla la tua connessione e riprova.'
          }
        </p>

        {/* Connection status indicator */}
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-6 ${
          isOnline 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          <div className={`w-2 h-2 rounded-full mr-2 ${
            isOnline ? 'bg-green-500' : 'bg-red-500'
          }`} />
          {isOnline ? 'Connesso' : 'Disconnesso'}
        </div>

        <div className="space-y-3">
          <m.button
            onClick={handleRetry}
            className="w-full btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!isOnline}
          >
            {retryCount > 0 ? `Riprova (${retryCount})` : 'Riprova'}
          </m.button>
          
          <m.button
            onClick={handleContactSupport}
            className="w-full btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Contatta Assistenza
          </m.button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Cosa puoi fare:</h3>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              Controlla la connessione Internet
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              Ricarica la pagina dopo alcuni minuti
            </li>
            <li className="flex items-start">
              <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0" />
              Contattaci se il problema persiste
            </li>
          </ul>
        </div>

        {/* AstaFacile branding */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <div className="text-primary-600 font-bold text-lg">AstaFacile</div>
          <p className="text-xs text-gray-500 mt-1">
            Il tuo assistente per le aste immobiliari
          </p>
        </div>
      </m.div>
    </div>
  )
}

export default NetworkErrorFallback