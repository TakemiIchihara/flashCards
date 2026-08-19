import { FlashcardsRunner } from './sections/flashcards/Flashcards.runner'
import { NavBar } from './layout/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import { Home } from './sections/home/Home'
import { LANGUAGE_CODE } from './assets/cardSets/Flashcards.type'

function App() {
  return (
    <div className="app-shell">
      <NavBar />
      {/* page-container */}
      <div className="relative h-dvh w-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          {LANGUAGE_CODE.map((langOption) => (
            <Route
              path={`/flashcards-${langOption}`}
              element={<FlashcardsRunner lang={`${langOption}`} />}
            />
          ))}
        </Routes>
      </div>
    </div>
  )
}

export default App
