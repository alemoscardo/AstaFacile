import React, { useState, useEffect } from 'react'
import { m, useMotionValue, useSpring } from 'framer-motion'

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isMobile, setIsMobile] = useState(true)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Check if device supports hover (desktop)
    const hasHover = window.matchMedia('(hover: hover)').matches
    const isDesktop = window.innerWidth >= 768
    setIsMobile(!hasHover || !isDesktop)

    if (!hasHover || !isDesktop) return
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16)
      cursorY.set(e.clientY - 16)
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners to interactive elements
    const interactiveElements = document.querySelectorAll('button, a, [role="button"]')
    
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mouseenter', () => setIsVisible(true))
    window.addEventListener('mouseleave', () => setIsVisible(false))
    
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mouseenter', () => setIsVisible(true))
      window.removeEventListener('mouseleave', () => setIsVisible(false))
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [cursorX, cursorY])

  // Only show on desktop devices with hover support
  if (isMobile) return null

  return null
}

export default CustomCursor