import { humanRelation } from './Flashcards.humanRelation'
import { fruits } from './Flashcards.Fruits'
import { slugify } from '@/utils/slugify'

export const FLASHCARDS = { humanRelation, fruits } as const

export type CategoryType = keyof typeof FLASHCARDS

export const matchCategory = (selectedCategory: CategoryType) => {
  return FLASHCARDS[selectedCategory].map((card, i) => ({
    ...card,
    id: slugify(card.word + i),
  }))
}
