import { FenStylerFeatureCards } from './FenStylerFeatureCards'
import { FenStylerHeader } from './FenStylerHeader'
import { fenStylerContent } from './fenStylerContent'

export const FenStylerMobileLayout = () => (
  <div className="fen-styler-card__mobile">
    <picture>
      <source srcSet={fenStylerContent.heroImage} media="(min-width: 481px)" />
      <img
        className="fen-styler-card__mobile-hero"
        src={fenStylerContent.mobileHeroImage}
        alt={fenStylerContent.heroAlt}
      />
    </picture>
    <FenStylerHeader variant="mobile" />
    <FenStylerFeatureCards className="fen-styler-card__mobile-features" />
  </div>
)
