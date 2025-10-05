import React from 'react';
import logo from './assets/logo.png';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-ardena-dark">
      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex items-center">
            <img src={logo} alt="Ardena Logo" className="h-10 w-auto object-contain" />
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center px-4 min-h-screen">
        <div className="text-center max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="space-y-8">
            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Welcome to the Future of AI
            </h1>
          
            {/* Subtitle */}
            <p className="text-lg md:text-xl lg:text-2xl text-ardena-light-gray max-w-3xl mx-auto leading-relaxed">
              Create powerful AI agents without writing a single line of code. Use simple prompts and templates to build, customize, and deploy intelligent assistants anywhere - from web apps to Gmail, Telegram, and beyond.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              {/* Primary CTA Button */}
              <button className="group relative px-6 py-3 bg-ardena-cyan text-white font-bold rounded-xl text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                <span className="relative z-10 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-ardena-cyan to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
              
              {/* Secondary CTA Button */}
              <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-xl text-base transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
