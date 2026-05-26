import type { ComponentType } from 'react'

export type SlideCardProps = {
  isActive: boolean
}

export type SlideMeta = {
  badge: string
  className: string
  navIcon: {
    inactive: string
    active: string
    alt: string
  }
}

export type SlideCardComponent = ComponentType<SlideCardProps> & {
  slideMeta: SlideMeta
}
