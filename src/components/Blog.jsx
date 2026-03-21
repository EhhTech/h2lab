import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Clock } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'
import ArticleModal from './ArticleModal'
import SectionHeader from './SectionHeader'

export default function Blog() {
  const [selected, setSelected] = useState(null)

  return (
    <>
      <section
        id="blog"
        style={{
          padding: '120px 24px',
          background: '#fafafa',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>

          <SectionHeader
            tag="05 — Blog"
            title="Recursos y perspectivas"
            subtitle="Ideas, guías y reflexiones sobre tecnología y negocios digitales."
            mb={56}
            maxWidth={420}
            align="left"
          />

          {/* Cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: 24,
            }}
          >
            {blogPosts.map((post, i) => (
              <motion.button
                key={post.id}
                onClick={() => setSelected(post)}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#fff',
                  border: '1px solid #ebebeb',
                  borderRadius: 20,
                  padding: '28px 28px 24px',
                  textAlign: 'left',
                  color: 'inherit',
                  cursor: 'pointer',
                  transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s, border-color 0.3s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-5px)'
                  e.currentTarget.style.boxShadow = '0 16px 48px rgba(0,0,0,0.07)'
                  e.currentTarget.style.borderColor = '#ddd'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#ebebeb'
                }}
              >
                {/* Category */}
                <div style={{ marginBottom: 20 }}>
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
                    }}
                  >
                    {post.category}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 700,
                    letterSpacing: '-0.01em',
                    color: '#111',
                    lineHeight: 1.45,
                    marginBottom: 12,
                    flex: 1,
                  }}
                >
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: '#999',
                    marginBottom: 24,
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: 16,
                    borderTop: '1px solid #f0f0f0',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: '#bbb', fontWeight: 500 }}>
                    <span>{post.date}</span>
                    <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ddd' }} />
                    <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Clock size={11} />
                      {post.readTime}
                    </span>
                  </div>

                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: '50%',
                      background: '#f5f5f5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <ArrowUpRight size={14} style={{ color: '#888' }} />
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Article overlay */}
      <AnimatePresence>
        {selected && (
          <ArticleModal post={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
