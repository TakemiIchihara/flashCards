// when you want to create a type using the content of an array, define the array first and turn it into a type
export const LANGUAGE_CODES = ['DE', 'CN', 'IT', 'UA', 'KR', 'JP'] as const
export type LanguageCodesType = (typeof LANGUAGE_CODES)[number]

export const LANGUAGE_OPTIONS = ['DE', 'CN', 'IT', 'UA', 'KR', 'ALL'] as const
export type LanguageOptionsType = (typeof LANGUAGE_OPTIONS)[number]

export const CATEGORIES = {
  Greeting: 'greeting',
  Fruits: 'fruits',
  Animals: 'animals',
  Colors: 'colors',
  Numbers: 'numbers',
  Family: 'family',
} as const // by adding this, typeScript now reads it as readonly Greeting: "greeting", not as Greeting: string for further precision and striction

type MasteryLevel = 1 | 2 | 3 | 4 | 5

/* ----------  the constryctor  ---------- */
type CardBase<TTail> = {
  id: string
  word: string
  head: string
  tail: TTail
  // options?: TOptions
  masteryLevel?: MasteryLevel
}
// TOptions = { tag: string }

/* ----------  tails ----------*/
type usedNewWordsProps = {
  word: string
  meaning: string
}

export type PhraseTail = {
  translations: Partial<Record<LanguageCodesType, string>>
  pronunciations: Partial<Record<LanguageCodesType, string>>
  usedNewWords: {
    word: string
    meaning: usedNewWordsProps[]
  }[]
}

export type WordTail = {
  translations: Partial<Record<LanguageCodesType, string>>
  pronunciations: Partial<Record<LanguageCodesType, string>>
  examples: Partial<Record<LanguageCodesType, WordExample[]>>
}
export type WordExample = {
  exPhrase: string
  romanized?: string
  translation: string
  usedNewWords: usedNewWordsProps[]
}

export type CharTail = {
  romanization: string
  examples: {
    word: string
    romanized: string
    translation: string
  }[]
}

type TailMap = {
  phrase: PhraseTail
  word: WordTail
  char: CharTail
}

export type CardKinds = keyof TailMap

export type CardOf<K extends CardKinds> = CardBase<TailMap[K]>

// type WithoutId<T extends WordCardProps | A = Omit<T, 'id'>
export type FlashcardsType<K extends CardKinds = 'word'> = {
  name: string
  id: string
  kind: CardKinds
  cards: Omit<CardOf<K>, 'id' | 'kind'>[]
}

// export type PhraseDeck = FlashcardsType<'phrase'>
// export type WordDeck = FlashcardsType<'word'>
// export type CharDeck = FlashcardsType<'char'>

export type HydratedFlashcardsType<K extends CardKinds = 'word'> = {
  name: string
  id: string
  cards: CardOf<K>[]
}

// type Category = (typeof CATEGORIES)[keyof typeof CATEGORIES]
// first typeof: turning the real object into a "blueprint" that TypeScript can reason about.
// first keyof: getting the keyof the type of each column so that when it's called then it can 'despense' its respective type
