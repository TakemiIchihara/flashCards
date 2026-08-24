// import { slugify } from '../../utils/slugify'
// import { type FlashCardsType } from './Flashcards.type'

// const flashcards: Omit<FlashCardsType, 'id'>[] = [
//   {
//     word: 'Apple',
//     translations: { DE: 'Apfel', CN: '苹果', JP: 'りんご' },
//     pinyin: 'Píngguǒ',
//     masteryLevel: 1,
//   },
//   {
//     word: 'Banana',
//     translations: { DE: 'Banane', CN: '香蕉', JP: 'バナナ' },
//     pinyin: 'Xiāngjiāo',
//     masteryLevel: 1,
//   },
//   {
//     word: 'Orange',
//     translations: { DE: 'Orange', CN: '橙子', JP: 'オレンジ' },
//     pinyin: 'Chéngzi',
//     masteryLevel: 1,
//   },
//   {
//     word: 'Strawberry',
//     translations: { DE: 'Erdbeere', CN: '草莓', JP: 'いちご' },
//     pinyin: 'Cǎoméi',
//     masteryLevel: 1,
//   },
//   {
//     word: 'Grape',
//     translations: { DE: 'Traube', CN: '葡萄', JP: 'ぶどう' },
//     pinyin: 'Pútáo',
//     masteryLevel: 1,
//   },
// ]

// export const FlashcardsAll: FlashCardsType[] = flashcards.map((card, i) => ({
//   ...card,
//   id: slugify(card.word) + i,
// }))
