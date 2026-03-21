import { motion } from 'framer-motion'

export default function SectionHeader({
  tag,
  title,
  subtitle,
  mb = 48,
  maxWidth,
  align = 'center',
}) {
  const centered = align === 'center'
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ textAlign: centered ? 'center' : 'left', marginBottom: mb }}
    >
      <div
        className="section-tag"
        style={{ justifyContent: centered ? 'center' : undefined, marginBottom: 12 }}
      >
        {tag}
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
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            marginTop: 16,
            fontSize: 16,
            color: '#999',
            lineHeight: 1.65,
            maxWidth: centered ? maxWidth : undefined,
            marginLeft: centered ? 'auto' : undefined,
            marginRight: centered ? 'auto' : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
