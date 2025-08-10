import { onCLS, onFCP, onLCP, onTTFB, onINP } from 'web-vitals'

// Performance thresholds based on Core Web Vitals recommendations
const PERFORMANCE_THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 }, // Largest Contentful Paint
  // Note: FID is deprecated in favor of INP in web-vitals v3+
  CLS: { good: 0.1, poor: 0.25 },  // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 }, // First Contentful Paint
  TTFB: { good: 800, poor: 1800 }, // Time to First Byte
  INP: { good: 200, poor: 500 }    // Interaction to Next Paint
}

// Analytics function to send metrics silently to your analytics service
const sendToAnalytics = (metric) => {
  const { name, value, rating } = metric
  
  // Console logging ONLY in development mode
  if (import.meta.env.DEV) {
    console.log(`[Performance] ${name}: ${value.toFixed(2)}ms - ${rating}`, metric)
  }

  // Send silently to your analytics service in production
  // Example integrations (uncomment and configure as needed):
  
  // Google Analytics 4
  // if (typeof gtag !== 'undefined') {
  //   gtag('event', name, {
  //     value: Math.round(name === 'CLS' ? value * 1000 : value),
  //     event_category: 'Web Vitals',
  //     event_label: rating,
  //     non_interaction: true,
  //   })
  // }

  // Plausible Analytics
  // if (typeof plausible !== 'undefined') {
  //   plausible('Performance', { props: { metric: name, value: value.toFixed(2), rating } })
  // }

  // Custom API endpoint
  // fetch('/api/analytics/performance', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ metric: name, value, rating, timestamp: Date.now() })
  // }).catch(() => {}) // Silent failure
}

// Enhanced metric handler with budget alerts
const createMetricHandler = (metricName) => (metric) => {
  const threshold = PERFORMANCE_THRESHOLDS[metricName]
  let rating = 'good'
  
  if (metric.value > threshold.poor) {
    rating = 'poor'
  } else if (metric.value > threshold.good) {
    rating = 'needs-improvement'
  }

  // Add rating to metric
  metric.rating = rating

  // Send to analytics
  sendToAnalytics(metric)

  // Performance budget alerts - ONLY in development mode
  if (rating === 'poor' && import.meta.env.DEV) {
    console.warn(`🚨 Performance Budget Alert: ${metricName} is ${metric.value.toFixed(2)} (threshold: ${threshold.good})`)
    showPerformanceAlert(metricName, metric.value, threshold.good)
  }
  
  // Silent monitoring in production - you can log to your monitoring service here
  if (rating === 'poor' && import.meta.env.PROD) {
    // Example: Send to monitoring service
    // monitoringService.alert({
    //   type: 'performance_budget_exceeded',
    //   metric: metricName,
    //   value: metric.value,
    //   threshold: threshold.good,
    //   timestamp: Date.now()
    // })
  }
}

// Visual performance alert for development
const showPerformanceAlert = (metricName, value, threshold) => {
  const alertId = `perf-alert-${metricName}`
  
  // Remove existing alert if present
  const existing = document.getElementById(alertId)
  if (existing) existing.remove()

  // Create alert element
  const alert = document.createElement('div')
  alert.id = alertId
  alert.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #dc2626;
    color: white;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 10px 25px rgba(0,0,0,0.2);
    animation: slideIn 0.3s ease-out;
  `
  
  alert.innerHTML = `
    <strong>⚠️ ${metricName} Alert</strong><br>
    Value: ${value.toFixed(2)}ms<br>
    Budget: ${threshold}ms
    <button onclick="this.parentNode.remove()" style="
      background: none;
      border: none;
      color: white;
      float: right;
      font-size: 16px;
      cursor: pointer;
      margin-left: 10px;
    ">×</button>
  `
  
  // Add animation style
  if (!document.getElementById('perf-alert-style')) {
    const style = document.createElement('style')
    style.id = 'perf-alert-style'
    style.textContent = `
      @keyframes slideIn {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
      }
    `
    document.head.appendChild(style)
  }
  
  document.body.appendChild(alert)
  
  // Auto remove after 10 seconds
  setTimeout(() => {
    if (alert.parentNode) alert.remove()
  }, 10000)
}

// Resource usage monitoring - silent in production
export const monitorResourceUsage = () => {
  if ('memory' in performance) {
    const memory = performance.memory
    const memoryUsage = {
      used: Math.round(memory.usedJSHeapSize / 1048576), // MB
      total: Math.round(memory.totalJSHeapSize / 1048576), // MB
      limit: Math.round(memory.jsHeapSizeLimit / 1048576) // MB
    }
    
    // Log ONLY in development mode
    if (import.meta.env.DEV) {
      console.log('[Memory Usage]', memoryUsage)
    }
    
    // Alert if memory usage is high
    const usagePercent = (memoryUsage.used / memoryUsage.limit) * 100
    if (usagePercent > 80) {
      if (import.meta.env.DEV) {
        console.warn(`🚨 High Memory Usage: ${usagePercent.toFixed(1)}%`)
      }
      
      // Silent monitoring in production
      if (import.meta.env.PROD) {
        // Send to monitoring service
        // monitoringService.log('high_memory_usage', { percentage: usagePercent, ...memoryUsage })
      }
    }
  }
}

// Bundle size monitoring
export const getBundleStats = () => {
  const resources = performance.getEntriesByType('resource')
  const jsResources = resources.filter(r => r.name.includes('.js'))
  const cssResources = resources.filter(r => r.name.includes('.css'))
  
  const totalJSSize = jsResources.reduce((total, resource) => total + (resource.transferSize || 0), 0)
  const totalCSSSize = cssResources.reduce((total, resource) => total + (resource.transferSize || 0), 0)
  
  const stats = {
    totalJS: Math.round(totalJSSize / 1024), // KB
    totalCSS: Math.round(totalCSSSize / 1024), // KB
    jsFiles: jsResources.length,
    cssFiles: cssResources.length
  }
  
  // Log ONLY in development mode
  if (import.meta.env.DEV) {
    console.log('[Bundle Stats]', stats)
  }
  
  // Performance budget alerts for bundle size - development only
  if (stats.totalJS > 500) { // 500KB threshold
    if (import.meta.env.DEV) {
      console.warn(`🚨 JS Bundle Size Alert: ${stats.totalJS}KB (budget: 500KB)`)
    }
    
    // Silent monitoring in production
    if (import.meta.env.PROD) {
      // Send to monitoring service
      // monitoringService.alert('bundle_size_exceeded', { size: stats.totalJS, budget: 500 })
    }
  }
  
  return stats
}

// Initialize Core Web Vitals monitoring
export const initPerformanceMonitoring = () => {
  // Core Web Vitals (FID replaced by INP in web-vitals v3+)
  onLCP(createMetricHandler('LCP'))
  onCLS(createMetricHandler('CLS'))
  onFCP(createMetricHandler('FCP'))
  onTTFB(createMetricHandler('TTFB'))
  onINP(createMetricHandler('INP'))

  // Monitor resource usage every 30 seconds
  setInterval(monitorResourceUsage, 30000)
  
  // Get bundle stats after load
  window.addEventListener('load', () => {
    setTimeout(getBundleStats, 1000)
  })

  // Log initialization ONLY in development mode
  if (import.meta.env.DEV) {
    console.log('🚀 Performance monitoring initialized')
  }
}

export default initPerformanceMonitoring