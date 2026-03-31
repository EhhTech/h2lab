import { motion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
}

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
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      style={{ textAlign: centered ? 'center' : 'left', marginBottom: mb }}
    >
      <motion.div
        variants={item}
        className="section-tag"
        style={{ justifyContent: centered ? 'center' : undefined, marginBottom: 12 }}
      >
        {tag}
      </motion.div>
      <motion.h2
        variants={item}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          color: '#111',
          lineHeight: 1.15,
        }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={item}
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
        </motion.p>
      )}
    </motion.div>
  )
}
