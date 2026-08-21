// when you want to create a type using the content of an array, define the array first and turn it into a type
export const LANGUAGE_CODE = ['DE', 'CN', 'ALL'] as const
export type FlashcardsLanguageCode = (typeof LANGUAGE_CODE)[number]

export type FlashCardsType = {
  word: string
  translations: TranslationsType
  category: Category
  masteryLevel: MasteryLevel
  id: string
}

export type TranslationsType = {
  DE?: string
  CN?: string
  JP?: string
  ALL?: string
}

export const CATEGORIES = {
  Greeting: 'greeting',
  Fruits: 'fruits',
  Animals: 'animals',
  Colors: 'colors',
  Numbers: 'numbers',
  Family: 'family',
} as const // by adding this, typeScript now reads it as readonly Greeting: "greeting", not as Greeting: string for further precision and striction

type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]
// first typeof: turning the real object into a "blueprint" that TypeScript can reason about.
// first keyof: getting the keyof the type of each column so that when it's called then it can 'despense' its respective type

type MasteryLevel = 1 | 2 | 3 | 4 | 5
