import { ExternalLinkIcon, Github } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion'
import projects from '../../Api/project.json'
import Resume from './Resume'

const Projects = ({setIsHovering}) => {
  // Container animation variants for staggered effect
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

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  }

  // Image animation variants
  const imageVariants = {
    hidden: { scale: 1 },
    hover: { scale: 1.1 },
  }

  // Title animation variants
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div>
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
         
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Featured Projects
          </motion.h2>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group border border-gray-700"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.div 
                  className="h-48 bg-gradient-to-br from-gray-800/50 to-black/50 flex items-center justify-center overflow-hidden"
                  variants={imageVariants}
                  whileHover="hover"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>

                <motion.div 
                  className="p-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <motion.h3 
                    className="text-xl font-bold text-white mb-3"
                    variants={titleVariants}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-gray-600"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex space-x-4"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={project.live}
                      onMouseLeave={() => setIsHovering(false)}
                      className="flex items-center text-white hover:text-gray-300 transition-colors"
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                    >
                      <ExternalLinkIcon className="w-4 h-4 mr-1" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.github}
                      onMouseLeave={() => setIsHovering(false)}
                      className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                      target="_blank"
                      whileHover={{ scale: 1.05 }}
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default Projects
