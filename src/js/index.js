import EmblaCarousel from 'embla-carousel'
import { addPrevNextBtnsClickHandlers } from './arrow-buttons'
import { addDotBtnsAndClickHandlers } from './dot-buttons'
import Autoplay from 'embla-carousel-autoplay'
import '../css/base.css'
import '../css/sandbox.css'
import '../css/embla.css'

const OPTIONS = { align: 'start', dragFree: true, loop: true }

const emblaNode = document.querySelector('.embla')
const viewportNode = emblaNode.querySelector('.embla__viewport')
const prevBtn = emblaNode.querySelector('.embla__button--prev')
const nextBtn = emblaNode.querySelector('.embla__button--next')
const dotsNode = document.querySelector('.embla__dots')
const emblaApi = EmblaCarousel(viewportNode, OPTIONS, [Autoplay()])

const onButtonClick = (emblaApi) => {
  const { autoplay } = emblaApi.plugins()
  if (!autoplay) return
  if (autoplay.options.stopOnInteraction !== false) autoplay.stop()
}

const removePrevNextBtnsClickHandlers = addPrevNextBtnsClickHandlers(
  emblaApi,
  prevBtn,
  nextBtn,
  onButtonClick
)
const removeDotBtnsAndClickHandlers = addDotBtnsAndClickHandlers(
  emblaApi,
  dotsNode,
  onButtonClick
)

emblaApi.on('destroy', removePrevNextBtnsClickHandlers)
emblaApi.on('destroy', removeDotBtnsAndClickHandlers)
