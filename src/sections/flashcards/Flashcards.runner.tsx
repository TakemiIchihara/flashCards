import { useState } from 'react'
import { cardsHumanRelation } from '@/assets/cardSets/Flashcards.humanRelation'
import {
  LANGUAGE_CODE,
  type FlashCardsType,
  type LanguageOptionsType,
} from '../../assets/cardSets/Flashcards.type'
import { FlashcardsLayout } from './Flashcards.layout'

export const FlashcardsRunner = ({
  lang,
  cards,
}: {
  lang: LanguageOptionsType
  cards: FlashCardsType[]
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const selectedLanguage = lang === 'ALL' ? [...LANGUAGE_CODE] : [lang]

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    console.log('handleResolve fired, currentIndex was', currentIndex)
    setCurrentIndex((i) => i + 1)
    // })
  }

  if (currentIndex >= cardsHumanRelation.length) return null

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
