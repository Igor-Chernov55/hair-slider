import { fenStylerFeatures } from './fenStylerContent'

type FenStylerFeatureCardsProps = {
  className: string
}

export const FenStylerFeatureCards = ({ className }: FenStylerFeatureCardsProps) => (
  <div className={className} aria-label="Режимы устройства">
    {fenStylerFeatures.map((feature) => (
      <article
        className="fen-styler-card__feature"
        data-feature={feature.id}
        data-tone={feature.tone}
        key={feature.id}
      >
        <div className="fen-styler-card__feature-tag">{feature.title}</div>
        <div className="fen-styler-card__feature-photo">
          <picture>
            <source srcSet={feature.mobileImage} media="(max-width: 900px)" />
            <img
              src={feature.image}
              alt={feature.imageAlt}
              className="fen-styler-card__feature-image"
            />
          </picture>
        </div>
      </article>
    ))}
  </div>
)
