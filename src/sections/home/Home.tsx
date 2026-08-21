import { LANGUAGE_CODE } from '@/assets/cardSets/Flashcards.type'
import { HomeLayout } from './Home.layout'

export const Home = () => {
  // const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex h-dvh w-screen snap-x snap-mandatory overflow-x-scroll">
      {LANGUAGE_CODE.map((code) => (
        <section
          key={code}
          className="h-dvh w-screen shrink-0 snap-end overflow-hidden"
        >
          <HomeLayout language={code} />
        </section>
      ))}
    </div>
  )
}
