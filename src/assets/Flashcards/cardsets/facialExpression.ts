import type { FlashCardsType } from '../Flashcards.type'

export const facialExpression: Omit<FlashCardsType, 'id'>[] = [
  {
    word: 'Breathe',
    translations: {
      DE: 'atmen',
      CN: '呼吸',
      JP: '呼吸する',
      UA: 'дихати',
    },
    pronunciation: {
      CN: 'hūxī',
      UA: 'dykháty',
    },
    tag: '',
    masteryLevel: 1,
  },
  {
    word: 'Nod',
    translations: {
      DE: 'nicken',
      CN: '点头',
      JP: 'うなずく',
      UA: 'кивати',
    },
    pronunciation: {
      CN: 'diǎntóu',
      UA: 'kývaty',
    },
    tag: '',
    masteryLevel: 1,
  },
  {
    word: 'Smile',
    translations: {
      DE: 'lächeln',
      CN: '微笑',
      JP: '笑う',
      UA: 'посміхатися',
    },
    pronunciation: {
      CN: 'wēixiào',
      UA: 'posmikhátysya',
    },
    tag: '',
    masteryLevel: 1,
  },
]
