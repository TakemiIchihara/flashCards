import {
  FLASHCARDS,
  type CategoryType,
} from '@/assets/Flashcards/Flashcards.registry'
import type { LanguageOptionsType } from '@/assets/Flashcards/Flashcards.type'
import { Link } from 'react-router-dom'

const LANGUAGE_LIST = {
  DE: 'German',
  CN: 'Chinese',
  UA: 'Ukrainian',
  ALL: 'GCU',
} satisfies Record<LanguageOptionsType, string>

export const HomeLayout = ({ lang }: { lang: LanguageOptionsType }) => {
  return (
    <div className="grid h-dvh w-screen grid-rows-[0.4fr_0.6fr] items-center justify-center bg-indigo-800">
      <h1 className="text-9xl">{LANGUAGE_LIST[lang]}</h1>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        {(Object.keys(FLASHCARDS) as CategoryType[]).map((category) => (
          <Link
            className="w-fit rounded-full border border-solid border-violet-500 px-10 py-4 text-center text-2xl"
            to={`/flashcards-${lang}/${category}`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  )
}
