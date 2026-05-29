import { useEffect, useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { ABOUT } from '../data/content'

function StatItem({ label, value, suffix }: { label: string; value: number; suffix: string }) {
  const numRef = useRef<HTMLSpanElement>(null)
  const animatedRef = useRef(false)

  useEffect(() => {
    const el = numRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true
          let current = 0
          const duration = 2000
          const stepTime = Math.abs(Math.floor(duration / value))
          const timer = setInterval(() => {
            current++
            el.textContent = current + (value > 5 ? '+' : '')
            if (current >= value) clearInterval(timer)
          }, stepTime)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <div className="stagger-item flex items-center gap-md p-md rounded-xl neon-border-cyan">
      <div className="text-3xl font-headline-lg text-primary-fixed-dim neon-text-cyan">
        <span ref={numRef}>0{suffix}</span>
      </div>
      <div className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider whitespace-pre-line">
        {label}
      </div>
    </div>
  )
}

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="py-xxl max-w-7xl mx-auto px-gutter reveal">
      <div className="grid md:grid-cols-2 gap-xl items-center">
        {/* Left content */}
        <div>
          <div className="font-label-md text-label-md text-primary-fixed-dim tracking-widest mb-sm stagger-item">
            {ABOUT.dividerLabel}
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary mb-lg stagger-item">
            {ABOUT.heading}
          </h2>
          <div className="w-16 h-px bg-primary-fixed-dim mb-lg stagger-item" />
          {ABOUT.paragraphs.map((p, i) => (
            <p key={i} className="font-body-md text-body-md text-on-surface-variant mb-md stagger-item">
              {p}
            </p>
          ))}
        </div>

        {/* Right stats */}
        <div className="glass p-lg rounded-xl grid grid-cols-1 gap-md">
          {ABOUT.stats.map((stat) => (
            <StatItem key={stat.label} label={stat.label} value={stat.value} suffix={stat.suffix} />
          ))}
        </div>
      </div>
    </section>
  )
}
