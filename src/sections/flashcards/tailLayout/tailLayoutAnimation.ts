import { gsap, Flip } from '@/lib/gsap'

export const createTailAnimationWord = (component: HTMLDivElement) => {
  if (!component) return

  const q = gsap.utils.selector(component)
  const [box, secondary] = q<HTMLDivElement>('[data-container]')
  const title = q<HTMLElement>('h2')[0]

  // start state
  gsap.set([box, secondary], { autoAlpha: 0 })
  gsap.set(box, { flexDirection: 'column' })
  gsap.set(title, { fontSize: '4rem' })

  const x = component.clientWidth / 2 - (box.offsetLeft + box.offsetWidth / 2)
  const y = component.clientHeight / 2 - (box.offsetTop + box.offsetHeight / 2)
  gsap.set(box, { x, y })

  const tl = gsap.timeline()

  tl.to(box, { autoAlpha: 1, duration: 0.6 }).add(() => {
    // extract both box and its children elements to make it a fluid transition
    const targets = [box, ...box.querySelectorAll<HTMLElement>('[data-flip]')]
    const state = Flip.getState(targets, { props: 'fontSize' })

    gsap.set(box, { clearProps: 'transform,flexDirection' })
    gsap.set(title, { clearProps: 'fontSize' })

    Flip.from(state, {
      duration: 1.4,
      ease: 'power2.inOut',
      props: 'fontSize',
      absolute: true,
      nested: true,
      scale: false,
      onComplete: () => {
        // gsap.set(box, { clearProps: 'position,top,left' })
        gsap.to(secondary, { autoAlpha: 1, duration: 0.6 })
      },
    })
  }, '+=0.6')

  return tl
}
