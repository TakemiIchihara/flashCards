// when you want to create a type using the content of an array, define the array first and turn it into a type
export const LANGUAGE_CODES = ['DE', 'CN', 'UA'] as const
export type LanguageCodesType = (typeof LANGUAGE_CODES)[number]

// type WithoutId<T extends WordCardProps | A = Omit<T, 'id'>

export type FlashCardsType<
  T extends StringCardProps | CharCardProps = StringCardProps,
> = {
  name: string
  id: string
  cards: Omit<T, 'id'>[]
}

export type StringCardProps = {
  id: string
  word: string
  translations: {
    DE?: string
    CN?: string
    JP?: string
    UA?: string
  }
  pronunciation: Partial<Record<LanguageCodesType, string>>
  tag: string
  masteryLevel: MasteryLevel
}

export interface CharCardProps {
  id: string
  word: string
  head: string
  tail: {
    romanization: string
    examples: {
      word: string
      romanized: string
      translation: string
    }[]
  }
}

export type StringDeck = FlashCardsType<StringCardProps>
export type CharDeck = FlashCardsType<CharCardProps>

export type HydratedStringDeck = {
  name: string
  id: string
  cards: StringCardProps[]
}
export type HydratedCharDeck = {
  name: string
  id: string
  cards: CharCardProps[]
}

export const LANGUAGE_OPTIONS = [...LANGUAGE_CODES, 'ALL'] as const
export type LanguageOptionsType = (typeof LANGUAGE_OPTIONS)[number]

export const CATEGORIES = {
  Greeting: 'greeting',
  Fruits: 'fruits',
  Animals: 'animals',
  Colors: 'colors',
  Numbers: 'numbers',
  Family: 'family',
} as const // by adding this, typeScript now reads it as readonly Greeting: "greeting", not as Greeting: string for further precision and striction

// type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]
// first typeof: turning the real object into a "blueprint" that TypeScript can reason about.
// first keyof: getting the keyof the type of each column so that when it's called then it can 'despense' its respective type

type MasteryLevel = 1 | 2 | 3 | 4 | 5
