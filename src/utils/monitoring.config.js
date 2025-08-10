// Monitoring configuration - control what users see vs what gets logged
export const MONITORING_CONFIG = {
  // Development mode settings
  development: {
    showPerformanceAlerts: true,
    logToConsole: true,
    showErrorDetails: true,
    showBundleStats: true,
    showMemoryUsage: true,
  },
  
  // Production mode settings - users see nothing
  production: {
    showPerformanceAlerts: false,  // Never show alerts to users
    logToConsole: false,           // No console logging
    showErrorDetails: false,       // No technical error details
    showBundleStats: false,        // No bundle information
    showMemoryUsage: false,        // No memory statistics
  },

  // Performance thresholds
  performance: {
    budgets: {
      maxJSBundle: 500,           // KB
      maxCSSBundle: 50,           // KB
      maxMemoryUsage: 80,         // Percentage
    },
    
    coreWebVitals: {
      LCP: { good: 2500, poor: 4000 },  // ms
      CLS: { good: 0.1, poor: 0.25 },   // score
      FCP: { good: 1800, poor: 3000 },  // ms
      TTFB: { good: 800, poor: 1800 },  // ms
      INP: { good: 200, poor: 500 }     // ms
    }
  }
}

// Get current configuration based on environment
export const getCurrentConfig = () => {
  return import.meta.env.DEV ? MONITORING_CONFIG.development : MONITORING_CONFIG.production
}

// Helper function to check if we should show something to users
export const shouldShow = (feature) => {
  const config = getCurrentConfig()
  return config[feature] || false
}

// Helper function for safe console logging
export const safeConsole = {
  log: (...args) => {
    if (shouldShow('logToConsole')) {
      console.log(...args)
    }
  },
  warn: (...args) => {
    if (shouldShow('logToConsole')) {
      console.warn(...args)
    }
  },
  error: (...args) => {
    if (shouldShow('logToConsole')) {
      console.error(...args)
    }
  }
}

export default MONITORING_CONFIG