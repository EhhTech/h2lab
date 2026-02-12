import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone,
  Globe,
  Monitor,
  Laptop,
  MessageSquare,
  ArrowUpRight,
  Layers,
} from 'lucide-react'

const typeIcons = {
  app: Smartphone,
  web: Globe,
  pos: Monitor,
  software: Laptop,
  chatbot: MessageSquare,
}

const filters = [
  { id: 'all', label: 'Todos', icon: Layers },
  { id: 'app', label: 'Apps', icon: Smartphone },
  { id: 'pos', label: 'POS', icon: Monitor },
  { id: 'software', label: 'Software', icon: Laptop },
  { id: 'chatbot', label: 'Chatbots', icon: MessageSquare },
  { id: 'web', label: 'Web', icon: Globe },
]

const projects = [
  {
    id: 1,
    title: 'Growthest',
    type: 'web',
    typeLabel: 'Pagina Web',
    description:
      'Sitio web moderno y funcional desarrollado con WordPress, disenado para transmitir profesionalismo y generar confianza desde el primer clic.',
    tech: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
    accent: '#22c55e',
    gradientFrom: '#f0fdf4',
    gradientTo: '#dcfce7',
    status: 'Completado',
    featured: true,
    image: '/portfolio/growthest.JPG',
  },
  {
    id: 2,
    title: 'Menuuu',
    type: 'app',
    typeLabel: 'App Movil',
    description:
      'App de delivery pensada en restaurantes para eliminar comisiones de intermediarios, con integracion compleja entre app, plataforma web y bases de datos.',
    tech: ['React Native', 'Expo', 'Node.js'],
    accent: '#f97316',
    gradientFrom: '#fff7ed',
    gradientTo: '#ffedd5',
    status: 'Fase final',
    image: '/portfolio/menuuu.PNG',
  },
  {
    id: 3,
    title: 'FarmPos',
    type: 'pos',
    typeLabel: 'Sistema POS',
    description:
      'Software POS disenado a medida para una cadena de farmacias que buscaban mejorar su eficiencia y control al gestionar inventario en cada sucursal.',
    tech: ['React Native', 'Node.js', 'SQLite'],
    accent: '#3b82f6',
    gradientFrom: '#eff6ff',
    gradientTo: '#dbeafe',
    status: 'En produccion',
  },
  {
    id: 4,
    title: 'App ACB',
    type: 'app',
    typeLabel: 'App Movil',
    description:
      'Aplicacion disenada a medida para gestionar cobros y finanzas, desarrollada siguiendo los requerimientos especificos de la empresa contratante.',
    tech: ['React Native', 'Expo'],
    accent: '#8b5cf6',
    gradientFrom: '#f5f3ff',
    gradientTo: '#ede9fe',
    status: 'En produccion',
    image: '/portfolio/acb.PNG',
  },
  {
    id: 5,
    title: 'Lexconnect',
    type: 'software',
    typeLabel: 'Software Desktop',
    description:
      'Software disenado a medida para Windows y Mac, pensado para mejorar la eficiencia y rapidez en el flujo de trabajo diario de abogados.',
    tech: ['Electron', 'React', 'Node.js'],
    accent: '#14b8a6',
    gradientFrom: '#f0fdfa',
    gradientTo: '#ccfbf1',
    status: 'En produccion',
  },
  {
    id: 6,
    title: 'Chatbot H2Lab',
    type: 'chatbot',
    typeLabel: 'Chatbot IA',
    description:
      'Nuestro propio chatbot con IA integrado en esta web, disenado para atender consultas al instante. Pruebalo tu mismo haciendo clic en el icono de chat.',
    tech: ['React', 'Gemini API', 'Node.js'],
    accent: '#f59e0b',
    gradientFrom: '#fffbeb',
    gradientTo: '#fef3c7',
    status: 'En produccion',
    image: '/portfolio/chatbot.PNG',
  },
]

/* ── Mockup building blocks for preview areas ── */

function PhoneMockup({ accent }) {
  return (
    <div
      style={{
        width: 64,
        height: 112,
        borderRadius: 14,
        background: '#fff',
        border: '2px solid #e5e5e5',
        padding: 6,
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        overflow: 'hidden',
      }}
    >
      <div style={{ height: 6, borderRadius: 4, background: accent, opacity: 0.2 }} />
      <div style={{ flex: 1, borderRadius: 6, background: accent, opacity: 0.07 }} />
      <div style={{ display: 'flex', gap: 3 }}>
        <div style={{ flex: 1, height: 8, borderRadius: 4, background: '#f0f0f0' }} />
        <div style={{ flex: 1, height: 8, borderRadius: 4, background: accent, opacity: 0.15 }} />
      </div>
    </div>
  )
}

function BrowserMockup({ accent, wide }) {
  return (
    <div
      style={{
        width: wide ? 160 : 120,
        borderRadius: 10,
        background: '#fff',
        border: '2px solid #e5e5e5',
        boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          padding: '6px 8px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fca5a5' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#fde68a' }} />
        <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#86efac' }} />
        <div
          style={{
            flex: 1,
            height: 10,
            borderRadius: 100,
            background: '#f5f5f5',
            marginLeft: 4,
          }}
        />
      </div>
      <div style={{ padding: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ height: 4, borderRadius: 4, background: accent, opacity: 0.15, width: '70%' }} />
        <div style={{ height: 4, borderRadius: 4, background: '#f0f0f0', width: '100%' }} />
        <div style={{ height: 4, borderRadius: 4, background: '#f0f0f0', width: '85%' }} />
        <div
          style={{
            marginTop: 4,
            height: wide ? 40 : 28,
            borderRadius: 6,
            background: accent,
            opacity: 0.07,
          }}
        />
        <div style={{ display: 'flex', gap: 3, marginTop: 2 }}>
          <div style={{ flex: 1, height: 14, borderRadius: 4, background: accent, opacity: 0.12 }} />
          <div style={{ flex: 1, height: 14, borderRadius: 4, background: '#f5f5f5' }} />
        </div>
      </div>
    </div>
  )
}

function WidgetMockup({ accent }) {
  return (
    <div
      style={{
        width: 80,
        borderRadius: 10,
        background: '#fff',
        border: '2px solid #e5e5e5',
        padding: 8,
        boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
        display: 'flex',
        flexDirection: 'column',
        gap: 6,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: accent,
            opacity: 0.2,
          }}
        />
        <div style={{ flex: 1, height: 4, borderRadius: 4, background: '#eee' }} />
      </div>
      <div style={{ height: 24, borderRadius: 6, background: accent, opacity: 0.06 }} />
      <div style={{ height: 4, borderRadius: 4, background: '#f0f0f0', width: '60%' }} />
    </div>
  )
}

function ChatMockup({ accent }) {
  return (
    <div
      style={{
        width: 100,
        borderRadius: 12,
        background: '#fff',
        border: '2px solid #e5e5e5',
        padding: 8,
        boxShadow: '0 6px 20px rgba(0,0,0,0.07)',
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
      }}
    >
      <div
        style={{
          alignSelf: 'flex-start',
          padding: '4px 8px',
          borderRadius: '8px 8px 8px 2px',
          background: '#f3f3f3',
          fontSize: 7,
          color: '#aaa',
          maxWidth: '80%',
        }}
      >
        Hola, necesito ayuda
      </div>
      <div
        style={{
          alignSelf: 'flex-end',
          padding: '4px 8px',
          borderRadius: '8px 8px 2px 8px',
          background: accent,
          opacity: 0.15,
          maxWidth: '80%',
          height: 14,
        }}
      />
      <div
        style={{
          alignSelf: 'flex-start',
          padding: '4px 8px',
          borderRadius: '8px 8px 8px 2px',
          background: '#f3f3f3',
          height: 10,
          width: '65%',
        }}
      />
      <div
        style={{
          display: 'flex',
          gap: 4,
          marginTop: 2,
        }}
      >
        <div
          style={{
            flex: 1,
            height: 14,
            borderRadius: 100,
            background: '#f3f3f3',
          }}
        />
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            background: accent,
            opacity: 0.2,
          }}
        />
      </div>
    </div>
  )
}

function PhoneFrame({ image, accent }) {
  return (
    <div
      style={{
        width: 80,
        height: 160,
        borderRadius: 18,
        background: '#fff',
        border: '3px solid #e0e0e0',
        padding: 4,
        boxShadow: `0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px ${accent}10`,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ width: 24, height: 3, borderRadius: 4, background: '#e5e5e5', margin: '2px auto 3px', flexShrink: 0 }} />
      <div style={{ flex: 1, borderRadius: 12, overflow: 'hidden', background: '#f5f5f5' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </div>
  )
}

function BrowserFrame({ image, accent }) {
  return (
    <div
      style={{
        width: 180,
        borderRadius: 12,
        background: '#fff',
        border: '3px solid #e0e0e0',
        boxShadow: `0 12px 32px rgba(0,0,0,0.1), 0 0 0 1px ${accent}10`,
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 10px', borderBottom: '1px solid #f0f0f0' }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fca5a5' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#fde68a' }} />
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#86efac' }} />
        <div style={{ flex: 1, height: 10, borderRadius: 100, background: '#f5f5f5', marginLeft: 6 }} />
      </div>
      <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', background: '#f5f5f5' }}>
        <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
      </div>
    </div>
  )
}

function PreviewContent({ project }) {
  const { type, accent, image } = project

  const common = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  }

  // Projects with real screenshots
  if (image && (type === 'app' || type === 'chatbot')) {
    return (
      <div style={common}>
        <PhoneFrame image={image} accent={accent} />
      </div>
    )
  }

  if (image && (type === 'web' || type === 'software' || type === 'pos')) {
    return (
      <div style={common}>
        <BrowserFrame image={image} accent={accent} />
      </div>
    )
  }

  // Fallback: abstract mockups for projects without images
  if (type === 'app') {
    return (
      <div style={common}>
        <PhoneMockup accent={accent} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <WidgetMockup accent={accent} />
          <div style={{ width: 80, height: 20, borderRadius: 6, background: accent, opacity: 0.1 }} />
        </div>
      </div>
    )
  }

  if (type === 'software' || type === 'web') {
    return (
      <div style={common}>
        <BrowserMockup accent={accent} wide />
        <WidgetMockup accent={accent} />
      </div>
    )
  }

  if (type === 'pos') {
    return (
      <div style={common}>
        <BrowserMockup accent={accent} wide />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          <WidgetMockup accent={accent} />
          <div style={{ width: 80, height: 16, borderRadius: 100, background: accent, opacity: 0.12 }} />
        </div>
      </div>
    )
  }

  if (type === 'chatbot') {
    return (
      <div style={common}>
        <ChatMockup accent={accent} />
        <PhoneMockup accent={accent} />
      </div>
    )
  }

  return (
    <div style={common}>
      <BrowserMockup accent={accent} wide />
    </div>
  )
}

/* ── Card component ── */

function ProjectCard({ project, index, isFeatured }) {
  const Icon = typeIcons[project.type] || Globe

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, transition: { duration: 0.25 } }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.06,
      }}
      className="portfolio-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 24,
        background: '#fff',
        border: '1px solid #ebebeb',
        cursor: 'pointer',
        display: isFeatured ? 'grid' : 'flex',
        flexDirection: 'column',
        gridTemplateColumns: isFeatured ? '1fr 1fr' : undefined,
      }}
    >
      {/* Preview area */}
      <div
        style={{
          position: 'relative',
          minHeight: isFeatured ? 280 : 200,
          background: `linear-gradient(145deg, ${project.gradientFrom}, ${project.gradientTo})`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: 20,
        }}
      >
        {/* Decorative mesh gradient */}
        <div
          style={{
            position: 'absolute',
            top: '-30%',
            right: '-20%',
            width: '70%',
            height: '70%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${project.accent}15 0%, transparent 70%)`,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '50%',
            height: '50%',
            borderRadius: '50%',
            background: `radial-gradient(circle, ${project.accent}10 0%, transparent 70%)`,
          }}
        />

        {/* Dot grid */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.4,
            backgroundImage: `radial-gradient(${project.accent}20 1px, transparent 1px)`,
            backgroundSize: '16px 16px',
          }}
        />

        {/* Mockup content */}
        <div style={{ position: 'relative', zIndex: 1, transform: 'scale(0.95)' }}>
          <PreviewContent project={project} />
        </div>

        {/* Project number watermark */}
        <span
          style={{
            position: 'absolute',
            bottom: 12,
            right: 16,
            fontSize: 48,
            fontWeight: 800,
            color: project.accent,
            opacity: 0.06,
            lineHeight: 1,
            letterSpacing: '-0.04em',
            userSelect: 'none',
          }}
        >
          {String(project.id).padStart(2, '0')}
        </span>
      </div>

      {/* Info area */}
      <div
        style={{
          padding: isFeatured ? '32px 32px 36px' : '24px 24px 28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: isFeatured ? 'center' : 'flex-start',
          flex: 1,
        }}
      >
        {/* Top row: badge + status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 16,
            flexWrap: 'wrap',
            gap: 8,
          }}
        >
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              fontSize: 11,
              fontWeight: 600,
              color: project.accent,
              background: project.gradientFrom,
              borderRadius: 100,
              border: `1px solid ${project.accent}20`,
            }}
          >
            <Icon size={12} />
            {project.typeLabel}
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 5,
              fontSize: 10,
              fontWeight: 600,
              color: '#22c55e',
              letterSpacing: '0.02em',
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            {project.status}
          </span>
        </div>

        {/* Title + arrow */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}
        >
          <h3
            style={{
              fontSize: isFeatured ? 22 : 18,
              fontWeight: 700,
              color: '#111',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          <div
            className="portfolio-arrow-wrap"
            style={{
              width: 32,
              height: 32,
              borderRadius: 10,
              background: '#f5f5f5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <ArrowUpRight size={15} style={{ color: '#bbb' }} className="portfolio-arrow" />
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: isFeatured ? 15 : 13.5,
            lineHeight: 1.65,
            color: '#999',
            marginBottom: 20,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="portfolio-tech"
              style={{
                padding: '5px 12px',
                fontSize: 11,
                fontWeight: 500,
                color: '#888',
                background: '#f7f7f7',
                borderRadius: 100,
                border: '1px solid transparent',
                transition: 'all 0.3s ease',
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main section ── */

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered =
    activeFilter === 'all'
      ? projects
      : projects.filter((p) => p.type === activeFilter)

  return (
    <section
      id="portafolio"
      style={{
        padding: '120px 24px',
        background: '#fafafa',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span
            style={{
              display: 'block',
              marginBottom: 12,
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#aaa',
            }}
          >
            Portafolio
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            Nuestro trabajo
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              color: '#999',
              maxWidth: 460,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Proyectos reales que demuestran nuestro compromiso con la calidad y
            la innovacion.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 48,
          }}
        >
          {filters.map((f) => {
            const active = activeFilter === f.id
            const FIcon = f.icon
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 7,
                  padding: '10px 20px',
                  fontSize: 12.5,
                  fontWeight: 500,
                  borderRadius: 100,
                  border: active ? '1px solid #111' : '1px solid #e5e5e5',
                  color: active ? '#fff' : '#888',
                  background: active ? '#111' : '#fff',
                  boxShadow: active ? '0 4px 16px rgba(0,0,0,0.12)' : 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <FIcon size={14} />
                {f.label}
              </button>
            )
          })}
        </motion.div>

        {/* Bento grid */}
        <AnimatePresence mode="popLayout">
          <motion.div layout className="portfolio-bento">
            {filtered.map((project, i) => {
              const isFeatured =
                project.featured && activeFilter === 'all'
              return (
                <div
                  key={project.id}
                  className={isFeatured ? 'portfolio-bento-featured' : ''}
                >
                  <ProjectCard
                    project={project}
                    index={i}
                    isFeatured={isFeatured}
                  />
                </div>
              )
            })}

            {/* CTA card */}
            <motion.a
              href="#contacto"
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: filtered.length * 0.06,
              }}
              className="portfolio-bento-cta"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                padding: '48px 32px',
                borderRadius: 24,
                border: '2px dashed #e0e0e0',
                background: 'linear-gradient(145deg, #fafafa, #f5f5f5)',
                textDecoration: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                minHeight: 200,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#111'
                e.currentTarget.style.background = '#111'
                e.currentTarget.querySelector('.cta-title').style.color = '#fff'
                e.currentTarget.querySelector('.cta-desc').style.color = 'rgba(255,255,255,0.6)'
                e.currentTarget.querySelector('.cta-arrow').style.background = 'rgba(255,255,255,0.15)'
                e.currentTarget.querySelector('.cta-arrow').style.color = '#fff'
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,0,0,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#e0e0e0'
                e.currentTarget.style.background = 'linear-gradient(145deg, #fafafa, #f5f5f5)'
                e.currentTarget.querySelector('.cta-title').style.color = '#111'
                e.currentTarget.querySelector('.cta-desc').style.color = '#999'
                e.currentTarget.querySelector('.cta-arrow').style.background = '#f0f0f0'
                e.currentTarget.querySelector('.cta-arrow').style.color = '#888'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div
                className="cta-arrow"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: '#f0f0f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                  color: '#888',
                  transition: 'all 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              >
                <ArrowUpRight size={22} />
              </div>
              <h3
                className="cta-title"
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  marginBottom: 8,
                  transition: 'color 0.4s',
                }}
              >
                Y muchos mas en camino
              </h3>
              <p
                className="cta-desc"
                style={{
                  fontSize: 14,
                  color: '#999',
                  lineHeight: 1.6,
                  maxWidth: 240,
                  transition: 'color 0.4s',
                }}
              >
                Tu proyecto puede ser el siguiente. Hagamoslo realidad.
              </p>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
