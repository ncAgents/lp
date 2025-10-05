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
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center text-center">
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Main Title */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white leading-tight tracking-wide">
                Welcome to the Future of AI
              </h1>
            
              {/* Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-ardena-light-gray max-w-3xl mx-auto leading-relaxed font-light">
                Create powerful AI agents without writing a single line of code. Use simple prompts and templates to build, customize, and deploy intelligent assistants anywhere - from web apps to Gmail, Telegram, and beyond.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
                {/* Primary CTA Button */}
                <button className="group relative px-6 py-3 bg-ardena-cyan text-white font-medium rounded-xl text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-ardena-cyan to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                {/* Secondary CTA Button */}
                <button className="px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl text-base transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center py-32">
            {/* Features Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-16 tracking-wide">
              What Makes Ardena Different?
            </h2>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="group p-8 bg-ardena-dark border border-ardena-cyan/20 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-ardena-cyan/40">
                <div className="w-16 h-16 bg-ardena-cyan rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-white mb-4 tracking-wide">
                  No-Code Agent Builder
                </h3>
                <p className="text-ardena-light-gray leading-relaxed font-light">
                  Create powerful AI agents without writing a single line of code.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group p-8 bg-ardena-dark border border-ardena-cyan/20 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-ardena-cyan/40">
                <div className="w-16 h-16 bg-ardena-cyan rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-white mb-4 tracking-wide">
                  Deploy Anywhere
                </h3>
                <p className="text-ardena-light-gray leading-relaxed font-light">
                  Publish your agents instantly to Discord, Slack, or the Web.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group p-8 bg-ardena-dark border border-ardena-cyan/20 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 hover:border-ardena-cyan/40 md:col-span-2 lg:col-span-1">
                <div className="w-16 h-16 bg-ardena-cyan rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-light text-white mb-4 tracking-wide">
                  Plug-and-Play Tools
                </h3>
                <p className="text-ardena-light-gray leading-relaxed font-light">
                  Easily connect data sources, APIs, and workflows with ready-to-use integrations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
