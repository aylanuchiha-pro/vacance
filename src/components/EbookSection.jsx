import { motion } from 'framer-motion'
import { ArrowDownToLine, CheckCircle2 } from 'lucide-react'
import { ebookBullets } from './data'
import { fadeUp } from './motion'

export default function EbookSection() {
  return (
    <section id="ebook" className="section-shell py-20 sm:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid items-center gap-10 rounded-[40px] bg-white p-7 shadow-card sm:p-10 lg:grid-cols-[0.85fr_1.15fr] lg:p-12"
      >
        <div className="flex justify-center lg:justify-start">
          <motion.div
            animate={{ y: [0, -10, 0], rotate: [-6, -4, -6] }}
            transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-sm"
          >
            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[34px] bg-dune" />
            <div className="relative overflow-hidden rounded-[34px] bg-gradient-to-br from-slate-900 via-teal-950 to-ocean p-5 shadow-float">
              <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 text-white backdrop-blur-xl">
                <div className="text-sm uppercase tracking-[0.25em] text-white/70">Ebook exclusif</div>
                <h3 className="mt-5 font-serif text-4xl font-bold leading-tight">Mes secrets de voyageur</h3>
                <p className="mt-6 text-sm leading-7 text-white/80">
                  Astuces concrètes, budgets, réflexes et méthodes pour voyager mieux, plus beau et souvent moins cher.
                </p>
                <div className="mt-10 rounded-[24px] bg-white/10 p-5 text-sm text-white/85">
                  Édition privée pour voyageurs exigeants.
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div>
          <div className="inline-flex rounded-full bg-coral/10 px-4 py-2 text-sm font-medium text-coral">
            Mon Ebook exclusif
          </div>
          <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Un guide premium pour voyager plus intelligemment.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            J ai renforcé cette section pour qu elle ressemble plus a une vraie zone de conversion premium, avec une couverture forte, une hiérarchie claire et un CTA net.
          </p>

          <div className="mt-8 space-y-4">
            {ebookBullets.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-ocean" />
                <p className="text-base leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => alert('Téléchargement de l Ebook simulé')}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-coral px-6 py-4 text-base font-semibold text-white shadow-card"
          >
            Télécharger l Ebook
            <ArrowDownToLine className="h-4 w-4" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  )
}
