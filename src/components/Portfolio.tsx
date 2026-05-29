import { useReveal } from '../hooks/useReveal'
import { PORTFOLIO } from '../data/content'

const accentMap = {
  cyan: {
    badge: 'text-primary-fixed-dim border-primary-fixed-dim/30',
    icon: 'text-primary-fixed-dim',
  },
  green: {
    badge: 'text-secondary-container border-secondary-container/30',
    icon: 'text-secondary-container',
  },
  yellow: {
    badge: 'text-tertiary-fixed-dim border-tertiary-fixed-dim/30',
    icon: 'text-tertiary-fixed-dim',
  },
}

export default function Portfolio() {
  const ref = useReveal()

  return (
    <section id="portfolio" ref={ref} className="py-xxl bg-surface-container-lowest/30 reveal">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center mb-xl">
          <div className="font-label-md text-label-md text-primary-fixed-dim tracking-widest mb-sm">
            // WORK
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">Featured Portfolio</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-lg">
          {PORTFOLIO.map((item, index) => {
            const accent = accentMap[item.accent as keyof typeof accentMap]
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl glass glass-hover reveal stagger-item active"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
                </div>

                {/* Content */}
                <div className="p-lg">
                  <div className="flex items-center justify-between mb-sm">
                    <span
                      className={`px-sm py-xs font-label-sm text-label-sm border rounded-full ${accent.badge}`}
                    >
                      {item.type}
                    </span>
                    <span className={`material-symbols-outlined text-xl ${accent.icon}`}>
                      {item.typeIcon}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-primary mb-sm leading-tight">
                    {item.title}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
