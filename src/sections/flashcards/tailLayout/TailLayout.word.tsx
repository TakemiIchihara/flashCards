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
      className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 py-6"
      ref={ref}
    >
      <div
        className="flex h-fit w-full flex-col items-center text-center wrap-break-word"
        data-container
      >
        <div className="flex flex-col gap-0.5">
          {lang in pronunciations && (
            <small className="leading-[90%] text-yellow-900">
              {pronunciations?.[lang]}
            </small>
          )}
          <div className="w-fit">
            <h2 className="text-5xl leading-[90%] font-extrabold text-nowrap text-amber-950">
              {translations[lang]}
            </h2>
          </div>
        </div>

        <button
          className="click: flex cursor-pointer flex-col items-center justify-center rounded-4xl border border-solid border-violet-400 px-4 py-2"
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
        >
          <span className="block -translate-y-px">pronounce 🗣️</span>
        </button>
      </div>

      <div className="flex flex-col gap-4" data-container>
        {examples[lang]?.map((ex: WordExample, i) => (
          <div key={i} className="text-black">
            <div className="flex flex-col">
              <small className="text-sm/[90%]">{ex.romanized}</small>
              <button
                className="cursor-pointer text-left leading-[90%]"
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
                <span className="text-3xl font-semibold">{ex.exPhrase}</span>
              </button>
            </div>

            <p className="text-2xl">{ex.translation}</p>
            {ex.usedNewWords.map((word) => (
              <small>
                {word.word}: {word.meaning}
              </small>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
