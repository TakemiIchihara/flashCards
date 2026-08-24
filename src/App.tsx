import { FlashcardsRunner } from './sections/flashcards/Flashcards.runner'
import { NavBar } from './layout/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './sections/home/Home'
import { LANGUAGE_OPTIONS } from './assets/cardSets/Flashcards.type'
import {
  FLASHCARDS,
  matchCategory,
  type CategoryType,
} from './assets/cardSets/Flashcards.registry'

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      {/* page-container */}
      <div className="relative h-dvh w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {LANGUAGE_OPTIONS.map((lang) =>
            (Object.keys(FLASHCARDS) as CategoryType[]).map((category) => (
              <Route
                path={`/flashcards-${lang}/${category}`}
                element={
                  <FlashcardsRunner
                    lang={`${lang}`}
                    cards={matchCategory(category)}
                  />
                }
              />
            ))
          )}
        </Routes>
      </div>
    </div>
  )
}

export default App
