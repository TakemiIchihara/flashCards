import type {
  LanguageCodesType,
  PhraseTail,
} from '@/assets/Flashcards/Flashcards.type'
import { speak } from '@/utils/speak'
import { useState } from 'react'

export const TailLayoutPhrase = ({
  content,
  lang,
}: {
  content: PhraseTail
  lang: LanguageCodesType
}) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)

  const { pronunciations, translations } = content
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex w-full flex-col items-center px-2 text-center wrap-break-word">
        {lang in pronunciations && (
          <small className="leading-[90%] text-yellow-900">
            {pronunciations?.[lang]}
          </small>
        )}
        <h2 className="w-full text-5xl font-extrabold text-amber-950">
          {translations[lang]}
        </h2>
      </div>

      <div>
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
      {/* <div>
        {examples[lang]?.map((ex: WordExample, i) => (
          <div className="text-base">
            <small>{ex.romanized}</small>
            <p className="text-lg">{ex.exPhrase}</p>
            <p className="text-base">{ex.translation}</p>
            {ex.usedNewWords.map((word) => (
              <small>
                {word.word}: {word.meaning}
              </small>
            ))}
          </div>
        ))}
      </div> */}
    </div>
  )
}
