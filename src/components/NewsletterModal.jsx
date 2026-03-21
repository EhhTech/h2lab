import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, CheckCircle, AlertCircle, Loader } from 'lucide-react'

const STORAGE_KEY = 'h2lab-newsletter-dismissed'
const DELAY_MS    = 5000

const CK_API_KEY  = import.meta.env.VITE_CONVERTKIT_API_KEY
const CK_FORM_ID  = import.meta.env.VITE_CONVERTKIT_FORM_ID

async function subscribeToConvertKit(email) {
  if (!CK_API_KEY || !CK_FORM_ID) {
    // Keys not configured — simulate success so UX still works
    await new Promise(r => setTimeout(r, 800))
    return
  }
  const res = await fetch(
    `https://api.convertkit.com/v3/forms/${CK_FORM_ID}/subscribe`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ api_key: CK_API_KEY, email }),
    }
  )
  if (!res.ok) throw new Error(`ConvertKit error ${res.status}`)
}

export default function NewsletterModal() {
  const [visible,  setVisible]  = useState(false)
  const [email,    setEmail]    = useState('')
  const [status,   setStatus]   = useState('idle') // idle | loading | success | error

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY)) return
    const t = setTimeout(() => setVisible(true), DELAY_MS)
    return () => clearTimeout(t)
  }, [])

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    setVisible(false)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email || status === 'loading') return
    setStatus('loading')
    try {
      await subscribeToConvertKit(email)
      setStatus('success')
      setTimeout(dismiss, 2800)
    } catch {
      setStatus('error')
    }
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
            aria-hidden="true"
            style={{
              position: 'fixed', inset: 0,
              background: 'rgba(0,0,0,0.5)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              zIndex: 900,
            }}
          />

          {/* Centering shell */}
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            style={{
              position: 'fixed', inset: 0, zIndex: 901,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '16px', pointerEvents: 'none',
            }}
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.92, y: 28 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{    opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              style={{
                pointerEvents: 'all',
                width: '100%', maxWidth: 460,
                background: '#0a0a0a',
                borderRadius: 24,
                padding: '40px 36px 36px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)',
                overflow: 'hidden', position: 'relative',
              }}
            >
              {/* Decorative glow */}
              <div style={{
                position: 'absolute', top: -80, right: -80,
                width: 280, height: 280, borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
                pointerEvents: 'none',
              }} />

              {/* Close */}
              <button
                onClick={dismiss}
                aria-label="Cerrar"
                style={{
                  position: 'absolute', top: 16, right: 16,
                  width: 32, height: 32, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  border: 'none', cursor: 'pointer',
                  transition: 'background 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = '#fff' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
              >
                <X size={14} />
              </button>

              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{ textAlign: 'center', padding: '16px 0' }}
                  >
                    <motion.div
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1,   opacity: 1 }}
                      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      style={{ display: 'flex', justifyContent: 'center', marginBottom: 20 }}
                    >
                      <CheckCircle size={48} style={{ color: '#22c55e' }} />
                    </motion.div>
                    <h3 id="newsletter-title" style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.02em', marginBottom: 10 }}>
                      ¡Listo! Ya estás suscrito.
                    </h3>
                    <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>
                      Te avisaremos cuando haya algo nuevo. Gracias por confiar en H2Lab.
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: 'rgba(255,255,255,0.09)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: 24,
                    }}>
                      <Mail size={20} style={{ color: 'rgba(255,255,255,0.75)' }} />
                    </div>

                    <h3 id="newsletter-title" style={{
                      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
                      fontWeight: 700, letterSpacing: '-0.02em',
                      color: '#fff', marginBottom: 10, lineHeight: 1.3,
                    }}>
                      Recibe nuestras novedades
                    </h3>
                    <p style={{ fontSize: 14, lineHeight: 1.7, color: 'rgba(255,255,255,0.45)', marginBottom: 28 }}>
                      Tips de tecnología, proyectos nuevos y promociones exclusivas.
                      Sin spam, te lo prometemos.
                    </p>

                    <form onSubmit={handleSubmit} noValidate>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={e => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                          placeholder="tu@email.com"
                          className="newsletter-input"
                          aria-label="Correo electrónico"
                          disabled={status === 'loading'}
                          style={{
                            width: '100%', padding: '14px 18px', fontSize: 15,
                            color: '#fff',
                            background: 'rgba(255,255,255,0.1)',
                            border: `1.5px solid ${status === 'error' ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.18)'}`,
                            borderRadius: 12, outline: 'none',
                            transition: 'border-color 0.2s, background 0.2s',
                            fontFamily: 'inherit', boxSizing: 'border-box',
                            opacity: status === 'loading' ? 0.6 : 1,
                          }}
                          onFocus={e  => { e.target.style.borderColor = 'rgba(255,255,255,0.5)'; e.target.style.background = 'rgba(255,255,255,0.13)' }}
                          onBlur={e   => { e.target.style.borderColor = status === 'error' ? 'rgba(239,68,68,0.6)' : 'rgba(255,255,255,0.18)'; e.target.style.background = 'rgba(255,255,255,0.1)' }}
                        />

                        {status === 'error' && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 12, color: '#f87171' }}>
                            <AlertCircle size={13} />
                            Hubo un error. Por favor intenta de nuevo.
                          </div>
                        )}

                        <button
                          type="submit"
                          disabled={status === 'loading'}
                          style={{
                            width: '100%', padding: '14px', fontSize: 14, fontWeight: 600,
                            color: '#000', background: '#fff', border: 'none', borderRadius: 12,
                            cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                            letterSpacing: '0.01em',
                            transition: 'background 0.2s, transform 0.15s',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                            opacity: status === 'loading' ? 0.75 : 1,
                          }}
                          onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.background = 'rgba(255,255,255,0.88)'; e.currentTarget.style.transform = 'translateY(-1px)' }}}
                          onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(0)' }}
                        >
                          {status === 'loading'
                            ? <><Loader size={15} style={{ animation: 'spin 1s linear infinite' }} /> Suscribiendo...</>
                            : 'Suscribirme →'
                          }
                        </button>
                      </div>
                    </form>

                    <button
                      onClick={dismiss}
                      style={{
                        display: 'block', width: '100%', marginTop: 16,
                        fontSize: 12, color: 'rgba(255,255,255,0.28)',
                        textAlign: 'center', cursor: 'pointer',
                        background: 'none', border: 'none',
                        transition: 'color 0.2s', letterSpacing: '0.02em',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                      onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.28)')}
                    >
                      No gracias, continuar sin suscribirme
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
