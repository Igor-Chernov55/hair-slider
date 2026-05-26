import { fenStylerContent } from './fenStylerContent'

export const FenStylerHero = () => (
  <div className="fen-styler-card__stage">
    <img
      className="fen-styler-card__hero-image"
      src={fenStylerContent.heroImage}
      alt={fenStylerContent.heroAlt}
    />
    <div className="fen-styler-card__glow" />
  </div>
)
