import { useEffect, useMemo, useRef, useState } from 'react'

// Option: paste your key here, or leave as-is and type it into the page.
// In a Vite project you could use: import.meta.env.VITE_GOOGLE_TTS_KEY
const API_KEY: string = 'PASTE_YOUR_API_KEY_HERE'
type Voice = { lang: string; code: string; name: string; gender: string }

const BASE = 'https://texttospeech.googleapis.com/v1'

const LANGS = [
  {
    label: 'German',
    codes: ['de-DE'],
    text: 'Hallo! Willkommen. Wie gefällt dir diese Stimme?',
  },
  {
    label: 'Chinese',
    codes: ['cmn-CN', 'cmn-TW'],
    text: '你好！欢迎。你喜欢这个声音吗？',
  },
  {
    label: 'Korean',
    codes: ['ko-KR'],
    text: '안녕하세요! 환영합니다. 이 목소리가 마음에 드세요?',
  },
  {
    label: 'Italian',
    codes: ['it-IT'],
    text: 'Ciao! Benvenuto. Ti piace questa voce?',
  },
  {
    label: 'Japanese',
    codes: ['ja-JP'],
    text: 'こんにちは！ようこそ。この声はいかがですか？',
  },
]

// "de-DE-Chirp3-HD-Aoede" -> "Chirp3-HD"; "ja-JP-Neural2-B" -> "Neural2"
const voiceType = (name: string) => {
  const parts = name.split('-').slice(2)
  return parts.length > 1 ? parts.slice(0, -1).join('-') : parts[0] || 'Other'
}

export function VoiceSamples() {
  const [apiKey, setApiKey] = useState(
    API_KEY !== 'PASTE_YOUR_API_KEY_HERE' ? API_KEY : ''
  )
  const [voices, setVoices] = useState<Voice[]>([])
  const [typeFilter, setTypeFilter] = useState('')
  const [texts, setTexts] = useState<Record<string, string>>(() =>
    Object.fromEntries(LANGS.map((l) => [l.label, l.text]))
  )
  const [status, setStatus] = useState({ msg: '', error: false })
  const [loading, setLoading] = useState(false)
  const [busyId, setBusyId] = useState<string | null>(null) // voice being fetched
  const [playingId, setPlayingId] = useState<string | null>(null)

  const audioRef = useRef<HTMLAudioElement | null>(null)
  const cache = useRef(new Map<string, string>())

  const types = useMemo(
    () => [...new Set(voices.map((v) => voiceType(v.name)))].sort(),
    [voices]
  )

  async function loadVoices(key = apiKey.trim()) {
    if (!key)
      return setStatus({ msg: 'Enter your API key first.', error: true })
    setLoading(true)
    setStatus({ msg: 'Loading voices…', error: false })
    try {
      const all: Voice[] = []
      for (const lang of LANGS) {
        for (const code of lang.codes) {
          const r = await fetch(
            `${BASE}/voices?languageCode=${code}&key=${encodeURIComponent(key)}`
          )
          const d = await r.json()
          if (!r.ok) throw new Error(d.error?.message || r.statusText)
          for (const v of d.voices || []) {
            all.push({
              lang: lang.label,
              code,
              name: v.name,
              gender: (v.ssmlGender || '').toLowerCase(),
            })
          }
        }
      }
      setVoices(all)
      setStatus({ msg: `${all.length} voices loaded.`, error: false })
    } catch (e) {
      setStatus({
        msg: `Could not load voices: ${e instanceof Error ? e.message : String(e)}`,
        error: true,
      })
    } finally {
      setLoading(false)
    }
  }

  // Auto-load when a key is hard-coded
  useEffect(() => {
    if (apiKey) loadVoices(apiKey)
    return () => audioRef.current?.pause()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function stop() {
    audioRef.current?.pause()
    audioRef.current = null
    setPlayingId(null)
  }

  async function play(v: Voice) {
    if (playingId === v.name) return stop()
    stop()
    const text = texts[v.lang]
    const id = `${v.name}|${text}`
    setBusyId(v.name)
    try {
      let b64 = cache.current.get(id)
      if (!b64) {
        const r = await fetch(
          `${BASE}/text:synthesize?key=${encodeURIComponent(apiKey.trim())}`,
          {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              input: { text },
              voice: { languageCode: v.code, name: v.name },
              audioConfig: { audioEncoding: 'MP3' },
            }),
          }
        )
        const d = await r.json()
        if (!r.ok) throw new Error(d.error?.message || r.statusText)
        const content: string = d.audioContent
        cache.current.set(id, content)
        b64 = content
      }
      const audio = new Audio(`data:audio/mp3;base64,${b64}`)
      audio.onended = () => setPlayingId(null)
      audioRef.current = audio
      setPlayingId(v.name)
      await audio.play()
      setStatus({ msg: '', error: false })
    } catch (e) {
      setPlayingId(null)
      setStatus({
        msg: `${v.name}: ${e instanceof Error ? e.message : String(e)}`,
        error: true,
      })
    } finally {
      setBusyId(null)
    }
  }

  function exportCsv() {
    const rows = [
      ['language', 'language_code', 'voice_name', 'gender', 'type'],
    ].concat(
      voices.map((v) => [v.lang, v.code, v.name, v.gender, voiceType(v.name)])
    )
    const csv = '\ufeff' + rows.map((r) => r.join(',')).join('\n')
    const a = document.createElement('a')
    a.href = URL.createObjectURL(
      new Blob([csv], { type: 'text/csv;charset=utf-8' })
    )
    a.download = 'google-tts-voices.csv'
    a.click()
    URL.revokeObjectURL(a.href)
  }

  const field =
    'rounded-md border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100'

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <main className="mx-auto max-w-3xl px-4 pt-6 pb-16">
        <h1 className="text-2xl font-semibold">
          Google Cloud TTS voice tester
        </h1>
        <p className="mb-5 text-slate-600 dark:text-slate-400">
          Add an API key, load the voices, then press Play to hear each one.
        </p>

        <div className="mb-2 flex flex-wrap gap-2">
          <input
            type="password"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && loadVoices()}
            placeholder="Google Cloud API key"
            autoComplete="off"
            aria-label="API key"
            className={`${field} min-w-[16rem] flex-1`}
          />
          <button
            onClick={() => loadVoices()}
            disabled={loading}
            className="rounded-md bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none disabled:opacity-60 dark:bg-blue-400 dark:text-slate-900 dark:hover:bg-blue-300"
          >
            {loading ? 'Loading…' : 'Load voices'}
          </button>
        </div>

        <p
          role="status"
          className={`min-h-[1.5rem] text-sm ${status.error ? 'text-red-700 dark:text-red-400' : 'text-slate-600 dark:text-slate-400'}`}
        >
          {status.msg}
        </p>

        {voices.length > 0 && (
          <div className="mb-3 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <label htmlFor="type">Voice type</label>
            <select
              id="type"
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className={field}
            >
              <option value="">All</option>
              {types.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <button
              onClick={exportCsv}
              className="rounded-md border border-blue-700 px-3 py-2 text-blue-700 hover:bg-blue-50 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-800"
            >
              Export CSV
            </button>
          </div>
        )}

        <div className="space-y-3">
          {LANGS.map((lang, i) => {
            const list = voices.filter(
              (v) =>
                v.lang === lang.label &&
                (!typeFilter || voiceType(v.name) === typeFilter)
            )
            if (voices.length && !list.length) return null
            return (
              <details
                key={lang.label}
                open={i === 0}
                className="rounded-lg border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
              >
                <summary className="cursor-pointer px-4 py-3 font-semibold">
                  {lang.label}
                  {voices.length > 0 && ` (${list.length})`}
                </summary>
                <div className="px-4 pb-4">
                  {voices.length === 0 ? (
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      Voice names and Play buttons appear here once the API key
                      is added ({lang.codes.join(', ')}).
                    </p>
                  ) : (
                    <>
                      <textarea
                        rows={2}
                        value={texts[lang.label]}
                        onChange={(e) =>
                          setTexts({ ...texts, [lang.label]: e.target.value })
                        }
                        aria-label={`${lang.label} sample text`}
                        className={`${field} mb-2 w-full resize-y`}
                      />
                      <ul>
                        {list.map((v) => (
                          <li
                            key={v.name}
                            className="flex items-center gap-3 border-t border-slate-200 py-2 dark:border-slate-800"
                          >
                            <span className="min-w-0 flex-1 break-words">
                              {v.name}
                            </span>
                            <span className="text-sm whitespace-nowrap text-slate-500 dark:text-slate-400">
                              {v.gender}
                            </span>
                            <button
                              onClick={() => play(v)}
                              disabled={busyId === v.name}
                              className={`w-20 rounded-md border border-blue-700 px-3 py-1.5 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:border-blue-400 ${
                                playingId === v.name
                                  ? 'text-blue-700 dark:text-blue-400'
                                  : 'bg-blue-700 text-white dark:bg-blue-400 dark:text-slate-900'
                              }`}
                            >
                              {busyId === v.name
                                ? '…'
                                : playingId === v.name
                                  ? 'Stop'
                                  : 'Play'}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </details>
            )
          })}
        </div>
      </main>
    </div>
  )
}

export default VoiceSamples
