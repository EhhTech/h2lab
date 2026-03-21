import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

/* ── Icosahedron geometry ───────────────────────────── */
const φ = (1 + Math.sqrt(5)) / 2

const RAW_VERTS = [
  [0, 1, φ],  [0, -1, φ],  [0, 1, -φ],  [0, -1, -φ],
  [1, φ, 0],  [-1, φ, 0],  [1, -φ, 0],  [-1, -φ, 0],
  [φ, 0, 1],  [-φ, 0, 1],  [φ, 0, -1], [-φ, 0, -1],
]

const EDGES = [
  [0,1],[0,4],[0,5],[0,8],[0,9],
  [1,6],[1,7],[1,8],[1,9],
  [2,3],[2,4],[2,5],[2,10],[2,11],
  [3,6],[3,7],[3,10],[3,11],
  [4,5],[4,8],[4,10],
  [5,9],[5,11],
  [6,7],[6,8],[6,10],
  [7,9],[7,11],
  [8,10],[9,11],
]

const VERTS = RAW_VERTS.map(([x, y, z]) => {
  const l = Math.sqrt(x * x + y * y + z * z)
  return [x / l, y / l, z / l]
})

/* ── 3D math helpers ────────────────────────────────── */
const rotX = ([x, y, z], a) => [x, y * Math.cos(a) - z * Math.sin(a), y * Math.sin(a) + z * Math.cos(a)]
const rotY = ([x, y, z], a) => [x * Math.cos(a) + z * Math.sin(a), y, -x * Math.sin(a) + z * Math.cos(a)]
const rotZ = ([x, y, z], a) => [x * Math.cos(a) - y * Math.sin(a), x * Math.sin(a) + y * Math.cos(a), z]

function project([x, y, z], cx, cy, size, fov = 3.5) {
  const s = fov / (fov + z)
  return [cx + x * s * size, cy + y * s * size, s]
}

/* ── Component ──────────────────────────────────────── */
export default function DarkSection() {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let w = 0, h = 0

    function resize() {
      const dpr = window.devicePixelRatio || 1
      w = canvas.clientWidth
      h = canvas.clientHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    /* Floating particles */
    const N = 70
    const pts = Array.from({ length: N }, () => {
      const theta = Math.random() * Math.PI * 2
      const phi2  = Math.acos(2 * Math.random() - 1)
      const r     = 0.9 + Math.random() * 1.2
      return {
        x:  r * Math.sin(phi2) * Math.cos(theta),
        y:  r * Math.sin(phi2) * Math.sin(theta),
        z:  r * Math.cos(phi2),
        vx: (Math.random() - 0.5) * 0.0008,
        vy: (Math.random() - 0.5) * 0.0008,
        vz: (Math.random() - 0.5) * 0.0008,
      }
    })

    /* Scanning line */
    let scanY = 0

    let t = 0

    function draw() {
      t += 0.004
      scanY = (scanY + 0.6) % h

      ctx.clearRect(0, 0, w, h)

      /* Radial background glow */
      const grd = ctx.createRadialGradient(w * 0.65, h * 0.5, 0, w * 0.65, h * 0.5, Math.min(w, h) * 0.7)
      grd.addColorStop(0, 'rgba(255,255,255,0.025)')
      grd.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = grd
      ctx.fillRect(0, 0, w, h)

      const cx   = w * 0.62
      const cy   = h * 0.5
      const size = Math.min(w, h) * 0.22

      /* ── Draw icosahedron ── */
      const rotated = VERTS.map(v => {
        let r = rotY(v, t * 0.55)
            r = rotX(r, t * 0.30)
            r = rotZ(r, t * 0.10)
        return r
      })
      const proj = rotated.map(v => project(v, cx, cy, size))

      // Edges
      for (const [a, b] of EDGES) {
        const [ax, ay, as_] = proj[a]
        const [bx, by, bs]  = proj[b]
        const depth = (as_ + bs) / 2
        ctx.beginPath()
        ctx.moveTo(ax, ay)
        ctx.lineTo(bx, by)
        ctx.strokeStyle = `rgba(255,255,255,${depth * 0.18})`
        ctx.lineWidth   = depth * 0.9
        ctx.stroke()
      }

      // Vertex glow dots
      for (const [px, py, ps] of proj) {
        // soft glow halo
        const g = ctx.createRadialGradient(px, py, 0, px, py, ps * 12)
        g.addColorStop(0, `rgba(255,255,255,${ps * 0.35})`)
        g.addColorStop(1, 'rgba(255,255,255,0)')
        ctx.beginPath()
        ctx.arc(px, py, ps * 12, 0, Math.PI * 2)
        ctx.fillStyle = g
        ctx.fill()
        // core dot
        ctx.beginPath()
        ctx.arc(px, py, ps * 1.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${ps * 0.9})`
        ctx.fill()
      }

      /* ── Center cross-hair glow ── */
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, size * 0.5)
      cg.addColorStop(0, 'rgba(255,255,255,0.06)')
      cg.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.beginPath()
      ctx.arc(cx, cy, size * 0.5, 0, Math.PI * 2)
      ctx.fillStyle = cg
      ctx.fill()

      /* ── Outer orbit ring ── */
      const orbR = size * 1.9
      ctx.beginPath()
      ctx.ellipse(cx, cy, orbR, orbR * 0.28, t * 0.12, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.04)'
      ctx.lineWidth   = 1
      ctx.stroke()

      const orbR2 = size * 1.45
      ctx.beginPath()
      ctx.ellipse(cx, cy, orbR2, orbR2 * 0.35, -t * 0.18, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(255,255,255,0.05)'
      ctx.lineWidth   = 0.5
      ctx.stroke()

      /* ── Update & draw particles ── */
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy; p.z += p.vz
        const len = Math.sqrt(p.x**2 + p.y**2 + p.z**2)
        if (len > 2.2) { p.vx *= -1; p.vy *= -1; p.vz *= -1 }
      }

      const ptProj = pts.map(p => {
        let r = rotY([p.x, p.y, p.z], t * 0.12)
            r = rotX(r, t * 0.07)
        return project(r, cx, cy, size * 1.5)
      })

      // Connections
      const threshold = Math.min(w, h) * 0.15
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const [ax, ay] = ptProj[i]
          const [bx, by] = ptProj[j]
          const d = Math.sqrt((ax-bx)**2 + (ay-by)**2)
          if (d < threshold) {
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.strokeStyle = `rgba(255,255,255,${(1 - d / threshold) * 0.07})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Particle dots
      for (const [px, py, ps] of ptProj) {
        ctx.beginPath()
        ctx.arc(px, py, Math.max(0.4, ps * 1.2), 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${ps * 0.35})`
        ctx.fill()
      }

      /* ── Scanning line ── */
      const scanGrd = ctx.createLinearGradient(0, scanY - 60, 0, scanY + 2)
      scanGrd.addColorStop(0, 'rgba(255,255,255,0)')
      scanGrd.addColorStop(1, 'rgba(255,255,255,0.025)')
      ctx.fillStyle = scanGrd
      ctx.fillRect(0, scanY - 60, w, 62)

      ctx.beginPath()
      ctx.moveTo(0, scanY)
      ctx.lineTo(w, scanY)
      ctx.strokeStyle = 'rgba(255,255,255,0.06)'
      ctx.lineWidth = 1
      ctx.stroke()

      rafRef.current = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(rafRef.current)
      ro.disconnect()
    }
  }, [])

  return (
    <section
      style={{
        position: 'relative',
        background: '#000',
        overflow: 'hidden',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Top diagonal divider: white triangle over black */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 80, display: 'block', zIndex: 4, pointerEvents: 'none' }}
      >
        <polygon points="0,0 1440,0 0,80" fill="#ffffff" />
      </svg>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
        }}
      />

      {/* Noise grain overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.03,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          maxWidth: 1100,
          margin: '0 auto',
          padding: '140px 24px',
          width: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ maxWidth: 580 }}
        >
          {/* Section label */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 12,
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.28)',
              marginBottom: 36,
            }}
          >
            <span
              style={{
                width: 28,
                height: 1,
                background: 'rgba(255,255,255,0.2)',
                display: 'block',
              }}
            />
            Nuestra mentalidad
          </div>

          {/* Headline */}
          <h2
            style={{
              fontSize: 'clamp(2.2rem, 5.5vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: 32,
            }}
          >
            Donde el código
            <br />
            <span style={{ color: 'rgba(255,255,255,0.28)' }}>
              se convierte en
            </span>
            <br />
            experiencia.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.85,
              color: 'rgba(255,255,255,0.42)',
              maxWidth: 440,
              marginBottom: 52,
            }}
          >
            No solo construimos software. Creamos productos digitales que
            transforman negocios, escalan sin límites y se adelantan al
            mercado.
          </p>

          {/* Metrics row */}
          <div
            style={{
              display: 'flex',
              gap: 36,
              marginBottom: 52,
              flexWrap: 'wrap',
            }}
          >
            {[
              { v: '100%', l: 'Código a medida' },
              { v: '<30d', l: 'Primer entregable' },
              { v: '24/7', l: 'Soporte post-lanzamiento' },
            ].map((m, i) => (
              <div key={i}>
                <div
                  style={{
                    fontSize: 'clamp(1.3rem, 3vw, 1.7rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    color: '#fff',
                    lineHeight: 1,
                  }}
                >
                  {m.v}
                </div>
                <div
                  style={{
                    marginTop: 6,
                    fontSize: 11,
                    color: 'rgba(255,255,255,0.28)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 500,
                  }}
                >
                  {m.l}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.a
            href="#contacto"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              padding: '15px 30px',
              fontSize: 14,
              fontWeight: 600,
              color: '#000',
              background: '#fff',
              borderRadius: 100,
              textDecoration: 'none',
              boxShadow: '0 0 40px rgba(255,255,255,0.08)',
              letterSpacing: '0.01em',
            }}
          >
            Inicia tu proyecto
            <span style={{ fontSize: 18 }}>→</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Bottom diagonal divider: white triangle over black */}
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 80, display: 'block', zIndex: 4, pointerEvents: 'none' }}
      >
        <polygon points="1440,0 1440,80 0,80" fill="#ffffff" />
      </svg>
    </section>
  )
}
