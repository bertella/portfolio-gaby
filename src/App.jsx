import React, { useState, useEffect } from 'react';
import miFoto from './assets/gabriel.jpg';
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
        title: "Market Intelligence & Expansión",
        context: "Cadena de retail gastronómico buscaba reducir el riesgo en la apertura de nuevas sucursales.",
        challenge: "Predecir el éxito de una ubicación basado en la saturación del mercado y proximidad de competidores.",
        solution: "Desarrollo de un análisis geoespacial (Buffer Analysis) en Tableau integrando fuentes de datos abiertas y privadas.",
        result: "Reducción del 20% en el tiempo de prospección de locales y una hoja de ruta clara para la expansión 2026.",
        tags: ["Tableau", "Análisis Espacial", "Market Intelligence"],
        link: "https://public.tableau.com"
      },
      {
        title: "Retail Performance Engine (SQL + BI)",
        context: "Empresa con +5000 SKUs y múltiples regiones presentaba inconsistencias en sus reportes de rentabilidad.",
        challenge: "Identificar fugas de margen operativo y variaciones interanuales (YoY) en tiempo real.",
        solution: "Pipeline de datos robusto en SQL con cálculos avanzados (LOD) para garantizar una 'Single Source of Truth'.",
        result: "Ahorro de 15 horas mensuales en preparación de datos y detección inmediata de 3 categorías sub-rentables.",
        tags: ["SQL", "Tableau", "LOD Expressions"],
        link: "https://public.tableau.com"
      },
      {
        title: "Smart Inventory Ecosystem (Low-Code)",
        context: "Empresa de suministros industriales con procesos de inventario 100% manuales y alta tasa de error.",
        challenge: "Eliminar el desfase de stock y centralizar la carga de precios desde el punto de venta.",
        solution: "Ecosistema integral en AppSheet con automatizaciones vía AppScript y base de datos en Google Sheets.",
        result: "Digitalización total del proceso (Paperless) y eliminación completa de errores de facturación por precios desactualizados.",
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
  const [currentProject, setCurrentProject] = useState(0); // <-- MOVIDO AQUÍ ADENTRO
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
            {/* Ejemplo de círculo de perfil en el Hero */}
<div className="mb-8 flex justify-center">
  <div className="w-32 h-32 rounded-full border-4 border-blue-600 overflow-hidden shadow-xl">
    <img 
      src={miFoto} 
      alt="Gabriel - Data Analyst" 
      className="w-full h-full object-cover"
    />
  </div>
</div>
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

      {/* Projects Section - Carousel Style */}
      <section id="projects" className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-6xl uppercase tracking-tighter font-display">{t.nav.projects}</h2>
              <div className="h-1 w-20 bg-blue-600 mt-2"></div>
            </div>
            
            {/* Controles del Carrusel */}
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentProject(prev => prev === 0 ? t.projects.length - 1 : prev - 1)}
                className="p-4 rounded-full glass hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800"
              >
                <ChevronRight className="rotate-180" size={24} />
              </button>
              <button 
                onClick={() => setCurrentProject(prev => prev === t.projects.length - 1 ? 0 : prev + 1)}
                className="p-4 rounded-full glass hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all border border-zinc-200 dark:border-zinc-800"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Contenedor del Proyecto Activo */}
          <div className="relative min-h-[550px] md:min-h-[500px] flex items-center">
            {t.projects.map((project, idx) => (
              <div 
                key={idx}
                className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                  idx === currentProject ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-8 h-full items-stretch">
                  {/* Info del Proyecto */}
                  <div className="bg-white dark:bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-zinc-100 dark:border-zinc-800 flex flex-col justify-between shadow-2xl shadow-blue-500/5">
                    <div>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-[10px] font-bold uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-3xl md:text-5xl mb-6 font-display leading-none">{project.title}</h3>
                      
                      <div className="space-y-4 mb-8">
                        <p className="text-zinc-500 dark:text-zinc-400 text-sm leading-relaxed border-l-2 border-zinc-200 dark:border-zinc-800 pl-4">
                          {project.challenge}
                        </p>
                        <div className="p-5 bg-zinc-50 dark:bg-zinc-800/50 rounded-2xl">
                          <p className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2">Impacto Directo</p>
                          <p className="text-lg font-medium dark:text-zinc-100">{project.result}</p>
                        </div>
                      </div>
                    </div>

                    <a href={project.link} className="inline-flex items-center gap-3 text-blue-500 font-bold hover:gap-5 transition-all">
                      Ver solución técnica <ExternalLink size={20} />
                    </a>
                  </div>

                  {/* Visual/Gráfico */}
                  <div className="hidden md:flex items-center justify-center rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-900 overflow-hidden relative group">
                    <div className="absolute inset-0 opacity-20 bg-grid"></div>
                    <BarChart3 size={180} className="text-white opacity-40 group-hover:scale-110 transition-transform duration-500" />
                    <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl">
                      <p className="text-white text-xs font-bold uppercase tracking-widest opacity-60 mb-1">Tecnología Principal</p>
                      <p className="text-white text-xl font-display uppercase tracking-widest">{project.tags[0]}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Indicadores de puntos */}
          <div className="flex justify-center gap-2 mt-8">
            {t.projects.map((_, idx) => (
              <button 
                key={idx}
                onClick={() => setCurrentProject(idx)}
                className={`h-2 transition-all rounded-full ${idx === currentProject ? 'w-8 bg-blue-600' : 'w-2 bg-zinc-300 dark:bg-zinc-700'}`}
              />
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
            <a href="mailto:tuemail@ejemplo.com" className="px-10 py-5 bg-blue-600 text-white rounded-2xl font-bold text-lg hover:bg-blue-700 transition-all flex items-center gap-3">
              <Mail /> {t.cta.button}
            </a>
            <div className="flex items-center gap-4">
              <a href="https://linkedin.com/in/tu-usuario" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-blue-500 transition-colors">
                <Linkedin />
              </a>
              <a href="https://github.com/tu-usuario" className="w-14 h-14 glass rounded-2xl flex items-center justify-center hover:text-blue-500 transition-colors">
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