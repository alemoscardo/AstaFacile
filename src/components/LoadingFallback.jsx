import React from 'react'

const LoadingFallback = ({ type = 'default', className = '' }) => {
  const getLoadingContent = () => {
    switch (type) {
      case 'particles':
        return (
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100 opacity-50" />
        )
      case 'cursor':
        return null // Cursor is non-essential, no fallback needed
      case 'testimonials':
        return (
          <div className="py-20 bg-gray-50">
            <div className="container-max section-padding">
              <div className="text-center">
                <div className="h-8 w-64 bg-gray-200 rounded-lg mx-auto mb-4 animate-pulse" />
                <div className="h-4 w-96 bg-gray-200 rounded mx-auto animate-pulse" />
              </div>
            </div>
          </div>
        )
      case 'whatsapp':
        return (
          <div className="fixed bottom-6 right-6 z-50">
            <div className="w-14 h-14 bg-green-500 rounded-full animate-pulse" />
          </div>
        )
      case 'progress':
        return null // Progress bar is non-essential
      default:
        return (
          <div className={`flex items-center justify-center py-8 ${className}`}>
            <div className="w-8 h-8 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
          </div>
        )
    }
  }

  return getLoadingContent()
}

export default LoadingFallback