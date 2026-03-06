import { motion } from 'framer-motion'
import { Instagram, Mail, Send, Twitter } from 'lucide-react'
import { fadeUp } from './motion'

export default function Footer() {
  return (
    <footer id="footer-contact" className="pb-10 pt-8">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="overflow-hidden rounded-[36px] bg-slate-900 px-7 py-10 text-white sm:px-10 sm:py-12"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <div className="text-sm uppercase tracking-[0.28em] text-teal-300">Newsletter privée</div>
              <h2 className="mt-4 max-w-2xl font-serif text-4xl font-bold tracking-tight sm:text-5xl">
                Abonnez vous pour recevoir mes bons plans secrets.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                Alertes vols, adresses, séjours inspirants et idées de voyages premium envoyées avec parcimonie.
              </p>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                alert('Inscription simulée')
              }}
              className="rounded-[28px] bg-white/8 p-4 backdrop-blur-xl"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <div className="relative flex-1">
                  <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    placeholder="Votre adresse e mail"
                    className="w-full rounded-full border border-white/10 bg-white/10 py-4 pl-11 pr-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-teal-300"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 text-sm font-semibold text-white"
                >
                  S abonner
                  <Send className="h-4 w-4" />
                </motion.button>
              </div>
            </form>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center">
            <div>© 2026 Odyssea Atelier. Voyages sur-mesure et inspirations exclusives.</div>
            <div className="flex items-center gap-3">
              <a href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/15"><Instagram className="h-4 w-4" /></a>
              <a href="#" className="rounded-full bg-white/10 p-3 transition hover:bg-white/15"><Twitter className="h-4 w-4" /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
