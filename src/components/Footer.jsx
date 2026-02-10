import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Footer() {
  return (
    <footer
      style={{
        padding: '64px 24px',
        borderTop: '1px solid #f0f0f0',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: 1100,
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 28,
        }}
      >
        {/* Brand */}
        <a
          href="#inicio"
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: '#111',
            textDecoration: 'none',
          }}
        >
          H2Lab.
        </a>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
          {footerLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontSize: 14,
                color: '#999',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = '#111')}
              onMouseLeave={(e) => (e.target.style.color = '#999')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ width: 48, height: 1, background: '#e5e5e5' }} />

        {/* Copyright */}
        <p style={{ fontSize: 12, color: '#ccc' }}>
          &copy; {new Date().getFullYear()} H2Lab. Todos los derechos reservados.
        </p>
      </motion.div>
    </footer>
  )
}
