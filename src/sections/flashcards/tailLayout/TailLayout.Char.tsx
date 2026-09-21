import type {
  CharTail,
  LanguageCodesType,
} from '@/assets/Flashcards/Flashcards.type'
import { speak } from '@/utils/speak'
import { useState } from 'react'

type FlashcardLayoutProps = {
  char: string
  content: CharTail
  lang: LanguageCodesType
}

export const TailLayoutChar = ({
  char,
  content,
  lang,
}: FlashcardLayoutProps) => {
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)

  return (
    <div>
      <h2 className="text-5xl font-extrabold text-amber-950">
        {content.romanization}
      </h2>
      <div>
        <button
          className="flex cursor-pointer flex-col items-center justify-center rounded-4xl border border-solid border-violet-400 px-4 py-2"
          style={{
            background: !isSpeaking ? 'aliceblue' : 'cornflowerblue',
            color: !isSpeaking ? 'cornflowerblue' : 'aliceblue',
          }}
          disabled={isSpeaking}
          onClick={(e) => {
            e.stopPropagation()
            speak(
              char,
              lang,
              () => setIsSpeaking(true),
              () => setIsSpeaking(false)
            )
          }}
        >
          <span className="block -translate-y-px">pronounce 🗣️</span>
        </button>
      </div>
      <div>
        {content.examples.map((ex) => (
          <div>
            <small>{ex.romanized}</small>
            <p className="text-5xl font-extrabold text-amber-950">{ex.word}</p>
            <p>{ex.translation}</p>
            <div>
              <button
                className="flex cursor-pointer flex-col items-center justify-center rounded-4xl border border-solid border-violet-400 px-4 py-2"
                style={{
                  background: !isSpeaking ? 'aliceblue' : 'cornflowerblue',
                  color: !isSpeaking ? 'cornflowerblue' : 'aliceblue',
                }}
                disabled={isSpeaking}
                onClick={(e) => {
                  e.stopPropagation()
                  speak(
                    ex.word,
                    lang,
                    () => setIsSpeaking(true),
                    () => setIsSpeaking(false)
                  )
                }}
              >
                <span className="block -translate-y-px">pronounce 🗣️</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
