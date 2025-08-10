import { lazy } from 'react'

// Lazy load heavy animation components
export const LazyParticleBackground = lazy(() => import('../components/ParticleBackground'))
export const LazyCustomCursor = lazy(() => import('../components/CustomCursor'))

// Lazy load non-critical UI components
export const LazyFloatingWhatsApp = lazy(() => import('../components/FloatingWhatsApp'))
export const LazyScrollProgress = lazy(() => import('../components/ScrollProgress'))
export const LazyTestimonials = lazy(() => import('../components/Testimonials'))

// Animation library optimizations
export const loadFramerMotionFeatures = () => import('framer-motion').then(mod => mod.domAnimation)
export const loadParticlesEngine = () => import('@tsparticles/basic').then(mod => mod.loadBasic)