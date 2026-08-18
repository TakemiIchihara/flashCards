import { useState } from 'react'
import './App.css'
import { FlashcardsRunner } from './sections/flashcards/Flashcards.runner'
import type { TranslationsType } from './assets/cardSets/Flashcards.type'

type LanguageList = {
  id: keyof TranslationsType
  label: string
}
const LANGUAGE_LIST: LanguageList[] = [
  {
    id: 'DE',
    label: 'Germany',
  },
  {
    id: 'CN',
    label: 'Chinese',
  },
]

function App() {
  const [selectedLanguage, setSelectedLanguage] =
    useState<keyof TranslationsType>()

  if (selectedLanguage) {
    return <FlashcardsRunner lang={selectedLanguage} />
  }

  return (
    <div className="h-dvh overflow-hidden">
      <h1>Learning Languages is Fun :)</h1>
      <ul>
        {LANGUAGE_LIST.map((el) => (
          <li>
            <a
              className="cursor-pointer"
              onClick={() => setSelectedLanguage(el.id)}
            >
              {el.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
