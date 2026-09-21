import { useSwipeableCard, type MLChange } from '@/hooks/useSwipeableCard'
import type {
  LanguageCodesType,
  CardOf,
  CardKinds,
} from '../../assets/Flashcards/Flashcards.type'
import { TailLayoutChar } from './tailLayout/TailLayout.Char'
import { TailLayoutPhrase } from './tailLayout/TailLayout.Phrase'
import { TailLayoutWord } from './tailLayout/TailLayout.word'

// discriminated union
export type FlashcardsLayoutProps = {
  [K in CardKinds]: {
    flashcardKind: K
    flashcard: CardOf<K>
    isFront: boolean
    selectedLanguageCode: LanguageCodesType[]
    onResolve: (change: MLChange) => void
  }
}[CardKinds]

export const FlashcardsLayout = (props: FlashcardsLayoutProps) => {
  const { isFront, selectedLanguageCode, onResolve, flashcardKind } = props
  const { containerRef, cardRef, tailRef, handleFlip } = useSwipeableCard({
    isFront,
    onResolve,
    flashcardKind,
  })

  const renderTail = () =>
    selectedLanguageCode.map((code) => {
      switch (props.flashcardKind) {
        case 'word':
          return (
            <TailLayoutWord
              content={props.flashcard.tail}
              lang={code}
              ref={tailRef}
            />
          )
        case 'char':
          return (
            <TailLayoutChar
              char={props.flashcard.head}
              content={props.flashcard.tail}
              lang={code}
              // ref={tailRef}
            />
          )
        case 'phrase':
          return <TailLayoutPhrase content={props.flashcard.tail} lang={code} />
      }
    })

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
            {props.flashcard.word}
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
          {renderTail()}
          {/* {card.translations.map((el) => (<h2 className="text-amber-950">{card.translations[el]}</h2>))} */}
        </div>
      </div>
    </div>
  )
}
