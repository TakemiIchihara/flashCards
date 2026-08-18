import { slugify } from '../../utils/slugify'
import { CATEGORIES, type FlashCardsType } from './Flashcards.type'

const flashcards: Omit<FlashCardsType, 'id'>[] = [
  {
    word: 'Apple',
    translations: { DE: 'Apfel', CN: '苹果 (Píngguǒ)', JP: 'りんご' },
    category: CATEGORIES.Fruits,
    masteryLevel: 1,
  },
  {
    word: 'Banana',
    translations: { DE: 'Banane', CN: '香蕉 (Xiāngjiāo)', JP: 'バナナ' },
    category: CATEGORIES.Fruits,
    masteryLevel: 1,
  },
  {
    word: 'Orange',
    translations: { DE: 'Orange', CN: '橙子 (Chéngzi)', JP: 'オレンジ' },
    category: CATEGORIES.Fruits,
    masteryLevel: 1,
  },
  {
    word: 'Strawberry',
    translations: { DE: 'Erdbeere', CN: '草莓 (Cǎoméi)', JP: 'いちご' },
    category: CATEGORIES.Fruits,
    masteryLevel: 1,
  },
  {
    word: 'Grape',
    translations: { DE: 'Traube', CN: '葡萄 (Pútáo)', JP: 'ぶどう' },
    category: CATEGORIES.Fruits,
    masteryLevel: 1,
  },

  {
    word: 'Hello',
    translations: { DE: 'Hallo', CN: '你好 (Nǐ hǎo)', JP: 'こんにちは' },
    category: CATEGORIES.Greeting,
    masteryLevel: 1,
  },
  {
    word: 'Goodbye',
    translations: {
      DE: 'Auf Wiedersehen',
      CN: '再见 (Zàijiàn)',
      JP: 'さようなら',
    },
    category: CATEGORIES.Greeting,
    masteryLevel: 1,
  },
  {
    word: 'Thank you',
    translations: { DE: 'Danke', CN: '谢谢 (Xièxiè)', JP: 'ありがとう' },
    category: CATEGORIES.Greeting,
    masteryLevel: 1,
  },
  {
    word: 'Please',
    translations: { DE: 'Bitte', CN: '请 (Qǐng)', JP: 'お願いします' },
    category: CATEGORIES.Greeting,
    masteryLevel: 1,
  },
  {
    word: 'Good morning',
    translations: {
      DE: 'Guten Morgen',
      CN: '早上好 (Zǎoshang hǎo)',
      JP: 'おはようございます',
    },
    category: CATEGORIES.Greeting,
    masteryLevel: 1,
  },

  {
    word: 'Dog',
    translations: { DE: 'Hund', CN: '狗 (Gǒu)', JP: '犬' },
    category: CATEGORIES.Animals,
    masteryLevel: 1,
  },
  {
    word: 'Cat',
    translations: { DE: 'Katze', CN: '猫 (Māo)', JP: '猫' },
    category: CATEGORIES.Animals,
    masteryLevel: 1,
  },
  {
    word: 'Bird',
    translations: { DE: 'Vogel', CN: '鸟 (Niǎo)', JP: '鳥' },
    category: CATEGORIES.Animals,
    masteryLevel: 1,
  },
  {
    word: 'Fish',
    translations: { DE: 'Fisch', CN: '鱼 (Yú)', JP: '魚' },
    category: CATEGORIES.Animals,
    masteryLevel: 1,
  },
  {
    word: 'Horse',
    translations: { DE: 'Pferd', CN: '马 (Mǎ)', JP: '馬' },
    category: CATEGORIES.Animals,
    masteryLevel: 1,
  },

  {
    word: 'Red',
    translations: { DE: 'Rot', CN: '红色 (Hóngsè)', JP: '赤' },
    category: CATEGORIES.Colors,
    masteryLevel: 1,
  },
  {
    word: 'Blue',
    translations: { DE: 'Blau', CN: '蓝色 (Lánsè)', JP: '青' },
    category: CATEGORIES.Colors,
    masteryLevel: 1,
  },
  {
    word: 'Green',
    translations: { DE: 'Grün', CN: '绿色 (Lǜsè)', JP: '緑' },
    category: CATEGORIES.Colors,
    masteryLevel: 1,
  },
  {
    word: 'Yellow',
    translations: { DE: 'Gelb', CN: '黄色 (Huángsè)', JP: '黄色' },
    category: CATEGORIES.Colors,
    masteryLevel: 1,
  },
  {
    word: 'Black',
    translations: { DE: 'Schwarz', CN: '黑色 (Hēisè)', JP: '黒' },
    category: CATEGORIES.Colors,
    masteryLevel: 1,
  },

  {
    word: 'One',
    translations: { DE: 'Eins', CN: '一 (Yī)', JP: '一 (いち)' },
    category: CATEGORIES.Numbers,
    masteryLevel: 1,
  },
  {
    word: 'Two',
    translations: { DE: 'Zwei', CN: '二 (Èr)', JP: '二 (に)' },
    category: CATEGORIES.Numbers,
    masteryLevel: 1,
  },
  {
    word: 'Three',
    translations: { DE: 'Drei', CN: '三 (Sān)', JP: '三 (さん)' },
    category: CATEGORIES.Numbers,
    masteryLevel: 1,
  },
  {
    word: 'Four',
    translations: { DE: 'Vier', CN: '四 (Sì)', JP: '四 (よん)' },
    category: CATEGORIES.Numbers,
    masteryLevel: 1,
  },
  {
    word: 'Five',
    translations: { DE: 'Fünf', CN: '五 (Wǔ)', JP: '五 (ご)' },
    category: CATEGORIES.Numbers,
    masteryLevel: 1,
  },

  {
    word: 'Mother',
    translations: { DE: 'Mutter', CN: '妈妈 (Māma)', JP: 'お母さん' },
    category: CATEGORIES.Family,
    masteryLevel: 1,
  },
  {
    word: 'Father',
    translations: { DE: 'Vater', CN: '爸爸 (Bàba)', JP: 'お父さん' },
    category: CATEGORIES.Family,
    masteryLevel: 1,
  },
  {
    word: 'Sister',
    translations: { DE: 'Schwester', CN: '姐妹 (Jiěmèi)', JP: '姉妹' },
    category: CATEGORIES.Family,
    masteryLevel: 1,
  },
  {
    word: 'Brother',
    translations: { DE: 'Bruder', CN: '兄弟 (Xiōngdì)', JP: '兄弟' },
    category: CATEGORIES.Family,
    masteryLevel: 1,
  },
  {
    word: 'Friend',
    translations: { DE: 'Freund', CN: '朋友 (Péngyǒu)', JP: '友達' },
    category: CATEGORIES.Family,
    masteryLevel: 1,
  },
]

export const FlashcardsAll: FlashCardsType[] = flashcards.map((card, i) => ({
  ...card,
  id: slugify(card.word) + i,
}))
