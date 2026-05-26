import type { SlideCardComponent } from '../../types/slide'
import phenStylerIcon from '../../assets/icons/phen-styler.svg'
import phenStylerIconActive from '../../assets/icons/phen-styler_active.svg'

export const SalonPowerCard: SlideCardComponent = () => (
  <div className="slide-card slide-d">
    <p className="slide-kicker">Салонная мощность</p>
    <h2>САЛОННАЯ МОЩНОСТЬ</h2>
    <div className="pill">Для дома</div>
    <p className="slide-description">
      Профессиональный результат в ежедневном использовании.
    </p>
  </div>
)

SalonPowerCard.slideMeta = {
  badge: 'САЛОННАЯ МОЩНОСТЬ',
  className: 'slide-d',
  navIcon: {
    inactive: phenStylerIcon,
    active: phenStylerIconActive,
    alt: 'Иконка слайда Салонная мощность',
  },
}
