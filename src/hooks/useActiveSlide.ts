import { useCallback, useEffect, useRef, useState } from 'react'

const OBSERVER_THRESHOLDS = [0.35, 0.55, 0.75]
const SCROLL_SETTLE_DELAY_MS = 180
const OBSERVER_SUPPRESS_MS = 850

export const useActiveSlide = (count: number) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const ignoreObserverUntilRef = useRef(0)
  const pendingIndexRef = useRef<number | null>(null)
  const scrollSettleTimerRef = useRef<number | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const sectionsRef = useRef<Array<HTMLElement | null>>([])

  const isObserverSuppressed = useCallback(
    () => Date.now() < ignoreObserverUntilRef.current,
    [],
  )

  const isValidIndex = useCallback(
    (index: number) => Number.isInteger(index) && index >= 0 && index < count,
    [count],
  )

  const commitActiveIndex = useCallback((index: number) => {
    if (index === activeIndexRef.current) return

    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  const clearScrollSettleTimer = useCallback(() => {
    if (scrollSettleTimerRef.current !== null) {
      window.clearTimeout(scrollSettleTimerRef.current)
      scrollSettleTimerRef.current = null
    }
  }, [])

  const flushPendingIndex = useCallback(() => {
    const pendingIndex = pendingIndexRef.current
    pendingIndexRef.current = null

    if (pendingIndex !== null && isValidIndex(pendingIndex)) {
      commitActiveIndex(pendingIndex)
    }
  }, [commitActiveIndex, isValidIndex])

  const scheduleScrollCommit = useCallback(() => {
    clearScrollSettleTimer()

    scrollSettleTimerRef.current = window.setTimeout(flushPendingIndex, SCROLL_SETTLE_DELAY_MS)
  }, [clearScrollSettleTimer, flushPendingIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return
        if (isObserverSuppressed()) return

        const idx = Number((visible.target as HTMLElement).dataset.index)
        if (isValidIndex(idx) && idx !== activeIndexRef.current) {
          pendingIndexRef.current = idx
          scheduleScrollCommit()
        }
      },
      { threshold: OBSERVER_THRESHOLDS },
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [isObserverSuppressed, isValidIndex, scheduleScrollCommit])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return undefined

    const handleScroll = () => {
      if (isObserverSuppressed()) return
      scheduleScrollCommit()
    }

    scroller.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      scroller.removeEventListener('scroll', handleScroll)
      clearScrollSettleTimer()
    }
  }, [clearScrollSettleTimer, isObserverSuppressed, scheduleScrollCommit])

  const setScrollerRef = useCallback((el: HTMLDivElement | null) => {
    scrollerRef.current = el
  }, [])

  const setSectionRef = useCallback((index: number, el: HTMLElement | null) => {
    sectionsRef.current[index] = el
  }, [])

  const openSlide = useCallback((index: number) => {
    if (!isValidIndex(index) || index === activeIndexRef.current) return

    pendingIndexRef.current = null
    clearScrollSettleTimer()

    ignoreObserverUntilRef.current = Date.now() + OBSERVER_SUPPRESS_MS
    commitActiveIndex(index)
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [clearScrollSettleTimer, commitActiveIndex, isValidIndex])

  return { activeIndex, setScrollerRef, setSectionRef, openSlide }
}
