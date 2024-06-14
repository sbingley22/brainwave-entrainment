import './style.css'

const app = document.querySelector('#app')
const betaButton = document.querySelector('#betaButton')
const alphaButton = document.querySelector('#alphaButton')
const thetaButton = document.querySelector('#thetaButton')
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
  betaButton.classList.remove('selected')
  alphaButton.classList.remove('selected')
  thetaButton.classList.remove('selected')
}

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

colorPicker1.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--bg-color-1', e.target.value)
})

colorPicker2.addEventListener('input', (e) => {
  document.documentElement.style.setProperty('--bg-color-2', e.target.value)
})