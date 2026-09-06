import { useState } from 'react'
import {
  LANGUAGE_CODES,
  type HydratedCharDeck,
  type HydratedStringDeck,
  type LanguageOptionsType,
} from '../../assets/Flashcards/Flashcards.type'
import { FlashcardsLayout } from './Flashcards.layout'
import { Link } from 'react-router-dom'
import { FlashcardsAlphabets } from './Flashcards.uaChars'

type FlashcardsRunnerProps =
  | {
      variant: 'flashcards'
      lang: LanguageOptionsType
      cards: HydratedStringDeck
    }
  | { variant: 'alphabets'; lang: LanguageOptionsType; cards: HydratedCharDeck }

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

export const FlashcardsRunner = (props: FlashcardsRunnerProps) => {
  const { lang } = props
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const selectedLanguage = lang === 'ALL' ? [...LANGUAGE_CODES] : [lang]

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    console.log('handleResolve fired, currentIndex was', currentIndex)
    setCurrentIndex((i) => i + 1)
    // })
  }

  console.log(
    '[Flashcards.runner] This is how the Alphabet cards look like: ',
    props
  )

  if (currentIndex >= props.cards.cards.length)
    return (
      <div className="align-center flex h-full w-full flex-col justify-center gap-4">
        <h2>No More Cards :)</h2>
        <Link to={'/'}>Go back to HOME</Link>
      </div>
    )

  return (
    <div className="relative flex h-dvh flex-col items-center justify-end pb-10 md:justify-center">
      {props.variant === 'flashcards'
        ? getVisible(props.cards.cards, currentIndex).map(
            ({ card, isFront }) => (
              <FlashcardsLayout
                key={card.id}
                flashcard={card}
                isFront={isFront}
                langCode={selectedLanguage}
                onResolve={isFront ? handleResolve : () => {}}
              />
            )
          )
        : getVisible(props.cards.cards, currentIndex).map(
            ({ card, isFront }) => (
              <FlashcardsAlphabets
                key={card.id}
                flashcard={card}
                isFront={isFront}
                langCode={selectedLanguage}
                onResolve={isFront ? handleResolve : () => {}}
              />
            )
          )}
    </div>
  )
}
