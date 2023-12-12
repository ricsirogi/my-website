let aboutmeBox = document.getElementById('aboutme-box')
aboutmeBox.style.top = aboutmeMenuElement.offsetTop + aboutmeMenuElement.offsetHeight + 'px'
aboutmeBox.style.left = aboutmeMenuElement.offsetLeft + 'px'

let boxIsVisible = false

aboutmeMenuElement.addEventListener('click', (event) => {
  if (boxIsVisible) {
    aboutmeBox.style.animation = 'fadeout 0.5s forwards'
    boxIsVisible = false
  } else {
    aboutmeBox.style.animation = 'fadein 0.5s forwards'
    boxIsVisible = true
  }
})
