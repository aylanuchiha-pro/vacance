import { motion } from 'framer-motion'
import { Eye } from 'lucide-react'
import { springInView, staggerSoft } from './motion'

const gallery = {
  leftTop:
    'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80',
  centerMain:
    'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=1400&q=80',
  rightTop:
    'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=80',
  leftBottom:
    'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=900&q=80',
  centerBottomLeft:
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  centerBottomRight:
    'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=900&q=80',
  rightBottom:
    'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=900&q=80',
}

function Tile({ src, alt, className = '', children, priority = false }) {
  return (
    <motion.div
      variants={springInView}
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 180, damping: 18 }}
      className={`group relative overflow-hidden rounded-[14px] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.08)] ${className}`}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
      />
      {children}
    </motion.div>
  )
}

export default function MosaicGallery() {
  return (
    <section className="pb-12 pt-3 sm:pb-16">
      <motion.div
        variants={staggerSoft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        className="mx-auto w-full max-w-[1320px] px-4 sm:px-6 lg:px-8"
      >
        <div className="hidden gap-3 lg:grid lg:grid-cols-[0.88fr_1.52fr_0.88fr]">
          <div className="grid grid-rows-2 gap-3">
            <Tile src={gallery.leftTop} alt="Lagon turquoise" className="h-[274px]" priority>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/85 text-white shadow-lg backdrop-blur-md">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </Tile>
            <Tile src={gallery.leftBottom} alt="Fruits tropicaux" className="h-[362px]" />
          </div>

          <div className="grid grid-rows-[336px_300px] gap-3">
            <Tile src={gallery.centerMain} alt="Voyageuse dans la piscine" className="h-[336px]" priority />
            <div className="grid grid-cols-2 gap-3">
              <Tile src={gallery.centerBottomLeft} alt="Backpacker sur la plage" className="h-[300px]" />
              <Tile src={gallery.centerBottomRight} alt="Raies sous l eau" className="h-[300px]" />
            </div>
          </div>

          <div className="grid grid-rows-2 gap-3">
            <Tile src={gallery.rightTop} alt="Cocktails face a la mer" className="h-[274px]" />
            <Tile src={gallery.rightBottom} alt="Couple face a la baie" className="h-[362px]" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          <Tile src={gallery.centerMain} alt="Voyageuse dans la piscine" className="h-[260px] sm:col-span-2 sm:h-[360px]" priority />
          <Tile src={gallery.leftTop} alt="Lagon turquoise" className="h-[220px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-olive/85 text-white shadow-lg backdrop-blur-md">
                <Eye className="h-4 w-4" />
              </div>
            </div>
          </Tile>
          <Tile src={gallery.rightTop} alt="Cocktails face a la mer" className="h-[220px]" />
          <Tile src={gallery.leftBottom} alt="Fruits tropicaux" className="h-[220px]" />
          <Tile src={gallery.centerBottomLeft} alt="Backpacker sur la plage" className="h-[220px]" />
          <Tile src={gallery.centerBottomRight} alt="Raies sous l eau" className="h-[220px]" />
          <Tile src={gallery.rightBottom} alt="Couple face a la baie" className="h-[220px] sm:col-span-2" />
        </div>
      </motion.div>
    </section>
  )
}
