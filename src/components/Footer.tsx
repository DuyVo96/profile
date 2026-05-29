import { FOOTER } from '../data/content'

export default function Footer() {
  return (
    <footer className="w-full py-xl bg-surface-container-lowest border-t border-white/5">
      <div className="max-w-7xl mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-md">
        <p className="font-label-sm text-label-sm text-on-surface-variant">{FOOTER.copy}</p>
        <div className="flex gap-lg">
          {FOOTER.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary-fixed-dim transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
