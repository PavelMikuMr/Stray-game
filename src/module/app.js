import 'swiper/swiper.min.css'
import Swiper, { Navigation } from 'swiper'
import { languages } from './languages'
Swiper.use([Navigation])

const checkboxes = {
  requirements: ['minimum', 'recommended'],
  versions: ['standard', 'limited'],
}

const classes = {
  opened: 'opened',
  hidden: 'hidden',
  active: 'active',
}
const values = [
  { price: 18.99, title: 'Standard  Edition' },
  { price: 19.99, title: 'Standard  Edition' },
  { price: 18.99, title: 'Standard  Edition' },
  { price: 29.99, title: 'Deluxe  Edition' },
  { price: 18.99, title: 'Standard  Edition' },
  { price: 15.99, title: 'Standard  Edition' },
  { price: 69.99, title: 'Deluxe  Edition' },
  { price: 35.99, title: 'Standard  Edition' },
]

let isPlay = false
const checkbox = document.querySelectorAll('.checkbox')
const header = document.querySelector('.header')
const menuButton = document.querySelector('.header-menu__button')
const menuLink = document.querySelectorAll('.header-menu__link')
const video = document.getElementById('video')
const videoButton = document.querySelector('.video-btn')
const faqItem = document.querySelectorAll('.faq-item')
const sections = document.querySelectorAll('.section')
const language = document.querySelectorAll('.language')
const buyButton = document.querySelectorAll('.buy-button')
const overlay = document.querySelector('.overlay')
const toggleMenu = () => header.classList.toggle(classes.opened)
const modal = document.querySelector('.modal')
const modalTitle = document.querySelector('.modal-version')
const modalPrice = document.querySelector('.modal-total__price')
const modalClose = document.querySelector('.modal-close')

const scrollToSection = (e) => {
  e.preventDefault()
  const href = e.currentTarget.getAttribute('href')
  if (!href && !href.starsWith('#')) return
  const section = href.slice(1)
  const top = document.getElementById(section)?.offsetTop || 0
  window.scrollTo({ top, behavior: 'smooth' })
}
// todo timer settings + closure
;(function () {
  const formatValue = (value) => {
    return value < 10 ? `0${value}` : value
  }

  const getTimeValues = (diff) => {
    return {
      seconds: (diff / 1000) % 60,
      minutes: (diff / (1000 * 60)) % 60,
      hours: (diff / (1000 * 3600)) % 24,
      days: (diff / (1000 * 3600 * 24)) % 30,
    }
  }

  const setTimerValues = (values) => {
    Object.entries(values).forEach(([key, value]) => {
      const timerValue = document.getElementById(key)
      // timerValue.innerText = value.toFixed(0)
      // or
      timerValue.innerText = formatValue(Math.floor(value))
    })
  }

  const startTimer = (date) => {
    const id = setInterval(() => {
      const diff = new Date(date).getTime() - new Date().getTime()
      if (diff < 0) {
        clearInterval(id)
        return
      }
      const values = getTimeValues(diff)
      setTimerValues(values)
    }, 1000)
  }

  startTimer('Jan 1, 2024 00:00:00')
})()

const handleVideo = ({ target }) => {
  const info = target.parentElement
  console.log(target)
  console.log(target.parentElement)
  isPlay = !isPlay
  info.classList.toggle(classes.hidden, isPlay)
  target.innerText = isPlay ? 'Pause' : 'Play'
  isPlay ? video.play() : video.pause()
}

// todo set handleCheckbox
const handleCheckbox = ({ currentTarget: { checked, name } }) => {
  const { active } = classes

  const value = checkboxes[name][Number(checked)]
  const list = document.getElementById(value)

  const tabs = document.querySelectorAll(`[data-${name}]`)
  const siblings = list.parentElement.children

  for (const item of siblings) item.classList.remove(active)
  for (const tab of tabs) {
    tab.classList.remove(active)
    tab.dataset[name] === value && tab.classList.add(active)
  }
  list.classList.add(active)
}
const initSwiper = () => {
  new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 10,
    initialSlide: 2,
    // autoHeight: true,
    // width: 800,
    // centeredSlides: true,
    // centeredSlidesBounds: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1565: {
        width: null,
      },
      1580: {
        spaceBetween: 20,
      },
    },
  })
}
initSwiper()

const handleFaqItem = ({ currentTarget: target }) => {
  console.log(target)
  target.classList.toggle(classes.opened)
  const isOpened = target.classList.contains(classes.opened)
  console.log(isOpened)
  const height = target.querySelector('p').clientHeight
  console.log(height)
  const content = target.querySelector('.faq-item__content')
  console.log(content)
  content.style.height = `${isOpened ? height : 0}px`
}
const handleTestClick = () => {
  const faq = document.querySelector('.faq-item__content')
  faq.style.height = `30px`
}

const handleScroll = () => {
  const { scrollY: y, innerHeight: h } = window
  sections.forEach((section) => {
    if (y > section.offsetTop - h / 1.5)
      section.classList.remove(classes.hidden)
  })
}

const setText = () => {
  const lang = localStorage.getItem('lang') || 'en'
  const content = languages[lang]
  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text=${key}]`)
    if (lang === 'ru') {
      items.forEach((item) => {
        item.style.cssText = `
        font-family:'Rubik';
        `
      })
    } else {
      items.forEach((item) => {
        item.style.removeProperty('font-family')
      })
    }
    items.forEach((item) => (item.innerHTML = value))
  })
}

const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset
  if (!lang) return
  localStorage.setItem('lang', lang)
  setText()
}
const handleBuyButton = ({ currentTarget: target }) => {
  const { value } = target.dataset
  if (!value) return
  console.log(value)
  const { price, title } = values[value]
  console.log(price, title)
  modalTitle.innerText = title
  modalPrice.innerText = `${price}$`
  modal.classList.add(classes.opened)
  overlay.classList.add(classes.opened)
}

const closeModal = () => {
  modal.classList.remove(classes.opened)
  overlay.classList.remove(classes.opened)
}
menuButton.addEventListener('click', toggleMenu)
videoButton.addEventListener('click', handleVideo)
setText()
window.addEventListener('scroll', handleScroll)

menuLink.forEach((link) => link.addEventListener('click', scrollToSection))
checkbox.forEach((box) => box.addEventListener('click', handleCheckbox))
faqItem.forEach((item) => item.addEventListener('click', handleFaqItem))
language.forEach((lang) => lang.addEventListener('click', toggleLanguage))
buyButton.forEach((btn) => btn.addEventListener('click', handleBuyButton))
modalClose.addEventListener('click', closeModal)
