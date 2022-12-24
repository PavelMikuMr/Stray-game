import { languages } from './languages'
const language = document.querySelectorAll('.language')
const setText = () => {
  const lang = localStorage.getItem('lang') || 'en'
  const content = languages[lang]
  Object.entries(content).forEach(([key, value]) => {
    const items = document.querySelectorAll(`[data-text=${key}]`)
    items.forEach((item) => (item.textContent = value))
  })
}

const toggleLanguage = ({ target }) => {
  const { lang } = target.dataset
  if (!lang) return
  console.log(typeof lang)
  localStorage.setItem('lang', lang)
  setText()
}
setText()
language.forEach((lang) => lang.addEventListener('click', toggleLanguage))
