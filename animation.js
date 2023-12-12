const thisIsMyNameInterval = 50
const menuInterval = 100
const menuAnimationDuration = 300
const defaultMenuColor = 'grey'
const hoveringMenuColor = 'darkgrey'
const clickedMenuColor = 'rgb(200, 200, 200)'
const mouseGradientOffset = 150

let currentMenuColor = 'grey'

let ricsirogi = document.getElementById('ricsirogi')

let thisElement = document.getElementById('this')
let isElement = document.getElementById('is')
let myElement = document.getElementById('my')
let nameElement = document.getElementById('name')

let githubMenuElement = document.getElementById('github-menu-item')
let resumeMenuElement = document.getElementById('resume-menu-item')
let youtubeMenuElement = document.getElementById('youtube-menu-item')
let aboutmeMenuElement = document.getElementById('aboutme-menu-item')
let projectsMenuElement = document.getElementById('projects-menu-item')

let thisIsMyNameArray = [thisElement, isElement, myElement, nameElement]
let menuArray = [githubMenuElement, resumeMenuElement, youtubeMenuElement, aboutmeMenuElement, projectsMenuElement]

// add a 10px margin to the first menu item
menuArray[0].style.marginLeft = '10px'

document.addEventListener('mousemove', (event) => {
  let mouseY = Math.round((event.clientY / window.innerHeight) * 100)
  setTimeout(() => {
    document.body.style.background = 'linear-gradient(to bottom, rgb(0, 44, 45) 3%, black ' + (mouseY + mouseGradientOffset).toString() + '%)'
  }, 150)
})

// menu hover and click animations
menuArray.forEach((element) => {
  element.addEventListener('mouseover', (event) => {
    element.animate([{ color: 'grey' }, { color: 'darkgrey' }], {
      duration: menuAnimationDuration,
      fill: 'forwards',
    })
    currentMenuColor = 'darkgrey'
  })
  element.addEventListener('mouseout', (event) => {
    element.animate([{ color: 'darkgrey' }, { color: 'grey' }], {
      duration: menuAnimationDuration,
      fill: 'forwards',
    })
    currentMenuColor = 'grey'
  })
  element.addEventListener('click', (event) => {
    element.animate([{ color: 'darkgrey' }, { color: clickedMenuColor }, { color: 'darkgrey' }], {
      duration: menuAnimationDuration,
      fill: 'forwards',
    })
    currentMenuColor = clickedMenuColor
  })
})

// this is my name fade in
ricsirogi.addEventListener('animationend', (event) => {
  if (event.animationName === 'fadein') {
    thisIsMyNameArray.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible')
        element.style.animation = 'fadeinfrombottom 1s'
      }, index * thisIsMyNameInterval)
    })
  }
})

// menu fade in
thisIsMyNameArray[thisIsMyNameArray.length - 1].addEventListener('animationend', (event) => {
  menuArray.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('visible')
      element.style.opacity = '1'
      element.style.animation = 'fadeinfromright 0.5s'
    }, index * menuInterval)
  })
})

// this is my name fade out
menuArray[menuArray.length - 1].addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeinfromright') {
    thisIsMyNameArray.forEach((element, index) => {
      setTimeout(() => {
        element.style.animation = 'fadeout 0.5s'
        element.classList.remove('visible')
        element.classList.add('not-visible')
      }, index * thisIsMyNameInterval)
    })
  }
})

// ricsirogi fade back
thisIsMyNameArray[thisIsMyNameArray.length - 1].addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeout') {
  }
})

// ricsirogi fade back with website text
thisIsMyNameArray[thisIsMyNameArray.length - 1].addEventListener('animationend', (event) => {
  if (event.animationName === 'fadeout') {
    const ricsirogiTextToAdd = "'s website"
    const typeSpeed = 1500 / ricsirogiTextToAdd.length / 1.5
    ricsirogiTextToAdd.split('').forEach((element, index) => {
      setTimeout(() => {
        ricsirogi.innerHTML += element
      }, index * typeSpeed)
    })
    ricsirogi.classList.remove('visible')
    ricsirogi.classList.add('ricsirogi-background')
    ricsirogi.style.animation = 'fadeback 1.5s'
  }
})
