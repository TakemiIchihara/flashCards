import type { FlashcardsType } from '@/assets/Flashcards/Flashcards.type'

export const bodyMovements: FlashcardsType<'word'> = {
  name: 'body movement',
  id: 'bodymovement',
  kind: 'word',
  cards: [
    {
      word: 'Walk',
      head: 'Walk',
      tail: {
        translations: {
          DE: 'gehen',
          CN: '走',
          IT: 'camminare',
          UA: 'ходити',
          KR: '걷다',
          JP: '歩く',
        },
        pronunciations: { CN: 'zǒu', UA: 'khodyty', KR: 'geotda', JP: 'aruku' },
        examples: {
          DE: [
            {
              exPhrase: 'Ich gehe jeden Tag zur Schule.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: 'Ich', meaning: 'I' },
                { word: 'jeden', meaning: 'every' },
                { word: 'Tag', meaning: 'day' },
                { word: 'zur', meaning: 'to the' },
                { word: 'Schule', meaning: 'school' },
              ],
            },
            {
              exPhrase: 'Sie geht langsam im Park.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: 'Sie', meaning: 'she' },
                { word: 'langsam', meaning: 'slowly' },
                { word: 'im', meaning: 'in the' },
              ],
            },
            {
              exPhrase: 'Lass uns zusammen gehen.',
              translation: "Let's walk together.",
              usedNewWords: [
                { word: 'Lass uns', meaning: "let's" },
                { word: 'zusammen', meaning: 'together' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '我每天走路去学校。',
              romanized: 'Wǒ měitiān zǒulù qù xuéxiào.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: '我', meaning: 'I' },
                { word: '每天', meaning: 'every day' },
                { word: '去', meaning: 'go' },
                { word: '学校', meaning: 'school' },
              ],
            },
            {
              exPhrase: '她在公园里慢慢地走。',
              romanized: 'Tā zài gōngyuán lǐ mànmàn de zǒu.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: '她', meaning: 'she' },
                { word: '在', meaning: 'at / in' },
                { word: '公园', meaning: 'park' },
                { word: '里', meaning: 'inside' },
                { word: '慢慢地', meaning: 'slowly' },
              ],
            },
            {
              exPhrase: '我们一起走吧。',
              romanized: 'Wǒmen yīqǐ zǒu ba.',
              translation: "Let's walk together.",
              usedNewWords: [
                { word: '我们', meaning: 'we' },
                { word: '一起', meaning: 'together' },
                { word: '吧', meaning: '(suggestion particle)' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Cammino a scuola ogni giorno.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: 'a', meaning: 'to' },
                { word: 'scuola', meaning: 'school' },
                { word: 'ogni', meaning: 'every' },
                { word: 'giorno', meaning: 'day' },
              ],
            },
            {
              exPhrase: 'Lei cammina lentamente nel parco.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: 'Lei', meaning: 'she' },
                { word: 'lentamente', meaning: 'slowly' },
                { word: 'nel', meaning: 'in the' },
              ],
            },
            {
              exPhrase: 'Camminiamo insieme.',
              translation: "Let's walk together.",
              usedNewWords: [{ word: 'insieme', meaning: 'together' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Я щодня йду пішки до школи.',
              romanized: 'Ya shchodnya ydu pishky do shkoly.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: 'Я', meaning: 'I' },
                { word: 'щодня', meaning: 'every day' },
                { word: 'пішки', meaning: 'on foot' },
                { word: 'до', meaning: 'to' },
                { word: 'школи', meaning: 'school' },
              ],
            },
            {
              exPhrase: 'Вона повільно йде в парку.',
              romanized: 'Vona povilno yde v parku.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: 'Вона', meaning: 'she' },
                { word: 'повільно', meaning: 'slowly' },
                { word: 'в', meaning: 'in' },
              ],
            },
            {
              exPhrase: 'Давай підемо разом.',
              romanized: 'Davay pidemo razom.',
              translation: "Let's walk together.",
              usedNewWords: [
                { word: 'Давай', meaning: "let's" },
                { word: 'разом', meaning: 'together' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '나는 매일 학교에 걸어갑니다.',
              romanized: 'naneun maeil hakgyoe georeogamnida.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: '나는', meaning: 'I' },
                { word: '매일', meaning: 'every day' },
                { word: '학교에', meaning: 'to school' },
              ],
            },
            {
              exPhrase: '그녀는 공원에서 천천히 걷습니다.',
              romanized: 'geunyeoneun gongwoneseo cheoncheonhi geotseumnida.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: '그녀는', meaning: 'she' },
                { word: '공원에서', meaning: 'in the park' },
                { word: '천천히', meaning: 'slowly' },
              ],
            },
            {
              exPhrase: '같이 걸어요.',
              romanized: 'gachi georeoyo.',
              translation: "Let's walk together.",
              usedNewWords: [{ word: '같이', meaning: 'together' }],
            },
          ],
          JP: [
            {
              exPhrase: '私は毎日学校に歩いて行きます。',
              romanized: 'Watashi wa mainichi gakkou ni aruite ikimasu.',
              translation: 'I walk to school every day.',
              usedNewWords: [
                { word: '私', meaning: 'I' },
                { word: '毎日', meaning: 'every day' },
                { word: '学校', meaning: 'school' },
                { word: 'に', meaning: 'to (particle)' },
              ],
            },
            {
              exPhrase: '彼女は公園をゆっくり歩きます。',
              romanized: 'Kanojo wa kouen wo yukkuri arukimasu.',
              translation: 'She walks slowly in the park.',
              usedNewWords: [
                { word: '彼女', meaning: 'she' },
                { word: '公園', meaning: 'park' },
                { word: 'を', meaning: '(object marker)' },
                { word: 'ゆっくり', meaning: 'slowly' },
              ],
            },
            {
              exPhrase: '一緒に歩きましょう。',
              romanized: 'Issho ni arukimashou.',
              translation: "Let's walk together.",
              usedNewWords: [{ word: '一緒に', meaning: 'together' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Run',
      head: 'Run',
      tail: {
        translations: {
          DE: 'laufen',
          CN: '跑',
          IT: 'correre',
          UA: 'бігати',
          KR: '뛰다',
          JP: '走る',
        },
        pronunciations: {
          CN: 'pǎo',
          UA: 'bihaty',
          KR: 'ttwida',
          JP: 'hashiru',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Er läuft jeden Morgen.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: 'Er', meaning: 'he' },
                { word: 'Morgen', meaning: 'morning' },
              ],
            },
            {
              exPhrase: 'Der Hund läuft schnell.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: 'Der', meaning: 'the (masculine)' },
                { word: 'Hund', meaning: 'dog' },
                { word: 'schnell', meaning: 'fast' },
              ],
            },
            {
              exPhrase: 'Wir müssen zum Bus rennen.',
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: 'Wir', meaning: 'we' },
                { word: 'müssen', meaning: 'must' },
                { word: 'zum', meaning: 'to the' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '他每天早上跑步。',
              romanized: 'Tā měitiān zǎoshang pǎobù.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: '他', meaning: 'he' },
                { word: '早上', meaning: 'morning' },
              ],
            },
            {
              exPhrase: '狗跑得很快。',
              romanized: 'Gǒu pǎo de hěn kuài.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: '狗', meaning: 'dog' },
                { word: '得', meaning: '(links verb to result/degree)' },
                { word: '很', meaning: 'very' },
                { word: '快', meaning: 'fast' },
              ],
            },
            {
              exPhrase: '我们需要跑去坐公交车。',
              romanized: 'Wǒmen xūyào pǎo qù zuò gōngjiāochē.',
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: '需要', meaning: 'need to' },
                { word: '坐', meaning: 'sit / take (a ride)' },
                { word: '公交车', meaning: 'bus' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Lui corre ogni mattina.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: 'Lui', meaning: 'he' },
                { word: 'mattina', meaning: 'morning' },
              ],
            },
            {
              exPhrase: 'Il cane corre veloce.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: 'Il', meaning: 'the (masculine)' },
                { word: 'cane', meaning: 'dog' },
                { word: 'veloce', meaning: 'fast' },
              ],
            },
            {
              exPhrase: "Dobbiamo correre per prendere l'autobus.",
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: 'Dobbiamo', meaning: 'we must' },
                { word: 'per', meaning: 'to / in order to' },
                { word: 'prendere', meaning: 'to take / catch' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Він бігає щоранку.',
              romanized: 'Vin bihaye shchoranku.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: 'Він', meaning: 'he' },
                { word: 'щоранку', meaning: 'every morning' },
              ],
            },
            {
              exPhrase: 'Собака швидко бігає.',
              romanized: 'Sobaka shvydko bihaye.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: 'Собака', meaning: 'dog' },
                { word: 'швидко', meaning: 'fast / quickly' },
              ],
            },
            {
              exPhrase: 'Нам треба бігти до автобуса.',
              romanized: 'Nam treba bihty do avtobusa.',
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: 'Нам', meaning: 'to us / we' },
                { word: 'треба', meaning: 'need to' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '그는 매일 아침 달립니다.',
              romanized: 'geuneun maeil achim dallimnida.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: '그는', meaning: 'he' },
                { word: '아침', meaning: 'morning' },
              ],
            },
            {
              exPhrase: '개는 빨리 달립니다.',
              romanized: 'gaeneun ppalli dallimnida.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: '개는', meaning: 'dog' },
                { word: '빨리', meaning: 'fast' },
              ],
            },
            {
              exPhrase: '우리는 버스까지 뛰어가야 해요.',
              romanized: 'urineun beoseukkaji ttwieogaya haeyo.',
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: '우리는', meaning: 'we' },
                { word: '까지', meaning: 'until / to' },
                { word: '해야 해요', meaning: 'have to' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '彼は毎朝走ります。',
              romanized: 'Kare wa maiasa hashirimasu.',
              translation: 'He runs every morning.',
              usedNewWords: [
                { word: '彼', meaning: 'he' },
                { word: '毎朝', meaning: 'every morning' },
              ],
            },
            {
              exPhrase: '犬は速く走ります。',
              romanized: 'Inu wa hayaku hashirimasu.',
              translation: 'The dog runs fast.',
              usedNewWords: [
                { word: '犬', meaning: 'dog' },
                { word: '速く', meaning: 'fast' },
              ],
            },
            {
              exPhrase: 'バスに向かって走らなければなりません。',
              romanized: 'Basu ni mukatte hashiranakereba narimasen.',
              translation: 'We need to run to the bus.',
              usedNewWords: [
                { word: '向かって', meaning: 'towards' },
                { word: 'なければなりません', meaning: 'have to / must' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Jump',
      head: 'Jump',
      tail: {
        translations: {
          DE: 'springen',
          CN: '跳',
          IT: 'saltare',
          UA: 'стрибати',
          KR: '뛰어오르다',
          JP: '跳ぶ',
        },
        pronunciations: {
          CN: 'tiào',
          UA: 'strybaty',
          KR: 'ttwieoreuda',
          JP: 'tobu',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Die Katze sprang auf den Tisch.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [
                { word: 'Die', meaning: 'the (feminine)' },
                { word: 'Katze', meaning: 'cat' },
                { word: 'auf', meaning: 'on / onto' },
                { word: 'den', meaning: 'the (masculine, this case)' },
                { word: 'Tisch', meaning: 'table' },
              ],
            },
            {
              exPhrase: 'Kinder springen gerne auf dem Bett.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: 'Kinder', meaning: 'children' },
                { word: 'gerne', meaning: 'gladly / love to' },
                { word: 'dem', meaning: 'the (dative)' },
                { word: 'Bett', meaning: 'bed' },
              ],
            },
            {
              exPhrase: 'Spring über die Pfütze.',
              translation: 'Jump over the puddle.',
              usedNewWords: [
                { word: 'über', meaning: 'over' },
                { word: 'Pfütze', meaning: 'puddle' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '猫跳到了桌子上。',
              romanized: 'Māo tiào dàole zhuōzi shàng.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [
                { word: '猫', meaning: 'cat' },
                { word: '到了', meaning: 'arrived at / onto' },
                { word: '桌子', meaning: 'table' },
                { word: '上', meaning: 'on / above' },
              ],
            },
            {
              exPhrase: '孩子们喜欢在床上跳。',
              romanized: 'Háizimen xǐhuān zài chuáng shàng tiào.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: '孩子们', meaning: 'children' },
                { word: '喜欢', meaning: 'like' },
                { word: '床', meaning: 'bed' },
              ],
            },
            {
              exPhrase: '跳过那个水坑。',
              romanized: 'Tiàoguò nàge shuǐkēng.',
              translation: 'Jump over the puddle.',
              usedNewWords: [
                { word: '过', meaning: 'over / across' },
                { word: '那个', meaning: 'that' },
                { word: '水坑', meaning: 'puddle' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Il gatto è saltato sul tavolo.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [
                { word: 'gatto', meaning: 'cat' },
                { word: 'è', meaning: 'is / has (auxiliary)' },
                { word: 'sul', meaning: 'on the' },
                { word: 'tavolo', meaning: 'table' },
              ],
            },
            {
              exPhrase: 'Ai bambini piace saltare sul letto.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: 'Ai', meaning: 'to the (plural)' },
                { word: 'bambini', meaning: 'children' },
                { word: 'piace', meaning: 'is pleasing to / likes' },
                { word: 'letto', meaning: 'bed' },
              ],
            },
            {
              exPhrase: 'Salta sopra la pozzanghera.',
              translation: 'Jump over the puddle.',
              usedNewWords: [
                { word: 'sopra', meaning: 'over' },
                { word: 'la', meaning: 'the (feminine)' },
                { word: 'pozzanghera', meaning: 'puddle' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Кіт стрибнув на стіл.',
              romanized: 'Kit strybnuv na stil.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [
                { word: 'Кіт', meaning: 'cat' },
                { word: 'на', meaning: 'on / onto' },
                { word: 'стіл', meaning: 'table' },
              ],
            },
            {
              exPhrase: 'Діти люблять стрибати на ліжку.',
              romanized: 'Dity lyublyat strybaty na lizhku.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: 'Діти', meaning: 'children' },
                { word: 'люблять', meaning: 'love / like' },
                { word: 'ліжку', meaning: 'bed' },
              ],
            },
            {
              exPhrase: 'Перестриб через калюжу.',
              romanized: 'Perestryb cherez kalyuzhu.',
              translation: 'Jump over the puddle.',
              usedNewWords: [
                { word: 'через', meaning: 'over / across' },
                { word: 'калюжу', meaning: 'puddle' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '고양이가 테이블 위로 뛰어올랐어요.',
              romanized: 'goyangiga teibeul wiro ttwieollasseoyo.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [
                { word: '고양이가', meaning: 'cat' },
                { word: '위로', meaning: 'onto / up to' },
              ],
            },
            {
              exPhrase: '아이들은 침대 위에서 뛰는 것을 좋아해요.',
              romanized: 'aideureun chimdae wieseo ttwineun geoseul joahaeyo.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: '아이들은', meaning: 'children' },
                { word: '침대', meaning: 'bed' },
                { word: '위에서', meaning: 'on top of' },
                { word: '것을', meaning: 'the act of' },
                { word: '좋아해요', meaning: 'like' },
              ],
            },
            {
              exPhrase: '웅덩이를 뛰어넘어요.',
              romanized: 'ungdeongireul ttwieoneomeoyo.',
              translation: 'Jump over the puddle.',
              usedNewWords: [{ word: '웅덩이를', meaning: 'puddle' }],
            },
          ],
          JP: [
            {
              exPhrase: '猫はテーブルに飛び乗りました。',
              romanized: 'Neko wa teeburu ni tobinorimashita.',
              translation: 'The cat jumped onto the table.',
              usedNewWords: [{ word: '猫', meaning: 'cat' }],
            },
            {
              exPhrase: '子供たちはベッドの上で飛び跳ねるのが好きです。',
              romanized:
                'Kodomotachi wa beddo no ue de tobihaneru no ga suki desu.',
              translation: 'Children love to jump on the bed.',
              usedNewWords: [
                { word: '子供たち', meaning: 'children' },
                { word: 'の', meaning: '(possessive particle)' },
                { word: '上で', meaning: 'on top of' },
                { word: 'が', meaning: '(subject marker)' },
                { word: '好きです', meaning: 'like' },
              ],
            },
            {
              exPhrase: '水たまりを飛び越えて。',
              romanized: 'Mizutamari wo tobikoete.',
              translation: 'Jump over the puddle.',
              usedNewWords: [{ word: '水たまり', meaning: 'puddle' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Sit',
      head: 'Sit',
      tail: {
        translations: {
          DE: 'sitzen',
          CN: '坐',
          IT: 'sedersi',
          UA: 'сидіти',
          KR: '앉다',
          JP: '座る',
        },
        pronunciations: { CN: 'zuò', UA: 'sydity', KR: 'antda', JP: 'suwaru' },
        examples: {
          DE: [
            {
              exPhrase: 'Bitte setz dich hier hin.',
              translation: 'Please sit down here.',
              usedNewWords: [
                { word: 'Bitte', meaning: 'please' },
                { word: 'dich', meaning: 'yourself' },
                { word: 'hier', meaning: 'here' },
              ],
            },
            {
              exPhrase: 'Sie sitzt am Fenster.',
              translation: 'She sits by the window.',
              usedNewWords: [
                { word: 'am', meaning: 'at the' },
                { word: 'Fenster', meaning: 'window' },
              ],
            },
            {
              exPhrase: 'Wir saßen auf dem Gras.',
              translation: 'We sat on the grass.',
              usedNewWords: [{ word: 'Gras', meaning: 'grass' }],
            },
          ],
          CN: [
            {
              exPhrase: '请坐在这里。',
              romanized: 'Qǐng zuò zài zhèlǐ.',
              translation: 'Please sit down here.',
              usedNewWords: [
                { word: '请', meaning: 'please' },
                { word: '这里', meaning: 'here' },
              ],
            },
            {
              exPhrase: '她坐在窗边。',
              romanized: 'Tā zuò zài chuāng biān.',
              translation: 'She sits by the window.',
              usedNewWords: [{ word: '窗边', meaning: 'by the window' }],
            },
            {
              exPhrase: '我们坐在草地上。',
              romanized: 'Wǒmen zuò zài cǎodì shàng.',
              translation: 'We sat on the grass.',
              usedNewWords: [{ word: '草地', meaning: 'grass / lawn' }],
            },
          ],
          IT: [
            {
              exPhrase: 'Siediti qui, per favore.',
              translation: 'Please sit down here.',
              usedNewWords: [
                { word: 'qui', meaning: 'here' },
                { word: 'per favore', meaning: 'please' },
              ],
            },
            {
              exPhrase: 'Lei si siede vicino alla finestra.',
              translation: 'She sits by the window.',
              usedNewWords: [
                { word: 'vicino a', meaning: 'near' },
                { word: 'alla', meaning: 'to the (feminine)' },
                { word: 'finestra', meaning: 'window' },
              ],
            },
            {
              exPhrase: "Ci siamo seduti sull'erba.",
              translation: 'We sat on the grass.',
              usedNewWords: [
                { word: 'Ci', meaning: 'we (reflexive)' },
                { word: "sull'", meaning: 'on the' },
                { word: 'erba', meaning: 'grass' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Будь ласка, сідай тут.',
              romanized: 'Bud laska, siday tut.',
              translation: 'Please sit down here.',
              usedNewWords: [
                { word: 'Будь ласка', meaning: 'please' },
                { word: 'тут', meaning: 'here' },
              ],
            },
            {
              exPhrase: 'Вона сидить біля вікна.',
              romanized: 'Vona sydyt bilya vikna.',
              translation: 'She sits by the window.',
              usedNewWords: [
                { word: 'біля', meaning: 'near / by' },
                { word: 'вікна', meaning: 'window' },
              ],
            },
            {
              exPhrase: 'Ми сиділи на траві.',
              romanized: 'My sydily na travi.',
              translation: 'We sat on the grass.',
              usedNewWords: [
                { word: 'Ми', meaning: 'we' },
                { word: 'траві', meaning: 'grass' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '여기 앉으세요.',
              romanized: 'yeogi anjeuseyo.',
              translation: 'Please sit down here.',
              usedNewWords: [{ word: '여기', meaning: 'here' }],
            },
            {
              exPhrase: '그녀는 창가에 앉아요.',
              romanized: 'geunyeoneun changgae anjayo.',
              translation: 'She sits by the window.',
              usedNewWords: [{ word: '창가에', meaning: 'by the window' }],
            },
            {
              exPhrase: '우리는 잔디에 앉았어요.',
              romanized: 'urineun jandie anjasseoyo.',
              translation: 'We sat on the grass.',
              usedNewWords: [{ word: '잔디에', meaning: 'on the grass' }],
            },
          ],
          JP: [
            {
              exPhrase: 'どうぞここに座ってください。',
              romanized: 'Douzo koko ni suwatte kudasai.',
              translation: 'Please sit down here.',
              usedNewWords: [
                { word: 'どうぞ', meaning: 'please' },
                { word: 'ここ', meaning: 'here' },
                { word: 'ください', meaning: 'please (do this)' },
              ],
            },
            {
              exPhrase: '彼女は窓のそばに座ります。',
              romanized: 'Kanojo wa mado no soba ni suwarimasu.',
              translation: 'She sits by the window.',
              usedNewWords: [
                { word: '窓', meaning: 'window' },
                { word: 'そばに', meaning: 'next to' },
              ],
            },
            {
              exPhrase: '私たちは芝生に座りました。',
              romanized: 'Watashitachi wa shibafu ni suwarimashita.',
              translation: 'We sat on the grass.',
              usedNewWords: [
                { word: '私たち', meaning: 'we' },
                { word: '芝生', meaning: 'grass' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Stand',
      head: 'Stand',
      tail: {
        translations: {
          DE: 'stehen',
          CN: '站',
          IT: 'stare in piedi',
          UA: 'стояти',
          KR: '서다',
          JP: '立つ',
        },
        pronunciations: { CN: 'zhàn', UA: 'stoyaty', KR: 'seoda', JP: 'tatsu' },
        examples: {
          DE: [
            {
              exPhrase: 'Bitte steh auf.',
              translation: 'Please stand up.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Er steht in der Nähe der Tür.',
              translation: 'He stands near the door.',
              usedNewWords: [
                { word: 'in', meaning: 'in' },
                { word: 'der', meaning: 'the (dative/genitive)' },
                { word: 'Nähe', meaning: 'vicinity / near' },
                { word: 'Tür', meaning: 'door' },
              ],
            },
            {
              exPhrase: 'Sie standen in der Schlange.',
              translation: 'They stood in line.',
              usedNewWords: [{ word: 'Schlange', meaning: 'line / queue' }],
            },
          ],
          CN: [
            {
              exPhrase: '请站起来。',
              romanized: 'Qǐng zhàn qǐlái.',
              translation: 'Please stand up.',
              usedNewWords: [{ word: '起来', meaning: 'up' }],
            },
            {
              exPhrase: '他站在门附近。',
              romanized: 'Tā zhàn zài mén fùjìn.',
              translation: 'He stands near the door.',
              usedNewWords: [
                { word: '门', meaning: 'door' },
                { word: '附近', meaning: 'nearby' },
              ],
            },
            {
              exPhrase: '他们排队站着。',
              romanized: 'Tāmen páiduì zhànzhe.',
              translation: 'They stood in line.',
              usedNewWords: [
                { word: '他们', meaning: 'they' },
                { word: '排队', meaning: 'queue up' },
                { word: '着', meaning: '(ongoing state particle)' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Alzati, per favore.',
              translation: 'Please stand up.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Lui sta in piedi vicino alla porta.',
              translation: 'He stands near the door.',
              usedNewWords: [{ word: 'porta', meaning: 'door' }],
            },
            {
              exPhrase: 'Stavano in fila.',
              translation: 'They stood in line.',
              usedNewWords: [{ word: 'fila', meaning: 'line / queue' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Будь ласка, встань.',
              romanized: 'Bud laska, vstan.',
              translation: 'Please stand up.',
              usedNewWords: [],
            },
            {
              exPhrase: 'Він стоїть біля дверей.',
              romanized: 'Vin stoyit bilya dverey.',
              translation: 'He stands near the door.',
              usedNewWords: [{ word: 'дверей', meaning: 'door (genitive)' }],
            },
            {
              exPhrase: 'Вони стояли в черзі.',
              romanized: 'Vony stoyaly v chersi.',
              translation: 'They stood in line.',
              usedNewWords: [
                { word: 'Вони', meaning: 'they' },
                { word: 'черзі', meaning: 'line / queue' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '일어서세요.',
              romanized: 'ireoseoseyo.',
              translation: 'Please stand up.',
              usedNewWords: [],
            },
            {
              exPhrase: '그는 문 근처에 서 있어요.',
              romanized: 'geuneun mun geuncheoe seo isseoyo.',
              translation: 'He stands near the door.',
              usedNewWords: [
                { word: '문', meaning: 'door' },
                { word: '근처에', meaning: 'near' },
              ],
            },
            {
              exPhrase: '그들은 줄을 서 있었어요.',
              romanized: 'geudeureun jureul seo isseosseoyo.',
              translation: 'They stood in line.',
              usedNewWords: [
                { word: '그들은', meaning: 'they' },
                { word: '줄을', meaning: 'line / queue' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '立ってください。',
              romanized: 'Tatte kudasai.',
              translation: 'Please stand up.',
              usedNewWords: [],
            },
            {
              exPhrase: '彼はドアの近くに立っています。',
              romanized: 'Kare wa doa no chikaku ni tatteimasu.',
              translation: 'He stands near the door.',
              usedNewWords: [{ word: '近くに', meaning: 'near' }],
            },
            {
              exPhrase: '彼らは列に並んで立ちました。',
              romanized: 'Karera wa retsu ni narande tachimashita.',
              translation: 'They stood in line.',
              usedNewWords: [
                { word: '彼ら', meaning: 'they' },
                { word: '列', meaning: 'line / row' },
                { word: '並んで', meaning: 'lining up' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Move',
      head: 'Move',
      tail: {
        translations: {
          DE: 'sich bewegen',
          CN: '移动',
          IT: 'muoversi',
          UA: 'рухатися',
          KR: '움직이다',
          JP: '動く',
        },
        pronunciations: {
          CN: 'yídòng',
          UA: 'rukhatysya',
          KR: 'umjikida',
          JP: 'ugoku',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Beweg dich nicht!',
              translation: "Don't move!",
              usedNewWords: [{ word: 'nicht', meaning: 'not' }],
            },
            {
              exPhrase: 'Das Auto bewegte sich langsam.',
              translation: 'The car moved slowly.',
              usedNewWords: [
                { word: 'Das', meaning: 'the / this' },
                { word: 'Auto', meaning: 'car' },
              ],
            },
            {
              exPhrase: 'Wir ziehen in ein neues Haus.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: 'ein', meaning: 'a' },
                { word: 'neues', meaning: 'new' },
                { word: 'Haus', meaning: 'house' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '别动！',
              romanized: 'Bié dòng!',
              translation: "Don't move!",
              usedNewWords: [{ word: '别', meaning: "don't" }],
            },
            {
              exPhrase: '汽车缓慢地移动。',
              romanized: 'Qìchē huǎnmàn de yídòng.',
              translation: 'The car moved slowly.',
              usedNewWords: [
                { word: '汽车', meaning: 'car' },
                { word: '缓慢地', meaning: 'slowly' },
              ],
            },
            {
              exPhrase: '我们要搬到新房子。',
              romanized: 'Wǒmen yào bān dào xīn fángzi.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: '要', meaning: 'want to / will' },
                { word: '到', meaning: 'to' },
                { word: '新', meaning: 'new' },
                { word: '房子', meaning: 'house' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Non ti muovere!',
              translation: "Don't move!",
              usedNewWords: [
                { word: 'Non', meaning: 'not' },
                { word: 'ti', meaning: 'yourself' },
              ],
            },
            {
              exPhrase: "L'auto si muoveva lentamente.",
              translation: 'The car moved slowly.',
              usedNewWords: [{ word: "L'auto", meaning: 'the car' }],
            },
            {
              exPhrase: 'Ci trasferiamo in una nuova casa.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: 'in', meaning: 'in' },
                { word: 'una', meaning: 'a (feminine)' },
                { word: 'nuova', meaning: 'new' },
                { word: 'casa', meaning: 'house' },
              ],
            },
          ],
          UA: [
            {
              exPhrase: 'Не рухайся!',
              romanized: 'Ne rukhaysya!',
              translation: "Don't move!",
              usedNewWords: [{ word: 'Не', meaning: 'not' }],
            },
            {
              exPhrase: 'Машина повільно рухалася.',
              romanized: 'Mashyna povilno rukhalasya.',
              translation: 'The car moved slowly.',
              usedNewWords: [{ word: 'Машина', meaning: 'car' }],
            },
            {
              exPhrase: 'Ми переїжджаємо в новий будинок.',
              romanized: 'My pereyizhdzhayemo v novyy budynok.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: 'новий', meaning: 'new' },
                { word: 'будинок', meaning: 'house' },
              ],
            },
          ],
          KR: [
            {
              exPhrase: '움직이지 마세요!',
              romanized: 'umjikiji maseyo!',
              translation: "Don't move!",
              usedNewWords: [{ word: '마세요', meaning: "don't" }],
            },
            {
              exPhrase: '차가 천천히 움직였어요.',
              romanized: 'chaga cheoncheonhi umjigyeosseoyo.',
              translation: 'The car moved slowly.',
              usedNewWords: [{ word: '차가', meaning: 'car' }],
            },
            {
              exPhrase: '우리는 새 집으로 이사해요.',
              romanized: 'urineun sae jibeuro isahaeyo.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: '새', meaning: 'new' },
                { word: '집으로', meaning: 'to the house' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: '動かないで！',
              romanized: 'Ugokanaide!',
              translation: "Don't move!",
              usedNewWords: [],
            },
            {
              exPhrase: '車はゆっくり動きました。',
              romanized: 'Kuruma wa yukkuri ugokimashita.',
              translation: 'The car moved slowly.',
              usedNewWords: [{ word: '車', meaning: 'car' }],
            },
            {
              exPhrase: '私たちは新しい家に引っ越します。',
              romanized: 'Watashitachi wa atarashii ie ni hikkoshimasu.',
              translation: 'We are moving to a new house.',
              usedNewWords: [
                { word: '新しい', meaning: 'new' },
                { word: '家', meaning: 'house' },
              ],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
    {
      word: 'Stop',
      head: 'Stop',
      tail: {
        translations: {
          DE: 'anhalten',
          CN: '停',
          IT: 'fermarsi',
          UA: 'зупинятися',
          KR: '멈추다',
          JP: '止まる',
        },
        pronunciations: {
          CN: 'tíng',
          UA: 'zupynyatysya',
          KR: 'meomchuda',
          JP: 'tomaru',
        },
        examples: {
          DE: [
            {
              exPhrase: 'Bleib genau da stehen.',
              translation: 'Stop right there.',
              usedNewWords: [
                { word: 'Bleib', meaning: 'stay' },
                { word: 'genau', meaning: 'exactly' },
                { word: 'da', meaning: 'there' },
              ],
            },
            {
              exPhrase: 'Der Bus hielt plötzlich an.',
              translation: 'The bus stopped suddenly.',
              usedNewWords: [{ word: 'plötzlich', meaning: 'suddenly' }],
            },
            {
              exPhrase: 'Bitte hör auf zu reden.',
              translation: 'Please stop talking.',
              usedNewWords: [
                { word: 'reden', meaning: 'to talk / speak' },
                { word: 'zu', meaning: 'to' },
              ],
            },
          ],
          CN: [
            {
              exPhrase: '停在那里。',
              romanized: 'Tíng zài nàlǐ.',
              translation: 'Stop right there.',
              usedNewWords: [{ word: '那里', meaning: 'there' }],
            },
            {
              exPhrase: '公交车突然停了。',
              romanized: 'Gōngjiāochē túrán tíngle.',
              translation: 'The bus stopped suddenly.',
              usedNewWords: [
                { word: '突然', meaning: 'suddenly' },
                { word: '了', meaning: '(marks completed action)' },
              ],
            },
            {
              exPhrase: '请不要再说话了。',
              romanized: 'Qǐng bùyào zài shuōhuà le.',
              translation: 'Please stop talking.',
              usedNewWords: [
                { word: '不要', meaning: "don't" },
                { word: '再', meaning: 'again / anymore' },
                { word: '说话', meaning: 'talk / speak' },
              ],
            },
          ],
          IT: [
            {
              exPhrase: 'Fermati proprio lì.',
              translation: 'Stop right there.',
              usedNewWords: [
                { word: 'proprio', meaning: 'exactly / right' },
                { word: 'lì', meaning: 'there' },
              ],
            },
            {
              exPhrase: "L'autobus si è fermato improvvisamente.",
              translation: 'The bus stopped suddenly.',
              usedNewWords: [{ word: 'improvvisamente', meaning: 'suddenly' }],
            },
            {
              exPhrase: 'Per favore, smetti di parlare.',
              translation: 'Please stop talking.',
              usedNewWords: [{ word: 'parlare', meaning: 'to talk' }],
            },
          ],
          UA: [
            {
              exPhrase: 'Зупинись там.',
              romanized: 'Zupynys tam.',
              translation: 'Stop right there.',
              usedNewWords: [{ word: 'там', meaning: 'there' }],
            },
            {
              exPhrase: 'Автобус раптово зупинився.',
              romanized: 'Avtobus raptovo zupynyvsya.',
              translation: 'The bus stopped suddenly.',
              usedNewWords: [{ word: 'раптово', meaning: 'suddenly' }],
            },
            {
              exPhrase: 'Будь ласка, перестань говорити.',
              romanized: 'Bud laska, perestan hovoryty.',
              translation: 'Please stop talking.',
              usedNewWords: [{ word: 'говорити', meaning: 'to talk / speak' }],
            },
          ],
          KR: [
            {
              exPhrase: '거기서 멈추세요.',
              romanized: 'geogiseo meomchuseyo.',
              translation: 'Stop right there.',
              usedNewWords: [{ word: '거기서', meaning: 'there' }],
            },
            {
              exPhrase: '버스가 갑자기 멈췄어요.',
              romanized: 'beoseuga gapjagi meomchwosseoyo.',
              translation: 'The bus stopped suddenly.',
              usedNewWords: [{ word: '갑자기', meaning: 'suddenly' }],
            },
            {
              exPhrase: '그만 말하세요.',
              romanized: 'geuman malhaseyo.',
              translation: 'Please stop talking.',
              usedNewWords: [
                { word: '그만', meaning: 'stop / enough' },
                { word: '말하세요', meaning: 'speak' },
              ],
            },
          ],
          JP: [
            {
              exPhrase: 'そこで止まって。',
              romanized: 'Soko de tomatte.',
              translation: 'Stop right there.',
              usedNewWords: [{ word: 'そこで', meaning: 'there' }],
            },
            {
              exPhrase: 'バスは突然止まりました。',
              romanized: 'Basu wa totsuzen tomarimashita.',
              translation: 'The bus stopped suddenly.',
              usedNewWords: [{ word: '突然', meaning: 'suddenly' }],
            },
            {
              exPhrase: '話すのをやめてください。',
              romanized: 'Hanasu no wo yamete kudasai.',
              translation: 'Please stop talking.',
              usedNewWords: [{ word: '話す', meaning: 'to talk / speak' }],
            },
          ],
        },
      },
      masteryLevel: 1,
    },
  ],
}
