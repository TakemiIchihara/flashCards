import { Draggable, gsap, useGSAP } from '@/lib/gsap'
import { useRef, type ReactNode } from 'react'

const ITEM_HEIGHT = 88
const VISIBLE_COUNT = 5

type WheelItems = {
  key: string
  content: ReactNode
}

// the whole idea is to move the div that holds all the category Links and change values of element's properties to make it look like wheeling in three dimensions
export const LinkWheel = ({
  items,
  onSelect,
}: {
  items: WheelItems[]
  onSelect?: (key: string) => void
}) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])
  const wheelHeight = ITEM_HEIGHT * VISIBLE_COUNT
  const spacerCount = (VISIBLE_COUNT - 1) / 2

  useGSAP(() => {
    const track = trackRef.current
    if (!track) return

    // dear cluade: what do these minY and maxY play role here?
    const minY = -(items.length - 1) * ITEM_HEIGHT
    const maxY = 0

    // define the wheeling efect
    const wheelEffect = () => {
      const y = gsap.getProperty(track, 'y') as number // getting the current y position
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const itemCenter = y + i * ITEM_HEIGHT + ITEM_HEIGHT / 2 // + ITEM_HEIGHT / 2 is an adjustment to align the element center and y is usually negative so it will negate the amount defined by i * ITEM_HEIGHT to bring the element to the center
        const dist = Math.abs(itemCenter - wheelHeight / 2) // wheelHeight / 2 is the centered position value so this is to calculate how far the element is from the container's center
        const ratio = Math.min(dist / ITEM_HEIGHT, 2) // when it is centered it is 0. The more element is far away from the center, the higher the value it gets except 2 is the maxmum count
        const isSelectable = dist < ITEM_HEIGHT / 2

        gsap.to(el, {
          scale: 1 - ratio * 0.18,
          autoAlpha:
            dist < ITEM_HEIGHT / 2 ? Math.max(1 - ratio * 0.4, 0.15) : 0,
          filter: `blur(${Math.pow(ratio, 1.5) * 1.5}px)`,
          x: ratio * (ratio / 2) * 60,
          duration: 0.08,
          overwrite: 'auto',
        })

        el.style.pointerEvents = isSelectable ? 'auto' : 'none'
      })
    }

    const snapY = gsap.utils.snap(ITEM_HEIGHT) // this would snap to the nearest value multiplied by the ITEM_HEIGHT
    const draggable = Draggable.create(track, {
      type: 'y',
      bounds: { minY, maxY },
      inertia: true, // required for the snapping effect
      snap: { y: snapY },
      onDrag: wheelEffect, // this needs to run in order for the visual effect of each element to work
      onThrowUpdate: wheelEffect, // fires every animation frame after released keep animation live during the momentum phase after letting go
      onThrowComplete: () => {
        const y = gsap.getProperty(track, 'y') as number
        const index = Math.round(-y / ITEM_HEIGHT)
        console.log('[LinkWheel]This is how the index looks like: ', index)
        onSelect?.(items[index]?.key)
      },
    })[0]

    wheelEffect()

    return () => {
      draggable.kill()
    }
  }, [items, onSelect, wheelHeight])

  return (
    <div
      className="relative w-full overflow-hidden"
      style={{ height: wheelHeight }}
    >
      <div ref={trackRef} className="relative" style={{ cursor: 'grab' }}>
        {/* using Array.from to select the wanted amount */}
        {Array.from({ length: spacerCount }).map((_, i) => (
          <div key={`spacer-top-${i}`} style={{ height: ITEM_HEIGHT }} />
        ))}
        {items.map((item, i) => (
          <div
            key={item.key}
            ref={(el) => {
              itemRefs.current[i + spacerCount] = el
            }}
            className="flex items-center justify-end"
            style={{
              height: ITEM_HEIGHT,
              willChange: 'transform, filter, opacity',
              transformOrigin: 'right center',
            }}
          >
            {item.content}
          </div>
        ))}
        {Array.from({ length: spacerCount }).map((_, i) => (
          <div key={`spacer-bottom-${i}`} style={{ height: ITEM_HEIGHT }} />
        ))}
      </div>
    </div>
  )
}
