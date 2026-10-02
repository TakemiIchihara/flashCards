import type { FlashcardsType } from '@/assets/Flashcards/Flashcards.type'

export const humanAction: FlashcardsType<'word'> = {
  name: 'human action',
  id: 'humanaction',
  kind: 'word',
  cards: [
    {
      word: 'Go',
      head: 'Go',
      tail: {
        translations: {
          DE: 'gehen',
          CN: '去',
          IT: 'andare',
          UA: 'йти',
          KR: '가다',
          JP: '行く',
        },
        pronunciations: { CN: 'qù', UA: 'yty', KR: 'gada', JP: 'iku' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich gehe jeden Tag zur Schule.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: 'Ich', meaning: 'I' },
                { word: 'jeden', meaning: 'every' },
                { word: 'Tag', meaning: 'day' },
                { word: 'zur', meaning: 'to the' },
                { word: 'Schule', meaning: 'school' },
              ],
            },
            {
              exPhrase: 'Sie geht am Morgen zur Arbeit.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: 'Sie', meaning: 'she' },
                { word: 'am', meaning: 'in the / at' },
                { word: 'Morgen', meaning: 'morning' },
                { word: 'Arbeit', meaning: 'work' },
              ],
            },
            {
              exPhrase: 'Lass uns jetzt nach Hause gehen.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: 'lass uns', meaning: "let's" },
                { word: 'jetzt', meaning: 'now' },
                { word: 'nach Hause', meaning: 'home (direction)' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我每天去学校。',
              romanized: 'Wǒ měitiān qù xuéxiào.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: '我', meaning: 'I' },
                { word: '每天', meaning: 'every day' },
                { word: '学校', meaning: 'school' },
              ],
            },
            {
              exPhrase: '她早上去上班。',
              romanized: 'Tā zǎoshang qù shàngbān.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: '她', meaning: 'she' },
                { word: '早上', meaning: 'morning' },
                { word: '上班', meaning: 'go to work' },
              ],
            },
            {
              exPhrase: '我们现在回家吧。',
              romanized: 'Wǒmen xiànzài huí jiā ba.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: '我们', meaning: 'we' },
                { word: '现在', meaning: 'now' },
                { word: '回家', meaning: 'go home' },
                { word: '吧', meaning: '(suggestion particle)' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Vado a scuola ogni giorno.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: 'a', meaning: 'to' },
                { word: 'scuola', meaning: 'school' },
                { word: 'ogni', meaning: 'every' },
                { word: 'giorno', meaning: 'day' },
              ],
            },
            {
              exPhrase: 'Lei va al lavoro la mattina.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: 'Lei', meaning: 'she' },
                { word: 'al', meaning: 'to the' },
                { word: 'lavoro', meaning: 'work' },
                { word: 'la', meaning: 'the (feminine)' },
                { word: 'mattina', meaning: 'morning' },
              ],
            },
            {
              exPhrase: 'Andiamo a casa adesso.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: 'casa', meaning: 'home' },
                { word: 'adesso', meaning: 'now' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я щодня йду до школи.',
              romanized: 'Ya shchodnya ydu do shkoly.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: 'Я', meaning: 'I' },
                { word: 'щодня', meaning: 'every day' },
                { word: 'до', meaning: 'to' },
                { word: 'школи', meaning: 'school' },
              ],
            },
            {
              exPhrase: 'Вона вранці йде на роботу.',
              romanized: 'Vona vrantsi yde na robotu.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: 'Вона', meaning: 'she' },
                { word: 'вранці', meaning: 'in the morning' },
                { word: 'на', meaning: 'to / on' },
                { word: 'роботу', meaning: 'work' },
              ],
            },
            {
              exPhrase: 'Давай зараз підемо додому.',
              romanized: 'Davay zaraz pidemo dodomu.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: 'Давай', meaning: "let's / come on" },
                { word: 'зараз', meaning: 'now' },
                { word: 'додому', meaning: 'home (direction)' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 학교에 가요.',
              romanized: 'jeoneun maeil hakgyoe gayo.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: '저는', meaning: 'I' },
                { word: '매일', meaning: 'every day' },
                { word: '학교에', meaning: 'to school' },
              ],
            },
            {
              exPhrase: '그녀는 아침에 회사에 가요.',
              romanized: 'geunyeoneun achime hoesae gayo.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: '그녀는', meaning: 'she' },
                { word: '아침에', meaning: 'in the morning' },
                { word: '회사에', meaning: 'to work / company' },
              ],
            },
            {
              exPhrase: '이제 집에 갑시다.',
              romanized: 'ije jibe gapsida.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: '이제', meaning: 'now' },
                { word: '집에', meaning: 'home / to home' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎日学校に行きます。',
              romanized: 'Watashi wa mainichi gakkou ni ikimasu.',
              translation: 'I go to school every day.',
              usedNewWords: [
                { word: '私', meaning: 'I' },
                { word: '毎日', meaning: 'every day' },
                { word: '学校', meaning: 'school' },
                { word: 'に', meaning: 'to (particle)' },
              ],
            },
            {
              exPhrase: '彼女は朝、会社に行きます。',
              romanized: 'Kanojo wa asa, kaisha ni ikimasu.',
              translation: 'She goes to work in the morning.',
              usedNewWords: [
                { word: '彼女', meaning: 'she' },
                { word: '朝', meaning: 'morning' },
                { word: '会社', meaning: 'work / company' },
              ],
            },
            {
              exPhrase: 'もう家に帰りましょう。',
              romanized: 'Mou ie ni kaerimashou.',
              translation: "Let's go home now.",
              usedNewWords: [
                { word: 'もう', meaning: 'now / already' },
                { word: '家', meaning: 'home' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Sleep',
      head: 'Sleep',
      tail: {
        translations: {
          DE: 'schlafen',
          CN: '睡觉',
          IT: 'dormire',
          UA: 'спати',
          KR: '자다',
          JP: '寝る',
        },
        pronunciations: { CN: 'shuìjiào', UA: 'spaty', KR: 'jada', JP: 'neru' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich schlafe jede Nacht acht Stunden.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: 'Nacht', meaning: 'night' },
                { word: 'acht', meaning: 'eight' },
                { word: 'Stunden', meaning: 'hours' },
              ],
            },
            {
              exPhrase: 'Das Baby schläft jetzt.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [{ word: 'Das', meaning: 'the' }],
            },
            {
              exPhrase: 'Geh heute Abend früh schlafen.',
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: 'heute Abend', meaning: 'tonight' },
                { word: 'früh', meaning: 'early' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我每晚睡八个小时。',
              romanized: 'Wǒ měi wǎn shuì bā gè xiǎoshí.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: '每晚', meaning: 'every night' },
                { word: '八个', meaning: 'eight' },
                { word: '小时', meaning: 'hour(s)' },
              ],
            },
            {
              exPhrase: '宝宝现在在睡觉。',
              romanized: 'Bǎobao xiànzài zài shuìjiào.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [
                { word: '宝宝', meaning: 'baby' },
                { word: '在', meaning: '(marks ongoing action)' },
              ],
            },
            {
              exPhrase: '今晚早点睡觉。',
              romanized: 'Jīnwǎn zǎodiǎn shuìjiào.',
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: '今晚', meaning: 'tonight' },
                { word: '早点', meaning: 'early' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Dormo otto ore ogni notte.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: 'otto', meaning: 'eight' },
                { word: 'ore', meaning: 'hours' },
                { word: 'notte', meaning: 'night' },
              ],
            },
            {
              exPhrase: 'Il bambino sta dormendo adesso.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [
                { word: 'Il', meaning: 'the (masculine)' },
                { word: 'bambino', meaning: 'baby' },
              ],
            },
            {
              exPhrase: 'Vai a dormire presto stasera.',
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: 'presto', meaning: 'early' },
                { word: 'stasera', meaning: 'tonight' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я сплю вісім годин щоночі.',
              romanized: 'Ya splyu visim hodyn shchonochi.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: 'вісім', meaning: 'eight' },
                { word: 'годин', meaning: 'hours' },
                { word: 'щоночі', meaning: 'every night' },
              ],
            },
            {
              exPhrase: 'Малюк зараз спить.',
              romanized: 'Malyuk zaraz spyt.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [{ word: 'Малюк', meaning: 'baby' }],
            },
            {
              exPhrase: 'Лягай спати раніше сьогодні ввечері.',
              romanized: "Lyahay spaty ranishe s'ohodni vvecheri.",
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: 'раніше', meaning: 'earlier' },
                { word: 'сьогодні ввечері', meaning: 'tonight' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 밤 여덟 시간 자요.',
              romanized: 'jeoneun maeil bam yeodeol sigan jayo.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: '매일 밤', meaning: 'every night' },
                { word: '여덟', meaning: 'eight' },
                { word: '시간', meaning: 'hour(s)' },
              ],
            },
            {
              exPhrase: '아기가 지금 자고 있어요.',
              romanized: 'agiga jigeum jago isseoyo.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [
                { word: '아기', meaning: 'baby' },
                { word: '지금', meaning: 'now' },
              ],
            },
            {
              exPhrase: '오늘 밤 일찍 자세요.',
              romanized: 'oneul bam iljjik jaseyo.',
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: '오늘 밤', meaning: 'tonight' },
                { word: '일찍', meaning: 'early' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎晩八時間寝ます。',
              romanized: 'Watashi wa maiban hachijikan nemasu.',
              translation: 'I sleep for eight hours every night.',
              usedNewWords: [
                { word: '毎晩', meaning: 'every night' },
                { word: '八時間', meaning: 'eight hours' },
              ],
            },
            {
              exPhrase: '赤ちゃんは今寝ています。',
              romanized: 'Akachan wa ima neteimasu.',
              translation: 'The baby is sleeping now.',
              usedNewWords: [
                { word: '赤ちゃん', meaning: 'baby' },
                { word: '今', meaning: 'now' },
              ],
            },
            {
              exPhrase: '今夜は早く寝てください。',
              romanized: "Kon'ya wa hayaku nete kudasai.",
              translation: 'Go to sleep early tonight.',
              usedNewWords: [
                { word: '今夜', meaning: 'tonight' },
                { word: '早く', meaning: 'early' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Stay',
      head: 'Stay',
      tail: {
        translations: {
          DE: 'bleiben',
          CN: '留',
          IT: 'rimanere',
          UA: 'залишатися',
          KR: '머물다',
          JP: 'いる',
        },
        pronunciations: {
          CN: 'liú',
          UA: 'zalyshatysya',
          KR: 'meomulda',
          JP: 'iru',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Bitte bleib hier bei mir.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: 'Bitte', meaning: 'please' },
                { word: 'hier', meaning: 'here' },
                { word: 'bei mir', meaning: 'with me' },
              ],
            },
            {
              exPhrase: 'Wir sind den ganzen Tag zu Hause geblieben.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: 'Wir', meaning: 'we' },
                { word: 'den ganzen', meaning: 'the whole / all' },
                { word: 'zu Hause', meaning: 'at home' },
              ],
            },
            {
              exPhrase: 'Sie möchte noch ein bisschen bleiben.',
              translation: 'She wants to stay a little longer.',
              usedNewWords: [
                { word: 'möchte', meaning: 'wants (to)' },
                { word: 'noch', meaning: 'still / more' },
                { word: 'ein bisschen', meaning: 'a little bit' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '请留在这里陪我。',
              romanized: 'Qǐng liú zài zhèlǐ péi wǒ.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: '请', meaning: 'please' },
                { word: '这里', meaning: 'here' },
                { word: '陪', meaning: 'accompany / with' },
              ],
            },
            {
              exPhrase: '我们整天都留在家里。',
              romanized: 'Wǒmen zhěngtiān dōu liú zài jiālǐ.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: '整天', meaning: 'all day' },
                { word: '都', meaning: 'all / both (emphasis)' },
                { word: '家里', meaning: 'at home' },
              ],
            },
            {
              exPhrase: '她想再留久一点。',
              romanized: 'Tā xiǎng zài liú jiǔ yīdiǎn.',
              translation: 'She wants to stay a little longer.',
              usedNewWords: [
                { word: '想', meaning: 'want' },
                { word: '再', meaning: 'more / again' },
                { word: '久', meaning: 'a long time' },
                { word: '一点', meaning: 'a little' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Per favore, resta qui con me.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: 'Per favore', meaning: 'please' },
                { word: 'qui', meaning: 'here' },
                { word: 'con', meaning: 'with' },
                { word: 'me', meaning: 'me' },
              ],
            },
            {
              exPhrase: 'Siamo rimasti a casa tutto il giorno.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: 'Siamo', meaning: 'we are (auxiliary)' },
                { word: 'tutto il giorno', meaning: 'all day' },
              ],
            },
            {
              exPhrase: "Lei vuole rimanere ancora un po'.",
              translation: 'She wants to stay a little longer.',
              usedNewWords: [
                { word: 'vuole', meaning: 'wants' },
                { word: "ancora un po'", meaning: 'a little longer' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Будь ласка, залишся тут зі мною.',
              romanized: 'Bud laska, zalyshsya tut zi mnoyu.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: 'Будь ласка', meaning: 'please' },
                { word: 'тут', meaning: 'here' },
                { word: 'зі мною', meaning: 'with me' },
              ],
            },
            {
              exPhrase: 'Ми залишалися вдома цілий день.',
              romanized: 'My zalyshalysya vdoma tsilyy den.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: 'Ми', meaning: 'we' },
                { word: 'вдома', meaning: 'at home' },
                { word: 'цілий день', meaning: 'all day' },
              ],
            },
            {
              exPhrase: 'Вона хоче залишитися ще трохи.',
              romanized: 'Vona khoche zalyshytysya shche trokhy.',
              translation: 'She wants to stay a little longer.',
              usedNewWords: [
                { word: 'хоче', meaning: 'wants' },
                { word: 'ще трохи', meaning: 'a little longer' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '여기 저와 함께 있어 주세요.',
              romanized: 'yeogi jeowa hamkke isseo juseyo.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: '여기', meaning: 'here' },
                { word: '저와', meaning: 'with me' },
                { word: '함께', meaning: 'together' },
                { word: '주세요', meaning: 'please (do this for me)' },
              ],
            },
            {
              exPhrase: '우리는 하루 종일 집에 있었어요.',
              romanized: 'urineun haru jongil jibe isseosseoyo.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: '우리는', meaning: 'we' },
                { word: '하루 종일', meaning: 'all day' },
              ],
            },
            {
              exPhrase: '그녀는 조금 더 머물고 싶어해요.',
              romanized: 'geunyeoneun jogeum deo meomulgo sipeohaeyo.',
              translation: 'She wants to stay a little longer.',
              usedNewWords: [
                { word: '조금 더', meaning: 'a little more' },
                { word: '싶어해요', meaning: 'wants to' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: 'ここに私と一緒にいてください。',
              romanized: 'Koko ni watashi to issho ni ite kudasai.',
              translation: 'Please stay here with me.',
              usedNewWords: [
                { word: 'ここ', meaning: 'here' },
                { word: 'と一緒に', meaning: 'together with' },
                { word: 'ください', meaning: 'please' },
              ],
            },
            {
              exPhrase: '私たちは一日中家にいました。',
              romanized: 'Watashitachi wa ichinichijuu ie ni imashita.',
              translation: 'We stayed at home all day.',
              usedNewWords: [
                { word: '私たち', meaning: 'we' },
                { word: '一日中', meaning: 'all day' },
              ],
            },
            {
              exPhrase: '彼女はもう少しいたいと思っています。',
              romanized: 'Kanojo wa mou sukoshi itai to omotteimasu.',
              translation: 'She wants to stay a little longer.',
              usedNewWords: [{ word: 'もう少し', meaning: 'a little more' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Talk',
      head: 'Talk',
      tail: {
        translations: {
          DE: 'sprechen',
          CN: '聊天',
          IT: 'parlare',
          UA: 'говорити',
          KR: '이야기하다',
          JP: '話す',
        },
        pronunciations: {
          CN: 'liáotiān',
          UA: 'hovoryty',
          KR: 'iyagihada',
          JP: 'hanasu',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Können wir kurz sprechen?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: 'Können', meaning: 'can' },
                { word: 'kurz', meaning: 'briefly' },
              ],
            },
            {
              exPhrase: 'Er spricht jeden Tag mit seinem Freund.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: 'Er', meaning: 'he' },
                { word: 'mit', meaning: 'with' },
                { word: 'seinem', meaning: 'his' },
                { word: 'Freund', meaning: 'friend' },
              ],
            },
            {
              exPhrase: 'Lass uns über den Plan sprechen.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: 'über', meaning: 'about' },
                { word: 'den', meaning: 'the (masculine, this case)' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我们可以聊一下吗？',
              romanized: 'Wǒmen kěyǐ liáo yīxià ma?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: '可以', meaning: 'can' },
                { word: '一下', meaning: 'for a bit / a moment' },
                { word: '吗', meaning: '(question particle)' },
              ],
            },
            {
              exPhrase: '他每天和朋友聊天。',
              romanized: 'Tā měitiān hé péngyǒu liáotiān.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: '他', meaning: 'he' },
                { word: '和', meaning: 'with' },
                { word: '朋友', meaning: 'friend' },
              ],
            },
            {
              exPhrase: '我们聊聊这个计划吧。',
              romanized: 'Wǒmen liáoliao zhège jìhuà ba.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: '这个', meaning: 'this' },
                { word: '计划', meaning: 'plan' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Possiamo parlare un minuto?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: 'Possiamo', meaning: 'can we' },
                { word: 'un minuto', meaning: 'a minute' },
              ],
            },
            {
              exPhrase: 'Lui parla con il suo amico ogni giorno.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: 'Lui', meaning: 'he' },
                { word: 'il suo', meaning: 'his' },
                { word: 'amico', meaning: 'friend' },
              ],
            },
            {
              exPhrase: 'Parliamo del piano.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: 'del', meaning: 'about the' },
                { word: 'piano', meaning: 'plan' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Можемо ми трохи поговорити?',
              romanized: 'Mozhemo my trokhy pohovoryty?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: 'Можемо', meaning: 'can' },
                { word: 'трохи', meaning: 'a bit' },
              ],
            },
            {
              exPhrase: 'Він щодня розмовляє зі своїм другом.',
              romanized: 'Vin shchodnya rozmovlyaye zi svoyim druhom.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: 'Він', meaning: 'he' },
                { word: 'своїм', meaning: 'his (own)' },
                { word: 'другом', meaning: 'friend' },
              ],
            },
            {
              exPhrase: 'Давайте поговоримо про план.',
              romanized: 'Davayte pohovorymo pro plan.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: 'Давайте', meaning: "let's (formal/group)" },
                { word: 'про', meaning: 'about' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '우리 잠깐 이야기할 수 있어요?',
              romanized: 'uri jamkkan iyagihal su isseoyo?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: '우리', meaning: 'we' },
                { word: '잠깐', meaning: 'for a moment' },
                { word: '할 수 있어요', meaning: 'can (do)' },
              ],
            },
            {
              exPhrase: '그는 매일 친구와 이야기해요.',
              romanized: 'geuneun maeil chinguwa iyagihaeyo.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: '그는', meaning: 'he' },
                { word: '친구와', meaning: 'with (his) friend' },
              ],
            },
            {
              exPhrase: '계획에 대해 이야기해요.',
              romanized: 'gyehoege daehae iyagihaeyo.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: '계획', meaning: 'plan' },
                { word: '에 대해', meaning: 'about' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '少し話せますか？',
              romanized: 'Sukoshi hanasemasu ka?',
              translation: 'Can we talk for a minute?',
              usedNewWords: [
                { word: '少し', meaning: 'a little' },
                { word: 'か', meaning: '(question particle)' },
              ],
            },
            {
              exPhrase: '彼は毎日友達と話します。',
              romanized: 'Kare wa mainichi tomodachi to hanashimasu.',
              translation: 'He talks to his friend every day.',
              usedNewWords: [
                { word: '彼', meaning: 'he' },
                { word: '友達', meaning: 'friend' },
                { word: 'と', meaning: 'with (particle)' },
              ],
            },
            {
              exPhrase: '計画について話しましょう。',
              romanized: 'Keikaku ni tsuite hanashimashou.',
              translation: "Let's talk about the plan.",
              usedNewWords: [
                { word: '計画', meaning: 'plan' },
                { word: 'について', meaning: 'about' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Say',
      head: 'Say',
      tail: {
        translations: {
          DE: 'sagen',
          CN: '说',
          IT: 'dire',
          UA: 'сказати',
          KR: '말하다',
          JP: '言う',
        },
        pronunciations: { CN: 'shuō', UA: 'skazaty', KR: 'malhada', JP: 'iu' },
        examples: {
          DE: [
            {
              exPhrase: 'Was hast du gesagt?',
              translation: 'What did you say?',
              usedNewWords: [
                { word: 'Was', meaning: 'what' },
                { word: 'hast du', meaning: 'have you / did you' },
              ],
            },
            {
              exPhrase: 'Sie sagte allen Hallo.',
              translation: 'She said hello to everyone.',
              usedNewWords: [{ word: 'allen', meaning: 'to everyone / all' }],
            },
            {
              exPhrase: 'Ich habe etwas zu sagen.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: 'habe', meaning: 'have' },
                { word: 'etwas', meaning: 'something' },
                { word: 'zu', meaning: 'to' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '你刚才说什么？',
              romanized: 'Nǐ gāngcái shuō shénme?',
              translation: 'What did you say?',
              usedNewWords: [
                { word: '你', meaning: 'you' },
                { word: '刚才', meaning: 'just now' },
                { word: '什么', meaning: 'what' },
              ],
            },
            {
              exPhrase: '她向大家问好。',
              romanized: 'Tā xiàng dàjiā wèn hǎo.',
              translation: 'She said hello to everyone.',
              usedNewWords: [
                { word: '向', meaning: 'to / towards' },
                { word: '大家', meaning: 'everyone' },
                { word: '问好', meaning: 'greet / say hello' },
              ],
            },
            {
              exPhrase: '我有些话想说。',
              romanized: 'Wǒ yǒuxiē huà xiǎng shuō.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: '有些', meaning: 'some' },
                { word: '话', meaning: 'words / things to say' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Cosa hai detto?',
              translation: 'What did you say?',
              usedNewWords: [
                { word: 'Cosa', meaning: 'what' },
                { word: 'hai', meaning: 'have you (auxiliary)' },
              ],
            },
            {
              exPhrase: 'Lei ha salutato tutti.',
              translation: 'She said hello to everyone.',
              usedNewWords: [
                { word: 'ha', meaning: 'has (auxiliary)' },
                { word: 'salutato', meaning: 'greeted' },
                { word: 'tutti', meaning: 'everyone' },
              ],
            },
            {
              exPhrase: 'Ho qualcosa da dire.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: 'Ho', meaning: 'I have' },
                { word: 'qualcosa', meaning: 'something' },
                { word: 'da', meaning: 'to' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Що ти сказав?',
              romanized: 'Shcho ty skazav?',
              translation: 'What did you say?',
              usedNewWords: [
                { word: 'Що', meaning: 'what' },
                { word: 'ти', meaning: 'you' },
              ],
            },
            {
              exPhrase: 'Вона привіталася з усіма.',
              romanized: 'Vona pryvitalasya z usima.',
              translation: 'She said hello to everyone.',
              usedNewWords: [
                { word: 'з', meaning: 'with' },
                { word: 'усіма', meaning: 'everyone' },
              ],
            },
            {
              exPhrase: 'Мені є що сказати.',
              romanized: 'Meni ye shcho skazaty.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: 'Мені', meaning: 'to me (I have)' },
                { word: 'є', meaning: 'is / there is' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '뭐라고 말했어요?',
              romanized: 'mworago malhaesseoyo?',
              translation: 'What did you say?',
              usedNewWords: [{ word: '뭐라고', meaning: 'what' }],
            },
            {
              exPhrase: '그녀는 모두에게 인사했어요.',
              romanized: 'geunyeoneun moduege insahaesseoyo.',
              translation: 'She said hello to everyone.',
              usedNewWords: [
                { word: '모두에게', meaning: 'to everyone' },
                { word: '인사했어요', meaning: 'greeted (said hello)' },
              ],
            },
            {
              exPhrase: '저는 할 말이 있어요.',
              romanized: 'jeoneun hal mari isseoyo.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: '할 말', meaning: 'something to say' },
                { word: '있어요', meaning: 'have / there is' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '何と言いましたか？',
              romanized: 'Nani to iimashita ka?',
              translation: 'What did you say?',
              usedNewWords: [{ word: '何', meaning: 'what' }],
            },
            {
              exPhrase: '彼女はみんなに挨拶しました。',
              romanized: 'Kanojo wa minna ni aisatsu shimashita.',
              translation: 'She said hello to everyone.',
              usedNewWords: [{ word: 'みんな', meaning: 'everyone' }],
            },
            {
              exPhrase: '言いたいことがあります。',
              romanized: 'Iitai koto ga arimasu.',
              translation: 'I have something to say.',
              usedNewWords: [
                { word: 'こと', meaning: 'thing' },
                { word: 'が', meaning: '(subject marker)' },
                { word: 'あります', meaning: 'there is / have' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Think',
      head: 'Think',
      tail: {
        translations: {
          DE: 'denken',
          CN: '觉得',
          IT: 'pensare',
          UA: 'думати',
          KR: '생각하다',
          JP: '思う',
        },
        pronunciations: {
          CN: 'juéde',
          UA: 'dumaty',
          KR: 'saenggakhada',
          JP: 'omou',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Ich denke, das ist eine gute Idee.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: 'ist', meaning: 'is' },
                { word: 'eine', meaning: 'a' },
                { word: 'gute', meaning: 'good' },
              ],
            },
            {
              exPhrase: 'Was denkst du?',
              translation: 'What do you think?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Er denkt über die Frage nach.',
              translation: 'He is thinking about the question.',
              usedNewWords: [
                { word: 'die', meaning: 'the (feminine)' },
                { word: 'Frage', meaning: 'question' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我觉得这是个好主意。',
              romanized: 'Wǒ juéde zhè shì gè hǎo zhǔyì.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: '这', meaning: 'this' },
                { word: '是', meaning: 'is' },
                { word: '个', meaning: '(measure word) a/one' },
                { word: '好', meaning: 'good' },
                { word: '主意', meaning: 'idea' },
              ],
            },
            {
              exPhrase: '你觉得怎么样？',
              romanized: 'Nǐ juéde zěnmeyàng?',
              translation: 'What do you think?',
              usedNewWords: [{ word: '怎么样', meaning: 'how / what about' }],
            },
            {
              exPhrase: '他在想这个问题。',
              romanized: 'Tā zài xiǎng zhège wèntí.',
              translation: 'He is thinking about the question.',
              usedNewWords: [{ word: '问题', meaning: 'question' }],
            },
          ],
          IT: [
            {
              exPhrase: 'Penso che questa sia una buona idea.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: 'che', meaning: 'that' },
                { word: 'questa', meaning: 'this (feminine)' },
                { word: 'sia', meaning: 'is (subjunctive)' },
                { word: 'una', meaning: 'a (feminine)' },
                { word: 'buona', meaning: 'good' },
              ],
            },
            {
              exPhrase: 'Cosa pensi?',
              translation: 'What do you think?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Lui sta pensando alla domanda.',
              translation: 'He is thinking about the question.',
              usedNewWords: [
                { word: 'alla', meaning: 'to the (feminine)' },
                { word: 'domanda', meaning: 'question' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я думаю, що це гарна ідея.',
              romanized: 'Ya dumayu, shcho tse harna ideya.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: 'це', meaning: 'this / it' },
                { word: 'гарна', meaning: 'good / nice' },
              ],
            },
            {
              exPhrase: 'Що ти думаєш?',
              romanized: 'Shcho ty dumayesh?',
              translation: 'What do you think?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Він думає над питанням.',
              romanized: 'Vin dumaye nad pytannyam.',
              translation: 'He is thinking about the question.',
              usedNewWords: [
                { word: 'над', meaning: 'about / over' },
                { word: 'питанням', meaning: 'question' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '저는 이게 좋은 생각이라고 생각해요.',
              romanized: 'jeoneun ige joeun saenggagirago saenggakhaeyo.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: '이게', meaning: 'this' },
                { word: '좋은', meaning: 'good' },
              ],
            },
            {
              exPhrase: '무슨 생각을 해요?',
              romanized: 'museun saenggageul haeyo?',
              translation: 'What do you think?',
              usedNewWords: [{ word: '무슨', meaning: 'what (kind of)' }],
            },
            {
              exPhrase: '그는 질문에 대해 생각하고 있어요.',
              romanized: 'geuneun jilmune daehae saenggakhago isseoyo.',
              translation: 'He is thinking about the question.',
              usedNewWords: [{ word: '질문', meaning: 'question' }],
            },
          ],
          JP: [
            {
              exPhrase: '私はこれが良い考えだと思います。',
              romanized: 'Watashi wa kore ga yoi kangae da to omoimasu.',
              translation: 'I think this is a good idea.',
              usedNewWords: [
                { word: 'これ', meaning: 'this' },
                { word: '良い', meaning: 'good' },
                { word: '考え', meaning: 'idea / thought' },
                { word: 'だと', meaning: 'that (it is)' },
              ],
            },
            {
              exPhrase: '何を思いますか？',
              romanized: 'Nani wo omoimasu ka?',
              translation: 'What do you think?',
              usedNewWords: [{ word: 'を', meaning: '(object marker)' }],
            },
            {
              exPhrase: '彼はその質問について考えています。',
              romanized: 'Kare wa sono shitsumon ni tsuite kangaeteimasu.',
              translation: 'He is thinking about the question.',
              usedNewWords: [
                { word: 'その', meaning: 'that / the' },
                { word: '質問', meaning: 'question' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Leave',
      head: 'Leave',
      tail: {
        translations: {
          DE: 'verlassen',
          CN: '离开',
          IT: 'lasciare',
          UA: 'покинути',
          KR: '떠나다',
          JP: '出る',
        },
        pronunciations: {
          CN: 'líkāi',
          UA: 'pokynuty',
          KR: 'tteonada',
          JP: 'deru',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Sie hat heute Morgen früh das Haus verlassen.',
              translation: 'She left home early this morning.',
              usedNewWords: [{ word: 'Haus', meaning: 'house' }],
            },
            {
              exPhrase: 'Verlass mich nicht.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [
                { word: 'mich', meaning: 'me' },
                { word: 'nicht', meaning: 'not' },
              ],
            },
            {
              exPhrase: 'Ich muss das Meeting jetzt verlassen.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [{ word: 'muss', meaning: 'must / have to' }],
            },
          ],
          CN: [
            {
              exPhrase: '她今天早上很早就离开家了。',
              romanized: 'Tā jīntiān zǎoshang hěn zǎo jiù líkāi jiā le.',
              translation: 'She left home early this morning.',
              usedNewWords: [
                { word: '今天', meaning: 'today' },
                { word: '很', meaning: 'very' },
                { word: '早', meaning: 'early' },
                { word: '就', meaning: 'already / then' },
                { word: '家', meaning: 'home' },
                { word: '了', meaning: '(marks completed action)' },
              ],
            },
            {
              exPhrase: '别离开我。',
              romanized: 'Bié líkāi wǒ.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [{ word: '别', meaning: "don't" }],
            },
            {
              exPhrase: '我现在得离开会议了。',
              romanized: 'Wǒ xiànzài děi líkāi huìyì le.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [
                { word: '得', meaning: 'have to' },
                { word: '会议', meaning: 'meeting' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Lei ha lasciato casa presto stamattina.',
              translation: 'She left home early this morning.',
              usedNewWords: [{ word: 'stamattina', meaning: 'this morning' }],
            },
            {
              exPhrase: 'Non lasciarmi.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Devo lasciare la riunione adesso.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [
                { word: 'Devo', meaning: 'I must' },
                { word: 'riunione', meaning: 'meeting' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Вона сьогодні вранці рано пішла з дому.',
              romanized: "Vona s'ohodni vrantsi rano pishla z domu.",
              translation: 'She left home early this morning.',
              usedNewWords: [
                { word: 'рано', meaning: 'early' },
                { word: 'з дому', meaning: 'from home' },
              ],
            },
            {
              exPhrase: 'Не покидай мене.',
              romanized: 'Ne pokyday mene.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [
                { word: 'Не', meaning: 'not' },
                { word: 'мене', meaning: 'me' },
              ],
            },
            {
              exPhrase: 'Мені треба зараз покинути зустріч.',
              romanized: 'Meni treba zaraz pokynuty zustrich.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [
                { word: 'треба', meaning: 'need to / have to' },
                { word: 'зустріч', meaning: 'meeting' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '그녀는 오늘 아침 일찍 집을 떠났어요.',
              romanized: 'geunyeoneun oneul achim iljjik jibeul tteonasseoyo.',
              translation: 'She left home early this morning.',
              usedNewWords: [
                { word: '오늘 아침', meaning: 'this morning' },
                { word: '집을', meaning: 'home (object)' },
              ],
            },
            {
              exPhrase: '저를 떠나지 마세요.',
              romanized: 'jeoreul tteonaji maseyo.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [
                { word: '저를', meaning: 'me (object)' },
                { word: '마세요', meaning: "don't (please)" },
              ],
            },
            {
              exPhrase: '저는 지금 회의를 떠나야 해요.',
              romanized: 'jeoneun jigeum hoeuireul tteonaya haeyo.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [
                { word: '회의를', meaning: 'the meeting (object)' },
                { word: '해야 해요', meaning: 'have to' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '彼女は今朝早く家を出ました。',
              romanized: 'Kanojo wa kesa hayaku ie wo demashita.',
              translation: 'She left home early this morning.',
              usedNewWords: [{ word: '今朝', meaning: 'this morning' }],
            },
            {
              exPhrase: '私を置いていかないで。',
              romanized: 'Watashi wo oiteikanaide.',
              translation: 'Don\u2019t leave me.',
              usedNewWords: [
                {
                  word: '置いていかないで',
                  meaning: "don't leave (me) behind",
                },
              ],
            },
            {
              exPhrase: '今、会議を出なければなりません。',
              romanized: 'Ima, kaigi wo denakereba narimasen.',
              translation: 'I have to leave the meeting now.',
              usedNewWords: [
                { word: '会議', meaning: 'meeting' },
                { word: 'なければなりません', meaning: 'have to / must' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Eat',
      head: 'Eat',
      tail: {
        translations: {
          DE: 'essen',
          CN: '吃',
          IT: 'mangiare',
          UA: 'їсти',
          KR: '먹다',
          JP: '食べる',
        },
        pronunciations: { CN: 'chī', UA: 'yisty', KR: 'meokda', JP: 'taberu' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich esse jeden Morgen Frühstück.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [{ word: 'Frühstück', meaning: 'breakfast' }],
            },
            {
              exPhrase: 'Wir haben gestern Abend zusammen zu Abend gegessen.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: 'gestern Abend', meaning: 'last night' },
                { word: 'zusammen', meaning: 'together' },
                { word: 'zu Abend (essen)', meaning: 'to have dinner' },
              ],
            },
            {
              exPhrase: 'Lass uns etwas essen.',
              translation: "Let's eat something.",
              usedNewWords: [],
            },
          ],
          CN: [
            {
              exPhrase: '我每天早上吃早饭。',
              romanized: 'Wǒ měitiān zǎoshang chī zǎofàn.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [{ word: '早饭', meaning: 'breakfast' }],
            },
            {
              exPhrase: '我们昨晚一起吃了晚饭。',
              romanized: 'Wǒmen zuówǎn yīqǐ chīle wǎnfàn.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: '昨晚', meaning: 'last night' },
                { word: '一起', meaning: 'together' },
                { word: '晚饭', meaning: 'dinner' },
              ],
            },
            {
              exPhrase: '我们吃点东西吧。',
              romanized: 'Wǒmen chī diǎn dōngxi ba.',
              translation: "Let's eat something.",
              usedNewWords: [
                { word: '点', meaning: 'a bit of' },
                { word: '东西', meaning: 'thing / something' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Faccio colazione ogni mattina.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [
                { word: 'Faccio', meaning: 'I do / make' },
                { word: 'colazione', meaning: 'breakfast' },
              ],
            },
            {
              exPhrase: 'Abbiamo cenato insieme ieri sera.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: 'Abbiamo', meaning: 'we have (auxiliary)' },
                { word: 'cenato', meaning: 'had dinner' },
                { word: 'ieri sera', meaning: 'last night' },
              ],
            },
            {
              exPhrase: 'Mangiamo qualcosa.',
              translation: "Let's eat something.",
              usedNewWords: [],
            },
          ],
          UA: [
            {
              exPhrase: 'Я їм сніданок щоранку.',
              romanized: 'Ya yim snidanok shchoranku.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [
                { word: 'сніданок', meaning: 'breakfast' },
                { word: 'щоранку', meaning: 'every morning' },
              ],
            },
            {
              exPhrase: 'Ми разом вечеряли вчора ввечері.',
              romanized: 'My razom vecheryaly vchora vvecheri.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: 'разом', meaning: 'together' },
                { word: 'вчора ввечері', meaning: 'last night' },
              ],
            },
            {
              exPhrase: "Давайте щось з'їмо.",
              romanized: "Davayte shchos z'yimo.",
              translation: "Let's eat something.",
              usedNewWords: [{ word: 'щось', meaning: 'something' }],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 아침 아침을 먹어요.',
              romanized: 'jeoneun maeil achim achimeul meogeoyo.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: '우리는 어젯밤에 함께 저녁을 먹었어요.',
              romanized: 'urineun eojetbame hamkke jeonyeogeul meogeosseoyo.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: '어젯밤에', meaning: 'last night' },
                { word: '저녁을', meaning: 'dinner (object)' },
              ],
            },
            {
              exPhrase: '우리 뭐 좀 먹어요.',
              romanized: 'uri mwo jom meogeoyo.',
              translation: "Let's eat something.",
              usedNewWords: [
                { word: '뭐', meaning: 'something' },
                { word: '좀', meaning: 'a bit / some' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎朝朝食を食べます。',
              romanized: 'Watashi wa maiasa choushoku wo tabemasu.',
              translation: 'I eat breakfast every morning.',
              usedNewWords: [
                { word: '毎朝', meaning: 'every morning' },
                { word: '朝食', meaning: 'breakfast' },
              ],
            },
            {
              exPhrase: '私たちは昨夜一緒に夕食を食べました。',
              romanized:
                'Watashitachi wa sakuya issho ni yuushoku wo tabemashita.',
              translation: 'We ate dinner together last night.',
              usedNewWords: [
                { word: '昨夜', meaning: 'last night' },
                { word: '一緒に', meaning: 'together' },
                { word: '夕食', meaning: 'dinner' },
              ],
            },
            {
              exPhrase: '何か食べましょう。',
              romanized: 'Nanika tabemashou.',
              translation: "Let's eat something.",
              usedNewWords: [{ word: '何か', meaning: 'something' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Want',
      head: 'Want',
      tail: {
        translations: {
          DE: 'wollen',
          CN: '要',
          IT: 'volere',
          UA: 'хотіти',
          KR: '원하다 / 싶다',
          JP: '～たい / 欲しい',
        },
        pronunciations: {
          CN: 'yào',
          UA: 'khotity',
          KR: 'wonhada / sipda',
          JP: '~tai / hoshii',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Ich will nach Hause gehen.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Was möchtest du essen?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Er möchte eine Tasse Kaffee.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [{ word: 'eine Tasse', meaning: 'a cup (of)' }],
            },
          ],
          CN: [
            {
              exPhrase: '我要回家。',
              romanized: 'Wǒ yào huí jiā.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: '你想吃什么？',
              romanized: 'Nǐ xiǎng chī shénme?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: '他要一杯咖啡。',
              romanized: 'Tā yào yī bēi kāfēi.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [{ word: '一杯', meaning: 'a cup (of)' }],
            },
          ],
          IT: [
            {
              exPhrase: 'Voglio andare a casa.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Cosa vuoi mangiare?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Lui vuole una tazza di caffè.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [
                { word: 'tazza', meaning: 'cup' },
                { word: 'di', meaning: 'of' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я хочу піти додому.',
              romanized: 'Ya khochu pity dodomu.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Що ти хочеш їсти?',
              romanized: 'Shcho ty khochesh yisty?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Він хоче чашку кави.',
              romanized: 'Vin khoche chashku kavy.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [{ word: 'чашку', meaning: 'a cup (of)' }],
            },
          ],
          KR: [
            {
              exPhrase: '저는 집에 가고 싶어요.',
              romanized: 'jeoneun jibe gago sipeoyo.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: '뭐 먹고 싶어요?',
              romanized: 'mwo meokgo sipeoyo?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: '그는 커피 한 잔을 원해요.',
              romanized: 'geuneun keopi han janeul wonhaeyo.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [{ word: '한 잔을', meaning: 'a cup (of)' }],
            },
          ],
          JP: [
            {
              exPhrase: '家に帰りたいです。',
              romanized: 'Ie ni kaeritai desu.',
              translation: 'I want to go home.',
              usedNewWords: [],
            },
            {
              exPhrase: '何を食べたいですか？',
              romanized: 'Nani wo tabetai desu ka?',
              translation: 'What do you want to eat?',
              usedNewWords: [],
            },
            {
              exPhrase: '彼はコーヒーを一杯欲しいです。',
              romanized: 'Kare wa koohii wo ippai hoshii desu.',
              translation: 'He wants a cup of coffee.',
              usedNewWords: [{ word: '一杯', meaning: 'a cup' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Like',
      head: 'Like',
      tail: {
        translations: {
          DE: 'mögen',
          CN: '喜欢',
          IT: 'piacere',
          UA: 'подобатися',
          KR: '좋아하다',
          JP: '好き',
        },
        pronunciations: {
          CN: 'xǐhuan',
          UA: 'podobatysya',
          KR: 'joahada',
          JP: 'suki',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Ich mag dieses Buch.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: 'dieses', meaning: 'this' },
                { word: 'Buch', meaning: 'book' },
              ],
            },
            {
              exPhrase: 'Magst du Kaffee?',
              translation: 'Do you like coffee?',
              usedNewWords: [],
            },
            {
              exPhrase: 'Wir sprechen gerne zusammen.',
              translation: 'We like to talk together.',
              usedNewWords: [
                { word: 'gerne', meaning: 'gladly / like to (do something)' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我喜欢这本书。',
              romanized: 'Wǒ xǐhuan zhè běn shū.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: '本', meaning: '(measure word for books)' },
                { word: '书', meaning: 'book' },
              ],
            },
            {
              exPhrase: '你喜欢咖啡吗？',
              romanized: 'Nǐ xǐhuan kāfēi ma?',
              translation: 'Do you like coffee?',
              usedNewWords: [],
            },
            {
              exPhrase: '我们喜欢一起聊天。',
              romanized: 'Wǒmen xǐhuan yīqǐ liáotiān.',
              translation: 'We like to talk together.',
              usedNewWords: [],
            },
          ],
          IT: [
            {
              exPhrase: 'Mi piace questo libro.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: 'Mi', meaning: 'to me (I like)' },
                { word: 'questo', meaning: 'this (masculine)' },
                { word: 'libro', meaning: 'book' },
              ],
            },
            {
              exPhrase: 'Ti piace il caffè?',
              translation: 'Do you like coffee?',
              usedNewWords: [{ word: 'Ti', meaning: 'to you (do you like)' }],
            },
            {
              exPhrase: 'Ci piace parlare insieme.',
              translation: 'We like to talk together.',
              usedNewWords: [{ word: 'Ci', meaning: 'to us (we like)' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Мені подобається ця книга.',
              romanized: 'Meni podobayetsya tsya knyha.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: 'ця', meaning: 'this' },
                { word: 'книга', meaning: 'book' },
              ],
            },
            {
              exPhrase: 'Тобі подобається кава?',
              romanized: 'Tobi podobayetsya kava?',
              translation: 'Do you like coffee?',
              usedNewWords: [{ word: 'Тобі', meaning: 'to you (do you...)' }],
            },
            {
              exPhrase: 'Нам подобається розмовляти разом.',
              romanized: 'Nam podobayetsya rozmovlyaty razom.',
              translation: 'We like to talk together.',
              usedNewWords: [{ word: 'Нам', meaning: 'to us (we like...)' }],
            },
          ],
          KR: [
            {
              exPhrase: '저는 이 책을 좋아해요.',
              romanized: 'jeoneun i chaegeul joahaeyo.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: '이', meaning: 'this' },
                { word: '책을', meaning: 'book (object)' },
              ],
            },
            {
              exPhrase: '커피 좋아해요?',
              romanized: 'keopi joahaeyo?',
              translation: 'Do you like coffee?',
              usedNewWords: [],
            },
            {
              exPhrase: '우리는 함께 이야기하는 것을 좋아해요.',
              romanized: 'urineun hamkke iyagihaneun geoseul joahaeyo.',
              translation: 'We like to talk together.',
              usedNewWords: [
                { word: '것을', meaning: 'the act of ... (-ing)' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '私はこの本が好きです。',
              romanized: 'Watashi wa kono hon ga suki desu.',
              translation: 'I like this book.',
              usedNewWords: [
                { word: 'この', meaning: 'this' },
                { word: '本', meaning: 'book' },
              ],
            },
            {
              exPhrase: 'コーヒーが好きですか？',
              romanized: 'Koohii ga suki desu ka?',
              translation: 'Do you like coffee?',
              usedNewWords: [],
            },
            {
              exPhrase: '私たちは一緒に話すのが好きです。',
              romanized: 'Watashitachi wa issho ni hanasu no ga suki desu.',
              translation: 'We like to talk together.',
              usedNewWords: [
                { word: 'の', meaning: '(turns a verb into "the act of...")' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Write',
      head: 'Write',
      tail: {
        translations: {
          DE: 'schreiben',
          CN: '写',
          IT: 'scrivere',
          UA: 'писати',
          KR: '쓰다',
          JP: '書く',
        },
        pronunciations: { CN: 'xiě', UA: 'pysaty', KR: 'sseuda', JP: 'kaku' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich schreibe meinem Freund einen Brief.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [
                { word: 'meinem', meaning: 'my (dative)' },
                { word: 'einen', meaning: 'a (masculine, this case)' },
                { word: 'Brief', meaning: 'letter' },
              ],
            },
            {
              exPhrase: 'Er hat seinen Namen auf das Papier geschrieben.',
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: 'seinen', meaning: 'his (accusative)' },
                { word: 'Namen', meaning: 'name' },
                { word: 'auf', meaning: 'on' },
                { word: 'Papier', meaning: 'paper' },
              ],
            },
            {
              exPhrase: 'Bitte schreib deine Antwort hier.',
              translation: 'Please write your answer here.',
              usedNewWords: [
                { word: 'deine', meaning: 'your' },
                { word: 'Antwort', meaning: 'answer' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我给朋友写一封信。',
              romanized: 'Wǒ gěi péngyǒu xiě yī fēng xìn.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [
                { word: '给', meaning: 'to / for' },
                { word: '一封', meaning: 'a (letter, measure word)' },
                { word: '信', meaning: 'letter' },
              ],
            },
            {
              exPhrase: '他把名字写在了纸上。',
              romanized: 'Tā bǎ míngzì xiě zàile zhǐ shàng.',
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: '把', meaning: '(object-marking particle)' },
                { word: '名字', meaning: 'name' },
                { word: '纸', meaning: 'paper' },
              ],
            },
            {
              exPhrase: '请把你的答案写在这里。',
              romanized: "Qǐng bǎ nǐ de dá'àn xiě zài zhèlǐ.",
              translation: 'Please write your answer here.',
              usedNewWords: [
                { word: '你的', meaning: 'your' },
                { word: '答案', meaning: 'answer' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Scrivo una lettera al mio amico.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [
                { word: 'lettera', meaning: 'letter' },
                { word: 'mio', meaning: 'my' },
              ],
            },
            {
              exPhrase: 'Ha scritto il suo nome sulla carta.',
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: 'nome', meaning: 'name' },
                { word: 'sulla', meaning: 'on the' },
                { word: 'carta', meaning: 'paper' },
              ],
            },
            {
              exPhrase: 'Per favore, scrivi la tua risposta qui.',
              translation: 'Please write your answer here.',
              usedNewWords: [
                { word: 'tua', meaning: 'your' },
                { word: 'risposta', meaning: 'answer' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я пишу другу листа.',
              romanized: 'Ya pyshu druhu lysta.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [{ word: 'листа', meaning: 'letter' }],
            },
            {
              exPhrase: "Він написав своє ім'я на папері.",
              romanized: "Vin napysav svoye im'ya na paperi.",
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: 'своє', meaning: 'his own (neuter)' },
                { word: "ім'я", meaning: 'name' },
                { word: 'папері', meaning: 'paper' },
              ],
            },
            {
              exPhrase: 'Будь ласка, напиши свою відповідь тут.',
              romanized: 'Bud laska, napyshy svoyu vidpovid tut.',
              translation: 'Please write your answer here.',
              usedNewWords: [
                { word: 'свою', meaning: 'your (own)' },
                { word: 'відповідь', meaning: 'answer' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '저는 친구에게 편지를 써요.',
              romanized: 'jeoneun chinguege pyeonjireul sseoyo.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [{ word: '편지를', meaning: 'letter (object)' }],
            },
            {
              exPhrase: '그는 종이에 이름을 썼어요.',
              romanized: 'geuneun jongie ireumeul sseosseoyo.',
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: '종이에', meaning: 'on the paper' },
                { word: '이름을', meaning: 'name (object)' },
              ],
            },
            {
              exPhrase: '여기에 답을 써 주세요.',
              romanized: 'yeogie dabeul sseo juseyo.',
              translation: 'Please write your answer here.',
              usedNewWords: [{ word: '답을', meaning: 'answer (object)' }],
            },
          ],
          JP: [
            {
              exPhrase: '私は友達に手紙を書きます。',
              romanized: 'Watashi wa tomodachi ni tegami wo kakimasu.',
              translation: 'I write a letter to my friend.',
              usedNewWords: [{ word: '手紙', meaning: 'letter' }],
            },
            {
              exPhrase: '彼は紙に名前を書きました。',
              romanized: 'Kare wa kami ni namae wo kakimashita.',
              translation: 'He wrote his name on the paper.',
              usedNewWords: [
                { word: '紙', meaning: 'paper' },
                { word: '名前', meaning: 'name' },
              ],
            },
            {
              exPhrase: 'ここに答えを書いてください。',
              romanized: 'Koko ni kotae wo kaite kudasai.',
              translation: 'Please write your answer here.',
              usedNewWords: [{ word: '答え', meaning: 'answer' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Read',
      head: 'Read',
      tail: {
        translations: {
          DE: 'lesen',
          CN: '读',
          IT: 'leggere',
          UA: 'читати',
          KR: '읽다',
          JP: '読む',
        },
        pronunciations: { CN: 'dú', UA: 'chytaty', KR: 'ikda', JP: 'yomu' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich lese jede Nacht ein Buch.',
              translation: 'I read a book every night.',
              usedNewWords: [
                { word: 'jede', meaning: 'every (feminine)' },
                { word: 'ein', meaning: 'a' },
              ],
            },
            {
              exPhrase: 'Sie liest einen Brief.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Liest du gerne?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
          CN: [
            {
              exPhrase: '我每晚读一本书。',
              romanized: 'Wǒ měi wǎn dú yī běn shū.',
              translation: 'I read a book every night.',
              usedNewWords: [
                { word: '一本', meaning: 'a (book, measure word)' },
              ],
            },
            {
              exPhrase: '她在读一封信。',
              romanized: 'Tā zài dú yī fēng xìn.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: '你喜欢读书吗？',
              romanized: 'Nǐ xǐhuan dú shū ma?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
          IT: [
            {
              exPhrase: 'Leggo un libro ogni notte.',
              translation: 'I read a book every night.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Lei sta leggendo una lettera.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Ti piace leggere?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
          UA: [
            {
              exPhrase: 'Я читаю книгу щоночі.',
              romanized: 'Ya chytayu knyhu shchonochi.',
              translation: 'I read a book every night.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Вона читає листа.',
              romanized: 'Vona chytaye lysta.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Тобі подобається читати?',
              romanized: 'Tobi podobayetsya chytaty?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 밤 책을 읽어요.',
              romanized: 'jeoneun maeil bam chaegeul ilgeoyo.',
              translation: 'I read a book every night.',
              usedNewWords: [],
            },
            {
              exPhrase: '그녀는 편지를 읽고 있어요.',
              romanized: 'geunyeoneun pyeonjireul ilkgo isseoyo.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: '읽는 것을 좋아해요?',
              romanized: 'ingneun geoseul joahaeyo?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎晩本を読みます。',
              romanized: 'Watashi wa maiban hon wo yomimasu.',
              translation: 'I read a book every night.',
              usedNewWords: [],
            },
            {
              exPhrase: '彼女は手紙を読んでいます。',
              romanized: 'Kanojo wa tegami wo yondeimasu.',
              translation: 'She is reading a letter.',
              usedNewWords: [],
            },
            {
              exPhrase: '読むのが好きですか？',
              romanized: 'Yomu no ga suki desu ka?',
              translation: 'Do you like to read?',
              usedNewWords: [],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Use',
      head: 'Use',
      tail: {
        translations: {
          DE: 'benutzen',
          CN: '用',
          IT: 'usare',
          UA: 'використовувати',
          KR: '사용하다',
          JP: '使う',
        },
        pronunciations: {
          CN: 'yòng',
          UA: 'vykorystovuvaty',
          KR: 'sayonghada',
          JP: 'tsukau',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Ich benutze jeden Tag mein Handy.',
              translation: 'I use my phone every day.',
              usedNewWords: [
                { word: 'mein', meaning: 'my' },
                { word: 'Handy', meaning: 'phone' },
              ],
            },
            {
              exPhrase: 'Kann ich deinen Stift benutzen?',
              translation: 'Can I use your pen?',
              usedNewWords: [
                { word: 'Kann ich', meaning: 'can I' },
                { word: 'deinen', meaning: 'your (accusative)' },
                { word: 'Stift', meaning: 'pen' },
              ],
            },
            {
              exPhrase: 'Wir benutzen diesen Raum für Besprechungen.',
              translation: 'We use this room for meetings.',
              usedNewWords: [
                { word: 'diesen', meaning: 'this (accusative)' },
                { word: 'Raum', meaning: 'room' },
                { word: 'für', meaning: 'for' },
                { word: 'Besprechungen', meaning: 'meetings' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我每天用手机。',
              romanized: 'Wǒ měitiān yòng shǒujī.',
              translation: 'I use my phone every day.',
              usedNewWords: [{ word: '手机', meaning: 'phone' }],
            },
            {
              exPhrase: '我可以用你的笔吗？',
              romanized: 'Wǒ kěyǐ yòng nǐ de bǐ ma?',
              translation: 'Can I use your pen?',
              usedNewWords: [{ word: '笔', meaning: 'pen' }],
            },
            {
              exPhrase: '我们用这个房间开会。',
              romanized: 'Wǒmen yòng zhège fángjiān kāihuì.',
              translation: 'We use this room for meetings.',
              usedNewWords: [
                { word: '房间', meaning: 'room' },
                { word: '开会', meaning: 'have a meeting' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Uso il mio telefono ogni giorno.',
              translation: 'I use my phone every day.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Posso usare la tua penna?',
              translation: 'Can I use your pen?',
              usedNewWords: [
                { word: 'Posso', meaning: 'can I' },
                { word: 'penna', meaning: 'pen' },
              ],
            },
            {
              exPhrase: 'Usiamo questa stanza per le riunioni.',
              translation: 'We use this room for meetings.',
              usedNewWords: [
                { word: 'stanza', meaning: 'room' },
                { word: 'le', meaning: 'the (feminine plural)' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Я щодня використовую телефон.',
              romanized: 'Ya shchodnya vykorystovuyu telefon.',
              translation: 'I use my phone every day.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Можна мені використати твою ручку?',
              romanized: 'Mozhna meni vykorystaty tvoyu ruchku?',
              translation: 'Can I use your pen?',
              usedNewWords: [
                { word: 'Можна', meaning: 'may / can' },
                { word: 'твою', meaning: 'your' },
                { word: 'ручку', meaning: 'pen' },
              ],
            },
            {
              exPhrase: 'Ми використовуємо цю кімнату для зустрічей.',
              romanized: 'My vykorystovuyemo tsyu kimnatu dlya zustrichey.',
              translation: 'We use this room for meetings.',
              usedNewWords: [
                { word: 'цю', meaning: 'this (feminine, this case)' },
                { word: 'кімнату', meaning: 'room' },
                { word: 'для', meaning: 'for' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 휴대폰을 사용해요.',
              romanized: 'jeoneun maeil hyudaeponeul sayonghaeyo.',
              translation: 'I use my phone every day.',
              usedNewWords: [{ word: '휴대폰을', meaning: 'phone (object)' }],
            },
            {
              exPhrase: '당신의 펜을 사용해도 될까요?',
              romanized: 'dangsinui peneul sayonghaedo doelkkayo?',
              translation: 'Can I use your pen?',
              usedNewWords: [
                { word: '당신의', meaning: 'your' },
                { word: '펜을', meaning: 'pen (object)' },
              ],
            },
            {
              exPhrase: '우리는 이 방을 회의에 사용해요.',
              romanized: 'urineun i bangeul hoeuie sayonghaeyo.',
              translation: 'We use this room for meetings.',
              usedNewWords: [{ word: '방을', meaning: 'room (object)' }],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎日携帯電話を使います。',
              romanized: 'Watashi wa mainichi keitaidenwa wo tsukaimasu.',
              translation: 'I use my phone every day.',
              usedNewWords: [{ word: '携帯電話', meaning: 'phone' }],
            },
            {
              exPhrase: 'あなたのペンを使ってもいいですか？',
              romanized: 'Anata no pen wo tsukattemo ii desu ka?',
              translation: 'Can I use your pen?',
              usedNewWords: [
                { word: 'あなたの', meaning: 'your' },
                { word: 'てもいいですか', meaning: 'may I ...?' },
              ],
            },
            {
              exPhrase: '私たちはこの部屋を会議に使います。',
              romanized: 'Watashitachi wa kono heya wo kaigi ni tsukaimasu.',
              translation: 'We use this room for meetings.',
              usedNewWords: [{ word: '部屋', meaning: 'room' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Wait',
      head: 'Wait',
      tail: {
        translations: {
          DE: 'warten',
          CN: '等',
          IT: 'aspettare',
          UA: 'чекати',
          KR: '기다리다',
          JP: '待つ',
        },
        pronunciations: {
          CN: 'děng',
          UA: 'chekaty',
          KR: 'gidarida',
          JP: 'matsu',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Bitte warte hier.',
              translation: 'Please wait here.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Ich habe eine Stunde auf den Bus gewartet.',
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [
                { word: 'eine Stunde', meaning: 'an hour' },
                { word: 'auf', meaning: 'for / on' },
              ],
            },
            {
              exPhrase: 'Kannst du eine Minute warten?',
              translation: 'Can you wait a minute?',
              usedNewWords: [
                { word: 'Kannst du', meaning: 'can you' },
                { word: 'eine Minute', meaning: 'a minute' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '请在这里等。',
              romanized: 'Qǐng zài zhèlǐ děng.',
              translation: 'Please wait here.',
              usedNewWords: [],
            },
            {
              exPhrase: '我等公交车等了一个小时。',
              romanized: 'Wǒ děng gōngjiāochē děngle yī gè xiǎoshí.',
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [
                { word: '一个', meaning: 'one / a (measure word)' },
              ],
            },
            {
              exPhrase: '你能等一分钟吗？',
              romanized: 'Nǐ néng děng yī fēnzhōng ma?',
              translation: 'Can you wait a minute?',
              usedNewWords: [
                { word: '能', meaning: 'can' },
                { word: '一分钟', meaning: 'a minute' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Per favore, aspetta qui.',
              translation: 'Please wait here.',
              usedNewWords: [],
            },
            {
              exPhrase: "Ho aspettato l'autobus per un'ora.",
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [{ word: "un'ora", meaning: 'an hour' }],
            },
            {
              exPhrase: 'Puoi aspettare un minuto?',
              translation: 'Can you wait a minute?',
              usedNewWords: [{ word: 'Puoi', meaning: 'can you' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Будь ласка, чекай тут.',
              romanized: 'Bud laska, chekay tut.',
              translation: 'Please wait here.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Я чекав на автобус годину.',
              romanized: 'Ya chekav na avtobus hodynu.',
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Можеш почекати хвилинку?',
              romanized: 'Mozhesh pochekaty khvylynku?',
              translation: 'Can you wait a minute?',
              usedNewWords: [
                { word: 'Можеш', meaning: 'can you' },
                { word: 'хвилинку', meaning: 'a minute' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '여기서 기다려 주세요.',
              romanized: 'yeogiseo gidaryeo juseyo.',
              translation: 'Please wait here.',
              usedNewWords: [],
            },
            {
              exPhrase: '저는 버스를 한 시간 기다렸어요.',
              romanized: 'jeoneun beoseureul han sigan gidaryeosseoyo.',
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [],
            },
            {
              exPhrase: '잠깐 기다려 줄 수 있어요?',
              romanized: 'jamkkan gidaryeo jul su isseoyo?',
              translation: 'Can you wait a minute?',
              usedNewWords: [],
            },
          ],
          JP: [
            {
              exPhrase: 'ここで待ってください。',
              romanized: 'Koko de matte kudasai.',
              translation: 'Please wait here.',
              usedNewWords: [{ word: 'で', meaning: 'at (particle)' }],
            },
            {
              exPhrase: '私はバスを一時間待ちました。',
              romanized: 'Watashi wa basu wo ichijikan machimashita.',
              translation: 'I waited for the bus for an hour.',
              usedNewWords: [{ word: '一時間', meaning: 'an hour' }],
            },
            {
              exPhrase: '少し待ってもらえますか？',
              romanized: 'Sukoshi matte moraemasu ka?',
              translation: 'Can you wait a minute?',
              usedNewWords: [
                { word: 'てもらえますか', meaning: 'can you ...?' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Get up',
      head: 'Get up',
      tail: {
        translations: {
          DE: 'aufstehen',
          CN: '起床',
          IT: 'alzarsi',
          UA: 'вставати',
          KR: '일어나다',
          JP: '起きる',
        },
        pronunciations: {
          CN: 'qǐchuáng',
          UA: 'vstavaty',
          KR: 'ireonada',
          JP: 'okiru',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Ich stehe jeden Morgen früh auf.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Sie ist heute spät aufgestanden.',
              translation: 'She got up late today.',
              usedNewWords: [{ word: 'spät', meaning: 'late' }],
            },
            {
              exPhrase: 'Bitte steh jetzt auf.',
              translation: 'Please get up now.',
              usedNewWords: [],
            },
          ],
          CN: [
            {
              exPhrase: '我每天早上很早起床。',
              romanized: 'Wǒ měitiān zǎoshang hěn zǎo qǐchuáng.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: '她今天起得很晚。',
              romanized: 'Tā jīntiān qǐ de hěn wǎn.',
              translation: 'She got up late today.',
              usedNewWords: [{ word: '晚', meaning: 'late' }],
            },
            {
              exPhrase: '请现在起床。',
              romanized: 'Qǐng xiànzài qǐchuáng.',
              translation: 'Please get up now.',
              usedNewWords: [],
            },
          ],
          IT: [
            {
              exPhrase: 'Mi alzo presto ogni mattina.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Lei si è alzata tardi oggi.',
              translation: 'She got up late today.',
              usedNewWords: [
                { word: 'tardi', meaning: 'late' },
                { word: 'oggi', meaning: 'today' },
              ],
            },
            {
              exPhrase: 'Alzati adesso, per favore.',
              translation: 'Please get up now.',
              usedNewWords: [],
            },
          ],
          UA: [
            {
              exPhrase: 'Я встаю рано щоранку.',
              romanized: 'Ya vstayu rano shchoranku.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Вона сьогодні встала пізно.',
              romanized: "Vona s'ohodni vstala pizno.",
              translation: 'She got up late today.',
              usedNewWords: [{ word: 'пізно', meaning: 'late' }],
            },
            {
              exPhrase: 'Будь ласка, встань зараз.',
              romanized: 'Bud laska, vstan zaraz.',
              translation: 'Please get up now.',
              usedNewWords: [],
            },
          ],
          KR: [
            {
              exPhrase: '저는 매일 아침 일찍 일어나요.',
              romanized: 'jeoneun maeil achim iljjik ireonayo.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: '그녀는 오늘 늦게 일어났어요.',
              romanized: 'geunyeoneun oneul neutge ireonasseoyo.',
              translation: 'She got up late today.',
              usedNewWords: [{ word: '늦게', meaning: 'late' }],
            },
            {
              exPhrase: '지금 일어나세요.',
              romanized: 'jigeum ireonaseyo.',
              translation: 'Please get up now.',
              usedNewWords: [],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎朝早く起きます。',
              romanized: 'Watashi wa maiasa hayaku okimasu.',
              translation: 'I get up early every morning.',
              usedNewWords: [],
            },
            {
              exPhrase: '彼女は今日遅く起きました。',
              romanized: 'Kanojo wa kyou osoku okimashita.',
              translation: 'She got up late today.',
              usedNewWords: [
                { word: '今日', meaning: 'today' },
                { word: '遅く', meaning: 'late' },
              ],
            },
            {
              exPhrase: '今すぐ起きてください。',
              romanized: 'Ima sugu okite kudasai.',
              translation: 'Please get up now.',
              usedNewWords: [
                { word: 'すぐ', meaning: 'immediately / right away' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Buy',
      head: 'Buy',
      tail: {
        translations: {
          DE: 'kaufen',
          CN: '买',
          IT: 'comprare',
          UA: 'купувати',
          KR: '사다',
          JP: '買う',
        },
        pronunciations: { CN: 'mǎi', UA: 'kupuvaty', KR: 'sada', JP: 'kau' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich möchte ein neues Buch kaufen.',
              translation: 'I want to buy a new book.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Sie hat etwas Kaffee gekauft.',
              translation: 'She bought some coffee.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Kannst du etwas Brot kaufen?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: 'Brot', meaning: 'bread' }],
            },
          ],
          CN: [
            {
              exPhrase: '我想买一本新书。',
              romanized: 'Wǒ xiǎng mǎi yī běn xīn shū.',
              translation: 'I want to buy a new book.',
              usedNewWords: [{ word: '新', meaning: 'new' }],
            },
            {
              exPhrase: '她买了一些咖啡。',
              romanized: 'Tā mǎile yīxiē kāfēi.',
              translation: 'She bought some coffee.',
              usedNewWords: [{ word: '一些', meaning: 'some' }],
            },
            {
              exPhrase: '你能买一些面包吗？',
              romanized: 'Nǐ néng mǎi yīxiē miànbāo ma?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: '面包', meaning: 'bread' }],
            },
          ],
          IT: [
            {
              exPhrase: 'Voglio comprare un libro nuovo.',
              translation: 'I want to buy a new book.',
              usedNewWords: [{ word: 'nuovo', meaning: 'new' }],
            },
            {
              exPhrase: 'Lei ha comprato del caffè.',
              translation: 'She bought some coffee.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Puoi comprare del pane?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: 'pane', meaning: 'bread' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Я хочу купити нову книгу.',
              romanized: 'Ya khochu kupyty novu knyhu.',
              translation: 'I want to buy a new book.',
              usedNewWords: [{ word: 'нову', meaning: 'new (feminine)' }],
            },
            {
              exPhrase: 'Вона купила трохи кави.',
              romanized: 'Vona kupyla trokhy kavy.',
              translation: 'She bought some coffee.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Можеш купити трохи хліба?',
              romanized: 'Mozhesh kupyty trokhy khliba?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: 'хліба', meaning: 'bread' }],
            },
          ],
          KR: [
            {
              exPhrase: '저는 새 책을 사고 싶어요.',
              romanized: 'jeoneun sae chaegeul sago sipeoyo.',
              translation: 'I want to buy a new book.',
              usedNewWords: [],
            },
            {
              exPhrase: '그녀는 커피를 좀 샀어요.',
              romanized: 'geunyeoneun keopireul jom sasseoyo.',
              translation: 'She bought some coffee.',
              usedNewWords: [],
            },
            {
              exPhrase: '빵을 좀 살 수 있어요?',
              romanized: 'ppangeul jom sal su isseoyo?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: '빵을', meaning: 'bread (object)' }],
            },
          ],
          JP: [
            {
              exPhrase: '新しい本を買いたいです。',
              romanized: 'Atarashii hon wo kaitai desu.',
              translation: 'I want to buy a new book.',
              usedNewWords: [],
            },
            {
              exPhrase: '彼女はコーヒーを買いました。',
              romanized: 'Kanojo wa koohii wo kaimashita.',
              translation: 'She bought some coffee.',
              usedNewWords: [],
            },
            {
              exPhrase: 'パンを買ってもらえますか？',
              romanized: 'Pan wo katte moraemasu ka?',
              translation: 'Can you buy some bread?',
              usedNewWords: [{ word: 'パン', meaning: 'bread' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
  ],
}
