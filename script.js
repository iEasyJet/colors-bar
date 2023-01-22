import './styles.css';

const board = document.querySelector('#board')
const SQ_NUMBER = 1050
const colors = ['#e8eea4', '#e59ec8', '#461973', '#6113e6', '#77ee96', '#fcf95c', '#bc1f85', '#d2ed38', '#49acb0']

for (let i = 0; i < SQ_NUMBER; i++) {
  const sq = document.createElement('div')
  sq.classList.add('sq')

  sq.addEventListener('mouseover', () => {
    setColor(sq)
  })

  sq.addEventListener('mouseleave', () => {
    removeColor(sq)
  })

  board.append(sq)
}

function setColor(el) {
  const color = getRandomColor()
  el.style.backgroundColor = color
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(el) {
  el.style.backgroundColor = '#1d1d1d'
  el.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}