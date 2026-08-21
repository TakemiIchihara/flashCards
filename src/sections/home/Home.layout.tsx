import type { FlashcardsLanguageCode } from '@/assets/cardSets/Flashcards.type'
import { Link } from 'react-router-dom'

type SelectionMachineLayoutType = {
  language: FlashcardsLanguageCode
}

const LANGUAGE_LIST = {
  DE: 'German',
  CN: 'Chinese',
  ALL: 'German + Chinese',
} satisfies Record<FlashcardsLanguageCode, string>

export const HomeLayout = ({ language }: SelectionMachineLayoutType) => {
  return (
    <div className="grid h-dvh w-screen grid-rows-[0.4fr_0.6fr] items-end justify-items-center bg-indigo-800">
      <h1 className="text-9xl">{LANGUAGE_LIST[language]}</h1>
      <Link
        className="mb-16 w-fit self-end rounded-full border border-solid border-violet-500 px-10 py-6 text-center text-4xl"
        to={`/flashcards-${language}`}
      >
        Start the Quiz
      </Link>
    </div>
  )
}
