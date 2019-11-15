'use strict'

const addHandlers = event => {
  $('.col-4').on('click', changePlayer)
}
let playerNow = 'x'
$('#playerNow').text('x')

const changePlayer = () => {
  if ((playerNow === 'x') && ($(event.target).html() === '')) {
    $(event.target).text('x')
  } else if ((playerNow === 'o') && ($(event.target).html() === '')) {
    $(event.target).text('o')
  } else {
    $().text('space already clicked')
  }
  if (playerNow === 'o') {
    playerNow = 'x'
  } else {
    playerNow = 'o'
  }
}

function tttWinPattern (squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] ===
  squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
console.log(tttWinPattern)

module.exports = {
  addHandlers
}
