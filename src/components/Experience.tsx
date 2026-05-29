import { useReveal } from '../hooks/useReveal'
import { EXPERIENCE } from '../data/content'

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" ref={ref} className="py-xxl max-w-7xl mx-auto px-gutter reveal">
      <div className="text-center mb-xl">
        <div className="font-label-md text-label-md text-primary-fixed-dim tracking-widest mb-sm">
          // TIMELINE
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary">Experience</h2>
      </div>

      <div className="relative">
        {/* Vertical line */}
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

function TimelineItem({
  item,
}: {
  item: (typeof EXPERIENCE)[number]
}) {
  const ref = useReveal()
  const isRight = item.align === 'right'

  return (
    <div
      ref={ref}
      className="relative flex flex-col md:flex-row items-center md:justify-between group reveal"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary-fixed-dim -translate-x-1/2 border-2 border-[#0a0a0f] z-10 group-hover:scale-150 transition-transform" />

      {/* Card — alternates sides */}
      <div
        className={`md:w-[45%] w-full pl-6 md:pl-0 ${
          isRight
            ? 'md:order-2 md:text-left md:ml-auto'
            : 'md:order-1 md:text-right md:mr-auto'
        } glass p-lg rounded-xl glass-hover`}
      >
        <div className="font-label-md text-label-md text-primary-fixed-dim mb-xs tracking-widest">
          {item.period}
        </div>
        <h3 className="font-headline-md text-headline-md text-primary mb-xs">{item.company}</h3>
        <div className="font-label-md text-label-md text-secondary-fixed-dim mb-sm">{item.role}</div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-md">{item.description}</p>
        <div className={`flex flex-wrap gap-sm ${!isRight ? 'md:justify-end' : ''}`}>
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="px-sm py-xs font-label-sm text-label-sm text-primary-fixed-dim border border-primary-fixed-dim/30 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
