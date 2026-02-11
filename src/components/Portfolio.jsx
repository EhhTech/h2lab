import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Smartphone,
  Globe,
  Monitor,
  ShoppingBag,
  MessageSquare,
  ArrowUpRight,
  Layers,
} from 'lucide-react'

const typeIcons = {
  app: Smartphone,
  web: Globe,
  pos: Monitor,
  ecommerce: ShoppingBag,
  chatbot: MessageSquare,
}

const filters = [
  { id: 'all', label: 'Todos', icon: Layers },
  { id: 'app', label: 'Apps', icon: Smartphone },
  { id: 'ecommerce', label: 'E-commerce', icon: ShoppingBag },
  { id: 'pos', label: 'POS', icon: Monitor },
  { id: 'chatbot', label: 'Chatbots', icon: MessageSquare },
  { id: 'web', label: 'Web', icon: Globe },
]

const projects = [
  {
    id: 1,
    title: 'FoodieApp',
    type: 'app',
    typeLabel: 'App Movil',
    description:
      'App de delivery con seguimiento en tiempo real, pasarela de pagos y panel de administracion.',
    tech: ['React Native', 'Node.js', 'Firebase'],
    accent: '#3b82f6',
    gradientFrom: '#eff6ff',
    gradientTo: '#dbeafe',
    status: 'En produccion',
  },
  {
    id: 2,
    title: 'ModaStore',
    type: 'ecommerce',
    typeLabel: 'Tienda Online',
    description:
      'E-commerce de moda con catalogo inteligente, carrito y gestion de inventario automatizada.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    accent: '#ec4899',
    gradientFrom: '#fdf2f8',
    gradientTo: '#fce7f3',
    status: 'En produccion',
  },
  {
    id: 3,
    title: 'QuickPOS',
    type: 'pos',
    typeLabel: 'Sistema POS',
    description:
      'Punto de venta para cadena de restaurantes con reportes en tiempo real y modo offline.',
    tech: ['Electron', 'React', 'SQLite'],
    accent: '#22c55e',
    gradientFrom: '#f0fdf4',
    gradientTo: '#dcfce7',
    status: 'En produccion',
  },
  {
    id: 4,
    title: 'AsistBot',
    type: 'chatbot',
    typeLabel: 'Chatbot IA',
    description:
      'Asistente virtual con IA para atencion al cliente 24/7 integrado con WhatsApp Business.',
    tech: ['Python', 'Gemini API', 'WhatsApp API'],
    accent: '#f59e0b',
    gradientFrom: '#fffbeb',
    gradientTo: '#fef3c7',
    status: 'En produccion',
  },
  {
    id: 5,
    title: 'CorpSite Pro',
    type: 'web',
    typeLabel: 'Pagina Web',
    description:
      'Sitio corporativo con panel CMS personalizado, blog y optimizacion SEO avanzada.',
    tech: ['React', 'Tailwind', 'Sanity'],
    accent: '#8b5cf6',
    gradientFrom: '#f5f3ff',
    gradientTo: '#ede9fe',
    status: 'Reciente',
  },
  {
    id: 6,
    title: 'HealthTrack',
    type: 'app',
    typeLabel: 'App Movil',
    description:
      'App de telemedicina con agenda de citas, videollamadas y expediente digital del paciente.',
    tech: ['Flutter', 'Firebase', 'WebRTC'],
    accent: '#14b8a6',
    gradientFrom: '#f0fdfa',
    gradientTo: '#ccfbf1',
    status: 'En produccion',
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

function PreviewContent({ project }) {
  const { type, accent } = project

  const common = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
  }

  if (type === 'app') {
    return (
      <div style={common}>
        <PhoneMockup accent={accent} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <WidgetMockup accent={accent} />
          <div
            style={{
              width: 80,
              height: 20,
              borderRadius: 6,
              background: accent,
              opacity: 0.1,
            }}
          />
        </div>
      </div>
    )
  }

  if (type === 'ecommerce' || type === 'web') {
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
          <div
            style={{
              width: 80,
              height: 16,
              borderRadius: 100,
              background: accent,
              opacity: 0.12,
            }}
          />
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
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
