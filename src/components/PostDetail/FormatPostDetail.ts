export default function FormatPostDetail() {
  const imgContainerEls = document.querySelectorAll('.se-component.se-image-container.__se__float-none');
  const imgEls = document.querySelectorAll('.se-component.se-image-container.__se__float-none img');
  const pEls = document.querySelectorAll('.dth-dangerous-html p')

  console.log('imgContainer', imgContainerEls)

  if(imgContainerEls) {
   imgContainerEls.forEach(item => item.classList.add('dth-img-container'))
   imgEls.forEach(item => item.classList.add('dth-img'))
   pEls.forEach(item => item.classList.add('dth-p'))
  }
}