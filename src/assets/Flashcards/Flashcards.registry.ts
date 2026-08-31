import { slugify } from '@/utils/slugify'
import * as CardSets from './cardsets/index'

export const FLASHCARDS = { ...CardSets } as const

export type CategoryType = keyof typeof FLASHCARDS

export const matchCategory = (selectedCategory: CategoryType) => {
  return FLASHCARDS[selectedCategory].map((card, i) => ({
    ...card,
    id: slugify(card.word + i),
  }))
}
