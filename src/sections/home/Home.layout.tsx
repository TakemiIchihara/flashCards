import {
  FLASHCARDS,
  type CategoryType,
} from '@/assets/cardSets/Flashcards.registry'
import type { LanguageOptionsType } from '@/assets/cardSets/Flashcards.type'
import { Link } from 'react-router-dom'

const LANGUAGE_LIST = {
  DE: 'German',
  CN: 'Chinese',
  ALL: 'German + Chinese',
} satisfies Record<LanguageOptionsType, string>

export const HomeLayout = ({ lang }: { lang: LanguageOptionsType }) => {
  console.log(FLASHCARDS)
  return (
    <div className="grid h-dvh w-screen grid-rows-[0.4fr_0.6fr] items-end justify-items-center bg-indigo-800">
      <h1 className="text-9xl">{LANGUAGE_LIST[lang]}</h1>
      {(Object.keys(FLASHCARDS) as CategoryType[]).map((category) => (
        <Link
          className="mb-16 w-fit self-end rounded-full border border-solid border-violet-500 px-10 py-6 text-center text-4xl"
          to={`/flashcards-${lang}/${category}`}
        >
          {category}
        </Link>
      ))}
    </div>
  )
}
