import type { LanguageCodesType } from '@/assets/Flashcards/Flashcards.type'

const GOOGLE_TTS_API_KEY = import.meta.env.VITE_GOOGLE_TTS_API_KEY

const speechLanguageMap: Partial<
  Record<LanguageCodesType, { languageCode: string; name: string }>
> = {
  DE: { languageCode: 'de-DE', name: 'de-DE-Chirp3-HD-Puck' },
  CN: { languageCode: 'cmn-CN', name: 'cmn-CN-Chirp3-HD-Zubenelgenubi' },
  UA: { languageCode: 'uk-UA', name: 'uk-UA-Chirp3-HD-Alnilam' },
}
export const speak = async (
  word: string | undefined,
  speechLang: LanguageCodesType,
  onStart?: () => void,
  onEnd?: () => void
) => {
  if (!word) return

  if ('audioSession' in navigator) {
    ;(
      navigator as unknown as { audioSession: { type: string } }
    ).audioSession.type = 'ambient'
  }

  const voice = speechLanguageMap[speechLang]

  onStart?.()

  try {
    const response = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${GOOGLE_TTS_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text: word },
          voice: {
            languageCode: voice?.languageCode,
            name: voice?.name,
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.8,
          },
        }),
      }
    )

    const data = await response.json()

    if (!data.audioContent) {
      console.error('TTS Error ', data)
      return
    }

    const audio = new Audio(`data:audio/MP3;base64,${data.audioContent}`)

    await new Promise<void>((resolve) => {
      audio.onended = () => resolve()
      audio.onerror = () => resolve()
      audio.play()
    })
  } catch (err) {
    console.error('Failed to fetch speech: ', err)
  } finally {
    onEnd?.()
  }
}
