import { motion } from 'framer-motion'
import { Smartphone, Globe, Monitor, ShoppingBag, MessageSquare, ArrowUpRight } from 'lucide-react'

const typeIcons = {
  app: Smartphone,
  web: Globe,
  pos: Monitor,
  ecommerce: ShoppingBag,
  chatbot: MessageSquare,
}

const projects = [
  {
    id: 1,
    title: 'FoodieApp',
    type: 'app',
    typeLabel: 'App Móvil',
    description: 'App de delivery con seguimiento en tiempo real, pasarela de pagos y panel de administración.',
    tech: ['React Native', 'Node.js', 'Firebase'],
    color: '#f0f7ff',
    accent: '#3b82f6',
  },
  {
    id: 2,
    title: 'ModaStore',
    type: 'ecommerce',
    typeLabel: 'Tienda Online',
    description: 'E-commerce de moda con catálogo inteligente, carrito y gestión de inventario automatizada.',
    tech: ['Next.js', 'Stripe', 'PostgreSQL'],
    color: '#fdf2f8',
    accent: '#ec4899',
  },
  {
    id: 3,
    title: 'QuickPOS',
    type: 'pos',
    typeLabel: 'Sistema POS',
    description: 'Punto de venta para cadena de restaurantes con reportes en tiempo real y modo offline.',
    tech: ['Electron', 'React', 'SQLite'],
    color: '#f0fdf4',
    accent: '#22c55e',
  },
  {
    id: 4,
    title: 'AsistBot',
    type: 'chatbot',
    typeLabel: 'Chatbot IA',
    description: 'Asistente virtual con IA para atención al cliente 24/7 integrado con WhatsApp Business.',
    tech: ['Python', 'Gemini API', 'WhatsApp API'],
    color: '#fffbeb',
    accent: '#f59e0b',
  },
  {
    id: 5,
    title: 'CorpSite Pro',
    type: 'web',
    typeLabel: 'Página Web',
    description: 'Sitio corporativo con panel CMS personalizado, blog y optimización SEO avanzada.',
    tech: ['React', 'Tailwind', 'Sanity'],
    color: '#f5f3ff',
    accent: '#8b5cf6',
  },
  {
    id: 6,
    title: 'HealthTrack',
    type: 'app',
    typeLabel: 'App Móvil',
    description: 'App de telemedicina con agenda de citas, videollamadas y expediente digital del paciente.',
    tech: ['Flutter', 'Firebase', 'WebRTC'],
    color: '#f0fdfa',
    accent: '#14b8a6',
  },
]

function ProjectCard({ project, index }) {
  const Icon = typeIcons[project.type] || Globe

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      }}
      className="portfolio-card"
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 20,
        border: '1px solid #e5e5e5',
        background: '#fff',
        cursor: 'pointer',
      }}
    >
      {/* Preview area */}
      <div
        style={{
          position: 'relative',
          height: 200,
          background: project.color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Decorative shapes */}
        <div
          style={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: project.accent,
            opacity: 0.08,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -30,
            left: -10,
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: project.accent,
            opacity: 0.05,
          }}
        />

        {/* Icon */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 20,
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
          }}
        >
          <Icon size={28} style={{ color: project.accent }} />
        </div>
      </div>

      {/* Info area */}
      <div style={{ padding: '24px 24px 28px' }}>
        {/* Type badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              padding: '5px 12px',
              fontSize: 11,
              fontWeight: 600,
              color: project.accent,
              background: project.color,
              borderRadius: 100,
            }}
          >
            <Icon size={12} />
            {project.typeLabel}
          </span>
          <ArrowUpRight size={16} style={{ color: '#ccc' }} className="portfolio-arrow" />
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            color: '#111',
            letterSpacing: '-0.01em',
            marginBottom: 8,
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.6,
            color: '#999',
            marginBottom: 16,
          }}
        >
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                padding: '4px 10px',
                fontSize: 11,
                fontWeight: 500,
                color: '#888',
                background: '#f5f5f5',
                borderRadius: 100,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Hover overlay */}
      <div className="portfolio-overlay">
        <div style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 14,
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 14px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <ArrowUpRight size={22} style={{ color: '#fff' }} />
          </div>
          <p style={{ fontSize: 14, fontWeight: 600, color: '#fff' }}>Ver proyecto</p>
          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginTop: 4 }}>
            {project.typeLabel} — {project.tech[0]}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  return (
    <section
      id="portafolio"
      style={{
        padding: '120px 24px',
        background: '#fff',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 64 }}
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
          <p style={{ marginTop: 16, fontSize: 16, color: '#999', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            Proyectos reales que demuestran nuestro compromiso con la calidad y la innovación.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="portfolio-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
