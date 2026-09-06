import { useSwipeableCard, type MLChange } from '@/hooks/useSwipeableCard'
import type {
  LanguageCodesType,
  StringCardProps,
} from '../../assets/Flashcards/Flashcards.type'
import { speak } from '@/utils/speak'
import { useState } from 'react'

export type FlashcardLayoutProps = {
  flashcard: StringCardProps
  isFront: boolean
  langCode: LanguageCodesType[]
  onResolve: (change: MLChange) => void
}

export const FlashcardsLayout = ({
  flashcard,
  isFront,
  langCode,
  onResolve,
}: FlashcardLayoutProps) => {
  const { containerRef, cardRef, handleFlip } = useSwipeableCard({
    isFront,
    onResolve,
  })
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false)

  return (
    <div
      className={`cursor-point absolute aspect-2/3 h-auto w-[90%] max-w-100 ${!isFront ? 'pointer-events-none' : ''}`}
      style={{ perspective: 1000 }}
      ref={containerRef}
    >
      <div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        ref={cardRef}
        onClick={handleFlip}
      >
        {/* head */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl"
          style={{
            backfaceVisibility: 'hidden',
            backgroundColor: isFront ? 'white' : 'whitesmoke',
          }}
        >
          <h2 className="text-4xl font-normal text-amber-950">
            {flashcard.word}
          </h2>
        </div>

        {/* tail */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-8 rounded-xl bg-amber-400"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {langCode.map((code) => (
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex w-full flex-col items-center px-2 text-center wrap-break-word">
                {code in flashcard.pronunciation && (
                  <small className="leading-[90%] text-yellow-900">
                    {flashcard.pronunciation?.[code]}
                  </small>
                )}
                <h2 className="w-full text-5xl font-extrabold text-amber-950">
                  {flashcard.translations[code]}
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
                      flashcard.translations[code],
                      code,
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
          {/* {card.translations.map((el) => (<h2 className="text-amber-950">{card.translations[el]}</h2>))} */}
        </div>
      </div>
    </div>
  )
}
