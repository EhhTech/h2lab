import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
      <div
        style={{
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
          padding: scrolled ? '12px 24px 0' : '0',
        }}
      >
        <div
          className={scrolled ? 'nav-glass' : ''}
          style={{
            maxWidth: scrolled ? 680 : '100%',
            margin: '0 auto',
            padding: scrolled ? '10px 28px' : '20px 40px',
            borderRadius: scrolled ? 100 : 0,
            transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <a
            href="#inicio"
            style={{
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: '#111',
              textDecoration: 'none',
            }}
          >
            H2Lab.
          </a>

          {/* Desktop links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}
            className="hidden md:flex"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  fontSize: 13,
                  fontWeight: 500,
                  color: '#888',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = '#111')}
                onMouseLeave={(e) => (e.target.style.color = '#888')}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
            style={{ padding: 8, color: '#888' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden"
        style={{
          maxHeight: menuOpen ? 240 : 0,
          opacity: menuOpen ? 1 : 0,
          overflow: 'hidden',
          transition: 'all 0.3s ease-out',
        }}
      >
        <div
          style={{
            margin: '8px 16px',
            padding: '8px 24px',
            background: '#fff',
            border: '1px solid #e5e5e5',
            borderRadius: 16,
            boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: 'block',
                padding: '12px 0',
                fontSize: 14,
                fontWeight: 500,
                color: '#666',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
