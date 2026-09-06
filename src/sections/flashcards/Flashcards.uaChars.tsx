import type {
  CharCardProps,
  LanguageCodesType,
} from '@/assets/Flashcards/Flashcards.type'
import { useSwipeableCard, type MLChange } from '@/hooks/useSwipeableCard'
import { speak } from '@/utils/speak'
import { useState } from 'react'

type FlashcardLayoutProps = {
  flashcard: CharCardProps
  isFront: boolean
  langCode: LanguageCodesType[]
  onResolve: (change: MLChange) => void
}

export const FlashcardsAlphabets = ({
  flashcard,
  isFront,
  onResolve,
}: FlashcardLayoutProps) => {
  const { containerRef, cardRef, handleFlip } = useSwipeableCard({
    isFront,
    onResolve,
  })
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)

  return (
    <div
      className={`cursor-point absolute h-110 w-80 ${!isFront ? 'pointer-events-none' : ''}`}
      style={{ perspective: 1000 }}
      ref={containerRef}
    >
      <div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        ref={cardRef}
        onClick={handleFlip}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: isFront ? 'white' : 'whitesmoke',
          }}
        >
          <h2 className="text-4xl font-normal text-amber-950">
            {flashcard.head}
          </h2>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-amber-400"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          <h2 className="text-5xl font-extrabold text-amber-950">
            {flashcard.tail.romanization}
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
                  flashcard.head,
                  'UA',
                  () => setIsSpeaking(true),
                  () => setIsSpeaking(false)
                )
              }}
            >
              <span className="block -translate-y-px">pronounce 🗣️</span>
            </button>
          </div>
          <div>
            {flashcard.tail.examples.map((ex) => (
              <div>
                <small>{ex.romanized}</small>
                <p className="text-5xl font-extrabold text-amber-950">
                  {ex.word}
                </p>
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
                        'UA',
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
          {/* {card.translations.map((el) => (<h2 className="text-amber-950">{card.translations[el]}</h2>))} */}
        </div>
      </div>
    </div>
  )
}
