import { motion } from 'framer-motion'
import { Compass, MapPinned, PartyPopper } from 'lucide-react'
import { steps } from './data'
import { fadeUp, stagger } from './motion'

const icons = [Compass, MapPinned, PartyPopper]

export default function StepsSection() {
  return (
    <section id="sur-mesure" className="section-shell py-20 sm:py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="mx-auto max-w-3xl text-center"
      >
        <div className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-ocean shadow-soft">
          Voyage sur-mesure
        </div>
        <h2 className="mt-5 font-serif text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Une méthode simple, élégante et ultra claire.
        </h2>
        <p className="mt-4 text-lg leading-8 text-slate-600">
          Ici, pas de page brouillonne ni de tunnel générique. Le parcours est pensé comme un atelier éditorial, inspiré des templates travel les plus premium.
        </p>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        className="mt-14 grid gap-6 lg:grid-cols-3"
      >
        {steps.map((step, index) => {
          const Icon = icons[index]
          return (
            <motion.article
              key={step.number}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="rounded-[32px] bg-white p-7 shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold uppercase tracking-[0.25em] text-ocean">{step.number}</span>
                <div className="rounded-full bg-ocean/10 p-3 text-ocean">
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              <h3 className="mt-8 font-serif text-2xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-4 text-base leading-7 text-slate-600">{step.description}</p>
            </motion.article>
          )
        })}
      </motion.div>
    </section>
  )
}
