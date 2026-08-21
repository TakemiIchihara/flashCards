import { useState } from 'react'
import { FlashcardsAll } from '../../assets/cardSets/Flashcards.master'
import type {
  FlashcardsLanguageCode,
  FlashCardsType,
} from '../../assets/cardSets/Flashcards.type'
import { FlashcardsLayout } from './Flashcards.layout'

export const FlashcardsRunner = ({
  lang,
}: {
  lang: FlashcardsLanguageCode
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    console.log('handleResolve fired, currentIndex was', currentIndex)
    setCurrentIndex((i) => i + 1)
    // })
  }

  if (currentIndex >= FlashcardsAll.length) return null

  const visible = [
    { card: FlashcardsAll[currentIndex], isFront: true },
    FlashcardsAll[currentIndex + 1] && {
      card: FlashcardsAll[currentIndex + 1],
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
          lang={lang}
          onResolve={isFront ? handleResolve : () => {}}
        />
      ))}
    </div>
  )
}
