import { Github, Linkedin, Mail, MailCheck } from 'lucide-react'
import React from 'react'

const About = ({ setIsHovering , skills }) => {
  return (
    <div>
      <section id="about" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-300 mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions that make a difference. I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/mohitsoni705"  target='_blank'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                >
                  <Github className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/mohit--soni/" target='_blank'
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                >
                  <Linkedin className="w-6 h-6 text-white" />
                </a>
                <a 
                  href="mailto:mohitworkru@gmail.com" target="_blank"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors border border-gray-700"
                >
                  <MailCheck className="w-6 h-6 text-white" />
                </a>
              </div>
            </div>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={index} className="bg-white/10 p-6 rounded-lg backdrop-blur-sm border border-gray-700">
                  <div className="flex items-center mb-3">
                    <div className="p-2 bg-white/10 rounded-lg mr-4 border border-gray-600">
                      {skill.icon}
                    </div>
                    <h3 className="text-white font-semibold">{skill.name}</h3>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-white to-gray-400 h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
