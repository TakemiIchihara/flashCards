import { useState } from 'react'
import { FlashcardsAll } from '../../assets/cardSets/Flashcards.master'
import type { TranslationsType } from '../../assets/cardSets/Flashcards.type'
import { FlashcardsLayout } from './Flashcards.layout'

export const FlashcardsRunner = ({
  lang,
}: {
  lang: keyof TranslationsType
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  const handleResolve = () => {
    // const card = FlashcardsAll[currentIndex]
    // TODO: update card.masteryLevel based on `change`
    setCurrentIndex((i) => i + 1)
  }

  if (currentIndex >= FlashcardsAll.length) return

  return (
    <div className="flex h-dvh flex-col items-center justify-center">
      <FlashcardsLayout
        key={FlashcardsAll[currentIndex].id}
        flashcard={FlashcardsAll[currentIndex]}
        lang={lang}
        onResolve={handleResolve}
      />
    </div>
  )
}
