import React from 'react'
import { m } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const StaggerContainer = ({ 
  children, 
  className = '', 
  staggerDelay = 0.1,
  threshold = 0.1 
}) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay
      }
    }
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0.25, 0.75]
      }
    }
  }

  return (
    <m.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <m.div key={index} variants={itemVariants}>
          {child}
        </m.div>
      ))}
    </m.div>
  )
}

export default StaggerContainer