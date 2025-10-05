import React, { useState } from 'react';
import logo from './assets/logo.png';

const LandingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
        <div className="min-h-screen bg-ardena-dark overflow-x-hidden">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 right-0 z-50 py-2 px-4 md:py-3 md:px-6 bg-ardena-dark/90 backdrop-blur-sm border-b border-ardena-cyan/10">
            <div className="max-w-lg mx-auto md:mx-0 md:ml-2 flex items-center justify-start">
              <div className="flex items-center">
                <img src={logo} alt="Ardena Logo" className="h-6 md:h-8 w-auto object-contain" />
              </div>
            </div>
          </nav>

          {/* Main Content */}
          <div className="px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center text-center pt-16">
            <div className="space-y-8 max-w-4xl mx-auto">
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-wide px-4">
                Welcome to the Future of AI
              </h1>
            
              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ardena-light-gray max-w-3xl mx-auto leading-relaxed font-light px-4">
                Create powerful AI agents without writing a single line of code. Use simple prompts and templates to build, customize, and deploy intelligent assistants anywhere - from web apps to Gmail, Telegram, and beyond.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
                {/* Primary CTA Button */}
                <button className="group relative w-full sm:w-auto px-6 py-3 bg-ardena-cyan text-white font-medium rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-ardena-cyan to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                {/* Secondary CTA Button */}
                <button className="w-full sm:w-auto px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl text-sm sm:text-base transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="text-center py-16 md:py-32">
            {/* Features Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-12 md:mb-16 tracking-wide px-4">
              What Makes Ardena Different?
            </h2>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4">
              {/* Feature 1 */}
              <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ardena-cyan/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    01
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                    No-Code Agent Builder
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Create powerful AI agents without writing a single line of code.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ardena-cyan/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    02
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                    Deploy Anywhere
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Publish your agents instantly to Discord, Slack, or the Web.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105 md:col-span-2 lg:col-span-1">
                <div className="absolute top-0 right-0 w-32 h-32 bg-ardena-cyan/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="relative">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    03
                  </div>
                  <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                    Plug-and-Play Tools
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Easily connect data sources, APIs, and workflows with ready-to-use integrations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="text-center py-16 md:py-32">
            {/* Section Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-12 md:mb-20 tracking-wide px-4">
              How It Works
            </h2>
            
            {/* Steps Container */}
            <div className="max-w-7xl mx-auto px-4">
              {/* Desktop: Responsive Grid */}
              <div className="hidden md:block">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 relative">
                  {/* Connecting Lines - Only show on XL screens */}
                  <div className="hidden xl:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-ardena-cyan/20 via-ardena-cyan/40 to-ardena-cyan/20 transform -translate-y-1/2 z-0"></div>
                  
                  {/* Step 1 */}
                  <div className="relative z-10 group">
                    <div className="p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/30 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                      <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                        Step 01
                      </div>
                      <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                        Start with a Prompt
                      </h3>
                      <p className="text-ardena-light-gray text-sm leading-relaxed font-light">
                        Describe what you want your AI agent to do in simple terms
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative z-10 group">
                    <div className="p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/30 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                      <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                        Step 02
                      </div>
                      <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                        Choose Your Model
                      </h3>
                      <p className="text-ardena-light-gray text-sm leading-relaxed font-light">
                        Select from Gemini, DeepSeek, Llama, and other leading AI models
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="relative z-10 group">
                    <div className="p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/30 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                      <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                        Step 03
                      </div>
                      <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                        Review & Test
                      </h3>
                      <p className="text-ardena-light-gray text-sm leading-relaxed font-light">
                        Test your agent in our playground to ensure it works as intended
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="relative z-10 group">
                    <div className="p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/30 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                      <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                        Step 04
                      </div>
                      <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                        Add Knowledge
                      </h3>
                      <p className="text-ardena-light-gray text-sm leading-relaxed font-light">
                        Upload PDFs, TXT files, or URLs to add your knowledge base
                      </p>
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="relative z-10 group">
                    <div className="p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/30 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                      <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                        Step 05
                      </div>
                      <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                        Deploy Anywhere
                      </h3>
                      <p className="text-ardena-light-gray text-sm leading-relaxed font-light">
                        Launch your agent to Discord, Slack, Web, or any platform you choose
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: Vertical Stack */}
              <div className="md:hidden space-y-8">
                {/* Step 1 */}
                <div className="group relative p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Step 01
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                    Start with a Prompt
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Describe what you want your AI agent to do in simple terms
                  </p>
                </div>

                {/* Step 2 */}
                <div className="group relative p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Step 02
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                    Choose Your Model
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Select from Gemini, DeepSeek, Llama, and other leading AI models
                  </p>
                </div>

                {/* Step 3 */}
                <div className="group relative p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Step 03
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                    Review & Test
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Test your agent in our playground to ensure it works as intended
                  </p>
                </div>

                {/* Step 4 */}
                <div className="group relative p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Step 04
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                    Add Knowledge
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Upload PDFs, TXT files, or URLs to add your knowledge base
                  </p>
                </div>

                {/* Step 5 */}
                <div className="group relative p-6 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 border-ardena-cyan hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Step 05
                  </div>
                  <h3 className="text-lg font-light text-white mb-3 tracking-wide">
                    Deploy Anywhere
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Launch your agent to Discord, Slack, Web, or any platform you choose
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Section */}
          <div className="text-center py-16 md:py-32">
            {/* Section Heading */}
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white mb-12 md:mb-20 tracking-wide px-4">
              Simple, Transparent Pricing
            </h2>
            
            {/* Pricing Cards */}
            <div className="max-w-6xl mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {/* Free Tier */}
                <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Free
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                    Get Started
                  </h3>
                  <p className="text-ardena-light-gray text-sm mb-8 font-light">
                    Perfect for trying out Ardena
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Up to 3 AI agents
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Basic memory (1GB)
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Community support
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Basic templates
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Standard integrations
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl text-base transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark">
                    Get Started Free
                  </button>
                </div>

                {/* Pro Tier */}
                <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/40 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/20 transition-all duration-500 hover:scale-105 md:transform md:scale-105">
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-ardena-cyan text-ardena-dark px-4 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                      Most Popular
                    </div>
                  </div>
                  
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Pro
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                    Everything in Free +
                  </h3>
                  <p className="text-ardena-light-gray text-sm mb-8 font-light">
                    For growing teams and businesses
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Unlimited AI agents
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Advanced memory (50GB)
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Multi-agent collaboration
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Advanced analytics
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Priority email support
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Premium templates
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      API access
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Custom integrations
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-ardena-cyan text-white font-medium rounded-xl text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark">
                    Start Pro Trial
                  </button>
                </div>

                {/* Enterprise Tier */}
                <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105">
                  <div className="text-ardena-cyan text-sm font-medium mb-3 tracking-wider uppercase">
                    Enterprise
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 tracking-wide">
                    Everything in Pro +
                  </h3>
                  <p className="text-ardena-light-gray text-sm mb-8 font-light">
                    For large organizations
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Unlimited everything
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Unlimited memory
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Advanced collaboration
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Custom analytics
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      24/7 phone support
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Custom templates
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Full API access
                    </div>
                    <div className="flex items-center text-ardena-light-gray text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-cyan rounded-full mr-3"></div>
                      Enterprise security
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-transparent border-2 border-white text-white font-medium rounded-xl text-base transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Final CTA Section */}
          <div className="text-center py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4">
              {/* CTA Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 tracking-wide">
                Ready to Build Your First AI Agent?
              </h2>
              
              {/* CTA Subtitle */}
              <p className="text-base md:text-lg lg:text-xl text-ardena-light-gray mb-12 max-w-2xl mx-auto leading-relaxed font-light">
                Join thousands of creators who are already building intelligent agents without writing a single line of code.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* Primary CTA Button */}
                <button className="group relative w-full sm:w-auto px-8 py-4 bg-ardena-cyan text-white font-medium rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                    </svg>
                    Start Building Free
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-ardena-cyan to-blue-400 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                {/* Secondary CTA Button */}
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1">
                  <span className="flex items-center justify-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo
                  </span>
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="mt-12 pt-8 border-t border-ardena-cyan/20">
                <p className="text-sm text-ardena-light-gray font-light mb-4">
                  Trusted by creators worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  <div className="text-ardena-light-gray text-sm font-light">✓ No credit card required</div>
                  <div className="text-ardena-light-gray text-sm font-light">✓ Free forever plan</div>
                  <div className="text-ardena-light-gray text-sm font-light">✓ Setup in minutes</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="py-16 md:py-24">
            <div className="max-w-4xl mx-auto px-4">
              {/* FAQ Heading */}
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                  Frequently Asked Questions
                </h2>
                <p className="text-ardena-light-gray text-base md:text-lg font-light">
                  Everything you need to know about Ardena
                </p>
              </div>
              
              {/* FAQ Items */}
              <div className="space-y-4">
                {/* FAQ 1 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(0)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>How quickly can I build my first AI agent?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 0 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 0 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        You can build your first AI agent in under 5 minutes! Simply describe what you want your agent to do, choose from our pre-built templates, and deploy. No coding required.
                      </p>
                    )}
                  </button>
                </div>

                {/* FAQ 2 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(1)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>What AI models are supported?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 1 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 1 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        We support all major AI models including GPT-4, Claude, Gemini, Llama, and DeepSeek. You can easily switch between models or use multiple models for different agents.
                      </p>
                    )}
                  </button>
                </div>

                {/* FAQ 3 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(2)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>Can I export my agents to other platforms?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 2 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 2 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        Yes! You can deploy your agents to Discord, Slack, Telegram, web apps, or export them as APIs. We also provide webhooks and integration tools for custom deployments.
                      </p>
                    )}
                  </button>
                </div>

                {/* FAQ 4 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(3)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>Is there really a free plan?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 3 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 3 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        Absolutely! Our free plan includes up to 3 AI agents, 1GB of memory, and basic templates. No credit card required, and you can upgrade anytime.
                      </p>
                    )}
                  </button>
                </div>

                {/* FAQ 5 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(4)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>What integrations are available?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 4 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 4 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        We offer 50+ integrations including Google Workspace, Microsoft 365, Notion, Airtable, Zapier, and custom API connections. More integrations are added monthly.
                      </p>
                    )}
                  </button>
                </div>

                {/* FAQ 6 */}
                <div className="group bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl overflow-hidden hover:border-ardena-cyan/40 transition-all duration-300">
                  <button 
                    onClick={() => toggleFAQ(5)}
                    className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark rounded-2xl"
                  >
                    <h3 className="text-lg font-light text-white mb-3 flex items-center justify-between">
                      <span>How secure is my data?</span>
                      <svg 
                        className={`w-5 h-5 text-ardena-cyan transition-transform duration-300 ${openFAQ === 5 ? 'rotate-180' : ''}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </h3>
                    {openFAQ === 5 && (
                      <p className="text-ardena-light-gray leading-relaxed font-light animate-fadeIn">
                        Your data is encrypted in transit and at rest. We're SOC 2 compliant and follow industry best practices. Enterprise customers get additional security features and dedicated support.
                      </p>
                    )}
                  </button>
                </div>
              </div>
              
              {/* Contact Support */}
              <div className="text-center mt-12 pt-8 border-t border-ardena-cyan/20">
                <p className="text-ardena-light-gray text-sm font-light mb-4">
                  Still have questions?
                </p>
                <button className="text-ardena-cyan hover:text-white transition-colors duration-300 font-medium">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
