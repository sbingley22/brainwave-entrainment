import './style.css'

const app = document.querySelector('#app')
const gammaButton = document.querySelector('#gammaButton')
const betaButton = document.querySelector('#betaButton')
const alphaButton = document.querySelector('#alphaButton')
const thetaButton = document.querySelector('#thetaButton')
const deltaButton = document.querySelector('#deltaButton')
const optionsMenu = document.querySelector('.options-menu')
const colorPicker1 = document.querySelector('#colorPicker1')
const colorPicker2 = document.querySelector('#colorPicker2')

document.addEventListener('mousemove', (e) => {
  if (e.clientY < 200) {
    optionsMenu.classList.add('show-menu')
  } else {
    optionsMenu.classList.remove('show-menu')
  }
})

const deselectButtons = () => {
  gammaButton.classList.remove('selected')
  betaButton.classList.remove('selected')
  alphaButton.classList.remove('selected')
  thetaButton.classList.remove('selected')
  deltaButton.classList.remove('selected')
}

gammaButton.addEventListener('click', () => {
  app.style.animation = 'gamma 1s infinite'
  deselectButtons()
  gammaButton.classList.add('selected')
})

betaButton.addEventListener('click', () => {
  app.style.animation = 'beta 1s infinite'
  deselectButtons()
  betaButton.classList.add('selected')
})

alphaButton.addEventListener('click', () => {
  app.style.animation = 'alpha 1s infinite'
  deselectButtons()
  alphaButton.classList.add('selected')
})

thetaButton.addEventListener('click', () => {
  app.style.animation = 'theta 1s infinite'
  deselectButtons()
  thetaButton.classList.add('selected')
})

deltaButton.addEventListener('click', () => {
  app.style.animation = 'delta 1s infinite'
  deselectButtons()
  deltaButton.classList.add('selected')
})

colorPicker1.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--bg-color-1', e.target.value)
})

colorPicker2.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--bg-color-2', e.target.value)
})