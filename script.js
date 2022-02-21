const TECLAS_BRANCAS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const TECLAS_PRETAS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const teclasBrancas = document.querySelectorAll('.key.branca')
const teclasPretas = document.querySelectorAll('.key.preta')

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const brancasIndex = TECLAS_BRANCAS.indexOf(key)
  const pretasIndex = TECLAS_PRETAS.indexOf(key)

  if (brancasIndex > -1) playNote(teclasBrancas[brancasIndex])
  if (pretasIndex > -1) playNote(teclasPretas[pretasIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}