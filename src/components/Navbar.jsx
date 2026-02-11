import { useState, useEffect, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Soluciones', href: '#soluciones' },
  { label: 'Portafolio', href: '#portafolio' },
  { label: 'Contacto', href: '#contacto' },
]

/* Animated hamburger lines → X */
function HamburgerIcon({ open }) {
  const line = {
    width: 20,
    height: 2,
    borderRadius: 2,
    background: '#555',
    transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
    transformOrigin: 'center',
  }

  return (
    <div
      style={{
        width: 20,
        height: 14,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
      }}
    >
      <span
        style={{
          ...line,
          transform: open
            ? 'translateY(6px) rotate(45deg)'
            : 'translateY(0) rotate(0)',
        }}
      />
      <span
        style={{
          ...line,
          opacity: open ? 0 : 1,
          transform: open ? 'scaleX(0)' : 'scaleX(1)',
        }}
      />
      <span
        style={{
          ...line,
          transform: open
            ? 'translateY(-6px) rotate(-45deg)'
            : 'translateY(0) rotate(0)',
        }}
      />
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const scrolledRef = useRef(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > 60
      if (past !== scrolledRef.current) {
        scrolledRef.current = past
        setScrolled(past)
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>
        {/* ─── Desktop: capsule animation ─── */}
        <div className="hidden md:block">
          <div
            style={{
              padding: scrolled ? '12px 24px 0' : '0',
              willChange: 'padding',
              transition: 'padding 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          >
            <div
              style={{
                position: 'relative',
                maxWidth: scrolled ? 680 : '100%',
                margin: '0 auto',
                padding: scrolled ? '10px 28px' : '20px 40px',
                borderRadius: scrolled ? 100 : 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                willChange: 'max-width, padding, border-radius',
                transition: [
                  'max-width 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  'padding 0.5s cubic-bezier(0.22, 1, 0.36, 1)',
                  'border-radius 0.45s cubic-bezier(0.22, 1, 0.36, 1)',
                ].join(', '),
              }}
            >
              {/* Glass layer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  borderRadius: 'inherit',
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                  border: '1px solid rgba(0, 0, 0, 0.06)',
                  boxShadow: '0 2px 16px rgba(0, 0, 0, 0.06)',
                  opacity: scrolled ? 1 : 0,
                  pointerEvents: 'none',
                  willChange: 'opacity',
                  transition: 'opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
                }}
              />

              <a
                href="#inicio"
                style={{
                  position: 'relative',
                  fontSize: 20,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#111',
                }}
              >
                H2Lab.
              </a>

              <div style={{ display: 'flex', alignItems: 'center', gap: 36, position: 'relative' }}>
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{
                      fontSize: 13,
                      fontWeight: 500,
                      color: '#888',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = '#111')}
                    onMouseLeave={(e) => (e.target.style.color = '#888')}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─── Mobile: clean glass bar ─── */}
        <div className="md:hidden">
          <div
            style={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '14px 20px',
            }}
          >
            {/* Glass background — always on for mobile, fades on scroll */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: scrolled || menuOpen
                  ? 'rgba(255, 255, 255, 0.92)'
                  : 'rgba(255, 255, 255, 0)',
                backdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(180%)' : 'none',
                WebkitBackdropFilter: scrolled || menuOpen ? 'blur(24px) saturate(180%)' : 'none',
                borderBottom: scrolled && !menuOpen
                  ? '1px solid rgba(0, 0, 0, 0.06)'
                  : '1px solid transparent',
                pointerEvents: 'none',
                transition: 'all 0.35s cubic-bezier(0.22, 1, 0.36, 1)',
              }}
            />

            <a
              href="#inicio"
              style={{
                position: 'relative',
                fontSize: 20,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#111',
                zIndex: 2,
              }}
            >
              H2Lab.
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
              style={{
                position: 'relative',
                zIndex: 2,
                width: 44,
                height: 44,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 12,
                background: menuOpen ? '#f5f5f5' : 'transparent',
                transition: 'background 0.3s',
              }}
            >
              <HamburgerIcon open={menuOpen} />
            </button>
          </div>
        </div>
      </nav>

      {/* ─── Mobile fullscreen overlay menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden"
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 49,
              background: 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(32px) saturate(180%)',
              WebkitBackdropFilter: 'blur(32px) saturate(180%)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 0,
              paddingBottom: 60,
            }}
          >
            {links.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.05 + i * 0.07,
                }}
                style={{
                  display: 'block',
                  padding: '18px 0',
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  color: '#111',
                  textAlign: 'center',
                  transition: 'color 0.2s',
                }}
              >
                {link.label}
              </motion.a>
            ))}

            {/* CTA at bottom of menu */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              style={{ marginTop: 32 }}
            >
              <a
                href="#contacto"
                onClick={closeMenu}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  padding: '14px 28px',
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#fff',
                  background: '#111',
                  borderRadius: 100,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                }}
              >
                Hablemos
                <span style={{ fontSize: 16 }}>&rarr;</span>
              </a>
            </motion.div>

            {/* Decorative line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{
                position: 'absolute',
                bottom: 80,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 40,
                height: 1,
                background: '#e0e0e0',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
