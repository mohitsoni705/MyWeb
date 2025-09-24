import { ChevronDown } from 'lucide-react'
import React from 'react'

const Home = ({setIsHovering,scrollToSection}) => {
  return (
    <div>
       <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-gray-900/60"></div>
        <div className="container mx-auto px-6 text-center z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Mohit Soni
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Full Stack Developer passionate about creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
      
                onMouseLeave={() => setIsHovering(false)}
                className="px-8 py-4 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg hover:from-gray-600 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                onMouseLeave={() => setIsHovering(false)}
                className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-black transition-all duration-300"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

    </div>
  )
}

export default Home
