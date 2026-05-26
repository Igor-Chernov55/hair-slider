import type { SlideCardComponent } from '../../types/slide'
import { FenStylerFeatureCards } from './fenStyler/FenStylerFeatureCards'
import { FenStylerHeader } from './fenStyler/FenStylerHeader'
import { FenStylerHero } from './fenStyler/FenStylerHero'
import { FenStylerMobileLayout } from './fenStyler/FenStylerMobileLayout'
import { fenStylerSlideMeta } from './fenStyler/fenStylerContent'

export const FenStylerCard: SlideCardComponent = ({ isActive }) => (
  <div className="slide-card slide-a fen-styler-card">
    <FenStylerHeader />
    <FenStylerHero />
    <FenStylerFeatureCards className="fen-styler-card__features" />
    <FenStylerMobileLayout />

    {isActive ? <span className="sr-only">Активный слайд</span> : null}
  </div>
)

FenStylerCard.slideMeta = fenStylerSlideMeta
