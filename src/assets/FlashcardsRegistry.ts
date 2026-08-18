import { FlashcardsAll } from './cardSets/Flashcards.master'
import type { FlashCardsType } from './cardSets/Flashcards.type'

export type LanguageCode = 'EN' | 'JP' | 'DE' | 'CN'

export type RegistoryType = {
  id: LanguageCode
  flashcards: FlashCardsType[]
}

export const flashcardsRegistory = [
  { id: 'DE', flashcards: FlashcardsAll },
  { id: 'CN', flashcards: FlashcardsAll },
]
