import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Send, Cpu, Zap, Target, Shield, ChevronDown, ArrowRight, Settings, Compass, GraduationCap, Factory, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from '@emailjs/browser';
import logo from '@/assets/logo.jpg';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setFormSubmitted(true);
      setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err) {
      console.error(err);
      alert('Something went wrong. Please try again.');
    } finally {
      setSending(false);
    }
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
              <img src={logo} alt="DerMech Solution" className="h-10 w-10 rounded-full object-cover" style={{ mixBlendMode: "lighten", filter: "brightness(1.1) contrast(1.1)" }} />
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>DerMech</span>
                <span className="text-xs text-primary/80 tracking-wider">SOLUTION</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['about', 'services', 'process', 'education', 'industries', 'contact'].map((item) => (
                <button key={item} onClick={() => scrollTo(item)} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors capitalize">
                  {item === 'industries' ? 'Industries' : item}
                </button>
              ))}
              <Button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/80 text-background font-medium">Get Started</Button>
            </div>

            <button className="md:hidden text-foreground" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden border-t border-primary/20 bg-background/95 backdrop-blur-xl">
              <div className="container py-6 flex flex-col gap-4">
                {['about', 'services', 'process', 'education', 'industries', 'contact'].map((item) => (
                  <button key={item} onClick={() => scrollTo(item)} className="text-sm font-medium text-foreground/80 hover:text-primary">
                    {item === 'industries' ? 'Industries' : item}
                  </button>
                ))}
                <Button onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/80 text-background font-medium mt-2">Get Started</Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }} />
        </div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-primary font-medium">German Engineering Excellence</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Engineering the Industry
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-2xl mx-auto leading-relaxed">
              We identify complex industrial challenges and engineer precise, scalable solutions — built for tomorrow.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => scrollTo('contact')} className="bg-primary hover:bg-primary/80 text-background font-medium px-8 group">
                Schedule a Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo('services')} className="border-primary/50 hover:bg-primary/10 text-primary px-8">
                Explore Services
              </Button>
            </div>

            <div className="mt-20 animate-bounce">
              <ChevronDown className="w-6 h-6 mx-auto text-primary/50" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                German Engineering,<br /><span className="text-primary">Global Impact</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                DerMech Solution was founded by German engineer Michael Lison. With more than 20 years of international industrial experience, Michael has successfully delivered projects in machine tools, industrial automation, plastic injection molding, automated packaging systems, and industrial fire protection systems.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                Our mission is to empower businesses through innovative automation, process optimization, and future-ready infrastructure solutions.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {['Mechanical Engineering', 'Industrial Automation', 'CAD/CAM Design', 'Software Development', 'System Integration'].map((tag) => (
                  <span key={tag} className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {['CE Compliance', 'DIN Standards', '5S Lean Manufacturing'].map((badge) => (
                  <span key={badge} className="px-4 py-2 text-sm font-medium rounded-lg bg-primary/10 border border-primary/20 text-primary">{badge}</span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: '20+', label: 'Years Experience' },
                { value: '50+', label: 'Projects Delivered' },
                { value: '10+', label: 'Industries Served' },
                { value: '3', label: 'Continents' },
              ].map((stat) => (
                <div key={stat.value} className="bg-card/80 backdrop-blur-sm rounded-xl p-6 border border-primary/10 text-center">
                  <div className="text-4xl font-bold text-primary mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{stat.value}</div>
                  <div className="text-sm text-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 relative bg-card/30">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
        <div className="container relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">Our Services</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Solutions We <span className="text-primary">Deliver</span></h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">End-to-end engineering solutions that create measurable value.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Settings,
                title: 'Industrial Automation Consulting',
                text: 'We help manufacturers increase efficiency, reduce labor costs, and optimize production processes.',
                items: ['Production Line Optimization', 'Process Automation', 'Equipment Modernization', 'Energy Efficiency Solutions', 'Lean Manufacturing', 'Factory Digitalization'],
              },
              {
                icon: Compass,
                title: 'Engineering Design',
                text: 'From concept development to full-scale production, comprehensive engineering design services.',
                items: ['Mechanical Design', 'CAD Engineering', 'Prototype Development', 'Electrical Integration', 'Automation Programming', 'Industrial Software Development'],
                langs: 'Languages: C/C++ | Python | Java | JavaScript',
                tools: 'Software: AutoCAD | Fusion 360 | SolidWorks',
              },
              {
                icon: Shield,
                title: 'International Engineering Standards',
                subtitle: 'CE • DIN • 5S',
                text: 'One of the greatest strengths of German engineering is standardization.',
                items: ['CE Safety Compliance', 'DIN Engineering Standards', '5S Lean Manufacturing', 'Quality Improvement', 'Risk Assessment', 'Technical Documentation'],
              },
            ].map((service, idx) => (
              <div key={idx} className="group relative bg-card/80 border border-primary/20 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{service.title}</h3>
                {service.subtitle && <p className="text-sm text-primary mb-2">{service.subtitle}</p>}
                <p className="text-foreground/70 leading-relaxed mb-4">{service.text}</p>
                <ul className="space-y-2 mb-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                {service.langs && <p className="text-xs text-foreground/60">{service.langs}</p>}
                {service.tools && <p className="text-xs text-foreground/60">{service.tools}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">How We Work</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>A Proven <span className="text-primary">Process</span></h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">From consultation to continuous improvement — a structured engineering approach.</p>
          </div>

          <div className="grid md:grid-cols-6 gap-6">
            {[
              { title: 'Technical Consultation', desc: 'Understanding your challenges and project goals.' },
              { title: 'Site Assessment', desc: 'Analyzing your existing systems and production environment.' },
              { title: 'Engineering Analysis', desc: 'Identifying opportunities for optimization.' },
              { title: 'Solution Design', desc: 'Developing a customized engineering strategy.' },
              { title: 'Implementation', desc: 'Executing and integrating the proposed solution.' },
              { title: 'Continuous Improvement', desc: 'Providing ongoing optimization and long-term support.' },
            ].map((step, idx) => (
              <div key={idx} className="relative text-center">
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{idx + 1}</span>
                </div>
                <h4 className="font-bold mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{step.title}</h4>
                <p className="text-xs text-foreground/70">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24 md:py-32 relative bg-card/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">Education</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Inspiring Future <span className="text-primary">Engineers</span></h2>
              <p className="text-foreground/70 text-lg leading-relaxed mb-6">
                At DerMech Solution, we believe engineering knowledge should be shared with the next generation. Michael Lison has many years of experience mentoring young engineers through practical, project-based learning.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic text-foreground/80 mb-6">"The best engineers are built by creating, not memorizing."</blockquote>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {['Robotics Fundamentals', 'Mechanical Design', 'Engineering Programming', 'Arduino & Raspberry Pi', 'STEM Project-Based Learning', 'Engineering Competition Coaching', 'Innovation & Design Thinking', 'Industrial Safety Basics'].map((topic) => (
                <div key={topic} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 text-sm text-center">
                  {topic}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section id="founder" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl font-bold text-background" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>ML</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Michael Lison</h2>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {['German Engineer', 'Industrial Consultant', 'Automation Specialist', 'Software Developer', 'Engineering Educator'].map((tag) => (
                <span key={tag} className="px-3 py-1 text-xs rounded-full border border-primary/30 text-primary">{tag}</span>
              ))}
            </div>
            <p className="text-foreground/70 text-lg mb-8">20+ Years of Industrial Experience</p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-foreground/70">
              {['Mechanical Engineering', 'Industrial Automation', 'Software Development', 'CE & DIN Standards', '5S Lean Manufacturing', 'International Project Management'].map((skill) => (
                <div key={skill} className="bg-card/50 rounded-lg p-3 border border-primary/10">{skill}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-24 md:py-32 relative bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">Industries We Serve</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Sectors We <span className="text-primary">Transform</span></h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">Supporting businesses across a wide range of sectors.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Semiconductor Manufacturing',
              'Electronics Manufacturing',
              'Machine Tools',
              'Plastic Injection Molding',
              'Automated Packaging',
              'Food Processing',
              'Drone Technology',
              'Precision Engineering',
              'Industrial Machinery',
              'Research & Development',
              'Startups',
              'Smart Factory / Industry 4.0',
            ].map((industry) => (
              <div key={industry} className="bg-card/80 backdrop-blur-sm rounded-xl p-4 border border-primary/10 text-sm text-center hover:border-primary/30 transition-colors">
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 relative">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">Contact Us</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Let's Build the <span className="text-primary">Future Together</span></h2>
              <p className="text-foreground/70 text-lg mb-8">DerMech Solution — German Engineering. Built for Global Industry.</p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:Lison7363@gmail.com" className="text-foreground/80 hover:text-primary">Lison7363@gmail.com</a>
                </div>
                <p className="text-sm text-foreground/60">We typically respond within 24 hours.</p>
              </div>
            </div>

            <div className="bg-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl p-8">
              {formSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Message Sent!</h3>
                  <p className="text-foreground/70">Thank you. We'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="john@example.com" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Company</label>
                      <input type="text" value={formData.company} onChange={(e) => setFormData({...formData, company: e.target.value})} className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="Company name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground/80 mb-2">Subject *</label>
                      <input type="text" required value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground" placeholder="Project inquiry" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground/80 mb-2">Message *</label>
                    <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground h-32 resize-none" placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" size="lg" disabled={sending} className="w-full bg-primary hover:bg-primary/80 text-background font-medium">
                    {sending ? 'Sending...' : 'Send Message'}
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
              <img src={logo} alt="DerMech Solution" className="h-8 w-8 rounded-full object-cover" style={{ mixBlendMode: "lighten", filter: "brightness(1.1) contrast(1.1)" }} />
              <span className="font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>DerMech Solution</span>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-foreground/60">© {new Date().getFullYear()} DerMech Solution. All rights reserved.</p>
              <p className="text-xs text-foreground/50">German Engineering. Built for Global Industry.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}