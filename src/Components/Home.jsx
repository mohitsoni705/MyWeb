import { ChevronDown } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'

const Home = ({scrollToSection}) => {
  // Container animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  // Text animation variants
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  // Button animation variants
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
  }

  // Scroll indicator animation
  const scrollIndicatorVariants = {
    animate: {
      y: [0, 10, 0],
      transition: { duration: 2, repeat: Infinity },
    },
  }

  return (
    <div>
       <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-900/60"></div>
        <motion.div 
          className="container mx-auto px-6 text-center z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={textVariants}>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-white mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span variants={textVariants}>
                Hi, I'm{' '}
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                variants={textVariants}
              >
                Mohit Soni
              </motion.span>
            </motion.h1>
          </motion.div>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            variants={textVariants}
          >
            Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={containerVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg hover:from-gray-600 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
              variants={buttonVariants}
              whileHover="hover"
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              variants={buttonVariants}
              whileHover="hover"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          variants={scrollIndicatorVariants}
          animate="animate"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </section>

    </div>
  )
}

export default Home
