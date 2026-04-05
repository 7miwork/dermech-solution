import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Send } from 'lucide-react';

/**
 * DerMech Solution 德機智造 - High-Tech Metal Design System
 * Color Palette: Electric Blue (#00D9FF), Gunmetal Gray (#2A2E3E), Deep Charcoal (#0F1419)
 * Typography: IBM Plex Sans (all text for tech aesthetic)
 * Layout: Futuristic tech with glowing accents, sharp edges, metallic effects
 * Animation: Smooth glows, electric transitions, tech-forward motion
 */

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Record<string, boolean>>({});
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: '',
    message: '',
  });

  // Intersection Observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const t = {
    en: {
      nav: ['About', 'Services', 'Collaboration', 'Applications', 'Contact'],
      hero: {
        headline: 'Engineering the Future of Industry and Smart Agriculture',
        subheadline: 'German-driven automation solutions bridging agriculture, industry, and education.',
        cta1: 'Work With Us',
        cta2: 'Learn More',
      },
      about: {
        title: 'About Us',
        founder: 'Michael Lison (呂其米)',
        experience: '20+ Years German Industrial Experience',
        expertise: ['Automation Systems', 'Mechatronics Integration', 'Industrial Safety & Energy Optimization'],
        achievement: 'Coaching students in Germany for smart agriculture systems • Winner of Jugend Forscht (National First Prize)',
      },
      services: {
        title: 'Core Services',
        industrial: {
          title: 'Industrial Automation',
          items: ['Production line upgrade', 'Energy-saving system design', 'Smart factory solutions'],
        },
        agriculture: {
          title: 'Smart Agriculture',
          items: ['Sensor-based crop monitoring', 'Automated control systems', 'Sustainable farming solutions'],
        },
        education: {
          title: 'Education & Training',
          items: ['STEM programs', 'Hands-on workshops', 'Student competition coaching'],
        },
      },
      collaboration: {
        title: 'Collaboration Models',
        model1: 'On-campus Demonstration Lab',
        model2: 'Industry-Academia Projects',
        model3: 'Workshops & Training Programs',
      },
      applications: {
        title: 'Application Scenarios',
        scenario1: 'Food Processing Factory Automation',
        scenario2: 'Smart Greenhouse Systems',
        scenario3: 'Agricultural Monitoring Platforms',
      },
      values: {
        title: 'Core Value Proposition',
        pillar1: 'Education',
        pillar1Desc: 'STEM + hands-on learning',
        pillar2: 'Industry',
        pillar2Desc: 'Real-world implementation',
        pillar3: 'International',
        pillar3Desc: 'German standards & global vision',
      },
      inquiry: {
        title: 'Project Inquiry Funnel',
        subtitle: 'Tell us about your needs and let\'s explore collaboration opportunities',
        name: 'Name',
        email: 'Email',
        organization: 'Organization',
        inquiryType: 'Inquiry Type',
        message: 'Message',
        submit: 'Submit Inquiry',
        success: 'Thank you! We\'ll be in touch soon.',
      },
      contact: {
        title: 'Contact Us',
        email: 'mi2026@dermechsol.com',
        cta: 'Start a Collaboration',
      },
      footer: 'DerMech Solution 德機智造 © 2026. All rights reserved.',
    },
    zh: {
      nav: ['關於我們', '核心服務', '合作模式', '應用場景', '聯絡我們'],
      hero: {
        headline: '工業與智慧農業的未來工程',
        subheadline: '德國驅動的自動化解決方案，連接農業、工業與教育。',
        cta1: '合作洽詢',
        cta2: '了解更多',
      },
      about: {
        title: '關於我們',
        founder: '創辦人 Michael Lison (呂其米)',
        experience: '20+ 年德國工業經驗',
        expertise: ['自動化系統', '機電一體化整合', '工業安全與能源優化'],
        achievement: '指導德國學生開發智慧農業系統 • Jugend Forscht 全國一等獎得主',
      },
      services: {
        title: '核心服務',
        industrial: {
          title: '工業自動化',
          items: ['生產線升級', '節能系統設計', '智慧工廠解決方案'],
        },
        agriculture: {
          title: '智慧農業',
          items: ['感測器作物監測', '自動化控制系統', '永續農業解決方案'],
        },
        education: {
          title: '教育與培訓',
          items: ['STEM 課程', '實踐工作坊', '學生競賽指導'],
        },
      },
      collaboration: {
        title: '合作模式',
        model1: '校園示範實驗室',
        model2: '產學合作項目',
        model3: '工作坊與培訓課程',
      },
      applications: {
        title: '應用場景',
        scenario1: '食品加工廠自動化',
        scenario2: '智慧溫室系統',
        scenario3: '農業監測平台',
      },
      values: {
        title: '核心價值主張',
        pillar1: '教育',
        pillar1Desc: 'STEM + 實踐學習',
        pillar2: '工業',
        pillar2Desc: '實際應用實現',
        pillar3: '國際',
        pillar3Desc: '德國標準與全球視野',
      },
      inquiry: {
        title: '項目諮詢表單',
        subtitle: '告訴我們您的需求，讓我們探索合作機會',
        name: '姓名',
        email: '電子郵件',
        organization: '組織',
        inquiryType: '諮詢類型',
        message: '訊息',
        submit: '提交諮詢',
        success: '感謝您！我們會盡快與您聯絡。',
      },
      contact: {
        title: '聯絡我們',
        email: 'mi2026@dermechsol.com',
        cta: '開始合作',
      },
      footer: 'DerMech Solution 德機智造 © 2026. 版權所有。',
    },
  };

  const content = t[language];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Inquiry submitted:', inquiryForm);
    setInquiryForm({ name: '', email: '', organization: '', inquiryType: '', message: '' });
    alert(content.inquiry.success);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-md z-50 border-b border-primary/20">
        <style>{`
          nav {
            box-shadow: 0 0 20px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(0, 217, 255, 0.1);
          }
        `}</style>
        <div className="container flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-transparent rounded-sm flex items-center justify-center border border-primary/50 p-0" style={{ boxShadow: '0 0 10px rgba(0, 217, 255, 0.3)' }}>
              <img src="logo.png" alt="DerMech Solution Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base leading-tight">DerMech</span>
              <span className="text-xs text-primary/80">德機智造</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {content.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-xs font-medium uppercase tracking-wider hover:text-primary transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-3 py-1 text-xs font-medium bg-secondary/50 text-secondary-foreground rounded hover:bg-primary hover:text-primary-foreground transition-all duration-300 border border-primary/30"
            >
              {language === 'en' ? '中文' : 'EN'}
            </button>
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-primary/20 bg-background/95">
            <div className="container py-4 flex flex-col gap-3">
              {content.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs font-medium uppercase tracking-wider hover:text-primary transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
        style={{
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/hero-metal-5CZzL9FgyHZdnt3PwEvSPh.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ textShadow: '0 0 20px rgba(0, 217, 255, 0.3)' }}>
              {content.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium border border-primary/50"
                style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' }}
              >
                {content.hero.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 hover:text-primary"
              >
                {content.hero.cta2}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        data-animate
        className={`py-20 md:py-32 border-l-4 border-primary transition-all duration-700 relative ${
          visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          boxShadow: 'inset 20px 0 30px rgba(0, 217, 255, 0.05)',
        }}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.about.title}</h2>
              <h3 className="text-xl font-medium text-primary mb-2">{content.about.founder}</h3>
              <p className="text-muted-foreground mb-6 font-medium">{content.about.experience}</p>
              <div className="space-y-3 mb-8">
                {content.about.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(0, 217, 255, 0.6)' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">{content.about.achievement}</p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                alt="Industry and Agriculture"
                className="w-full rounded-lg"
                style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.2), inset 0 0 20px rgba(0, 217, 255, 0.05)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-20 md:py-32 transition-all duration-700 relative ${
          visibleSections['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(42, 46, 62, 0.3) 0%, rgba(26, 31, 46, 0.3) 100%)',
        }}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Industrial Automation */}
            <div className="border-l-4 border-primary bg-card p-8 rounded-lg" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(0, 217, 255, 0.1)' }}>
              <h3 className="text-xl font-bold mb-4 text-primary">{content.services.industrial.title}</h3>
              <ul className="space-y-3">
                {content.services.industrial.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Agriculture */}
            <div className="border-l-4 border-primary bg-card p-8 rounded-lg" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(0, 217, 255, 0.1)' }}>
              <h3 className="text-xl font-bold mb-4 text-primary">{content.services.agriculture.title}</h3>
              <ul className="space-y-3">
                {content.services.agriculture.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Training */}
            <div className="border-l-4 border-primary bg-card p-8 rounded-lg" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(0, 217, 255, 0.1)' }}>
              <h3 className="text-xl font-bold mb-4 text-primary">{content.services.education.title}</h3>
              <ul className="space-y-3">
                {content.services.education.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Models Section */}
      <section
        id="collaboration"
        data-animate
        className={`py-20 md:py-32 transition-all duration-700 relative ${
          visibleSections['collaboration'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.collaboration.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: content.collaboration.model1, num: '01' },
              { title: content.collaboration.model2, num: '02' },
              { title: content.collaboration.model3, num: '03' },
            ].map((model, idx) => (
              <div key={idx} className="text-center p-6 border border-primary/30 rounded-lg" style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.05)' }}>
                <div className="text-4xl font-bold text-primary/40 mb-4" style={{ textShadow: '0 0 10px rgba(0, 217, 255, 0.2)' }}>{model.num}</div>
                <h3 className="text-lg font-bold">{model.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        id="applications"
        data-animate
        className={`py-20 md:py-32 transition-all duration-700 relative ${
          visibleSections['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(42, 46, 62, 0.3) 0%, rgba(26, 31, 46, 0.3) 100%)',
        }}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.applications.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: content.applications.scenario1, img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&h=600&fit=crop' },
              { title: content.applications.scenario2, img: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=800&h=600&fit=crop' },
              { title: content.applications.scenario3, img: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=800&h=600&fit=crop' },
            ].map((app, idx) => (
              <div key={idx} className="bg-card rounded-lg overflow-hidden" style={{ boxShadow: '0 0 20px rgba(0, 217, 255, 0.1)' }}>
                <img src={app.img} alt={app.title} className="w-full h-48 object-cover" />
                <div className="p-6 border-t border-primary/20">
                  <h3 className="font-bold text-center text-sm">{app.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section
        id="values"
        data-animate
        className={`py-20 md:py-32 border-l-4 border-primary transition-all duration-700 relative ${
          visibleSections['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          boxShadow: 'inset 20px 0 30px rgba(0, 217, 255, 0.05)',
        }}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.values.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: content.values.pillar1, desc: content.values.pillar1Desc, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
              { title: content.values.pillar2, desc: content.values.pillar2Desc, img: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop' },
              { title: content.values.pillar3, desc: content.values.pillar3Desc, img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop' },
            ].map((pillar, idx) => (
              <div key={idx} className="text-center p-6 border border-primary/30 rounded-lg overflow-hidden" style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.05)' }}>
                <img src={pillar.img} alt={pillar.title} className="w-full h-32 object-cover rounded mb-4" />
                <h3 className="text-xl font-bold mb-2 text-primary">{pillar.title}</h3>
                <p className="text-muted-foreground text-sm">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry Funnel */}
      <section
        id="inquiry"
        data-animate
        className={`py-20 md:py-32 transition-all duration-700 relative ${
          visibleSections['inquiry'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          background: 'linear-gradient(135deg, rgba(42, 46, 62, 0.3) 0%, rgba(26, 31, 46, 0.3) 100%)',
        }}
      >
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.inquiry.title}</h2>
          <p className="text-center text-muted-foreground mb-12">{content.inquiry.subtitle}</p>

          <form onSubmit={handleInquirySubmit} className="bg-card p-8 rounded-lg space-y-6" style={{ boxShadow: '0 0 30px rgba(0, 217, 255, 0.1), inset 0 1px 0 rgba(0, 217, 255, 0.1)' }}>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={content.inquiry.name}
                value={inquiryForm.name}
                onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                required
              />
              <input
                type="email"
                placeholder={content.inquiry.email}
                value={inquiryForm.email}
                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-primary/30 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
                required
              />
            </div>

            <input
              type="text"
              placeholder={content.inquiry.organization}
              value={inquiryForm.organization}
              onChange={(e) => setInquiryForm({ ...inquiryForm, organization: e.target.value })}
              className="w-full px-4 py-3 border border-primary/30 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground"
            />

            <select
              value={inquiryForm.inquiryType}
              onChange={(e) => setInquiryForm({ ...inquiryForm, inquiryType: e.target.value })}
              className="w-full px-4 py-3 border border-primary/30 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              required
            >
              <option value="" className="bg-background">{content.inquiry.inquiryType}</option>
              <option value="industrial" className="bg-background">{language === 'en' ? 'Industrial Automation' : '工業自動化'}</option>
              <option value="agriculture" className="bg-background">{language === 'en' ? 'Smart Agriculture' : '智慧農業'}</option>
              <option value="education" className="bg-background">{language === 'en' ? 'Education & Training' : '教育與培訓'}</option>
              <option value="other" className="bg-background">{language === 'en' ? 'Other' : '其他'}</option>
            </select>

            <textarea
              placeholder={content.inquiry.message}
              value={inquiryForm.message}
              onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
              className="w-full px-4 py-3 border border-primary/30 rounded-lg bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary text-foreground placeholder-muted-foreground h-32 resize-none"
              required
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/80 text-primary-foreground font-medium flex items-center justify-center gap-2 border border-primary/50"
              style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' }}
            >
              <Send size={18} />
              {content.inquiry.submit}
            </Button>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        data-animate
        className={`py-20 md:py-32 border-l-4 border-primary transition-all duration-700 relative ${
          visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
        style={{
          boxShadow: 'inset 20px 0 30px rgba(0, 217, 255, 0.05)',
        }}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ textShadow: '0 0 15px rgba(0, 217, 255, 0.2)' }}>{content.contact.title}</h2>
          <p className="text-lg mb-8">
            <a href={`mailto:${content.contact.email}`} className="text-primary hover:text-primary/80 transition-colors font-medium">
              {content.contact.email}
            </a>
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/80 text-primary-foreground font-medium border border-primary/50" style={{ boxShadow: '0 0 15px rgba(0, 217, 255, 0.3)' }}>
            {content.contact.cta}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/10 text-foreground py-8 text-center text-sm border-t border-primary/20">
        {content.footer}
      </footer>
    </div>
  );
}
