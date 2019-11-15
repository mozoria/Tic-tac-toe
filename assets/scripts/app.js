'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./auth/gameEvents')

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})

// const winMessage = function (spaceClicked) { return `Player picked ${spaceClicked} You win!` }
// const loseMessage = function (spaceClicked) { return `Player picked ${spaceClicked} You lose!` }
// const tieMessage = function (spaceClicked) { return `Player picked ${spaceClicked} You tie` }
//
// function tttWinPattern (squares) {
//   const lines = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
//   ]
//   for (let i = 0; i < lines.length; i++) {
//     const [a, b, c] = lines[i]
//     if (squares[a] && squares[a] ===
//   squares[b] && squares[a] === squares[c]) {
//       return squares[a]
//     }
//   }
//   return null
// }
// console.log(tttWinPattern)
//
//  tttWinPattern =
// x: winMessage() === squares[a],
// o: winMessage() === squares[a]
// }
//   }
//   You Lose: {
//     'x': loseMessage(winMessage() !== 'x'),
//
//     'o': loseMessage(winMessage() !== 'o')
//   },
//
//   You Tie: {
//     'x': tieMessage(winMessage() !== 'x' && loseMessage() !== 'x'),
//     'o': tieMessage(winMessage() !== 'o' && loseMessage() !== 'o')
//   }
// }
