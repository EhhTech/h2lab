import { motion } from 'framer-motion'
import { Target, Eye } from 'lucide-react'

const cards = [
  {
    icon: Target,
    label: 'Nuestra Misión',
    text: 'Desarrollar software a medida que transforme la operación de nuestros clientes, combinando tecnología de vanguardia con un enfoque 100% personalizado para cada proyecto.',
    rotate: -2,
    offsetY: 0,
  },
  {
    icon: Eye,
    label: 'Nuestra Visión',
    text: 'Ser el aliado tecnológico de referencia para empresas que buscan soluciones digitales que realmente impulsen su crecimiento y los posicionen a la vanguardia de su industria.',
    rotate: 2,
    offsetY: -40,
  },
]

export default function MisionVision() {
  return (
    <section
      style={{
        padding: '120px 24px',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 72 }}
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
            Nosotros
          </span>
          <h2
            style={{
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#111',
            }}
          >
            Quiénes somos
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: '#999', maxWidth: 460, marginLeft: 'auto', marginRight: 'auto' }}>
            Construimos tecnología con propósito, impulsados por una misión clara y una visión ambiciosa.
          </p>
        </motion.div>

        {/* Cards container */}
        <div className="mv-cards-container">
          {cards.map((card, i) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 50, scale: 0.95, rotate: 0 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  rotate: card.rotate,
                }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.15,
                }}
                whileHover={{
                  rotate: 0,
                  y: -6,
                  boxShadow: '0 20px 60px rgba(0,0,0,0.10), 0 4px 12px rgba(0,0,0,0.04)',
                  transition: { duration: 0.3 },
                }}
                className="card-elevated mv-card"
                style={{
                  position: 'relative',
                  zIndex: i + 1,
                  padding: '36px 28px',
                  cursor: 'default',
                  transition: 'box-shadow 0.3s',
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 52,
                    height: 52,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: '#f7f7f7',
                    borderRadius: 16,
                    marginBottom: 24,
                  }}
                >
                  <Icon size={22} style={{ color: '#888' }} />
                </div>

                {/* Label */}
                <h3
                  style={{
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#111',
                    marginBottom: 14,
                  }}
                >
                  {card.label}
                </h3>

                {/* Text */}
                <p
                  style={{
                    fontSize: 15,
                    lineHeight: 1.75,
                    color: '#888',
                  }}
                >
                  {card.text}
                </p>

                {/* Decorative corner accent */}
                <div
                  style={{
                    position: 'absolute',
                    top: 20,
                    right: 24,
                    width: 32,
                    height: 32,
                    borderRadius: 10,
                    background: 'linear-gradient(135deg, #f5f5f5, #ebebeb)',
                    opacity: 0.6,
                  }}
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
