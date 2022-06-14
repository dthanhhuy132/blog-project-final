export default function FormatPostDetail() {
  const imgContainerEls = document.querySelectorAll('.se-component.se-image-container.__se__float-none');
  const imgEls = document.querySelectorAll('.se-component.se-image-container.__se__float-none img');
  const pEls = document.querySelectorAll('.dth-dangerous-html p')
  const videoWrapperEls = document.querySelectorAll('.se-component.se-video-container.__se__float-none')
  const videoWrapperFigureEls = document.querySelectorAll('.se-component.se-video-container.__se__float-none figure')

  if(imgContainerEls) {
   imgContainerEls.forEach(item => item.classList.add('dth-img-container'))
   imgEls.forEach(item => item.classList.add('dth-img'))
   pEls.forEach(item => item.classList.add('dth-p'))
   videoWrapperEls.forEach(item => item.classList.add('dth-video-wrapper'))
   videoWrapperFigureEls.forEach(item => item.classList.add('dth-video-wrapper-item'))
  }
}