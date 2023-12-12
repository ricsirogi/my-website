let aboutmeBox = document.getElementById('aboutme-box')
let aboutmeText = document.getElementById('aboutme-text')
aboutmeBox.style.top = aboutmeMenuElement.offsetTop + aboutmeMenuElement.offsetHeight + 'px'
aboutmeBox.style.left = aboutmeMenuElement.offsetLeft + 'px'

let boxIsVisible = false

aboutmeMenuElement.addEventListener('click', (event) => {
  if (boxIsVisible) {
    aboutmeBox.style.animation = 'fadeout 0.5s forwards'
    boxIsVisible = false
    aboutmeText.style.userSelect = 'none'
  } else {
    aboutmeBox.style.animation = 'fadein 0.5s forwards'
    boxIsVisible = true
    aboutmeText.style.userSelect = 'text'
  }
})
