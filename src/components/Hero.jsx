import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

const techs = [
  'React', 'Node.js', 'Flutter', 'Firebase', 'Python',
  'PostgreSQL', 'Tailwind CSS', 'Expo', 'MongoDB', 'Express',
  'TypeScript', 'Vite', 'Figma', 'REST APIs',
]

function AnimCounter({ to, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const count = useMotionValue(0)
  const rounded = useTransform(count, (v) => Math.round(v))

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      })
      return () => controls.stop()
    }
  }, [isInView, count, to])

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>{suffix}
    </span>
  )
}

const stats = [
  { value: 20, suffix: '+', label: 'Proyectos' },
  { value: 15, suffix: '+', label: 'Clientes' },
  { value: 3, suffix: '', label: 'Años de experiencia' },
]

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
        padding: '120px 24px 100px',
        textAlign: 'center',
        overflow: 'hidden',
        background: '#fafafa',
      }}
    >
      {/* Subtle top radial glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 800,
          height: 500,
          borderRadius: '0 0 50% 50%',
          background: 'radial-gradient(ellipse at top, rgba(0,0,0,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative orbs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          className="animate-float"
          style={{
            position: 'absolute',
            left: '10%',
            top: '15%',
            width: 560,
            height: 560,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.045) 0%, transparent 65%)',
          }}
        />
        <div
          className="animate-float-delayed"
          style={{
            position: 'absolute',
            right: '8%',
            bottom: '20%',
            width: 440,
            height: 440,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,0,0,0.03) 0%, transparent 65%)',
          }}
        />
      </div>

      {/* Dot pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          opacity: 0.045,
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Badge with shimmer */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: 32 }}
        >
          <span
            className="badge-shimmer"
            style={{
              display: 'inline-block',
              padding: '10px 22px',
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: '0.06em',
              color: '#777',
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
            maxWidth: 460,
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

        {/* Stats row */}
        <motion.div
          variants={fadeUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
          style={{
            marginTop: 64,
            display: 'flex',
            alignItems: 'center',
            gap: 40,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
              <div style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: 'clamp(1.6rem, 4vw, 2.2rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.03em',
                    color: '#111',
                    lineHeight: 1,
                  }}
                >
                  <AnimCounter to={s.value} suffix={s.suffix} />
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: '#bbb',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </div>
              </div>
              {i < stats.length - 1 && <div className="stat-divider" />}
            </div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          style={{
            marginTop: 56,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 8,
          }}
        >
          <span
            style={{
              fontSize: 10,
              fontWeight: 500,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#ccc',
            }}
          >
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 1,
              height: 28,
              background: 'linear-gradient(to bottom, #ccc, transparent)',
            }}
          />
        </motion.div>
      </div>

      {/* Tech marquee band */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          borderTop: '1px solid #ebebeb',
          overflow: 'hidden',
          padding: '13px 0',
          background: 'rgba(255,255,255,0.6)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="marquee-track">
          {[...techs, ...techs].map((t, i) => (
            <span
              key={i}
              style={{
                padding: '0 28px',
                fontSize: 11,
                color: '#c0c0c0',
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                display: 'flex',
                alignItems: 'center',
                gap: 28,
              }}
            >
              {t}
              <span style={{ width: 3, height: 3, borderRadius: '50%', background: '#ddd', flexShrink: 0 }} />
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
