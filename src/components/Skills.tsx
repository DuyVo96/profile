import { useReveal } from '../hooks/useReveal'
import { SKILLS } from '../data/content'

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="py-xxl bg-surface-container-lowest/50 reveal">
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="text-center mb-xl">
          <div className="font-label-md text-label-md text-primary-fixed-dim tracking-widest mb-sm">
            // EXPERTISE
          </div>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Skills & Specializations
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-lg">
          {SKILLS.map((skill) => (
            <div
              key={skill.title}
              className={`glass p-lg rounded-xl space-y-md border-t-2 ${skill.borderColor} glass-hover stagger-item`}
            >
              <div className="flex items-center gap-sm">
                <span className={`material-symbols-outlined ${skill.iconColor}`}>{skill.icon}</span>
                <h3 className="font-headline-md text-headline-md text-primary">{skill.title}</h3>
              </div>
              <div className="flex flex-wrap gap-sm">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-sm py-xs font-label-sm text-label-sm text-on-surface-variant border border-outline-variant rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
