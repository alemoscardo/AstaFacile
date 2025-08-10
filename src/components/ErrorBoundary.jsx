import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      hasError: false, 
      error: null, 
      errorInfo: null,
      retryCount: 0
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true
    })

    // Log error to console in development
    if (import.meta.env.DEV) {
      console.error('ErrorBoundary caught an error:', error, errorInfo)
    }

    // In production, you would send this to your error reporting service
    // Example: Sentry.captureException(error, { extra: errorInfo })
  }

  handleRetry = () => {
    this.setState(prevState => ({
      hasError: false,
      error: null,
      errorInfo: null,
      retryCount: prevState.retryCount + 1
    }))
  }

  handleReload = () => {
    window.location.reload()
  }

  handleGoHome = () => {
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      const { fallback: FallbackComponent } = this.props
      
      // Use custom fallback if provided
      if (FallbackComponent) {
        return (
          <FallbackComponent 
            error={this.state.error}
            errorInfo={this.state.errorInfo}
            retry={this.handleRetry}
            reload={this.handleReload}
          />
        )
      }

      // Default error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Oops! Qualcosa è andato storto
            </h2>
            
            <p className="text-gray-600 mb-6">
              Si è verificato un errore inaspettato. Puoi provare a ricaricare la pagina o tornare alla homepage.
            </p>

            <div className="space-y-3">
              {this.state.retryCount < 3 && (
                <button
                  onClick={this.handleRetry}
                  className="w-full btn-primary"
                >
                  Riprova ({3 - this.state.retryCount} tentativi rimasti)
                </button>
              )}
              
              <button
                onClick={this.handleReload}
                className="w-full btn-secondary"
              >
                Ricarica Pagina
              </button>
              
              <button
                onClick={this.handleGoHome}
                className="w-full text-primary-600 hover:text-primary-700 font-medium py-2"
              >
                Torna alla Homepage
              </button>
            </div>

            {/* Error details ONLY shown in development mode - completely hidden from users */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-6 text-left">
                <summary className="cursor-pointer text-sm text-gray-500 hover:text-gray-700">
                  🔧 Dettagli Errore (Solo Sviluppo)
                </summary>
                <div className="mt-2 p-3 bg-gray-100 rounded text-xs font-mono overflow-auto max-h-32">
                  <div className="text-red-600 font-bold mb-1">
                    {this.state.error.toString()}
                  </div>
                  <div className="text-gray-600">
                    {this.state.errorInfo.componentStack}
                  </div>
                </div>
              </details>
            )}

            <div className="mt-6 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Hai bisogno di aiuto? {' '}
                <a 
                  href={`${import.meta.env.VITE_WHATSAPP_URL}?text=Ho riscontrato un errore su AstaFacile`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline"
                >
                  Contattaci su WhatsApp
                </a>
              </p>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

// Higher-order component for easier usage
export const withErrorBoundary = (Component, fallback) => {
  return function WithErrorBoundaryComponent(props) {
    return (
      <ErrorBoundary fallback={fallback}>
        <Component {...props} />
      </ErrorBoundary>
    )
  }
}

// Hook for functional components to trigger error boundaries
export const useErrorHandler = () => {
  const [error, setError] = React.useState(null)

  React.useEffect(() => {
    if (error) {
      throw error
    }
  }, [error])

  const throwError = React.useCallback((error) => {
    setError(error)
  }, [])

  return throwError
}

export default ErrorBoundary