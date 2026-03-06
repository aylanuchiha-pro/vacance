import { motion } from 'framer-motion'
import { ArrowRight, BadgePercent } from 'lucide-react'
import { deals } from './data'
import { fadeUp, stagger } from './motion'

export default function DealsSection() {
  return (
    <section id="deals" className="py-20 sm:py-24">
      <div className="section-shell">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="mb-10 flex flex-col items-start justify-between gap-6 rounded-[36px] bg-gradient-to-r from-[#0ea5a4] to-[#14b8a6] px-7 py-8 text-white shadow-float md:flex-row md:items-end"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur-xl">
              <BadgePercent className="h-4 w-4" />
              Bons plans et vols
            </div>
            <h2 className="mt-4 font-serif text-4xl font-bold tracking-tight sm:text-5xl">
              Des offres qui donnent envie de partir maintenant.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-white/85">
            Cartes visuelles, hiérarchie claire, pricing assumé, CTA visibles. C est plus proche du langage visuel Traavellio que la première version.
          </p>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {deals.map((deal) => (
            <motion.article
              key={deal.title}
              variants={fadeUp}
              whileHover={{ y: -10, scale: 1.01 }}
              className="group overflow-hidden rounded-[30px] bg-white shadow-card transition-shadow hover:shadow-float"
            >
              <div className="relative h-72 overflow-hidden">
                <img src={deal.image} alt={deal.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full bg-coral px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  {deal.tag}
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4 text-white">
                  <div>
                    <div className="text-sm uppercase tracking-[0.22em] text-white/75">Offre repérée</div>
                    <h3 className="mt-1 font-serif text-3xl font-bold">{deal.title}</h3>
                  </div>
                  <div className="rounded-full bg-white/18 px-4 py-2 text-lg font-semibold backdrop-blur-xl">
                    {deal.price}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-base leading-7 text-slate-600">{deal.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => alert(`Voir le deal ${deal.title} (simulation)`) }
                  className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
                >
                  Voir le deal
                  <ArrowRight className="h-4 w-4" />
                </motion.button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
