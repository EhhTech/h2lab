import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Smartphone, ShoppingBag, Monitor, MessageSquare, Globe } from 'lucide-react'

const tabs = [
  {
    id: 'apps',
    label: 'Apps Moviles',
    icon: Smartphone,
    title: 'Aplicaciones Moviles Nativas',
    description:
      'Desarrollamos apps iOS y Android con experiencias fluidas y rendimiento excepcional.',
    benefits: [
      'Interfaces intuitivas y modernas',
      'Rendimiento nativo optimizado',
      'Integracion con APIs y servicios',
      'Publicacion en App Store y Google Play',
    ],
  },
  {
    id: 'ecommerce',
    label: 'Tiendas Online',
    icon: ShoppingBag,
    title: 'E-Commerce a Medida',
    description:
      'Tiendas online completas con pasarelas de pago, inventario y logistica integrada.',
    benefits: [
      'Pasarelas de pago seguras',
      'Gestion de inventario en tiempo real',
      'Panel de administracion personalizado',
      'Optimizacion para conversiones',
    ],
  },
  {
    id: 'pos',
    label: 'Sistemas POS',
    icon: Monitor,
    title: 'Punto de Venta Inteligente',
    description:
      'Sistemas POS robustos que simplifican la operacion diaria de tu negocio.',
    benefits: [
      'Control de ventas e inventario',
      'Reportes y analiticas en tiempo real',
      'Funciona sin conexion a internet',
      'Integracion con impresoras y hardware',
    ],
  },
  {
    id: 'chatbots',
    label: 'Chatbots',
    icon: MessageSquare,
    title: 'Chatbots con IA',
    description:
      'Automatiza la atencion al cliente con chatbots inteligentes que entienden a tus usuarios.',
    benefits: [
      'Respuestas automaticas 24/7',
      'Integracion con WhatsApp y redes',
      'Entrenamiento personalizado con IA',
      'Escalamiento a agentes humanos',
    ],
  },
  {
    id: 'web',
    label: 'Paginas Web',
    icon: Globe,
    title: 'Sitios Web Profesionales',
    description:
      'Paginas web rapidas, responsivas y optimizadas para posicionamiento en buscadores.',
    benefits: [
      'Diseno responsivo y accesible',
      'Optimizacion SEO avanzada',
      'Velocidad de carga ultra-rapida',
      'Panel de contenidos facil de usar',
    ],
  },
]

export default function Showcase() {
  const [active, setActive] = useState(0)
  const current = tabs[active]
  const IconComponent = current.icon

  return (
    <section
      id="soluciones"
      style={{
        padding: '120px 24px',
        background: '#f7f7f7',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 56 }}
        >
          <span style={{ display: 'block', marginBottom: 12, fontSize: 12, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa' }}>
            Nuestros servicios
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#111' }}>
            Soluciones a tu medida
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: '#999', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
            Cada proyecto es unico. Elegimos la tecnologia ideal para tus necesidades.
          </p>
        </motion.div>

        {/* Tab bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 8,
            marginBottom: 56,
          }}
        >
          {tabs.map((tab, i) => (
            <button
              key={tab.id}
              onClick={() => setActive(i)}
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '12px 22px',
                fontSize: 13,
                fontWeight: 500,
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                color: active === i ? '#fff' : '#888',
                background: active === i ? '#111' : 'transparent',
                boxShadow: active === i ? '0 4px 16px rgba(0,0,0,0.12)' : 'none',
              }}
            >
              <tab.icon size={15} />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Split content */}
        <div className="showcase-grid">
          {/* Left: Text content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 10,
                    padding: '8px 16px',
                    marginBottom: 20,
                    background: '#fff',
                    border: '1px solid #e5e5e5',
                    borderRadius: 100,
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#888',
                  }}
                >
                  <IconComponent size={14} />
                  {current.label}
                </div>

                <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#111', lineHeight: 1.3 }}>
                  {current.title}
                </h3>

                <p style={{ marginTop: 16, fontSize: 15, lineHeight: 1.7, color: '#999' }}>
                  {current.description}
                </p>

                <ul style={{ marginTop: 28, listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: 14 }}>
                  {current.benefits.map((b, i) => (
                    <motion.li
                      key={b}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08, duration: 0.4 }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 12,
                        fontSize: 14,
                        color: '#666',
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: 24,
                          height: 24,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: '#f0f0f0',
                          borderRadius: '50%',
                        }}
                      >
                        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#bbb' }} />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Preview card */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id + '-preview'}
                initial={{ opacity: 0, scale: 0.96, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: -10 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="card-elevated"
                style={{ padding: 6 }}
              >
                <div style={{ borderRadius: 20, overflow: 'hidden', background: '#fff' }}>
                  {/* Browser bar */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    padding: '14px 20px',
                    borderBottom: '1px solid #f0f0f0',
                  }}>
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffb3b3' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ffe0a3' }} />
                    <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#b3e6b3' }} />
                    <div style={{
                      marginLeft: 12,
                      flex: 1,
                      maxWidth: 280,
                      height: 28,
                      display: 'flex',
                      alignItems: 'center',
                      padding: '0 14px',
                      background: '#f8f8f8',
                      borderRadius: 100,
                      fontSize: 11,
                      color: '#ccc',
                    }}>
                      h2lab.dev/{current.id}
                    </div>
                  </div>

                  {/* Mock content */}
                  <div style={{ padding: '32px 32px 36px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 28 }}>
                      <div style={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f5f5f5',
                        borderRadius: 14,
                      }}>
                        <IconComponent size={20} style={{ color: '#ccc' }} />
                      </div>
                      <div>
                        <div style={{ width: 120, height: 14, borderRadius: 100, background: '#ebebeb', marginBottom: 8 }} />
                        <div style={{ width: 80, height: 10, borderRadius: 100, background: '#f5f5f5' }} />
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 28 }}>
                      <div style={{ width: '100%', height: 10, borderRadius: 100, background: '#f3f3f3' }} />
                      <div style={{ width: '85%', height: 10, borderRadius: 100, background: '#f7f7f7' }} />
                      <div style={{ width: '65%', height: 10, borderRadius: 100, background: '#f3f3f3' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
                      <div style={{ height: 100, borderRadius: 16, background: 'linear-gradient(135deg, #f8f8f8, #f0f0f0)' }} />
                      <div style={{ height: 100, borderRadius: 16, background: 'linear-gradient(135deg, #f8f8f8, #f0f0f0)' }} />
                    </div>

                    <div style={{ display: 'flex', gap: 12 }}>
                      <div style={{ width: 120, height: 40, borderRadius: 100, background: '#111' }} />
                      <div style={{ width: 100, height: 40, borderRadius: 100, background: '#f3f3f3' }} />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
