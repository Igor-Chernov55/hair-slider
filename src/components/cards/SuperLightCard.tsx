import type { SlideCardComponent } from '../../types/slide'
import superLightIcon from '../../assets/icons/super-light.svg'
import superLightIconActive from '../../assets/icons/super-light_active.svg'
import superLightSticker from '../../assets/icons/super-light-sticker.png'
import superLightMobileIcon from '../../assets/icons/icon-super-light_mobile.png'
import superLightMain from '../../assets/images/image-super-light-main.png'
import superLightMainMobile from '../../assets/images/image-super-light-main_mobile.png'

export const SuperLightCard: SlideCardComponent = () => (
  <div className="slide-card slide-b super-light-card">
    <div className="super-light-card__sticker" aria-label="Не тяжелее чашки кофе">
      <img
        className="super-light-card__sticker-image"
        src={superLightSticker}
        alt=""
        aria-hidden="true"
      />
      <span className="super-light-card__sticker-text">
        <span className="super-light-card__sticker-line">Не тяжелее</span>
        <span className="super-light-card__sticker-line">чашки кофе</span>
      </span>
    </div>

    <div className="super-light-card__mobile-badge">
      <img
        className="super-light-card__mobile-badge-icon"
        src={superLightMobileIcon}
        alt=""
        aria-hidden="true"
      />
      <span className="super-light-card__mobile-badge-text">
        Лёгкость
        <br />
        и комфорт в руке
      </span>
    </div>

    <picture>
      <source srcSet={superLightMainMobile} media="(max-width: 480px)" />
      <img
        className="super-light-card__hero"
        src={superLightMain}
        alt="Девушка держит фен-стайлер и чашку кофе"
      />
    </picture>

    <div className="super-light-card__content">
      <h2 className="super-light-card__title">
        <span className="super-light-card__title-desktop">
          <span>СУПЕР-</span>
          <span>ЛЁГКИЙ</span>
        </span>
        <span className="super-light-card__title-mobile">СУПЕРЛЁГКИЙ</span>
      </h2>
      <p className="super-light-card__description">
        Уменьшает усталость рук при сушке волос, делая процедуру удобной и приятной даже
        после напряжённого рабочего дня.
      </p>
      <div className="super-light-card__pill">500 г</div>
    </div>
  </div>
)

SuperLightCard.slideMeta = {
  badge: 'СУПЕРЛЁГКИЙ',
  className: 'slide-b',
  navIcon: {
    inactive: superLightIcon,
    active: superLightIconActive,
    alt: 'Иконка слайда Суперлёгкий',
  },
}
