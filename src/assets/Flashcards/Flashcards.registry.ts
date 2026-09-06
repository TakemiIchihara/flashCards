import { slugify } from '@/utils/slugify'
import * as CardSets from './cardsets/index'
import type { HydratedStringDeck } from './Flashcards.type'

export const FLASHCARDS = { ...CardSets } as const

export type CategoryType = keyof typeof FLASHCARDS

export const matchCategory = (
  selectedCategory: CategoryType
): HydratedStringDeck => {
  return {
    ...FLASHCARDS[selectedCategory],
    cards: FLASHCARDS[selectedCategory].cards.map((card, i) => ({
      ...card,
      id: slugify(card.word + i),
    })),
  }
}
