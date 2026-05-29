import { NAV } from '../data/content'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-gutter py-md flex justify-between items-center">
        <div className="font-headline-md text-headline-md text-primary-fixed-dim tracking-widest">
          {NAV.brand}
        </div>
        <div className="hidden md:flex gap-lg font-label-md text-label-md text-on-surface-variant">
          {NAV.links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="hover:text-primary-fixed-dim transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
