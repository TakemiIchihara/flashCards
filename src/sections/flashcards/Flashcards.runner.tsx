import { useState } from 'react'
import {
  LANGUAGE_CODES,
  type FlashCardsType,
  type LanguageOptionsType,
} from '../../assets/Flashcards/Flashcards.type'
import { FlashcardsLayout } from './Flashcards.layout'
import { Link } from 'react-router-dom'

export const FlashcardsRunner = ({
  lang,
  cards,
}: {
  lang: LanguageOptionsType
  cards: FlashCardsType[]
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const selectedLanguage = lang === 'ALL' ? [...LANGUAGE_CODES] : [lang]

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    console.log('handleResolve fired, currentIndex was', currentIndex)
    setCurrentIndex((i) => i + 1)
    // })
  }

  if (currentIndex >= cards.length)
    return (
      <div className="align-center flex h-full w-full flex-col justify-center gap-4">
        <h2>No More Cards :)</h2>
        <Link to={'/'}>Go back to HOME</Link>
      </div>
    )

  const visible = [
    { card: cards[currentIndex], isFront: true },
    cards[currentIndex + 1] && {
      card: cards[currentIndex + 1],
      isFront: false,
    },
  ].filter(Boolean) as { card: FlashCardsType; isFront: boolean }[]

  return (
    <div className="relative flex h-dvh flex-col items-center justify-center">
      {visible.map(({ card, isFront }) => (
        <FlashcardsLayout
          key={card.id}
          flashcard={card}
          isFront={isFront}
          langCode={selectedLanguage}
          onResolve={isFront ? handleResolve : () => {}}
        />
      ))}
    </div>
  )
}
