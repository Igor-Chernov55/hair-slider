import type { SlideMeta } from '../../../types/slide'
import phenStyler from '../../../assets/images/image-phen-styler.png'
import phenActionCard from '../../../assets/images/image-phen-action-card.png'
import phenStylerMobile from '../../../assets/images/image-phen-action_mobile.jpg'
import stylerActionCard from '../../../assets/images/image-styler-action-card.png'
import phenStylerIcon from '../../../assets/icons/phen-styler.svg'
import phenStylerIconActive from '../../../assets/icons/phen-styler_active.svg'

export type FenStylerFeature = {
  id: string
  title: string
  image: string
  mobileImage: string
  imageAlt: string
  tone: 'dark' | 'light'
}

export const fenStylerContent = {
  title: 'ФЕН и СТАЙЛЕР',
  subtitle: 'в уникальном дизайне',
  pill: '2 в 1',
  heroImage: phenStyler,
  mobileHeroImage: phenStylerMobile,
  heroAlt: 'Фен и стайлер рядом с моделью с длинными волосами',
} as const

export const fenStylerFeatures: FenStylerFeature[] = [
  {
    id: 'dryer',
    title: 'Фен',
    image: phenActionCard,
    mobileImage: phenActionCard,
    imageAlt: 'Девушка сушит волосы феном',
    tone: 'dark',
  },
  {
    id: 'styler',
    title: 'Стайлер',
    image: stylerActionCard,
    mobileImage: stylerActionCard,
    imageAlt: 'Девушка укладывает волосы стайлером',
    tone: 'light',
  },
]

export const fenStylerSlideMeta: SlideMeta = {
  badge: 'ФЕН-СТАЙЛЕР\n2 В 1',
  className: 'slide-a',
  navIcon: {
    inactive: phenStylerIcon,
    active: phenStylerIconActive,
    alt: 'Иконка слайда Фен-стайлер 2 в 1',
  },
}
