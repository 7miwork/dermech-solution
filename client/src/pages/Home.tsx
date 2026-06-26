import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Send, Cpu, Zap, Target, Shield, ChevronDown, ArrowRight } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryForm);
    setInquiryForm({ name: '', email: '', message: '' });
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-primary/20' : 'bg-transparent'
      }`}>
        <div className="container">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Cpu className="w-6 h-6 text-background" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Dermech
                </span>
                <span className="text-xs text-primary/80 tracking-wider">SOLUTION</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                About
              </a>
              <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Services
              </a>
              <a href="#why-us" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Why Us
              </a>
              <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/80 text-background font-medium">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl">
              <div className="container py-6 flex flex-col gap-4">
                <a href="#about" className="text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
                <a href="#services" className="text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Services
                </a>
                <a href="#why-us" className="text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Why Us
                </a>
                <a href="#contact" className="text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                  Contact
                </a>
                <Button className="bg-primary hover:bg-primary/80 text-background font-medium mt-2">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">German Engineering Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Engineering the Future
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                of Industry
              </span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We identify complex industrial challenges and engineer precise, scalable solutions — built for tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/80 text-background font-medium px-8 group">
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-primary px-8">
                Get in Touch
              </Button>
            </div>

            <div className="mt-20 animate-bounce">
              <ChevronDown className="w-6 h-6 mx-auto text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                German Engineering,
                <br />
                <span className="text-primary">Global Impact</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Dermech Solution is a German engineering consultancy specializing in the analysis and resolution of complex industrial challenges. With a systematic approach, we combine technological expertise with strategic thinking.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Our mission is to empower businesses through innovative automation, process optimization, and future-ready infrastructure solutions.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 p-8 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 w-full">
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>20+</div>
                    <div className="text-sm text-foreground/70">Years Experience</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                    <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>100%</div>
                    <div className="text-sm text-foreground/70">German Quality</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                    <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>50+</div>
                    <div className="text-sm text-foreground/70">Projects Delivered</div>
                  </div>
                  <div className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10">
                    <div className="text-4xl font-bold text-accent mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>24/7</div>
                    <div className="text-sm text-foreground/70">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services / Solutions Section */}
      <section id="services" className="py-24 md:py-32 relative bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Solutions We <span className="text-primary">Deliver</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to drive your business forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Service 1 */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Industrial Process Optimization
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Analysis and redesign of inefficient manufacturing processes to maximize productivity and reduce waste.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Production line efficiency analysis
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Workflow automation & integration
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Quality control systems
                </li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Cpu className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Smart Automation & Integration
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Implementation of intelligent automation solutions for Industry 4.0, connecting systems and data streams.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  IoT sensor networks & monitoring
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  SCADA & control system integration
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  Digital twin implementation
                </li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Engineering Consulting
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Strategic consulting for technical challenges at the enterprise level, aligning technology with business goals.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Technology roadmap development
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Feasibility studies & risk assessment
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                  Vendor evaluation & selection
                </li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="group relative bg-card border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Future-Ready Infrastructure
              </h3>
              <p className="text-foreground/70 leading-relaxed mb-4">
                Planning and implementation of scalable, future-proof infrastructure for industrial operations.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  Cloud & edge computing architecture
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  Cybersecurity for industrial systems
                </li>
                <li className="flex items-start gap-2 text-sm text-foreground/70">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0" />
                  Scalable network design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Dermech Section */}
      <section id="why-us" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              Why Choose Us
            </div>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              The Dermech <span className="text-primary">Advantage</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Precision Engineering
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Every solution is crafted with meticulous attention to detail, ensuring optimal performance and reliability.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Future-Focused
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We stay ahead of industry trends, implementing cutting-edge technologies that keep you competitive.
              </p>
            </div>

            <div className="text-center p-8 rounded-2xl bg-card/50 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Proven Methodology
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Our systematic approach, refined over 20+ years, delivers consistent results across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                Contact Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Let's Start a <span className="text-primary">Conversation</span>
              </h2>
              <p className="text-foreground/70 text-lg">
                Have a project in mind? We'd love to hear about it.
              </p>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    Thank You!
                  </h3>
                  <p className="text-foreground/70">
                    We'll be in touch with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleInquirySubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryForm.name}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryForm.email}
                        onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                        className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-foreground placeholder:text-foreground/40"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      value={inquiryForm.message}
                      onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 text-foreground placeholder:text-foreground/40 h-32 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/80 text-background font-medium group"
                  >
                    Send Message
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background/80 backdrop-blur-md border-t border-primary/10 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Cpu className="w-4 h-4 text-background" />
              </div>
              <span className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Dermech Solution
              </span>
            </div>
            <p className="text-sm text-foreground/60">
              © {new Date().getFullYear()} Dermech Solution. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}