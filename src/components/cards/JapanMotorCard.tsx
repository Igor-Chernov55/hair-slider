import type { SlideCardComponent } from '../../types/slide'
import japanMotorIcon from '../../assets/icons/japan-motor.svg'
import japanMotorIconActive from '../../assets/icons/japan-motor_active.svg'
import japanMotorBadgeOuter from '../../assets/icons/icon-japan-motor_first.png'
import japanMotorBadgeInner from '../../assets/icons/icon-japan-motor_second.png'
import motorImage from '../../assets/images/image-motor.png'
import motorImageMobile from '../../assets/images/image-motor_mobile.png'
import motorSticker from '../../assets/icons/super-light-sticker.png'

export const JapanMotorCard: SlideCardComponent = () => (
  <div className="slide-card slide-c japan-motor-card">
    <div className="japan-motor-card__media">
      <picture>
        <source srcSet={motorImageMobile} media="(max-width: 900px)" />
        <img
          className="japan-motor-card__image"
          src={motorImage}
          alt="Разрез фен-стайлера с бесщёточным мотором BLDC"
        />
      </picture>
      <p className="japan-motor-card__subtitle japan-motor-card__subtitle--media">
        Бесщеточный <span className="japan-motor-card__subtitle-tail">мотор BLDC</span>
      </p>
    </div>

    <div className="japan-motor-card__badge">
      <span className="japan-motor-card__badge-icon" aria-hidden="true">
        <img
          className="japan-motor-card__badge-icon-part japan-motor-card__badge-icon-part--outer"
          src={japanMotorBadgeOuter}
          alt=""
        />
        <img
          className="japan-motor-card__badge-icon-part japan-motor-card__badge-icon-part--inner"
          src={japanMotorBadgeInner}
          alt=""
        />
      </span>
      <span className="japan-motor-card__badge-text">
        ИННОВАЦИОННЫЙ
        <br />
        ЯПОНСКИЙ МОТОР
      </span>
    </div>

    <div className="japan-motor-card__copy">
      <h2 className="japan-motor-card__title">
        <span className="japan-motor-card__title-line japan-motor-card__title-line--comfort">
          <span>ДЛЯ ЦЕНИТЕЛЕЙ</span>
          <span>КОМФОРТА</span>
        </span>
        <span className="japan-motor-card__title-line japan-motor-card__title-line--quality">
          <span>И КАЧЕСТВА</span>
          <span>В УХОДЕ ЗА ВОЛОСАМИ</span>
        </span>
      </h2>
      <p className="japan-motor-card__subtitle japan-motor-card__subtitle--desktop">
        Бесщеточный мотор BLDC
      </p>
    </div>

    <div className="japan-motor-card__sticker" aria-label="Салонная мощность">
      <img
        className="japan-motor-card__sticker-image"
        src={motorSticker}
        alt=""
        aria-hidden="true"
      />
      <span className="japan-motor-card__sticker-text">
        Салонная
        <br />
        мощность
      </span>
    </div>
  </div>
)

JapanMotorCard.slideMeta = {
  badge: 'ИННОВАЦИОННЫЙ ЯПОНСКИЙ МОТОР',
  className: 'slide-c',
  navIcon: {
    inactive: japanMotorIcon,
    active: japanMotorIconActive,
    alt: 'Иконка слайда Инновационный японский мотор',
  },
}
