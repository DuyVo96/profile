import { useReveal } from '../hooks/useReveal'
import { PORTFOLIO } from '../data/content'

export default function Portfolio() {
  const ref = useReveal()

  return (
    <section id="portfolio" ref={ref} className="py-xxl bg-surface-container-lowest/30 reveal">
      <div className="max-w-7xl mx-auto px-gutter">
        <h2 className="font-headline-lg text-headline-lg text-primary-fixed-dim mb-xxl text-center uppercase reveal active">
          Broadcasts &amp; Research
        </h2>

        <div className="grid md:grid-cols-3 gap-lg">
          {PORTFOLIO.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl glass glass-hover reveal stagger-item active"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-lg">
                <div className="flex justify-between items-center mb-sm">
                  <span className={`text-label-sm ${item.accentColor}`}>{item.type}</span>
                  <span className={`material-symbols-outlined text-label-md ${item.iconHover} transition-transform`}>
                    {item.icon}
                  </span>
                </div>
                <h4 className="font-headline-md text-white mb-md">{item.title}</h4>
                <p className="text-label-sm text-on-surface-variant">{item.publisher}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
