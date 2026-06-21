import { Github, Linkedin, Mail, MailCheck } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import Resume from './Resume'
import LeetcodeIcon from '../Icon/LeetcodeIcon'

const About = ({skills }) => {
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

  // Skill bar animation variants
  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: { duration: 1.2, ease: 'easeOut' },
    }),
  }

  // Icon animation variants
  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 },
    },
  }

  return (
    <div>
      <section id="about" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            About Me
          </motion.h2>
          
          <motion.div 
            className="grid md:grid-cols-2 gap-12 items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div variants={containerVariants}>
              <motion.p 
                className="text-lg text-gray-300 mb-6"
                variants={textVariants}
              >
                I'm a passionate full-stack developer creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
              </motion.p>
              <motion.p 
                className="text-lg text-gray-300 mb-8"
                variants={textVariants}
              >
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </motion.p>
              <motion.div className="flex space-x-4" variants={containerVariants}>
                <motion.a 
                  href="https://github.com/mohitsoni705"
                  target='_blank'
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Github className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="https://leetcode.com/u/mohitsoni705/"
                  target='_blank'
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <LeetcodeIcon className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="https://www.linkedin.com/in/mohit--soni/"
                  target='_blank'
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </motion.a>
                <motion.a 
                  href="mailto:mohitworkru@gmail.com"
                  target="_blank"
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                  variants={iconVariants}
                  whileHover="hover"
                >
                  <MailCheck className="w-6 h-6 text-white" />
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={containerVariants}
            >
              {skills.map((skill, index) => (
                <motion.div 
                  key={index} 
                  className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-gray-700"
                  variants={textVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center mb-3">
                    <motion.div 
                      className="p-2 bg-white/10 rounded-lg mr-4 border border-gray-600"
                      variants={iconVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-gradient-to-r from-white to-gray-400 h-2 rounded-full"
                      custom={skill.level}
                      variants={skillBarVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.5 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
         <div className='flex bg-red'><Resume/></div>
        </div>
      </section>
    </div>
  )
}

export default About
