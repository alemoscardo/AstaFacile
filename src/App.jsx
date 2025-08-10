import React, { Suspense } from 'react'
import { LazyMotion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs'
import Transparency from './components/Transparency'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import LoadingFallback from './components/LoadingFallback'
import ErrorBoundary from './components/ErrorBoundary'
import NetworkErrorFallback from './components/NetworkErrorFallback'

// Lazy imports for optimization
import { 
  LazyScrollProgress,
  LazyCustomCursor, 
  LazyFloatingWhatsApp,
  loadFramerMotionFeatures
} from './utils/lazyComponents'

function App() {
  return (
    <ErrorBoundary fallback={NetworkErrorFallback}>
      <LazyMotion features={loadFramerMotionFeatures}>
        <div className="min-h-screen bg-white relative">
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback type="progress" />}>
              <LazyScrollProgress />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback type="cursor" />}>
              <LazyCustomCursor />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Suspense fallback={<LoadingFallback type="whatsapp" />}>
              <LazyFloatingWhatsApp />
            </Suspense>
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Header />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Hero />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <HowItWorks />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <WhyChooseUs />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Transparency />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <CTA />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <FAQ />
          </ErrorBoundary>
          
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </div>
      </LazyMotion>
    </ErrorBoundary>
  )
}

export default App