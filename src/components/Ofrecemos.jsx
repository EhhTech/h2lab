import { motion } from 'framer-motion'
import { Zap, Shield, Headphones, RefreshCw } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Desarrollo Agil',
    text: 'Entregas rapidas con iteraciones constantes para que veas resultados desde el primer dia.',
  },
  {
    icon: Shield,
    title: 'Calidad Garantizada',
    text: 'Codigo limpio, seguro y escalable respaldado por las mejores practicas de la industria.',
  },
  {
    icon: Headphones,
    title: 'Soporte Continuo',
    text: 'Acompanamiento post-lanzamiento para que tu producto siempre funcione al maximo.',
  },
  {
    icon: RefreshCw,
    title: '100% Personalizado',
    text: 'Nada de plantillas. Cada solucion se construye desde cero para tu negocio.',
  },
]

export default function Ofrecemos() {
  return (
    <section
      style={{
        padding: '80px 20px',
        background: '#fff',
        overflow: 'hidden',
      }}
      className="ofrecemos-section"
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        {/* Section header */}
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
            Por que elegirnos
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            Lo que ofrecemos
          </h2>
          <p
            style={{
              marginTop: 16,
              fontSize: 16,
              color: '#999',
              maxWidth: 480,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            No solo escribimos codigo. Creamos soluciones digitales que
            transforman negocios y generan resultados reales.
          </p>
        </motion.div>

        {/* Feature grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 24,
            marginBottom: 80,
          }}
        >
          {features.map((feat, i) => {
            const Icon = feat.icon
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.1,
                }}
                style={{
                  padding: '36px 32px',
                  background: '#fafafa',
                  borderRadius: 20,
                  border: '1px solid #f0f0f0',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#e0e0e0'
                  e.currentTarget.style.boxShadow =
                    '0 8px 32px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#f0f0f0'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f0f0f0',
                    borderRadius: 14,
                    marginBottom: 20,
                  }}
                >
                  <Icon size={20} style={{ color: '#888' }} />
                </div>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#111',
                    marginBottom: 10,
                  }}
                >
                  {feat.title}
                </h3>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: '#999' }}>
                  {feat.text}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* Video section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div style={{ textAlign: 'center', marginBottom: 36 }}>
            <h3
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#111',
              }}
            >
              Mira lo que podemos hacer por ti
            </h3>
            <p
              style={{
                marginTop: 12,
                fontSize: 15,
                color: '#999',
                maxWidth: 400,
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Descubre como ayudamos a negocios como el tuyo a crecer con
              tecnologia.
            </p>
          </div>

          {/* YouTube video embed — reemplaza VIDEO_ID con tu ID de YouTube */}
          <div
            className="card-elevated video-placeholder"
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              borderRadius: 20,
              overflow: 'hidden',
              background: '#000',
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/0VdQRAT6-kk"
              title="Video promocional H2Lab"
              style={{ width: '100%', height: '100%', border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
