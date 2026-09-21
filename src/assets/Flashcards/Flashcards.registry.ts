import { slugify } from '@/utils/slugify'
import * as CardSets from './cardsets/index'
import type { HydratedFlashcardsType } from './Flashcards.type'

export const FLASHCARDS = { ...CardSets } as const

export type CategoryType = keyof typeof FLASHCARDS

export const matchCategory = (
  selectedCategory: CategoryType
): HydratedFlashcardsType<'word'> => {
  const cardSet = FLASHCARDS[selectedCategory]

  return {
    ...FLASHCARDS[selectedCategory],
    cards: cardSet.cards.map((card, i) => ({
      id: slugify(card.head) + i,
      ...card,
    })),
  }
}
