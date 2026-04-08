import React, { useState, useEffect } from 'react';
import { 
  Database, 
  BarChart3, 
  Zap, 
  Layers, 
  ArrowRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight, 
  Globe, 
  Moon, 
  Sun,
  LayoutDashboard,
  Cpu,
  Table as TableIcon,
} from 'lucide-react';

const DATA = {
  en: {
    nav: { projects: "Projects", skills: "Skills", contact: "Contact" },
    hero: {
      tag: "Operations | Data Analyst",
      title: "Transforming raw data into",
      titleAccent: "operational clarity",
      description: "I build end-to-end solutions that automate manual processes and optimize business decision-making through high-impact data intelligence.",
      cta: "View Impact",
      ctaSecondary: "Get in touch"
    },
    value: {
      title: "Business-First Data Approach",
      items: [
        { icon: <Zap />, title: "Process Automation", desc: "Reducing operational overhead using AppSheet and AppScript to eliminate manual errors." },
        { icon: <LayoutDashboard />, title: "Actionable BI", desc: "Not just charts. I build dashboards designed to trigger business actions and solve specific bottlenecks." },
        { icon: <Layers />, title: "Data Consolidation", desc: "Cleaning and merging fragmented sources into a single, reliable source of truth." }
      ]
    },
    projects: [
      {
        title: "Coffee Shop Market Intelligence",
        context: "Coffee chain needed to optimize expansion and product mix.",
        challenge: "Identify high-potential locations by analyzing competitor proximity and spatial data.",
        solution: "Tableau-based Buffer Analysis with dynamic parameters and icon-driven UX for field managers.",
        result: "Clear identification of opportunity zones, directly influencing expansion marketing strategy.",
        tags: ["Tableau", "Spatial Analytics", "Market Intelligence"],
        link: "https://public.tableau.com"
      },
      {
        title: "Retail Performance Engine",
        context: "Retailer with multiple regions struggling to track profitability.",
        challenge: "Detect regional losses and YoY performance gaps across thousands of SKUs.",
        solution: "SQL-heavy data prep + Tableau dashboards using LOD expressions for precise YoY comparisons.",
        result: "30% faster identification of underperforming regions, leading to immediate commercial adjustments.",
        tags: ["SQL", "Tableau", "LOD Expressions"],
        link: "https://public.tableau.com"
      },
      {
        title: "Smart Inventory Ecosystem",
        context: "Hardware store with 3,500+ products managing stock manually.",
        challenge: "Inefficient logging, manual pricing errors, and lack of historical visibility.",
        solution: "No-Code AppSheet ecosystem integrated with AppScript for automated price logging and stock alerts.",
        result: "100% automated end-to-end logging, significant reduction in human error, and real-time price history.",
        tags: ["AppSheet", "AppScript", "Low-Code"],
        link: "#"
      }
    ],
    skills: {
      title: "Technical Stack",
      groups: [
        { name: "Data & BI", items: ["SQL", "Power BI", "Tableau", "Looker Studio", "Supabase"] },
        { name: "Automation", items: ["AppSheet", "AppScript", "Process Mapping", "Low-Code"] },
        { name: "Web & Core", items: ["HTML5", "JavaScript", "Excel/Sheets Expert"] }
      ]
    },
    cta: {
      title: "Ready to optimize your operations?",
      desc: "Let's turn your fragmented data into a competitive advantage.",
      button: "Start a Conversation"
    }
  },
  es: {
    nav: { projects: "Proyectos", skills: "Stack", contact: "Contacto" },
    hero: {
      tag: "Operations | Data Analyst",
      title: "Transformo datos brutos en",
      titleAccent: "claridad operativa",
      description: "Construyo soluciones end-to-end que automatizan procesos manuales y optimizan la toma de decisiones mediante inteligencia de datos de alto impacto.",
      cta: "Ver Impacto",
      ctaSecondary: "Contactar"
    },
    value: {
      title: "Enfoque en Negocio, no solo en Datos",
      items: [
        { icon: <Zap />, title: "Automatización", desc: "Reducción de carga operativa usando AppSheet y AppScript para eliminar errores manuales." },
        { icon: <LayoutDashboard />, title: "BI Accionable", desc: "No solo gráficos. Dashboards diseñados para disparar acciones y resolver cuellos de botella." },
        { icon: <Layers />, title: "Consolidación", desc: "Limpieza y unificación de fuentes fragmentadas en una única verdad confiable." }
      ]
    },
    projects: [
      {
        title: "Market Intelligence: Coffee Shop",
        context: "Cadena de café necesitaba optimizar expansión y mix de productos.",
        challenge: "Entender rendimiento considerando ubicación y competencia mediante análisis espacial.",
        solution: "Buffer Analysis en Tableau con parámetros dinámicos y navegación intuitiva por íconos.",
        result: "Identificación de zonas de oportunidad, impactando directamente en marketing y expansión.",
        tags: ["Tableau", "Análisis Espacial", "Market Intelligence"],
        link: "https://public.tableau.com"
      },
      {
        title: "Retail Sales Performance",
        context: "Empresa retail con múltiples regiones y categorías con dificultad para detectar pérdidas.",
        challenge: "Detectar pérdidas y analizar performance interanual YoY en tiempo real.",
        solution: "Preparación de datos en SQL + Tableau (YoY + LOD) con diseño centrado en KPIs críticos.",
        result: "Detección inmediata de fugas de rentabilidad y mejora en decisiones comerciales regionales.",
        tags: ["SQL", "Tableau", "KPI Design"],
        link: "https://public.tableau.com"
      },
      {
        title: "Sistema de Inventario Inteligente",
        context: "Bulonería con +3500 productos operando procesos manuales.",
        challenge: "Ineficiencia operativa y errores constantes en carga de stock y precios.",
        solution: "Ecosistema AppSheet + AppScript para automatización de logs e historial de precios.",
        result: "Automatización end-to-end, reducción drástica de errores y visibilidad total de inventario.",
        tags: ["AppSheet", "AppScript", "Automatización"],
        link: "#"
      }
    ],
    skills: {
      title: "Stack Técnico",
      groups: [
        { name: "Data & BI", items: ["SQL", "Power BI", "Tableau", "Looker Studio", "Supabase"] },
        { name: "Automatización", items: ["AppSheet", "AppScript", "No-Code", "Low-Code"] },
        { name: "Web & Core", items: ["HTML5", "JavaScript", "Google Sheets Expert"] }
      ]
    },
    cta: {
      title: "¿Querés optimizar tus operaciones?",
      desc: "Transformemos tus datos fragmentados en una ventaja competitiva.",
      button: "Hablemos hoy"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState('es');
  const [isDark, setIsDark] = useState(true);
  const t = DATA[lang];

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="min-h-screen transition-colors duration-300 selection:bg-blue-500/30">
      <div className="hero-glow" />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center font-bold text-white">G</div>
            <span className="font-display text-xl tracking-tight uppercase">Gabriel</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <a href="#projects" className="hover:text-blue-500 transition-colors">{t.nav.projects}</a>
            <a href="#skills" className="hover:text-blue-500 transition-colors">{t.nav.skills}</a>
            <a href="#contact" className="hover:text-blue-500 transition-colors">{t.nav.contact}</a>
          </div>

          <div className="flex items-center gap-4">
            <button onClick={() => setLang(lang === 'es' ? 'en' : 'es')} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              <Globe size={20} className="text-zinc-400" />
            </button>
            <button onClick={toggleTheme} className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-full transition-colors">
              {isDark ? <Sun size={20} className="text-zinc-400" /> : <Moon size={20} className="text-zinc-400" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-xs font-bold uppercase tracking-widest mb-6 animate-fade-in">
            <Zap size={14} /> {t.hero.tag}
          </div>
          <h1 className="text-5xl md:text-8xl font-extrabold mb-6 leading-[1.1]">
            {t.hero.title} <br />
            <span className="gradient-text">{t.hero.titleAccent}</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <a href="#projects" className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              {t.hero.cta} <ArrowRight size={18} />
            </a>
            <a href="#contact" className="w-full md:w-auto px-8 py-4 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 rounded-xl font-bold transition-all">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </header>

      {/* Value Proposition */}
      <section className="py-20 px-6 bg-zinc-50/50 dark:bg-zinc-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mb-16">{t.value.title}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {t.value.items.map((item, idx) => (
              <div key={idx} className="p-8 rounded-3xl glass card-hover">
                <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 mb-6">
                  {item.icon}
                </div>
                <h3 className="text-2xl mb-4 uppercase">{item.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl uppercase">{t.nav.projects}</h2>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mt-2">Solving Business Puzzles</p>
            </div>
          </div>

          <div className="grid gap-12">
            {t.projects.map((project, idx) => (
              <div key={idx} className="group relative grid md:grid-cols-2 gap-8 p-1 rounded-[2rem] bg-gradient-to-br from-zinc-200 to-transparent dark:from-zinc-800 dark:to-transparent">
                <div className="bg-white dark:bg-dark-bg p-8 md:p-12 rounded-[1.9rem] flex flex-col h-full">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-[10px] font-bold uppercase tracking-tighter text-zinc-500">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl md:text-4xl mb-6">{project.title}</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div>
                      <p className="text-blue-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Context</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.context}</p>
                    </div>
                    <div>
                      <p className="text-blue-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Challenge</p>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400">{project.challenge}</p>
                    </div>
                    <div className="p-4 bg-zinc-50 dark:bg-zinc-900/50 rounded-2xl border border-zinc-100 dark:border-zinc-800">
                      <p className="text-emerald-500 text-[10px] font-extrabold uppercase tracking-widest mb-1">Solution & Impact</p>
                      <p className="text-sm font-medium mb-2">{project.solution}</p>
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-semibold">{project.result}</p>
                    </div>
                  </div>

                  <a href={project.link} className="mt-8 inline-flex items-center gap-2 text-blue-500 font-bold text-sm group-hover:gap-4 transition-all">
                    Explore Solution <ExternalLink size={16} />
                  </a>
                </div>
                
                <div className="hidden md:block relative overflow-hidden rounded-[1.9rem] bg-zinc-100 dark:bg-zinc-900">
                   <div className="absolute inset-0 flex items-center justify-center">
                      <BarChart3 size={120} className="text-zinc-200 dark:text-zinc-800 transform rotate-12 group-hover:scale-110 transition-transform" />
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl text-center mb-16 uppercase">{t.skills.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t.skills.groups.map((group, idx) => (
              <div key={idx} className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px flex-grow bg-zinc-200 dark:bg-zinc-800"></div>
                  <h4 className="font-display text-xl text-blue-500">{group.name}</h4>
                  <div className="h-px flex-grow bg-zinc-200 dark:bg-zinc-800"></div>
                </div>
                <div className="flex flex-wrap gap-3 justify-center">
                  {group.items.map(skill => (
                    <div key={skill} className="px-5 py-3 glass rounded-2xl text-sm font-semibold card-hover">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="hero-glow opacity-50" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl mb-8 uppercase">{t.cta.title}</h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 mb-12">{t.cta.desc}</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:email@example.com" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-3">
              <Mail /> {t.cta.button}
            </a>
            <div className="flex items-center gap-4">
              <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-blue-500 transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-blue-500 transition-colors">
                <Github />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center">
        <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">
          Gabriel — Operations & Data Analyst — {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}