import React from 'react'
import Resume from './Resume'

const Contact = ({setIsHovering}) => {
  return (
    <div>
         <section id="contact" className="py-20 bg-black/50 relative">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            Get In Touch
          </h2>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-300 text-center mb-12">
              I'm always interested in hearing about new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full p-4 bg-white/5 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors resize-none"
                ></textarea>
                <button
                  onClick={() => alert('Message sent! (Demo only)')}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="w-full py-4 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg hover:from-gray-600 hover:to-gray-900 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-600"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Contact
