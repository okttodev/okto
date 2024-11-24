import { Github, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Syawal okta
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          <div className="flex gap-4 mb-8">
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="/resume.pdf"
              className="px-6 py-3 border-2 border-purple-600 text-purple-600 dark:text-purple-400 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
            >
              Download CV
            </a>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/okttodev" className="social-link">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/oktodev" className="social-link">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="/resume.pdf" className="social-link">
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img
                src="https://i.postimg.cc/0QGnM7hT/IMG-20241124-232449-749.jpg?fit=crop&w=800&h=800"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}