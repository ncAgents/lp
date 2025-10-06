import React, { useState } from 'react';
import logo from './assets/logo.png';
import deonPhoto from './assets/deon.jpg';
import nimohPhoto from './assets/nimoh.jpg';
import alexPhoto from './assets/image.png';

const LandingPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const toggleContactModal = () => {
    setIsContactModalOpen(!isContactModalOpen);
    if (isContactModalOpen) {
      setContactForm({ name: '', email: '', message: '' });
      setSubmitStatus('idle');
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual email service)
    try {
      // Here you would integrate with your email service (EmailJS, Formspree, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      setSubmitStatus('success');
      setTimeout(() => {
        setIsContactModalOpen(false);
        setContactForm({ name: '', email: '', message: '' });
        setSubmitStatus('idle');
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleContactInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
        <div className="min-h-screen bg-ardena-dark overflow-x-hidden">
          {/* Navbar */}
          <nav className="fixed top-0 left-0 right-0 z-50 py-2 px-4 md:py-3 md:px-6 bg-ardena-dark/90 backdrop-blur-sm border-b border-ardena-cyan/10">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img src={logo} alt="Ardena Logo" className="h-6 md:h-8 w-auto object-contain" />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-ardena-light-gray hover:text-white transition-colors duration-300 font-light"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('pricing')}
                  className="text-ardena-light-gray hover:text-white transition-colors duration-300 font-light"
                >
                  Pricing
                </button>
                <button className="text-ardena-light-gray hover:text-white transition-colors duration-300 font-light">
                  Sign In
                </button>
                <button className="px-3 py-1 bg-ardena-cyan text-white rounded-lg hover:bg-ardena-cyan/80 transition-all duration-300 font-medium hover:shadow-lg hover:shadow-ardena-cyan/25 hover:scale-105 relative overflow-hidden">
                  <span className="relative z-10">Get Started</span>
                  <div className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #2BC7F4, #FFD700)'}}></div>
                </button>
              </div>

              {/* Mobile Hamburger Menu */}
              <div className="md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="p-2 text-ardena-light-gray hover:text-white transition-colors duration-300"
                  aria-label="Toggle mobile menu"
                >
                  <svg 
                    className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
              <div className="md:hidden absolute top-full left-0 right-0 bg-ardena-dark/95 backdrop-blur-sm border-b border-ardena-cyan/10">
                <div className="px-4 py-6 space-y-4">
                  <button 
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left text-ardena-light-gray hover:text-white transition-colors duration-300 font-light py-2"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => scrollToSection('pricing')}
                    className="block w-full text-left text-ardena-light-gray hover:text-white transition-colors duration-300 font-light py-2"
                  >
                    Pricing
                  </button>
                  <button className="block w-full text-left text-ardena-light-gray hover:text-white transition-colors duration-300 font-light py-2">
                    Sign In
                  </button>
                  <button className="w-full px-4 py-2 bg-ardena-cyan text-white rounded-lg hover:bg-ardena-cyan/80 transition-colors duration-300 font-medium text-center">
                    Get Started
                  </button>
                </div>
              </div>
            )}
          </nav>

          {/* Main Content */}
          <div className="px-4 md:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="min-h-screen flex items-center justify-center text-center pt-16 relative overflow-hidden">
            {/* Subtle Background Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Floating orbs */}
              <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-ardena-cyan/20 rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-ardena-gold/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-ardena-cyan/25 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-ardena-gold/20 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              
              {/* Subtle gradient orbs */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-radial from-ardena-cyan/5 via-transparent to-transparent rounded-full blur-3xl"></div>
              <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-radial from-ardena-gold/3 via-transparent to-transparent rounded-full blur-2xl"></div>
            </div>
            
            <div className="space-y-8 max-w-4xl mx-auto relative z-10">
              {/* Main Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight tracking-wide px-4">
                Welcome to the Future of AI
              </h1>
            
              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-ardena-light-gray max-w-3xl mx-auto leading-relaxed font-light px-4">
              Create powerful AI agents without writing a single line of code. Build, customize, and deploy them anywhere  from web apps to Gmail, Telegram, and beyond. Plus, join our marketplace to share or sell your agents, and turn your ideas into income.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 px-4">
                {/* Primary CTA Button */}
                <a 
                  href="https://youtu.be/v_L9ou-wz-Q?si=fe9xMtHcUkV_wJjv" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full sm:w-auto px-6 py-3 bg-ardena-cyan text-white font-medium rounded-xl text-sm sm:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-cyan/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1 inline-block text-center"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                    Watch Demo
                  </span>
                  <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #2BC7F4, #FFD700)'}}></div>
                </a>
                
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 relative">
              {/* Subtle gold accent line */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-ardena-gold opacity-30"></div>
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
                      <div className="absolute bottom-2 right-2 w-2 h-2 rounded-full opacity-60" style={{backgroundColor: '#FFD700'}}></div>
                    </div>
                  </div>

              {/* Feature 2 */}
              <div className="group relative p-8 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border-l-4 hover:shadow-xl hover:shadow-ardena-cyan/10 transition-all duration-500 hover:scale-105" style={{borderLeftColor: '#FFD700'}}>
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
                    Plug and Play Tools
                  </h3>
                  <p className="text-ardena-light-gray leading-relaxed font-light">
                    Easily connect data sources, APIs, and workflows with ready to use integrations.
                  </p>
                  <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full opacity-50" style={{backgroundColor: '#FFD700'}}></div>
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
                    Select from Gemini, DeepSeek, Llama, Mistral, Cohere and other leading AI models
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
              <div id="pricing" className="text-center py-16 md:py-32">
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
                <div className="group relative p-8 bg-ardena-gold border border-ardena-gold rounded-2xl hover:shadow-xl hover:shadow-ardena-gold/20 transition-all duration-500 hover:scale-105 md:transform md:scale-105" style={{backgroundColor: '#FFD700'}}>
                  
                  <div className="text-ardena-dark text-sm font-medium mb-3 tracking-wider uppercase">
                    Pro
                  </div>
                  <h3 className="text-2xl font-light text-ardena-dark mb-2 tracking-wide">
                    Everything in Free +
                  </h3>
                  <p className="text-ardena-dark/80 text-sm mb-8 font-light">
                    For growing teams and businesses
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Unlimited AI agents
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Advanced memory (50GB)
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Multi-agent collaboration
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Advanced analytics
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Priority email support
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Premium templates
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      API access
                    </div>
                    <div className="flex items-center text-ardena-dark/90 text-sm font-light">
                      <div className="w-1.5 h-1.5 bg-ardena-dark rounded-full mr-3"></div>
                      Custom integrations
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-ardena-dark text-white font-medium rounded-xl text-base transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-dark/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-dark focus:ring-offset-2 focus:ring-offset-ardena-gold">
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
                 <button className="group relative w-full sm:w-auto px-8 py-4 text-ardena-dark font-medium rounded-xl text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-ardena-gold/40 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-gold focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1" style={{backgroundColor: '#FFD700'}}>
                   <span className="relative z-10 flex items-center justify-center gap-3">
                     <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                     </svg>
                     Start Building Free
                   </span>
                   <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" style={{background: 'linear-gradient(to right, #FFD700, #B8860B)'}}></div>
                 </button>
                
                    {/* Secondary CTA Button */}
                    <a 
                      href="https://youtu.be/v_L9ou-wz-Q?si=fe9xMtHcUkV_wJjv" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white font-medium rounded-xl text-lg transition-all duration-300 hover:bg-white hover:text-ardena-dark hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-ardena-dark transform hover:-translate-y-1 inline-block text-center"
                    >
                      <span className="flex items-center justify-center gap-3">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Watch Demo
                      </span>
                    </a>
              </div>
              
                  {/* Trust Indicators */}
                  <div className="mt-12 pt-8 border-t border-ardena-cyan/20">
                    <p className="text-sm text-ardena-light-gray font-light mb-4">
                      Trusted by creators worldwide
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                      <div className="text-ardena-light-gray text-sm font-light flex items-center gap-2">
                        <span style={{color: '#FFD700'}}>✓</span> No credit card required
                      </div>
                      <div className="text-ardena-light-gray text-sm font-light flex items-center gap-2">
                        <span style={{color: '#FFD700'}}>✓</span> Free forever plan
                      </div>
                      <div className="text-ardena-light-gray text-sm font-light flex items-center gap-2">
                        <span style={{color: '#FFD700'}}>✓</span> Setup in minutes
                      </div>
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
                <button 
                  onClick={toggleContactModal}
                  className="text-ardena-cyan hover:text-white transition-colors duration-300 font-medium"
                >
                  Contact Support →
                </button>
              </div>
            </div>
          </div>

          {/* Social Proof Section */}
          <div className="py-16 md:py-24">
            <div className="max-w-6xl mx-auto px-4">
              {/* Section Heading */}
              <div className="text-center mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white mb-4 tracking-wide">
                  Trusted by Creators Worldwide
                </h2>
                <p className="text-ardena-light-gray text-base md:text-lg font-light">
                  Join thousands of users building the future with AI
                </p>
              </div>
              
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {/* Stat 1 */}
                    <div className="text-center group">
                      <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-6 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105 relative">
                        <div className="absolute top-2 right-2 w-1 h-1 rounded-full opacity-40" style={{backgroundColor: '#FFD700'}}></div>
                        <div className="text-2xl md:text-3xl font-light text-ardena-cyan mb-2">
                          50K+
                        </div>
                        <div className="text-white text-base font-light mb-1">
                          Active Users
                        </div>
                        <div className="text-ardena-light-gray text-xs font-light">
                          Building AI agents daily
                        </div>
                      </div>
                    </div>

                {/* Stat 2 */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-6 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl md:text-3xl font-light text-ardena-cyan mb-2">
                      1M+
                    </div>
                    <div className="text-white text-base font-light mb-1">
                      AI Agents Created
                    </div>
                    <div className="text-ardena-light-gray text-xs font-light">
                      Across all platforms
                    </div>
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="text-center group">
                  <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-6 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105">
                    <div className="text-2xl md:text-3xl font-light text-ardena-cyan mb-2">
                      99.9%
                    </div>
                    <div className="text-white text-base font-light mb-1">
                      Uptime
                    </div>
                    <div className="text-ardena-light-gray text-xs font-light">
                      Reliable and secure
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                {/* Testimonial 1 */}
                <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-5 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-ardena-cyan/30">
                      <img 
                        src={deonPhoto} 
                        alt="Deon Chinese" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium text-sm">Deon Chinese</div>
                      <div className="text-ardena-light-gray text-xs">AI Engineer</div>
                    </div>
                  </div>
                  <p className="text-ardena-light-gray leading-relaxed font-light text-xs">
                    "Ardena transformed how we handle customer support. Built our first agent in 10 minutes and it's been handling 80% of our queries ever since."
                  </p>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-5 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-ardena-cyan/30">
                      <img 
                        src={nimohPhoto} 
                        alt="Amani Nimoh" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium text-sm">Amani Nimoh</div>
                      <div className="text-ardena-light-gray text-xs">Startup Founder</div>
                    </div>
                  </div>
                  <p className="text-ardena-light-gray leading-relaxed font-light text-xs">
                    "No-code AI agents? Game changer. We deployed to Discord and Slack in one day. Our community engagement increased by 300%."
                  </p>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-2xl p-5 hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-ardena-cyan/30">
                      <img 
                        src={alexPhoto} 
                        alt="Alex Thompson" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-white font-medium text-sm">Alex Thompson</div>
                      <div className="text-ardena-light-gray text-xs">Developer</div>
                    </div>
                  </div>
                  <p className="text-ardena-light-gray leading-relaxed font-light text-xs">
                    "The API integration is seamless. Built a custom workflow that connects our CRM to our AI agent. Saved us weeks of development time."
                  </p>
                </div>
              </div>

              {/* Company Logos */}
              <div className="text-center">
                <p className="text-ardena-light-gray text-sm font-light mb-6">
                  Trusted by teams at
                </p>
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 opacity-60">
                  {/* Logo Placeholders - You can replace these with actual company logos */}
                  <div className="text-white text-sm font-light px-3 py-2 border border-ardena-cyan/30 rounded-lg">
                    TechCorp
                  </div>
                  <div className="text-white text-sm font-light px-3 py-2 border border-ardena-cyan/30 rounded-lg">
                    InnovateLab
                  </div>
                  <div className="text-white text-sm font-light px-3 py-2 border border-ardena-cyan/30 rounded-lg">
                    FutureAI
                  </div>
                  <div className="text-white text-sm font-light px-3 py-2 border border-ardena-cyan/30 rounded-lg">
                    StartupXYZ
                  </div>
                  <div className="text-white text-sm font-light px-3 py-2 border border-ardena-cyan/30 rounded-lg">
                    DigitalFlow
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <footer className="py-12 border-t border-ardena-cyan/20">
            <div className="max-w-6xl mx-auto px-4">
              <div className="flex flex-col items-center space-y-6">
                {/* Logo */}
                <div className="flex items-center">
                  <img src={logo} alt="Ardena Logo" className="h-8 w-auto object-contain" />
                </div>
                
                {/* Social Links */}
                <div className="flex items-center space-x-6">
                  {/* LinkedIn */}
                  <a 
                    href="https://www.linkedin.com/in/ardena-ai-077029384?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-xl hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5 text-ardena-light-gray group-hover:text-ardena-cyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>

                  {/* Twitter */}
                  <a 
                    href="https://x.com/pinakle_org?t=QKPkdQv93nJgaQAZVCmyvA&s=09" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-xl hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <svg className="w-5 h-5 text-ardena-light-gray group-hover:text-ardena-cyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>

                  {/* Reddit */}
                  <a 
                    href="https://www.reddit.com/u/Deongideon_/s/3hle5mdWfx" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-xl hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-110"
                    aria-label="Reddit"
                  >
                    <svg className="w-5 h-5 text-ardena-light-gray group-hover:text-ardena-cyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
                    </svg>
                  </a>

                  {/* Gmail */}
                  <a 
                    href="mailto:pinakleorgltd@gmail.com" 
                    className="group p-3 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-xl hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-110"
                    aria-label="Gmail"
                  >
                    <svg className="w-5 h-5 text-ardena-light-gray group-hover:text-ardena-cyan transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h.91L12 10.09l9.455-6.269h.909c.904 0 1.636.732 1.636 1.636z"/>
                    </svg>
                  </a>

                  {/* Hugging Face */}
                  <a 
                    href="https://huggingface.co/chinesemusk" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-gradient-to-br from-ardena-dark/50 to-ardena-dark border border-ardena-cyan/20 rounded-xl hover:border-ardena-cyan/40 transition-all duration-300 hover:scale-110"
                    aria-label="Hugging Face"
                  >
                    <div className="w-5 h-5 text-ardena-light-gray group-hover:text-ardena-cyan transition-colors duration-300 text-xl flex items-center justify-center">
                      🤗
                    </div>
                  </a>
                </div>

                {/* Copyright */}
                <div className="text-center">
                  <p className="text-ardena-light-gray text-sm font-light">
                    © 2024 Ardena AI. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>

      {/* Floating AI Assistant Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button className="group relative w-14 h-14 bg-ardena-cyan rounded-full shadow-lg hover:shadow-xl hover:shadow-ardena-cyan/40 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark">
          {/* AI Chat Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
            </svg>
          </div>
          
          {/* Subtle pulse animation */}
          <div className="absolute inset-0 rounded-full bg-ardena-cyan opacity-20 animate-ping"></div>
          
          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-ardena-dark border border-ardena-cyan/20 rounded-lg text-white text-sm font-light whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            Ask AI Assistant
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-ardena-dark"></div>
          </div>
        </button>
      </div>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-ardena-dark border border-ardena-cyan/20 rounded-2xl p-8 max-w-md w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-light text-white">Contact Support</h3>
              <button
                onClick={toggleContactModal}
                className="text-ardena-light-gray hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-green-400 text-sm font-light">
                  ✓ Message sent successfully! We'll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-red-400 text-sm font-light">
                  ✗ Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}

            {/* Contact Form */}
            <form onSubmit={handleContactSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={contactForm.name}
                  onChange={handleContactInputChange}
                  required
                  className="w-full px-4 py-3 bg-ardena-dark/50 border border-ardena-cyan/20 rounded-xl text-white placeholder-ardena-light-gray focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:border-transparent transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={contactForm.email}
                  onChange={handleContactInputChange}
                  required
                  className="w-full px-4 py-3 bg-ardena-dark/50 border border-ardena-cyan/20 rounded-xl text-white placeholder-ardena-light-gray focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={contactForm.message}
                  onChange={handleContactInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 bg-ardena-dark/50 border border-ardena-cyan/20 rounded-xl text-white placeholder-ardena-light-gray focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-ardena-cyan text-white font-medium rounded-xl transition-all duration-300 hover:bg-ardena-cyan/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ardena-cyan focus:ring-offset-2 focus:ring-offset-ardena-dark disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            {/* Alternative Contact */}
            <div className="mt-6 pt-6 border-t border-ardena-cyan/20">
              <p className="text-ardena-light-gray text-sm font-light text-center">
                Or email us directly at{' '}
                <a 
                  href="mailto:pinakleorgltd@gmail.com" 
                  className="text-ardena-cyan hover:text-white transition-colors duration-300"
                >
                  pinakleorgltd@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;
