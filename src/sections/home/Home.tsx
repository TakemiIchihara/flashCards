import { LANGUAGE_OPTIONS } from '@/assets/Flashcards/Flashcards.type'
import { HomeLayout } from './Home.layout'

const FILTERED_LANGUAGE_OPTIONS = LANGUAGE_OPTIONS.filter(
  (lang) => lang !== 'UA'
)

export const Home = () => {
  // const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex h-dvh w-screen snap-x snap-mandatory overflow-x-scroll">
      {FILTERED_LANGUAGE_OPTIONS.map((lang) => (
        <section
          key={lang}
          className="h-fit w-screen shrink-0 snap-end overflow-hidden"
        >
          <HomeLayout lang={lang} />
        </section>
      ))}
    </div>
  )
}
