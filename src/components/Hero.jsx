import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Luggage, Sparkles } from 'lucide-react'
import { maskReveal } from './motion'

const heroWords = ['Votre', 'voyage', 'de', 'rêve,', 'dessiné', 'pour', 'vous.']

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-28 sm:pt-32">
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/10 to-sand" />
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=80"
          alt="Plage paradisiaque"
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-white/65 via-white/35 to-white/10" />

      <div className="section-shell relative z-10 grid min-h-[88vh] items-end pb-14 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:pb-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-sm font-medium text-ocean shadow-soft backdrop-blur-xl"
          >
            <Sparkles className="h-4 w-4" />
            Carnets de voyage haut de gamme et itinéraires signature
          </motion.div>

          <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.96] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            <span className="sr-only">Votre voyage de rêve, dessiné pour vous.</span>
            {heroWords.map((word, index) => (
              <span key={`${word}-${index}`} className="mr-3 inline-block overflow-hidden align-top pb-2 sm:mr-4">
                <motion.span custom={index} variants={maskReveal} initial="hidden" animate="visible" className="inline-block">
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.65 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 sm:text-xl"
          >
            Je crée des voyages sur-mesure qui mélangent esthétique, fluidité et vraies bonnes adresses. Vous me donnez vos envies, je transforme tout ça en expérience mémorable.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.85 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => alert('Création d itinéraire simulée')}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-coral px-6 py-4 text-base font-semibold text-white shadow-card"
            >
              Créer mon itinéraire
              <ArrowRight className="h-4 w-4" />
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="#ebook"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/80 px-6 py-4 text-base font-semibold text-slate-800 shadow-soft backdrop-blur"
            >
              Découvrir l Ebook
              <BookOpen className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="mt-10 lg:mt-0"
        >
          <div className="ml-auto max-w-md rounded-[32px] border border-white/70 bg-white/55 p-5 shadow-soft backdrop-blur-2xl">
            <div className="rounded-[28px] bg-white p-5 shadow-card">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-ocean">Itinéraire signature</p>
                  <h3 className="mt-2 font-serif text-3xl font-bold text-slate-900">Seychelles et safari</h3>
                </div>
                <div className="rounded-full bg-ocean/10 p-3 text-ocean">
                  <Luggage className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                9 jours entre lodges confidentiels, plage turquoise et rythme parfaitement dosé. Une mise en bouche visuelle du style plus éditorial et premium que tu voulais.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center text-sm">
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="font-semibold text-slate-900">09</div>
                  <div className="text-slate-500">Jours</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="font-semibold text-slate-900">03</div>
                  <div className="text-slate-500">Étapes</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-3">
                  <div className="font-semibold text-slate-900">100%</div>
                  <div className="text-slate-500">Sur-mesure</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
