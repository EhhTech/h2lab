import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Clock, ArrowLeft } from 'lucide-react'

function renderBlock(block, i) {
  switch (block.type) {
    case 'lead':
      return <p key={i} className="lead">{block.text}</p>
    case 'h2':
      return <h2 key={i}>{block.text}</h2>
    case 'p':
      return <p key={i}>{block.text}</p>
    case 'list':
      return (
        <ul key={i}>
          {block.items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      )
    default:
      return null
  }
}

export default function ArticleModal({ post, onClose }) {
  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <motion.div
      key="article"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{    opacity: 0, y: 20 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: '#fff',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
      }}
    >
      {/* Top bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid #f0f0f0',
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <button
          onClick={onClose}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            fontSize: 13,
            fontWeight: 600,
            color: '#555',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '8px 12px',
            borderRadius: 10,
            transition: 'background 0.2s, color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#f5f5f5'; e.currentTarget.style.color = '#111' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = '#555' }}
        >
          <ArrowLeft size={15} />
          Volver al blog
        </button>

        <a href="#inicio" style={{ fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em', color: '#111', textDecoration: 'none' }}>
          H2Lab.
        </a>
      </div>

      {/* Article content */}
      <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 120px' }}>
        {/* Meta */}
        <div style={{ marginBottom: 32 }}>
          <span
            style={{
              display: 'inline-block',
              padding: '5px 12px',
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: post.categoryColor,
              background: post.categoryColor + '14',
              borderRadius: 100,
              marginBottom: 20,
            }}
          >
            {post.category}
          </span>

          <h1
            style={{
              fontSize: 'clamp(1.8rem, 5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: '#111',
              marginBottom: 20,
            }}
          >
            {post.title}
          </h1>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontSize: 13,
              color: '#bbb',
              fontWeight: 500,
            }}
          >
            <span>H2Lab Team</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ddd' }} />
            <span>{post.date}</span>
            <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ddd' }} />
            <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <Clock size={12} />
              {post.readTime} de lectura
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: '#f0f0f0', marginBottom: 48 }} />

        {/* Body */}
        <div className="article-body">
          {post.content.map((block, i) => renderBlock(block, i))}
        </div>

        {/* End CTA */}
        <div
          style={{
            marginTop: 64,
            padding: '36px 32px',
            background: '#fafafa',
            borderRadius: 20,
            border: '1px solid #ebebeb',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#aaa', marginBottom: 12 }}>
            ¿Te interesa este tema?
          </p>
          <h3 style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', fontWeight: 700, letterSpacing: '-0.02em', color: '#111', marginBottom: 8 }}>
            Hablemos de tu proyecto
          </h3>
          <p style={{ fontSize: 15, color: '#999', marginBottom: 24, lineHeight: 1.6 }}>
            Cuéntanos tu idea y te decimos cómo podemos ayudarte.
          </p>
          <a
            href="#contacto"
            onClick={onClose}
            className="btn-primary"
            style={{ textDecoration: 'none' }}
          >
            Contactar ahora →
          </a>
        </div>
      </div>
    </motion.div>
  )
}
