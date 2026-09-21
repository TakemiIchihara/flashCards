import { useState } from 'react'
import {
  LANGUAGE_CODES,
  type CardKinds,
  type HydratedFlashcardsType,
  type LanguageOptionsType,
} from '../../assets/Flashcards/Flashcards.type'
import {
  FlashcardsLayout,
  type FlashcardsLayoutProps,
} from './Flashcards.layout'
import { Link } from 'react-router-dom'

type FlashcardsRunnerProps<K extends CardKinds = CardKinds> = {
  kind: K
  lang: LanguageOptionsType
  cards: HydratedFlashcardsType<K>
}

function getVisible<T extends { id: string }>(
  cards: T[],
  currentIndex: number
) {
  return [
    { card: cards[currentIndex], isFront: true },
    cards[currentIndex + 1] && {
      card: cards[currentIndex + 1],
      isFront: false,
    },
  ].filter(Boolean) as { card: T; isFront: boolean }[]
}

export const FlashcardsRunner = <K extends CardKinds>(
  props: FlashcardsRunnerProps<K>
) => {
  const { kind, lang } = props
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const selectedLanguage = lang === 'ALL' ? [...LANGUAGE_CODES] : [lang]

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    console.log('handleResolve fired, currentIndex was', currentIndex)
    setCurrentIndex((i) => i + 1)
    // })
  }

  if (currentIndex >= props.cards.cards.length)
    return (
      <div className="align-center flex h-full w-full flex-col justify-center gap-4">
        <h2>No More Cards :)</h2>
        <Link to={'/'}>Go back to HOME</Link>
      </div>
    )

  console.log('this is the card set: ', props.cards)

  return (
    <div className="relative flex h-dvh flex-col items-center justify-end pb-10 md:justify-center">
      {getVisible(props.cards.cards, currentIndex).map(({ card, isFront }) => {
        // safe: `card` comes from HydratedFlashcardsType<K>, so kind and tail are
        // correlated at runtime; TS can't verify that correlation across a generic K.
        const layoutProps = {
          flashcardKind: kind,
          flashcard: card,
          isFront: isFront,
          selectedLanguageCode: selectedLanguage,
          onResolve: isFront ? handleResolve : () => {},
        } as FlashcardsLayoutProps

        return (
          <FlashcardsLayout
            key={card.id}
            {...layoutProps}
            isFront={isFront}
            selectedLanguageCode={selectedLanguage}
            onResolve={isFront ? handleResolve : () => {}}
          />
        )
      })}
    </div>
  )
}
