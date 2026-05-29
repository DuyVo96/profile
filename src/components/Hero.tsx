import { useEffect, useRef, useState } from 'react'
import { HERO } from '../data/content'

class Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  isHex: boolean
  canvasWidth: number
  canvasHeight: number

  constructor(canvasWidth: number, canvasHeight: number) {
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
    this.x = Math.random() * canvasWidth
    this.y = Math.random() * canvasHeight
    this.vx = (Math.random() - 0.5) * 0.4
    this.vy = (Math.random() - 0.5) * 0.4
    this.radius = Math.random() * 2 + 1
    this.isHex = Math.random() > 0.7
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath()
    if (this.isHex) {
      const sides = 6
      const size = this.radius * 2
      for (let i = 0; i < sides; i++) {
        const angle = (i * 2 * Math.PI) / sides
        const x = this.x + size * Math.cos(angle)
        const y = this.y + size * Math.sin(angle)
        if (i === 0) ctx.moveTo(x, y)
        else ctx.lineTo(x, y)
      }
      ctx.closePath()
    } else {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    }
    ctx.fillStyle = 'rgba(0, 220, 229, 0.4)'
    ctx.fill()
  }
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState('')
  const subtitleRef = useRef<HTMLSpanElement>(null)

  // Typing animation
  useEffect(() => {
    const text = HERO.subtitle
    let index = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        index++
        setTypedText(text.slice(0, index))
        if (index >= text.length) clearInterval(interval)
      }, 100)
      return () => clearInterval(interval)
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let nodes: Node[] = []
    let animId: number

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      nodes = Array.from({ length: 60 }, () => new Node(canvas.width, canvas.height))
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      nodes.forEach((node, i) => {
        node.update()
        node.draw(ctx)
        for (let j = i + 1; j < nodes.length; j++) {
          const dist = Math.hypot(node.x - nodes[j].x, node.y - nodes[j].y)
          if (dist < 180) {
            ctx.beginPath()
            ctx.moveTo(node.x, node.y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(0, 220, 229, ${0.15 - dist / 1200})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })
      animId = requestAnimationFrame(animate)
    }

    window.addEventListener('resize', resize)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden px-gutter"
    >
      {/* Canvas background */}
      <canvas ref={canvasRef} className="node-network" />

      {/* Dot matrix overlay */}
      <div className="dot-matrix absolute inset-0 z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-md">
          <span className="font-label-md text-label-md text-primary-fixed-dim tracking-[0.3em] uppercase">
            // WEB3 PORTFOLIO
          </span>
        </div>
        <h1 className="font-headline-lg text-display-xl md:text-[80px] text-primary tracking-[0.1em] mb-md uppercase reveal active neon-text-cyan">
          {HERO.name}
        </h1>
        <p className="font-label-md text-headline-md text-secondary-fixed-dim mb-xl reveal active">
          <span ref={subtitleRef}>{typedText}</span>
          <span className="blinking-cursor" />
        </p>
        <div className="flex flex-col sm:flex-row gap-md justify-center reveal active">
          <a
            href={HERO.ctaPrimary.href}
            className="px-xl py-md border border-primary-fixed-dim text-primary-fixed-dim font-label-md text-label-md rounded-lg hover:bg-primary-fixed-dim hover:text-black tracking-widest uppercase"
          >
            {HERO.ctaPrimary.label}
          </a>
          <a
            href={HERO.ctaSecondary.href}
            className="px-xl py-md border border-secondary-container text-secondary-container font-label-md text-label-md rounded-lg hover:bg-secondary-container hover:text-black tracking-widest uppercase"
          >
            {HERO.ctaSecondary.label}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-gradient-to-b from-primary-fixed-dim to-transparent mx-auto" />
      </div>
    </section>
  )
}
