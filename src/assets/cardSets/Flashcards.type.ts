type FlashcardsLanguageCode = 'DE' | 'CN'

export const LANGUAGE_CODE: FlashcardsLanguageCode[] = ['CN', 'DE']

type LanguageList = {
  id: keyof TranslationsType
  label: string
}

export const LANGUAGE_LIST: LanguageList[] = [
  {
    id: 'DE',
    label: 'German',
  },
  {
    id: 'CN',
    label: 'Chinese',
  },
]

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
