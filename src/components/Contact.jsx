import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, MessageCircle } from 'lucide-react'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombre, email, mensaje } = form
    const whatsappText = encodeURIComponent(
      `Hola, soy ${nombre} (${email}). ${mensaje}`
    )
    window.open(`https://wa.me/515659097415?text=${whatsappText}`, '_blank')
  }

  return (
    <section
      id="contacto"
      style={{
        padding: '120px 24px',
        background: '#fff',
      }}
    >
      <div style={{ maxWidth: 580, margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 48 }}
        >
          <span style={{ display: 'block', marginBottom: 12, fontSize: 12, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa' }}>
            Contacto
          </span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#111' }}>
            Convierte tu idea en software
          </h2>
          <p style={{ marginTop: 16, fontSize: 16, color: '#999' }}>
            Desarrollo 100% a medida, sin plantillas. Cuentanos tu proyecto.
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        >
          <form
            onSubmit={handleSubmit}
            className="card-elevated contact-form"
            style={{ padding: '36px 28px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              <div>
                <label
                  htmlFor="nombre"
                  style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 600, color: '#555' }}
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 600, color: '#555' }}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="mensaje"
                  style={{ display: 'block', marginBottom: 8, fontSize: 13, fontWeight: 600, color: '#555' }}
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={5}
                  value={form.mensaje}
                  onChange={handleChange}
                  className="input-field"
                  style={{ resize: 'none' }}
                  placeholder="Cuentanos sobre tu proyecto..."
                />
              </div>
            </div>

            <div style={{ marginTop: 36, display: 'flex', flexWrap: 'wrap', gap: 12 }}>
              <button type="submit" className="btn-primary">
                <Send size={15} />
                Enviar mensaje
              </button>

              <a
                href="https://wa.me/515659097415"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <MessageCircle size={15} />
                WhatsApp directo
              </a>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
