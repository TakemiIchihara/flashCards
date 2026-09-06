import {
  FLASHCARDS,
  matchCategory,
  type CategoryType,
} from '@/assets/Flashcards/Flashcards.registry'
import type { LanguageOptionsType } from '@/assets/Flashcards/Flashcards.type'
import { LinkWheel } from '@/utils/LinkWheel'
import { Link } from 'react-router-dom'

const LANGUAGE_LIST = {
  DE: {
    title: 'German',
    titleColor: '#ffffff',
    bgColor: ['#000000', '#FF0000', '#FFD700'],
  },
  CN: {
    title: 'Chinese',
    titleColor: '#FFFFFF',
    bgColor: ['#DE2910', '#FFDE00'],
  },
  UA: {
    title: 'Ukrainian',
    titleColor: '#FFFFFF',
    bgColor: ['#0057B7', '#FFDD00'],
  },
  ALL: {
    title: 'GCU',
    titleColor: '#FFFFFF',
    bgColor: ['#FFDE00', '#FF0000', '#0057B7'],
  },
} satisfies Record<LanguageOptionsType, LanguageListType>

type LanguageListType = {
  title: string
  titleColor: string
  bgColor: string[]
}

export const HomeLayout = ({ lang }: { lang: LanguageOptionsType }) => {
  const { title, titleColor, bgColor } = LANGUAGE_LIST[lang]

  const gradient = bgColor.length
    ? `linear-gradient(180deg, ${bgColor.join(', ')})`
    : undefined

  const linkClass = `w-full block tracking-wider rounded-tl-full rounded-bl-full font-semibold shadow-inner shadow-2xl break-words border-violet-500 bg-amber-300 text-[#f8f8f8] py-6 text-center text-2xl`

  const items = [
    ...(Object.keys(FLASHCARDS) as CategoryType[]).map((category) => ({
      key: category,
      content: (
        <Link
          className={linkClass}
          to={`/flashcards-${lang}/${category}`}
          style={{
            backgroundColor: bgColor[0],
            color: lang === 'ALL' ? 'navy' : 'white',
            display: 'block',
          }}
        >
          {matchCategory(category).name}
        </Link>
      ),
    })),
  ]

  return (
    <div
      className={`grid h-dvh w-screen grid-rows-[minmax(0,0.6fr)_minmax(0,0.4fr)]`}
      style={{ background: gradient }}
    >
      <div className="h-fit w-full self-center pl-4">
        <h1
          className="text-7xl font-black"
          style={{
            color: titleColor,
            textShadow: '0 2px 8px rgba(0,0,0,0.35)',
          }}
        >
          {title}
        </h1>
        {lang === 'UA' && (
          <div className="flex items-end gap-2">
            <p className="text-amber-100">More to Learn? </p>
            <Link
              className="w-fit rounded-full bg-white px-4 py-2"
              style={{ color: bgColor[0] }}
              to={'/flashcards-UA/alphabets'}
            >
              Alphabets
            </Link>
          </div>
        )}
      </div>

      <div className="w-full self-end pl-6">
        <LinkWheel
          items={items}
          onSelect={(key) => console.log('selected:', key)}
        />
      </div>
    </div>
  )
}
