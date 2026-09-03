import { useSwipeableCard, type MLChange } from '@/hooks/useSwipeableCard'
import type {
  LanguageCodesType,
  FlashCardsType,
} from '../../assets/Flashcards/Flashcards.type'
import { speak } from '@/utils/speak'

export type FlashcardLayoutProps = {
  flashcard: FlashCardsType
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
            {flashcard.word}
          </h2>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-amber-400"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {langCode.map((code) => (
            <>
              {code in flashcard.pronunciation && (
                <small className="text-yellow-900">
                  {flashcard.pronunciation?.[code]}
                </small>
              )}
              <h2 className="text-4xl font-extrabold text-amber-950">
                {flashcard.translations[code]}
              </h2>
              <div>
                <button
                  className="flex cursor-pointer flex-col items-center justify-center rounded-4xl border border-solid border-violet-400 px-4 py-2"
                  onClick={(e) => {
                    e.stopPropagation()
                    speak(flashcard.translations[code], code)
                  }}
                >
                  <span className="block -translate-y-px">pronounce 🗣️</span>
                </button>
              </div>
            </>
          ))}
          {/* {card.translations.map((el) => (<h2 className="text-amber-950">{card.translations[el]}</h2>))} */}
        </div>
      </div>
    </div>
  )
}
