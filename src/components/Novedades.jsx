import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'
import { novedadesPosts } from '../data/novedadesPosts'

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export default function Novedades() {
  return (
    <section
      style={{
        padding: '120px 24px',
        background: '#fff',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: 24,
            marginBottom: 48,
          }}
        >
          <div>
            <div className="section-tag" style={{ marginBottom: 12 }}>
              06 &mdash; Novedades
            </div>
            <h2
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: '#111',
                lineHeight: 1.15,
              }}
            >
              Lo último de H2Lab
            </h2>
            <p
              style={{
                marginTop: 14,
                fontSize: 16,
                color: '#999',
                maxWidth: 400,
                lineHeight: 1.65,
              }}
            >
              Proyectos, tips y actualizaciones en tiempo real.
            </p>
          </div>

          {/* Instagram CTA */}
          <a
            href="https://www.instagram.com/h2lab_"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '11px 20px',
              fontSize: 13,
              fontWeight: 600,
              color: '#111',
              background: '#fafafa',
              border: '1.5px solid #ebebeb',
              borderRadius: 100,
              textDecoration: 'none',
              transition: 'all 0.25s cubic-bezier(0.22,1,0.36,1)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#111'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = '#111'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.10)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#fafafa'
              e.currentTarget.style.color = '#111'
              e.currentTarget.style.borderColor = '#ebebeb'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            <InstagramIcon size={14} />
            @h2lab_
            <ExternalLink size={12} style={{ opacity: 0.5 }} />
          </a>
        </motion.div>

        {/* Post grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {novedadesPosts.map((post, i) => (
            <motion.a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 18,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid #f0f0f0',
                background: '#fff',
                transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px) scale(1.01)'
                e.currentTarget.style.boxShadow = '0 20px 48px rgba(0,0,0,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Image / placeholder */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  background: post.image ? `url(${post.image}) center/cover` : post.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  flexShrink: 0,
                }}
              >
                {!post.image && (
                  <span style={{ fontSize: 40, userSelect: 'none' }}>{post.emoji}</span>
                )}

                {/* Platform badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    width: 28,
                    height: 28,
                    borderRadius: 8,
                    background: 'rgba(0,0,0,0.35)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <InstagramIcon size={13} />
                </div>
              </div>

              {/* Caption */}
              <div style={{ padding: '14px 16px 16px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p
                  style={{
                    fontSize: 13,
                    lineHeight: 1.6,
                    color: '#444',
                    flex: 1,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: 10,
                  }}
                >
                  {post.caption}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <span style={{ fontSize: 11, color: '#bbb', fontWeight: 500 }}>
                    {post.date}
                  </span>
                  <span
                    style={{
                      fontSize: 11,
                      color: '#bbb',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 4,
                      fontWeight: 500,
                    }}
                  >
                    Ver post <ExternalLink size={10} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginTop: 48 }}
        >
          <a
            href="https://www.instagram.com/h2lab_"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              fontSize: 13,
              fontWeight: 600,
              color: '#888',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#111')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#888')}
          >
            <InstagramIcon size={14} />
            Seguirnos en Instagram para ver todo el contenido
            <ExternalLink size={12} />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
