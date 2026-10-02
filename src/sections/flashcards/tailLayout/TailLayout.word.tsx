import type {
  LanguageCodesType,
  WordExample,
  WordTail,
} from '@/assets/Flashcards/Flashcards.type'
import { speak } from '@/utils/speak'
import { useState } from 'react'

export const TailLayoutWord = ({
  content,
  lang,
  ref,
}: {
  content: WordTail
  lang: LanguageCodesType
  ref: React.Ref<HTMLDivElement>
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)
  const { pronunciations, translations, examples } = content

  return (
    <div
      className={`relative grid h-full w-full grid-rows-[3rem_1fr] flex-col gap-3 px-6 py-6`}
      ref={ref}
    >
      {/* box - the target words, optional pronunciation, and a speak button */}
      <div
        className="row-start-1 flex h-fit w-fit items-center justify-center gap-1.5 self-center text-center wrap-break-word"
        data-container
      >
        <div className="flex flex-col gap-0.5" data-flip>
          {lang in pronunciations && (
            <small className="leading-[90%] text-yellow-900" data-flip>
              {pronunciations?.[lang]}
            </small>
          )}
          <h2
            className="text-3xl leading-[90%] font-extrabold text-nowrap text-amber-950"
            data-flip
          >
            {translations[lang]}
          </h2>
        </div>

        <button
          className="mx-auto flex w-fit cursor-pointer flex-col items-center justify-center rounded-4xl border border-solid border-violet-400"
          style={{
            background: !isSpeaking ? 'aliceblue' : 'cornflowerblue',
            color: !isSpeaking ? 'cornflowerblue' : 'aliceblue',
          }}
          disabled={isSpeaking}
          onClick={(e) => {
            e.stopPropagation()
            speak(
              translations[lang],
              lang,
              () => setIsSpeaking(true),
              () => setIsSpeaking(false)
            )
          }}
          data-flip
        >
          <span className="inline-block px-4 py-2">pronounce 🗣️</span>
        </button>
      </div>

      <div
        className="row-start-2 flex flex-col gap-4 overflow-y-scroll"
        data-container
      >
        {examples[lang]?.map((ex: WordExample, i) => (
          <div key={i} className="text-black">
            <div className="flex flex-col gap-1">
              <small className="pl-1 text-sm/[90%]">{ex.romanized}</small>
              <button
                className="w-fit cursor-pointer text-left leading-[90%]"
                style={{ color: !isSpeaking ? 'aliceblue' : 'cornflowerblue' }}
                disabled={isSpeaking}
                onClick={(e) => {
                  e.stopPropagation()
                  speak(
                    ex.exPhrase,
                    lang,
                    () => setIsSpeaking(true),
                    () => setIsSpeaking(false)
                  )
                }}
              >
                <span className="text-3xl/[100%] font-bold">{ex.exPhrase}</span>
              </button>
            </div>

            <p className="mt-2 pl-0.5 text-xl/[100%]">- {ex.translation}</p>
            <ul className="justify mt-1 flex flex-wrap gap-x-4 gap-y-1 pl-2">
              {ex.usedNewWords.map((word) => (
                <li className="text-base/[100%] text-nowrap">
                  <span className="font-semibold tracking-wide">
                    {word.word}
                  </span>
                  : <span className="tracking-tighter">{word.meaning}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
