
export default function setClassForTextEditor(themeMode:string) {
  const editorEls = document.querySelectorAll('.sun-editor .se-wrapper .se-wrapper-inner');
  const eidtorModalEls = document.querySelectorAll('.sun-editor .se-dialog .se-dialog-inner .se-dialog-content')
  const editTrayEl = document.querySelector('.sun-editor .se-btn-tray')

  if(themeMode === 'dark') {
    editorEls.forEach(editorEl => editorEl?.classList.add('dark-mode'))
    eidtorModalEls.forEach(eidtorModalEl => {
      eidtorModalEl?.classList.add('dark-mode-modal')
      eidtorModalEl.querySelectorAll('label')?.forEach(item => item.classList.add('dark-mode-label'))
    })
    editTrayEl?.classList.add('dark-mode-modal')
  } else {
    editorEls.forEach(editorEl => editorEl?.classList.remove('dark-mode'))
    eidtorModalEls.forEach(eidtorModalEl => {
      eidtorModalEl?.classList.remove('dark-mode-modal')
      eidtorModalEl.querySelectorAll('label')?.forEach(item => item.classList.remove('dark-mode-label'))
    })
    editTrayEl?.classList.remove('dark-mode-modal')
  }
}