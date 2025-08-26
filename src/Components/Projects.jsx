import { ExternalLinkIcon, Github } from 'lucide-react'
import React from 'react'
import projects from '../../Api/project.json'

const Projects = ({setIsHovering}) => {
  return (
    <div>
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                onMouseLeave={() => setIsHovering(false)}
                className="bg-white/5 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl group border border-gray-700"
              >
                <div className="h-48 bg-gradient-to-br from-gray-800/50 to-black/50 flex items-center justify-center overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      onMouseLeave={() => setIsHovering(false)}
                      className="flex items-center text-white hover:text-gray-300 transition-colors"
                    >
                      <ExternalLinkIcon className="w-4 h-4 mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.github}
                      onMouseLeave={() => setIsHovering(false)}
                      className="flex items-center text-gray-400 hover:text-gray-200 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Projects
