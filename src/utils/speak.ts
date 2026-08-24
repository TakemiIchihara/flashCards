import type { FlashcardsLanguageCode } from '@/assets/cardSets/Flashcards.type'

// const speechLanguageCode = ['de-DE', 'zh-CN'] as const

// const SPEECH_LANGUAGE_REGISTRY = {
//   DE: 'de-DE',
//   CN: 'zh-CN',
// } satisfies Partial<
//   Record<FlashcardsLanguageCode, (typeof speechLanguageCode)[number]>
// >

export const speak = (
  word: string | undefined,
  speechLang: FlashcardsLanguageCode
) => {
  if (!word) return
  const speechLanguage = {
    DE: ['de-DE'],
    CN: ['zh-CN'],
  }[speechLang]
  // satisfies Partial<
  //   Record<FlashcardsLanguageCode, (typeof speechLanguageCode)[number][]>>

  const utterance = new SpeechSynthesisUtterance(word)
  utterance.lang = speechLanguage[0]
  utterance.rate = 0.8

  window.speechSynthesis.cancel()
  window.speechSynthesis.speak(utterance)
}
