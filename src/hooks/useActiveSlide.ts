import { useCallback, useEffect, useRef, useState } from 'react'

export const useActiveSlide = (count: number) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeIndexRef = useRef(0)
  const ignoreObserverUntilRef = useRef(0)
  const pendingIndexRef = useRef<number | null>(null)
  const scrollSettleTimerRef = useRef<number | null>(null)
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const sectionsRef = useRef<Array<HTMLElement | null>>([])

  const commitActiveIndex = useCallback((index: number) => {
    if (index === activeIndexRef.current) return

    activeIndexRef.current = index
    setActiveIndex(index)
  }, [])

  const scheduleScrollCommit = useCallback(() => {
    if (scrollSettleTimerRef.current !== null) {
      window.clearTimeout(scrollSettleTimerRef.current)
    }

    scrollSettleTimerRef.current = window.setTimeout(() => {
      const pendingIndex = pendingIndexRef.current
      pendingIndexRef.current = null

      if (pendingIndex !== null) {
        commitActiveIndex(pendingIndex)
      }
    }, 180)
  }, [commitActiveIndex])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (!visible) return
        if (Date.now() < ignoreObserverUntilRef.current) return

        const idx = Number((visible.target as HTMLElement).dataset.index)
        if (!Number.isNaN(idx) && idx >= 0 && idx < count && idx !== activeIndexRef.current) {
          pendingIndexRef.current = idx
          scheduleScrollCommit()
        }
      },
      { threshold: [0.35, 0.55, 0.75] },
    )

    sectionsRef.current.forEach((el) => {
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [count, scheduleScrollCommit])

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return undefined

    const handleScroll = () => {
      if (Date.now() < ignoreObserverUntilRef.current) return
      scheduleScrollCommit()
    }

    scroller.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      scroller.removeEventListener('scroll', handleScroll)
      if (scrollSettleTimerRef.current !== null) {
        window.clearTimeout(scrollSettleTimerRef.current)
      }
    }
  }, [scheduleScrollCommit])

  const setScrollerRef = useCallback((el: HTMLDivElement | null) => {
    scrollerRef.current = el
  }, [])

  const setSectionRef = useCallback((index: number, el: HTMLElement | null) => {
    sectionsRef.current[index] = el
  }, [])

  const openSlide = useCallback((index: number) => {
    if (index === activeIndexRef.current) return

    pendingIndexRef.current = null
    if (scrollSettleTimerRef.current !== null) {
      window.clearTimeout(scrollSettleTimerRef.current)
    }

    ignoreObserverUntilRef.current = Date.now() + 850
    commitActiveIndex(index)
    sectionsRef.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [commitActiveIndex])

  return { activeIndex, setScrollerRef, setSectionRef, openSlide }
}
