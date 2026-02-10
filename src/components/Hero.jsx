import { motion } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '120px 24px 80px',
        textAlign: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #f5f5f5 0%, #ffffff 50%, #fafafa 100%)',
      }}
    >
      {/* Decorative orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            left: '20%',
            top: '20%',
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.04) 0%, transparent 70%)',
          }}
        />
        <div
          className="animate-float-delayed"
          style={{
            position: 'absolute',
            right: '15%',
            bottom: '25%',
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.03,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <span
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: '#888',
              background: '#fff',
              border: '1px solid #e5e5e5',
              borderRadius: 100,
            }}
          >
            Desarrollo de Software a Medida
          </span>
        </motion.div>

        {/* Brand */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="gradient-text"
          style={{
            marginBottom: 24,
            fontSize: 'clamp(3.5rem, 10vw, 7rem)',
            fontWeight: 700,
            letterSpacing: '-0.03em',
            lineHeight: 1,
            userSelect: 'none',
          }}
        >
          H2Lab.
        </motion.p>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          style={{
            maxWidth: 700,
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
            color: '#111',
          }}
        >
          Software Profesional
          <br />
          <span style={{ color: '#aaa' }}>a Medida</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          style={{
            marginTop: 28,
            maxWidth: 480,
            fontSize: 'clamp(0.95rem, 2vw, 1.125rem)',
            lineHeight: 1.7,
            color: '#999',
          }}
        >
          Transformamos tus ideas en soluciones digitales que impulsan tu negocio.
          Desarrollo 100% personalizado.
        </motion.p>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          style={{ marginTop: 48 }}
        >
          <a href="#contacto" className="btn-primary" style={{ textDecoration: 'none' }}>
            Hablemos de tu proyecto
            <span style={{ fontSize: 18 }}>&rarr;</span>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          style={{
            marginTop: 80,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#ccc' }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 1,
              height: 32,
              background: 'linear-gradient(to bottom, #ccc, transparent)',
            }}
          />
        </motion.div>
      </div>
    </section>
  )
}
