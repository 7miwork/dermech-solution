import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Send } from 'lucide-react';

/**
 * DerMech Solution - Bauhaus Design System
 * Color Palette: Forest Green (#2D5016), Charcoal Gray (#3A3A3A), Warm Beige (#E8DCC8)
 * Typography: IBM Plex Serif (headings), IBM Plex Sans (body), IBM Plex Mono (technical)
 * Layout: Modular grid with generous whitespace, thick left borders for section differentiation
 * Animation: Fade-in + upward slide (600ms), subtle color shifts on hover
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
        headline: 'Engineering the Future of Smart Agriculture & Industry',
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
        email: 'Lison7363@gmail.com',
        cta: 'Start a Collaboration',
      },
      footer: 'DerMech Solution 德機智造 © 2026. All rights reserved.',
    },
    zh: {
      nav: ['關於我們', '核心服務', '合作模式', '應用場景', '聯絡我們'],
      hero: {
        headline: '智慧農業與工業的未來工程',
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
        email: 'Lison7363@gmail.com',
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
      <nav className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur z-50 border-b border-border">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DM</span>
            </div>
            <span className="font-serif font-bold text-lg hidden sm:inline">DerMech</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {content.nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setLanguage(language === 'en' ? 'zh' : 'en')}
              className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded hover:bg-primary hover:text-primary-foreground transition-colors"
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
          <div className="md:hidden border-t border-border bg-background">
            <div className="container py-4 flex flex-col gap-3">
              {content.nav.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-primary transition-colors"
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
          backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/hero-background-9hSqHbjjhmv6eLBRzdZ9PN.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40" />
        <div className="container relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
              {content.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {content.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
              >
                {content.hero.cta1}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
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
        className={`py-20 md:py-32 border-l-8 border-primary transition-all duration-700 ${
          visibleSections['about'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">{content.about.title}</h2>
              <h3 className="text-xl font-medium text-primary mb-2">{content.about.founder}</h3>
              <p className="text-muted-foreground mb-6 font-medium">{content.about.experience}</p>
              <div className="space-y-3 mb-8">
                {content.about.expertise.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">{content.about.achievement}</p>
            </div>
            <div className="relative">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/education-training-illustration-cXGAzZnPp8oWJKBeUyqKWv.webp"
                alt="Education and Training"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        data-animate
        className={`py-20 md:py-32 bg-secondary/10 transition-all duration-700 ${
          visibleSections['services'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">{content.services.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Industrial Automation */}
            <div className="border-l-4 border-primary bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{content.services.industrial.title}</h3>
              <ul className="space-y-3">
                {content.services.industrial.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Smart Agriculture */}
            <div className="border-l-4 border-primary bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{content.services.agriculture.title}</h3>
              <ul className="space-y-3">
                {content.services.agriculture.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education & Training */}
            <div className="border-l-4 border-primary bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-serif font-bold mb-4 text-primary">{content.services.education.title}</h3>
              <ul className="space-y-3">
                {content.services.education.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="text-primary font-bold">•</span>
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
        className={`py-20 md:py-32 transition-all duration-700 ${
          visibleSections['collaboration'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">{content.collaboration.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: content.collaboration.model1, num: '01' },
              { title: content.collaboration.model2, num: '02' },
              { title: content.collaboration.model3, num: '03' },
            ].map((model, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-serif font-bold text-primary/20 mb-4">{model.num}</div>
                <h3 className="text-lg font-serif font-bold">{model.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section
        id="applications"
        data-animate
        className={`py-20 md:py-32 bg-secondary/10 transition-all duration-700 ${
          visibleSections['applications'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">{content.applications.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: content.applications.scenario1, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/industrial-automation-illustration-8MPny2cF3gdYLX5eNnrFW9.webp' },
              { title: content.applications.scenario2, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/agriculture-section-illustration-K7jqPaPtGrNxBs8ib3WSws.webp' },
              { title: content.applications.scenario3, img: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663474460314/VmUwwdVjMDCJMv5wAYx85F/agriculture-section-illustration-K7jqPaPtGrNxBs8ib3WSws.webp' },
            ].map((app, idx) => (
              <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={app.img} alt={app.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="font-serif font-bold text-center">{app.title}</h3>
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
        className={`py-20 md:py-32 border-l-8 border-primary transition-all duration-700 ${
          visibleSections['values'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-16 text-center">{content.values.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { title: content.values.pillar1, desc: content.values.pillar1Desc, color: 'bg-primary' },
              { title: content.values.pillar2, desc: content.values.pillar2Desc, color: 'bg-secondary' },
              { title: content.values.pillar3, desc: content.values.pillar3Desc, color: 'bg-primary/80' },
            ].map((pillar, idx) => (
              <div key={idx} className="text-center">
                <div className={`w-16 h-16 ${pillar.color} rounded-lg mx-auto mb-6`} />
                <h3 className="text-xl font-serif font-bold mb-2">{pillar.title}</h3>
                <p className="text-muted-foreground">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Inquiry Funnel */}
      <section
        id="inquiry"
        data-animate
        className={`py-20 md:py-32 bg-secondary/10 transition-all duration-700 ${
          visibleSections['inquiry'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-center">{content.inquiry.title}</h2>
          <p className="text-center text-muted-foreground mb-12">{content.inquiry.subtitle}</p>

          <form onSubmit={handleInquirySubmit} className="bg-white p-8 rounded-lg shadow-sm space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder={content.inquiry.name}
                value={inquiryForm.name}
                onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <input
                type="email"
                placeholder={content.inquiry.email}
                value={inquiryForm.email}
                onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>

            <input
              type="text"
              placeholder={content.inquiry.organization}
              value={inquiryForm.organization}
              onChange={(e) => setInquiryForm({ ...inquiryForm, organization: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <select
              value={inquiryForm.inquiryType}
              onChange={(e) => setInquiryForm({ ...inquiryForm, inquiryType: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              required
            >
              <option value="">{content.inquiry.inquiryType}</option>
              <option value="industrial">{language === 'en' ? 'Industrial Automation' : '工業自動化'}</option>
              <option value="agriculture">{language === 'en' ? 'Smart Agriculture' : '智慧農業'}</option>
              <option value="education">{language === 'en' ? 'Education & Training' : '教育與培訓'}</option>
              <option value="other">{language === 'en' ? 'Other' : '其他'}</option>
            </select>

            <textarea
              placeholder={content.inquiry.message}
              value={inquiryForm.message}
              onChange={(e) => setInquiryForm({ ...inquiryForm, message: e.target.value })}
              className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32 resize-none"
              required
            />

            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium flex items-center justify-center gap-2"
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
        className={`py-20 md:py-32 border-l-8 border-primary transition-all duration-700 ${
          visibleSections['contact'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8">{content.contact.title}</h2>
          <p className="text-lg mb-8">
            <a href={`mailto:${content.contact.email}`} className="text-primary hover:underline font-medium">
              {content.contact.email}
            </a>
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium">
            {content.contact.cta}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8 text-center text-sm">
        {content.footer}
      </footer>
    </div>
  );
}
