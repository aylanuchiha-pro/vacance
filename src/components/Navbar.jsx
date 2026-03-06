import React from 'react'
import { motion } from 'framer-motion'
import { Menu, Plane, X } from 'lucide-react'

const links = [
  { label: 'Sur-mesure', href: '#sur-mesure' },
  { label: 'Bons Plans', href: '#deals' },
  { label: 'Ebook', href: '#ebook' },
]

export default function Navbar() {
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className={`section-shell rounded-full border transition-all duration-500 ${scrolled ? 'border-white/80 glass shadow-soft' : 'border-transparent bg-transparent'}`}>
        <div className="flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-ocean text-white shadow-float">
              <Plane className="h-5 w-5" />
            </div>
            <div>
              <div className="font-serif text-xl font-bold tracking-tight text-slate-900">Odyssea Atelier</div>
              <div className="text-xs text-slate-500">Créateur de voyages sur-mesure</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-slate-700 transition hover:text-ocean">
                {link.label}
              </a>
            ))}
          </nav>

          <motion.a
            href="#footer-contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="hidden rounded-full bg-coral px-5 py-3 text-sm font-semibold text-white shadow-card md:inline-flex"
          >
            Contact
          </motion.a>

          <button
            className="inline-flex rounded-full bg-white/80 p-3 text-slate-800 shadow-soft md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Ouvrir le menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200/70 px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <a key={link.label} href={link.href} className="rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-white">
                  {link.label}
                </a>
              ))}
              <a href="#footer-contact" className="rounded-2xl bg-coral px-4 py-3 text-center text-sm font-semibold text-white">
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
