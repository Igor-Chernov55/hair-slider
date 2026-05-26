import { memo } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { SlideCardComponent } from '../types/slide'

type Props = {
  SlideComponent: SlideCardComponent
  index: number
  activeIndex: number
  setRef: (index: number, el: HTMLElement | null) => void
}

const cardOrigins = [
  { x: -120, y: -140, rotate: -7 },
  { x: 150, y: 110, rotate: 6 },
  { x: -160, y: 130, rotate: -5 },
] as const

export const SlideSection = memo(function SlideSection({
  SlideComponent,
  index,
  activeIndex,
  setRef,
}: Props) {
  const isCurrent = index === activeIndex
  const prefersReducedMotion = useReducedMotion()
  const origin = cardOrigins[index % cardOrigins.length]

  return (
    <section
      ref={(el) => setRef(index, el)}
      data-index={index}
      className="slide-section"
      aria-hidden={!isCurrent}
    >
      <div className="slide-content">
        <motion.div
          className="slide-card-motion"
          initial={prefersReducedMotion ? false : { ...origin, opacity: 0, scale: 0.94 }}
          animate={
            prefersReducedMotion || isCurrent
              ? { x: 0, y: 0, rotate: 0, opacity: 1, scale: 1 }
              : { ...origin, opacity: 0, scale: 0.94 }
          }
          transition={{
            type: 'spring',
            stiffness: 86,
            damping: 16,
            mass: 0.85,
            opacity: { duration: 0.28, ease: 'easeOut' },
          }}
        >
          <SlideComponent isActive={isCurrent} />
        </motion.div>
      </div>
    </section>
  )
})
