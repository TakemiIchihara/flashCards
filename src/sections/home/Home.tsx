import { Link } from 'react-router-dom'
import { LANGUAGE_LIST } from '../../assets/cardSets/Flashcards.type'

export const Home = () => {
  return (
    <div className="grid h-full w-full grid-rows-[0.4fr_0.6fr] justify-center">
      <h1 className="self-end text-2xl">Learning Languages is Fun :)</h1>
      <ul className="flex flex-col gap-4 self-end pb-8">
        {LANGUAGE_LIST.map((el) => (
          <li className="rounded-full border-2 border-solid border-violet-700 text-2xl">
            <Link
              to={`/flashcards-${el.id}`}
              className="flex h-fit w-full flex-col items-center justify-center py-6"
            >
              {el.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
