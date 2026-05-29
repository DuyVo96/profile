import { useReveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-xxl max-w-7xl mx-auto px-gutter reveal">
      <h2 className="font-headline-lg text-headline-lg text-primary-fixed-dim mb-xxl uppercase">
        On-Chain History
      </h2>

      <div className="relative ml-4 md:ml-0">
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px timeline-line" />

        <div className="space-y-xl">
          {EXPERIENCE.map((item, index) => (
            <TimelineItem key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item }: { item: (typeof EXPERIENCE)[number] }) {
  const ref = useReveal()
  const isLeft = item.cardSide === 'left'

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center md:justify-between group reveal"
    >
      {/* Timeline dot */}
      <div className="absolute left-[-4px] md:left-1/2 md:translate-x-[-50%] w-[10px] h-[10px] bg-white rounded-full shadow-[0_0_15px_#00dce5] z-10 transition-transform group-hover:scale-150" />

      {isLeft ? (
        <>
          {/* Card on left */}
          <div className="md:w-[45%] order-2 md:order-1 glass p-lg rounded-xl glass-hover">
            <span className={`text-label-sm ${item.statusColor} font-bold mb-xs block`}>
              {item.statusLabel}
            </span>
            <h4 className="font-headline-md text-primary-fixed-dim">{item.company}</h4>
            <p className="text-body-md text-on-surface-variant mt-sm">{item.description}</p>
          </div>

          {/* Date on right (desktop only) */}
          <div className="hidden md:block md:w-[45%] order-3 text-left pl-lg">
            <span className="font-headline-md text-on-surface-variant/50">{item.period}</span>
          </div>
        </>
      ) : (
        <>
          {/* Date on left (desktop only) */}
          <div className="hidden md:block md:w-[45%] order-1 text-right pr-lg">
            <span className="font-headline-md text-on-surface-variant/50">{item.period}</span>
          </div>

          {/* Card on right */}
          <div className="md:w-[45%] order-2 glass p-lg rounded-xl glass-hover">
            <span className={`text-label-sm ${item.statusColor} font-bold mb-xs block`}>
              {item.statusLabel}
            </span>
            <h4 className="font-headline-md text-primary-fixed-dim">{item.company}</h4>
            <p className="text-body-md text-on-surface-variant mt-sm">{item.description}</p>
          </div>
        </>
      )}
    </div>
  )
}
