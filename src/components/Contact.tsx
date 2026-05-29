import { useReveal } from '../hooks/useReveal'
import { CONTACT } from '../data/content'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref} className="py-xxl reveal">
      <div className="max-w-3xl mx-auto px-gutter text-center">
        <div className="font-label-md text-label-md text-primary-fixed-dim tracking-widest mb-sm">
          {CONTACT.label}
        </div>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-xl whitespace-pre-line">
          {CONTACT.heading}
        </h2>

        <div className="glass p-xl rounded-xl border border-primary-fixed-dim/20 space-y-lg reveal active">
          <a
            href={`mailto:${CONTACT.email}`}
            className="block text-display-xl font-headline-lg text-white hover:text-primary-fixed-dim transition-colors break-all"
          >
            {CONTACT.email}
          </a>

          <div className="flex justify-center gap-lg">
            {CONTACT.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="glass p-md rounded-xl hover:neon-border-cyan transition-all font-label-md text-label-md text-on-surface-variant hover:text-primary-fixed-dim"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
