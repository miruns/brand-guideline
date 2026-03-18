import { useRef, useEffect, useMemo } from 'react'

interface MirunsIconProps {
  size?: number
  className?: string
}

export default function MirunsIcon({ size = 100, className = '' }: MirunsIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-5 -5 110 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="gradient-msignal" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00d2ff" />
          <stop offset="100%" stopColor="#9d50bb" />
        </linearGradient>
      </defs>
      <path
        d="M 0 56 C 7 56, 10 10, 22 10 C 34 10, 42 72, 50 72 C 58 72, 66 10, 78 10 C 90 10, 93 56, 100 56"
        stroke="url(#gradient-msignal)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const WAVE_PATH =
  'M 0 56 C 7 56, 10 10, 22 10 C 34 10, 42 72, 50 72 C 58 72, 66 10, 78 10 C 90 10, 93 56, 100 56'

/*
 * Signal animation cycle (≈8s loop):
 *
 *  0.0 – 1.5s  REST        Solid wave, identical to static SVG. Calm.
 *  1.5 – 3.0s  WAKE        Dashes appear, signal starts flowing slowly.
 *  3.0 – 5.0s  ACCELERATE  Flow speeds up, trail multiplies, glow intensifies.
 *  5.0 – 5.5s  PEAK        Maximum speed, bright flash, second trail appears.
 *  5.5 – 7.0s  DECELERATE  Slows back down, trails fade, dashes merge.
 *  7.0 – 8.0s  SETTLE      Dashes vanish, returns to solid. Back to rest.
 *
 * All 2D. Same path. Only stroke-dasharray, dashoffset, opacity, and glow change.
 */

const CYCLE = 8 // seconds

// Easing helpers
function smoothstep(a: number, b: number, x: number) {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t
}

export function MirunsIconAnimated({ size = 200 }: { size?: number }) {
  const svgRef = useRef<SVGSVGElement>(null)
  const rafRef = useRef<number>(0)
  const mainRef = useRef<SVGPathElement>(null)
  const trailRef = useRef<SVGPathElement>(null)
  const trail2Ref = useRef<SVGPathElement>(null)
  const glowRef = useRef<SVGPathElement>(null)
  const sparkRef = useRef<SVGCircleElement>(null)
  const sparkCoreRef = useRef<SVGCircleElement>(null)
  const uid = useMemo(() => Math.random().toString(36).slice(2, 8), [])
  const pathLenRef = useRef(220)

  useEffect(() => {
    // Measure actual path length
    if (mainRef.current) {
      pathLenRef.current = mainRef.current.getTotalLength()
    }
    let start: number | null = null
    let offset = 0 // accumulated dashoffset (velocity-integrated)

    function animate(ts: number) {
      if (start === null) start = ts
      const elapsed = (ts - start) / 1000
      const phase = elapsed % CYCLE
      const L = pathLenRef.current

      // ── Compute animation parameters from phase ──

      // dashGap: 0 = solid line, 1 = max gap (flowing dashes)
      let dashGap = 0
      if (phase < 1.5) {
        dashGap = 0 // rest
      } else if (phase < 3.0) {
        dashGap = smoothstep(1.5, 3.0, phase) // wake up
      } else if (phase < 5.5) {
        dashGap = 1 // full flow
      } else if (phase < 7.0) {
        dashGap = 1 - smoothstep(5.5, 7.0, phase) // settle
      } else {
        dashGap = 0 // rest
      }

      // speed: pixels/second for dashoffset
      let speed = 0
      if (phase < 1.5) {
        speed = 0
      } else if (phase < 3.0) {
        speed = lerp(0, 80, smoothstep(1.5, 3.0, phase))
      } else if (phase < 5.0) {
        speed = lerp(80, 400, smoothstep(3.0, 5.0, phase)) // accelerate
      } else if (phase < 5.5) {
        speed = 400 // peak
      } else if (phase < 7.0) {
        speed = lerp(400, 0, smoothstep(5.5, 7.0, phase)) // decelerate
      } else {
        speed = 0
      }

      // Integrate offset
      const dt = 1 / 60
      offset += speed * dt

      // intensity: drives glow and trail opacity
      const intensity = phase < 1.5 ? 0
        : phase < 3.0 ? smoothstep(1.5, 3.0, phase) * 0.4
        : phase < 5.0 ? lerp(0.4, 1, smoothstep(3.0, 5.0, phase))
        : phase < 5.5 ? 1
        : phase < 7.0 ? lerp(1, 0, smoothstep(5.5, 7.0, phase))
        : 0

      // ── Apply to main path ──
      if (mainRef.current) {
        const gap = dashGap * L * 0.35
        const dash = L - gap
        mainRef.current.setAttribute('stroke-dasharray', `${dash} ${gap}`)
        mainRef.current.setAttribute('stroke-dashoffset', `${-offset % L}`)
      }

      // ── Trail 1: offset echo ──
      if (trailRef.current) {
        const gap = dashGap * L * 0.5
        const dash = L * 0.3
        trailRef.current.setAttribute('stroke-dasharray', `${dash} ${gap + L * 0.2}`)
        trailRef.current.setAttribute('stroke-dashoffset', `${(-offset * 0.7 + L * 0.3) % L}`)
        trailRef.current.style.opacity = `${intensity * 0.35}`
      }

      // ── Trail 2: fast echo, only at peak ──
      if (trail2Ref.current) {
        const peakIntensity = phase >= 3.0 && phase <= 7.0
          ? (phase < 5.0 ? smoothstep(3.0, 5.0, phase) : 1 - smoothstep(5.5, 7.0, phase))
          : 0
        const dash2 = L * 0.15
        const gap2 = L * 0.85
        trail2Ref.current.setAttribute('stroke-dasharray', `${dash2} ${gap2}`)
        trail2Ref.current.setAttribute('stroke-dashoffset', `${(-offset * 1.5) % L}`)
        trail2Ref.current.style.opacity = `${peakIntensity * 0.5}`
      }

      // ── Glow layer ──
      if (glowRef.current) {
        const blur = lerp(0, 6, intensity)
        glowRef.current.style.opacity = `${intensity * 0.6}`
        glowRef.current.style.filter = `blur(${blur}px)`
      }

      // ── Spark particle ──
      if (sparkRef.current && mainRef.current && intensity > 0.1) {
        const pos = offset % L
        const point = mainRef.current.getPointAtLength(pos)
        sparkRef.current.setAttribute('cx', `${point.x}`)
        sparkRef.current.setAttribute('cy', `${point.y}`)
        const r = lerp(1, 4, intensity)
        sparkRef.current.setAttribute('r', `${r}`)
        sparkRef.current.style.opacity = `${intensity}`
      } else if (sparkRef.current) {
        sparkRef.current.style.opacity = '0'
      }

      // ── Spark core ──
      if (sparkCoreRef.current && mainRef.current && intensity > 0.1) {
        const pos = offset % L
        const point = mainRef.current.getPointAtLength(pos)
        sparkCoreRef.current.setAttribute('cx', `${point.x}`)
        sparkCoreRef.current.setAttribute('cy', `${point.y}`)
        sparkCoreRef.current.setAttribute('r', `${lerp(0.5, 1.8, intensity)}`)
        sparkCoreRef.current.style.opacity = `${intensity}`
      } else if (sparkCoreRef.current) {
        sparkCoreRef.current.style.opacity = '0'
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <div className="miruns-icon-stage">
      <svg
        ref={svgRef}
        width={size}
        height={size}
        viewBox="-10 -10 120 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="miruns-icon-orbit"
      >
        <defs>
          <linearGradient id={`g-main-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#9d50bb" />
          </linearGradient>
          <linearGradient id={`g-trail-${uid}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00d2ff" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#9d50bb" stopOpacity="0.6" />
          </linearGradient>
          <radialGradient id={`g-spark-${uid}`}>
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="50%" stopColor="#00ffff" />
            <stop offset="100%" stopColor="#00ffff" stopOpacity="0" />
          </radialGradient>
          <filter id={`glow-${uid}`}>
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Glow layer — blurred copy underneath */}
        <path
          ref={glowRef}
          d={WAVE_PATH}
          stroke={`url(#g-main-${uid})`}
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          style={{ willChange: 'opacity, filter' }}
        />

        {/* Trail 2 — fast echo at peak */}
        <path
          ref={trail2Ref}
          d={WAVE_PATH}
          stroke={`url(#g-trail-${uid})`}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          style={{ willChange: 'stroke-dashoffset, opacity' }}
        />

        {/* Trail 1 — slower echo */}
        <path
          ref={trailRef}
          d={WAVE_PATH}
          stroke={`url(#g-trail-${uid})`}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0"
          style={{ willChange: 'stroke-dashoffset, opacity' }}
        />

        {/* Main path — the M signal */}
        <path
          ref={mainRef}
          d={WAVE_PATH}
          stroke={`url(#g-main-${uid})`}
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ willChange: 'stroke-dasharray, stroke-dashoffset' }}
        />

        {/* Spark glow */}
        <circle
          ref={sparkRef}
          cx="0"
          cy="56"
          r="3"
          fill={`url(#g-spark-${uid})`}
          opacity="0"
          filter={`url(#glow-${uid})`}
          style={{ willChange: 'cx, cy, opacity' }}
        />

        {/* Spark core */}
        <circle
          ref={sparkCoreRef}
          cx="0"
          cy="56"
          r="1"
          fill="white"
          opacity="0"
          style={{ willChange: 'cx, cy, opacity' }}
        />
      </svg>
    </div>
  )
}
