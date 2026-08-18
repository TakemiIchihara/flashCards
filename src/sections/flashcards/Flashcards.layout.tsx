import type {
  FlashCardsType,
  TranslationsType,
} from '../../assets/cardSets/Flashcards.type'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { useRef, useState } from 'react'

gsap.registerPlugin(useGSAP, Draggable)

type LayoutProps = {
  flashcard: FlashCardsType
  lang: keyof TranslationsType
  onResolve: (change: MLChange) => void // ML as in Mastery Level
}

type MLChange = 'up' | 'same' | 'down'

const SWIP_THLESHOLD_X = 200
const SWIP_THLESHOLD_Y = 100

export const FlashcardsLayout = ({
  flashcard,
  lang,
  onResolve,
}: LayoutProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const draggableRef = useRef<Draggable | null>(null)
  const [isFlipped, setIsFlipped] = useState<boolean>(false)

  const { contextSafe } = useGSAP(() => {
    // Draggable.create returns an array of Draggable instances, and the square brackets deconstruct to pull the first element.
    // To do this without deconstruction, it would be another line with const instance = AllInstances[0]
    const [instance] = Draggable.create(cardRef.current, {
      type: 'x,y',
      inertia: true,
      onDrag: function () {
        const tilt = gsap.utils.clamp(-10, 10, this.x * 0.05)
        gsap.set(cardRef.current, { rotate: tilt })
      },
      onDragEnd: function () {
        if (this.x > SWIP_THLESHOLD_X) return resolveSwipe('up', 'right')
        if (this.x < -SWIP_THLESHOLD_X) return resolveSwipe('same', 'left')
        if (this.y > SWIP_THLESHOLD_Y) return resolveSwipe('down', 'down')
        gsap.to(cardRef.current, {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 0.3,
          ease: 'power2.out',
        })
      },
    })
    instance.disable()
    draggableRef.current = instance
  }, [])

  const resolveSwipe = contextSafe(
    (levelChange: MLChange, dir: 'right' | 'left' | 'down') => {
      const flyTo = {
        right: { x: 500, rotate: '15deg' },
        left: { x: -500, rotate: '-15deg' },
        down: { y: 500 },
      }[dir] // instead of writing another line with flyTo[dir] to look up the items of a matched key, this can be achieved with one line
      gsap.to(cardRef.current, {
        ...flyTo,
        duration: 0.4,
        ease: 'power1.out',
        onComplete: () => onResolve(levelChange),
      })
    }
  )

  const handleFlip = contextSafe(() => {
    gsap.to(cardRef.current, {
      rotationY: isFlipped ? 0 : 180,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => draggableRef.current?.enable(),
    })

    setIsFlipped(!isFlipped)
  })

  return (
    <div
      className="cursor-point h-110 w-80"
      style={{ perspective: 1000 }}
      onClick={handleFlip}
    >
      <div
        className="relative h-full w-full"
        style={{ transformStyle: 'preserve-3d' }}
        ref={cardRef}
      >
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-amber-100"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h2 className="text-4xl font-normal text-amber-950">
            {flashcard.word}
          </h2>
        </div>
        <div
          className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-amber-400"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {/* {card.translations.map((el) => (<h2 className="text-amber-950">{card.translations[el]}</h2>))} */}
          <h2 className="text-4xl font-extrabold text-amber-950">
            {flashcard.translations[lang]}
          </h2>
        </div>
      </div>
    </div>
  )
}
