import gsap from 'gsap'

import { useGSAP } from '@gsap/react'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/all'

gsap.registerPlugin(useGSAP, Draggable, InertiaPlugin)

export { gsap, useGSAP, Draggable }
