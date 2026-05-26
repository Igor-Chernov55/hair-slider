import { memo, useMemo } from 'react'
import type { SlideCardComponent } from '../types/slide'

type Props = {
  slides: SlideCardComponent[]
  activeIndex: number
  onSelect: (index: number) => void
}

const wheelGeometry = {
  cx: -415,
  cy: 310,
  r: 490,
  stepY: 80,
}

const getCircularDelta = (index: number, activeIndex: number, count: number) => {
  const directDelta = index - activeIndex
  const halfCount = count / 2

  if (directDelta > halfCount) return directDelta - count
  if (directDelta < -halfCount) return directDelta + count

  return directDelta
}

export const SideWheel = memo(function SideWheel({ slides, activeIndex, onSelect }: Props) {
  const items = useMemo(
    () =>
      slides.map((SlideComponent, index) => {
        const slideMeta = SlideComponent.slideMeta
        const isActive = index === activeIndex
        const delta = getCircularDelta(index, activeIndex, slides.length)
        const y = wheelGeometry.cy + delta * wheelGeometry.stepY
        const dy = y - wheelGeometry.cy
        const x = wheelGeometry.cx + Math.sqrt(Math.max(0, wheelGeometry.r * wheelGeometry.r - dy * dy))
        const badgeLines = slideMeta.badge.split('\n')
        return { badgeLines, index, isActive, slideMeta, x, y }
      }),
    [activeIndex, slides],
  )

  return (
    <nav className="side-wheel" aria-label="Slide navigation">
      <div className="wheel-circle" />
      <div className="wheel-items">
        {items.map(({ badgeLines, index, isActive, slideMeta, x, y }) => (
            <button
              key={slideMeta.badge}
              type="button"
              className={`wheel-icon ${isActive ? 'active' : ''}`}
              onClick={() => onSelect(index)}
              aria-current={isActive ? 'true' : 'false'}
              aria-label={slideMeta.badge}
              style={{ top: `${y}px`, left: `${x}px` }}
            >
              <span className="wheel-icon-visual" aria-hidden="true">
                <img
                  src={slideMeta.navIcon.inactive}
                  alt=""
                  className="wheel-icon-image wheel-icon-image--inactive"
                />
                <img
                  src={slideMeta.navIcon.active}
                  alt=""
                  className="wheel-icon-image wheel-icon-image--active"
                />
              </span>
              <span className="wheel-label" aria-hidden="true">
                {badgeLines.map((line) => (
                  <span className="wheel-label__line" key={line}>
                    {line}
                  </span>
                ))}
              </span>
            </button>
        ))}
      </div>
    </nav>
  )
})
