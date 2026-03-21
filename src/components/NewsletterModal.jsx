import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, CheckCircle } from 'lucide-react'

const STORAGE_KEY = 'h2lab-newsletter-dismissed'
const DELAY_MS    = 5000

export default function NewsletterModal() {
  const [visible, setVisible] = useState(false)
  const [email,   setEmail]   = useState('')
  const [sent,    setSent]    = useState(false)

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const t = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setTimeout(() => {
      dismiss()
    }, 2800)
  }

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={dismiss}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.45)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              zIndex: 900,
            }}
          />

          {/* Modal card */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.93, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.93, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 'min(460px, calc(100vw - 32px))',
              background: '#0a0a0a',
              borderRadius: 24,
              padding: '40px 36px 36px',
              zIndex: 901,
              boxShadow: '0 32px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.06)',
              overflow: 'hidden',
            }}
          >
            {/* Background decoration */}
            <div
              style={{
                position: 'absolute',
                top: -80,
                right: -80,
                width: 280,
                height: 280,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Close */}
            <button
              onClick={dismiss}
              aria-label="Cerrar"
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                width: 32,
                height: 32,
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'rgba(255,255,255,0.5)',
                transition: 'background 0.2s, color 0.2s',
                cursor: 'pointer',
                border: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                e.currentTarget.style.color = '#fff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
              }}
            >
              <X size={14} />
            </button>

            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Icon */}
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 14,
                      background: 'rgba(255,255,255,0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: 24,
                    }}
                  >
                    <Mail size={20} style={{ color: 'rgba(255,255,255,0.7)' }} />
                  </div>

                  <h3
                    style={{
                      fontSize: 'clamp(1.3rem, 3vw, 1.55rem)',
                      fontWeight: 700,
                      letterSpacing: '-0.02em',
                      color: '#fff',
                      marginBottom: 10,
                      lineHeight: 1.3,
                    }}
                  >
                    Recibe nuestras novedades
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.42)',
                      marginBottom: 28,
                    }}
                  >
                    Tips de tecnología, proyectos nuevos y promociones
                    exclusivas. Sin spam, te lo prometemos.
                  </p>

                  <form onSubmit={handleSubmit}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        style={{
                          width: '100%',
                          padding: '14px 18px',
                          fontSize: 15,
                          color: '#fff',
                          background: 'rgba(255,255,255,0.07)',
                          border: '1.5px solid rgba(255,255,255,0.1)',
                          borderRadius: 12,
                          outline: 'none',
                          transition: 'border-color 0.2s',
                          fontFamily: 'inherit',
                          boxSizing: 'border-box',
                        }}
                        onFocus={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.3)')}
                        onBlur={(e)  => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                      />

                      <button
                        type="submit"
                        style={{
                          width: '100%',
                          padding: '14px',
                          fontSize: 14,
                          fontWeight: 600,
                          color: '#000',
                          background: '#fff',
                          border: 'none',
                          borderRadius: 12,
                          cursor: 'pointer',
                          transition: 'background 0.2s, transform 0.15s',
                          letterSpacing: '0.01em',
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.88)'
                          e.currentTarget.style.transform = 'translateY(-1px)'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = '#fff'
                          e.currentTarget.style.transform = 'translateY(0)'
                        }}
                      >
                        Suscribirme →
                      </button>
                    </div>
                  </form>

                  <button
                    onClick={dismiss}
                    style={{
                      display: 'block',
                      width: '100%',
                      marginTop: 16,
                      fontSize: 12,
                      color: 'rgba(255,255,255,0.25)',
                      textAlign: 'center',
                      cursor: 'pointer',
                      background: 'none',
                      border: 'none',
                      transition: 'color 0.2s',
                      letterSpacing: '0.02em',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
                  >
                    No gracias, continuar sin suscribirme
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  style={{ textAlign: 'center', padding: '16px 0' }}
                >
                  <motion.div
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
                  >
                    <CheckCircle size={48} style={{ color: '#22c55e' }} />
                  </motion.div>
                  <h3
                    style={{
                      fontSize: '1.4rem',
                      fontWeight: 700,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                      marginBottom: 10,
                    }}
                  >
                    ¡Listo! Ya estás suscrito.
                  </h3>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                    Te avisaremos cuando haya algo nuevo. Gracias por confiar en H2Lab.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
