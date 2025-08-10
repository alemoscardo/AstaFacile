// Global type definitions for AstaFacile

export interface PerformanceMetric {
  name: string
  value: number
  rating: 'good' | 'needs-improvement' | 'poor'
  delta?: number
  id: string
  navigationType?: string
}

export interface PerformanceThreshold {
  good: number
  poor: number
}

export interface BundleStats {
  totalJS: number
  totalCSS: number
  jsFiles: number
  cssFiles: number
}

export interface MemoryUsage {
  used: number
  total: number
  limit: number
}

// Error Boundary types
export interface ErrorInfo {
  componentStack: string
  errorBoundary?: string
  errorBoundaryStack?: string
}

export interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
  retryCount: number
}

export interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<ErrorFallbackProps>
}

export interface ErrorFallbackProps {
  error: Error | null
  errorInfo: ErrorInfo | null
  retry: () => void
  reload: () => void
}

// Component prop types
export interface LoadingFallbackProps {
  type?: 'default' | 'particles' | 'cursor' | 'testimonials' | 'whatsapp' | 'progress'
  className?: string
}

// Animation types
export interface AnimationVariant {
  initial?: Record<string, any>
  animate?: Record<string, any>
  exit?: Record<string, any>
  whileHover?: Record<string, any>
  whileTap?: Record<string, any>
  transition?: Record<string, any>
}

// Environment variables
export interface ImportMetaEnv {
  readonly VITE_WHATSAPP_URL: string
  readonly VITE_EMAIL: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly MODE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Utility types
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

// Event handler types
export type ClickHandler = (event: React.MouseEvent<HTMLElement>) => void
export type SubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void
export type ChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void

// Framer Motion types
export type MotionProps = {
  initial?: any
  animate?: any
  exit?: any
  whileHover?: any
  whileTap?: any
  transition?: any
  variants?: any
  className?: string
  children?: React.ReactNode
}

// Intersection Observer types
export interface InViewOptions {
  threshold?: number | number[]
  triggerOnce?: boolean
  rootMargin?: string
}

// Performance monitoring types
export type PerformanceMetricName = 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB' | 'INP'

export interface PerformanceConfig {
  enableConsoleLogging: boolean
  enableAnalytics: boolean
  thresholds: Record<PerformanceMetricName, PerformanceThreshold>
  budgets: {
    maxJSBundle: number
    maxCSSBundle: number
    maxMemoryUsage: number
  }
}