import './App.css'
import { slides } from './data/slides'
import { SlideSection } from './components/SlideSection'
import { SideWheel } from './components/SideWheel'
import { useActiveSlide } from './hooks/useActiveSlide'

function App() {
  const { activeIndex, setScrollerRef, setSectionRef, openSlide } = useActiveSlide(
    slides.length,
  )

  return (
    <main className="page">
      <SideWheel
        slides={slides}
        activeIndex={activeIndex}
        onSelect={openSlide}
      />
      <div className="slides" ref={setScrollerRef}>
        {slides.map((SlideComponent, index) => (
          <SlideSection
            key={SlideComponent.slideMeta.badge}
            SlideComponent={SlideComponent}
            index={index}
            activeIndex={activeIndex}
            setRef={setSectionRef}
          />
        ))}
      </div>
    </main>
  )
}

export default App
