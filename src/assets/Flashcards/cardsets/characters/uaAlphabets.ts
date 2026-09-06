import { slugify } from '@/utils/slugify'
import type { CharDeck, HydratedCharDeck } from '../../Flashcards.type'

const uaAlphabetCardSets: CharDeck = {
  name: 'Alphabets',
  id: 'uaAlphabets',
  cards: [
    {
      word: 'А',
      head: 'А а',
      tail: {
        romanization: 'a',
        examples: [
          { word: 'апельсин', romanized: 'apelsyn', translation: 'orange' },
          { word: 'мама', romanized: 'mama', translation: 'mom' },
        ],
      },
    },
    {
      word: 'Б',
      head: 'Б б',
      tail: {
        romanization: 'b',
        examples: [
          { word: 'банан', romanized: 'banan', translation: 'banana' },
          { word: 'брат', romanized: 'brat', translation: 'brother' },
        ],
      },
    },
    {
      word: 'В',
      head: 'В в',
      tail: {
        romanization: 'v',
        examples: [
          { word: 'вода', romanized: 'voda', translation: 'water' },
          { word: 'весна', romanized: 'vesna', translation: 'spring' },
        ],
      },
    },
    {
      word: 'Г',
      head: 'Г г',
      tail: {
        romanization: 'h',
        examples: [
          { word: 'гора', romanized: 'hora', translation: 'mountain' },
          { word: 'голова', romanized: 'holova', translation: 'head' },
        ],
      },
    },
    {
      word: 'Ґ',
      head: 'Ґ ґ',
      tail: {
        romanization: 'g',
        examples: [
          { word: 'ґудзик', romanized: 'gudzyk', translation: 'button' },
          { word: 'аґрус', romanized: 'agrus', translation: 'gooseberry' },
        ],
      },
    },
    {
      word: 'Д',
      head: 'Д д',
      tail: {
        romanization: 'd',
        examples: [
          { word: 'дім', romanized: 'dim', translation: 'house' },
          { word: 'день', romanized: 'den', translation: 'day' },
        ],
      },
    },
    {
      word: 'Е',
      head: 'Е е',
      tail: {
        romanization: 'e',
        examples: [
          { word: 'екран', romanized: 'ekran', translation: 'screen' },
          {
            word: 'електрика',
            romanized: 'elektryka',
            translation: 'electricity',
          },
        ],
      },
    },
    {
      word: 'Є',
      head: 'Є є',
      tail: {
        romanization: 'ye',
        examples: [
          { word: 'єдиний', romanized: 'yedynyi', translation: 'united' },
          { word: 'Європа', romanized: 'Yevropa', translation: 'Europe' },
        ],
      },
    },
    {
      word: 'Ж',
      head: 'Ж ж',
      tail: {
        romanization: 'zh',
        examples: [
          { word: 'жовтий', romanized: 'zhovtyi', translation: 'yellow' },
          { word: 'життя', romanized: 'zhyttia', translation: 'life' },
        ],
      },
    },
    {
      word: 'З',
      head: 'З з',
      tail: {
        romanization: 'z',
        examples: [
          { word: 'зима', romanized: 'zyma', translation: 'winter' },
          { word: 'зуб', romanized: 'zub', translation: 'tooth' },
        ],
      },
    },
    {
      word: 'И',
      head: 'И и',
      tail: {
        romanization: 'y',
        examples: [
          { word: 'риба', romanized: 'ryba', translation: 'fish' },
          { word: 'син', romanized: 'syn', translation: 'son' },
        ],
      },
    },
    {
      word: 'І',
      head: 'І і',
      tail: {
        romanization: 'i',
        examples: [
          { word: "ім'я", romanized: "im'ya", translation: 'name' },
          { word: 'історія', romanized: 'istoriya', translation: 'history' },
        ],
      },
    },
    {
      word: 'Ї',
      head: 'Ї ї',
      tail: {
        romanization: 'yi',
        examples: [
          { word: 'їжак', romanized: 'yizhak', translation: 'hedgehog' },
          { word: 'Україна', romanized: 'Ukrayina', translation: 'Ukraine' },
        ],
      },
    },
    {
      word: 'Й',
      head: 'Й й',
      tail: {
        romanization: 'y',
        examples: [
          { word: 'йогурт', romanized: 'yohurt', translation: 'yogurt' },
          { word: 'трамвай', romanized: 'tramvai', translation: 'tram' },
        ],
      },
    },
    {
      word: 'К',
      head: 'К к',
      tail: {
        romanization: 'k',
        examples: [
          { word: 'кіт', romanized: 'kit', translation: 'cat' },
          { word: 'книга', romanized: 'knyha', translation: 'book' },
        ],
      },
    },
    {
      word: 'Л',
      head: 'Л л',
      tail: {
        romanization: 'l',
        examples: [
          { word: 'ліс', romanized: 'lis', translation: 'forest' },
          { word: 'молоко', romanized: 'moloko', translation: 'milk' },
        ],
      },
    },
    {
      word: 'М',
      head: 'М м',
      tail: {
        romanization: 'm',
        examples: [
          { word: 'море', romanized: 'more', translation: 'sea' },
          { word: 'місяць', romanized: 'misyats', translation: 'moon' },
        ],
      },
    },
    {
      word: 'Н',
      head: 'Н н',
      tail: {
        romanization: 'n',
        examples: [
          { word: 'ніч', romanized: 'nich', translation: 'night' },
          { word: 'небо', romanized: 'nebo', translation: 'sky' },
        ],
      },
    },
    {
      word: 'О',
      head: 'О о',
      tail: {
        romanization: 'o',
        examples: [
          { word: 'око', romanized: 'oko', translation: 'eye' },
          { word: 'озеро', romanized: 'ozero', translation: 'lake' },
        ],
      },
    },
    {
      word: 'П',
      head: 'П п',
      tail: {
        romanization: 'p',
        examples: [
          { word: 'птах', romanized: 'ptakh', translation: 'bird' },
          { word: 'поле', romanized: 'pole', translation: 'field' },
        ],
      },
    },
    {
      word: 'Р',
      head: 'Р р',
      tail: {
        romanization: 'r',
        examples: [
          { word: 'робота', romanized: 'robota', translation: 'work' },
          { word: 'рука', romanized: 'ruka', translation: 'hand' },
        ],
      },
    },
    {
      word: 'С',
      head: 'С с',
      tail: {
        romanization: 's',
        examples: [
          { word: 'сонце', romanized: 'sontse', translation: 'sun' },
          { word: 'серце', romanized: 'sertse', translation: 'heart' },
        ],
      },
    },
    {
      word: 'Т',
      head: 'Т т',
      tail: {
        romanization: 't',
        examples: [
          { word: 'трава', romanized: 'trava', translation: 'grass' },
          { word: 'телефон', romanized: 'telefon', translation: 'telephone' },
        ],
      },
    },
    {
      word: 'У',
      head: 'У у',
      tail: {
        romanization: 'u',
        examples: [
          { word: 'учень', romanized: 'uchen', translation: 'student' },
          { word: 'вулиця', romanized: 'vulytsya', translation: 'street' },
        ],
      },
    },
    {
      word: 'Ф',
      head: 'Ф ф',
      tail: {
        romanization: 'f',
        examples: [
          { word: 'фрукт', romanized: 'frukt', translation: 'fruit' },
          { word: 'фото', romanized: 'foto', translation: 'photo' },
        ],
      },
    },
    {
      word: 'Х',
      head: 'Х х',
      tail: {
        romanization: 'kh',
        examples: [
          { word: 'хліб', romanized: 'khlib', translation: 'bread' },
          { word: 'холод', romanized: 'kholod', translation: 'cold' },
        ],
      },
    },
    {
      word: 'Ц',
      head: 'Ц ц',
      tail: {
        romanization: 'ts',
        examples: [
          { word: 'цукор', romanized: 'tsukor', translation: 'sugar' },
          { word: 'цвях', romanized: 'tsvyakh', translation: 'nail' },
        ],
      },
    },
    {
      word: 'Ч',
      head: 'Ч ч',
      tail: {
        romanization: 'ch',
        examples: [
          { word: 'час', romanized: 'chas', translation: 'time' },
          { word: 'чай', romanized: 'chai', translation: 'tea' },
        ],
      },
    },
    {
      word: 'Ш',
      head: 'Ш ш',
      tail: {
        romanization: 'sh',
        examples: [
          { word: 'школа', romanized: 'shkola', translation: 'school' },
          { word: 'шапка', romanized: 'shapka', translation: 'hat' },
        ],
      },
    },
    {
      word: 'Щ',
      head: 'Щ щ',
      tail: {
        romanization: 'shch',
        examples: [
          { word: 'щастя', romanized: 'shchastya', translation: 'happiness' },
          { word: 'борщ', romanized: 'borshch', translation: 'borscht' },
        ],
      },
    },
    {
      word: 'Ь',
      head: 'Ь ь',
      tail: {
        romanization: "'",
        examples: [
          { word: 'кінь', romanized: "kin'", translation: 'horse' },
          { word: 'день', romanized: "den'", translation: 'day' },
        ],
      },
    },
    {
      word: 'Ю',
      head: 'Ю ю',
      tail: {
        romanization: 'yu',
        examples: [
          { word: 'юнак', romanized: 'yunak', translation: 'young man' },
          { word: 'костюм', romanized: 'kostyum', translation: 'suit' },
        ],
      },
    },
    {
      word: 'Я',
      head: 'Я я',
      tail: {
        romanization: 'ya',
        examples: [
          { word: 'яблуко', romanized: 'yabluko', translation: 'apple' },
          { word: 'я', romanized: 'ya', translation: 'I' },
        ],
      },
    },
  ],
}

export const uaAlphabets: HydratedCharDeck = {
  ...uaAlphabetCardSets,
  cards: uaAlphabetCardSets.cards.map((card, i) => ({
    ...card,
    id: slugify(card.tail.romanization + i),
  })),
}
