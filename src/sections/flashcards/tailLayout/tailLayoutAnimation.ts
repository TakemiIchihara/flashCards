import { gsap, Flip } from '@/lib/gsap'

export const createTailAnimationWord = (component: HTMLDivElement) => {
  if (!component) return

  const tl = gsap.timeline()
  const q = gsap.utils.selector(component)
  const [box, secondary] = q<HTMLDivElement>('[data-container]')
  const title = q<HTMLElement>('h2')[0]

  gsap.set([box, secondary], { autoAlpha: 0 })
  gsap.set(box, { position: 'absolute' })

  tl.to(box, { autoAlpha: 1, duration: 0.6 }).add(() => {
    // extract both box and its children elements to make it a fluid transition
    const targets = [box, ...box.querySelectorAll<HTMLElement>('*')]
    const state = Flip.getState(targets, { props: 'fontSize' })

    Object.assign(box.style, {
      top: '20px',
      left: '20px',
      flexDirection: 'row',
      opacity: '100%',
      alignItems: 'center',
      gap: '1rem',
    })
    title.style.fontSize = '1.5rem'

    Flip.from(state, {
      duration: 1.4,
      ease: 'power2.inOut',
      props: 'fontSize',
      // nested: true,
      // scale: false,
      onComplete: () => gsap.to(secondary, { autoAlpha: 1, duration: 0.6 }),
    })
  }, '<+=0.2')

  return tl
}
