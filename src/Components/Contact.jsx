import React from 'react'
import { motion } from 'framer-motion'
import Resume from './Resume'

const Contact = () => {
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

  // Form input animation variants
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    focus: {
      scale: 1.02,
      transition: { duration: 0.2 },
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
    tap: {
      scale: 0.95,
    },
  }

  return (
    <div>
         <section id="contact" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Get In Touch
          </motion.h2>

          <motion.div 
            className="max-w-2xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p 
              className="text-lg text-gray-300 text-center mb-12"
              variants={textVariants}
            >
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's create something amazing together!
            </motion.p>

            <motion.div 
              className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700"
              variants={containerVariants}
            >
              <motion.div className="space-y-6" variants={containerVariants}>
                <motion.div 
                  className="grid md:grid-cols-2 gap-6"
                  variants={containerVariants}
                >
                  <motion.input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                  <motion.input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                    variants={inputVariants}
                    whileFocus="focus"
                  />
                </motion.div>

                <motion.input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  variants={inputVariants}
                  whileFocus="focus"
                />

                <motion.textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                  variants={inputVariants}
                  whileFocus="focus"
                ></motion.textarea>

                <motion.button
                  onClick={() => alert('Message sent! (Demo only)')}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full py-4 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg hover:from-gray-600 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  Send Message
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Contact
