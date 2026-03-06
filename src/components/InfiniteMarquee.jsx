import { motion } from 'framer-motion'
import { marqueeCards } from './data'

const repeatedCards = [...marqueeCards, ...marqueeCards]

export default function InfiniteMarquee() {
  return (
    <section className="overflow-hidden pb-2 pt-8 sm:pb-4 sm:pt-10">
      <div className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-14 bg-gradient-to-r from-sand to-transparent sm:w-20" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-14 bg-gradient-to-l from-sand to-transparent sm:w-20" />

        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
          className="flex w-max gap-0"
        >
          {repeatedCards.map((card, index) => (
            <article
              key={`${card.title}-${index}`}
              className="relative h-[112px] w-[168px] flex-none overflow-hidden bg-white sm:h-[155px] sm:w-[235px] lg:h-[178px] lg:w-[268px]"
            >
              <img src={card.image} alt={card.title} className="h-full w-full object-cover" />
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
