import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/all'
import { Flip } from 'gsap/Flip'

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin, Flip)

export { gsap, useGSAP, Draggable, Flip }
