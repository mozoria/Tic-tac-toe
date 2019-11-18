'use strict'
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')

const addHandlers = event => {
  $('.col-4').on('click', changePlayer)
  $('#create-game').on('click', onCreateGame)
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
    $('#game-event').text('space is already taken')
  }
  if ( gameWon()) {
    // stop playing, tell player won
  } else {
    // continue playing
    if (playerNow === 'o') {
      playerNow = 'x'
    } else {
      playerNow = 'o'
    }
    $('#game-event').text(` ${playerNow} - your  move`)
  }
}

const onCreateGame = function (event) {
  event.preventDefault()
  $('.col-4').text('')
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

// const cantPlay = () => {
//   for (let i = 0; i <= gameBoard.length; i++) {
//     if (gameBoard.length === 9) { return gameBoard[0] }
//     console.log(cantPlay)
//   }
// }

// const gameBoard = ['', '', '', '', '', '', '', '', '']
// const playerOne = 'x'
// const playerTwo = 'o'

const tttWinPattern = {
  row1: [$('#b0', '#b1', '#b2')],
  row2: [$('#b3', '#b4', '#b5')],
  row3: [$('#b6', '#b7', '#b8')],
  col1: [$('#b0', '#b3', '#b6')],
  col2: [$('#b1', '#b4', '#b7')],
  col3: [$('#b2', '#b5', '#b8')],
  diag: [$('#b0', '#b4', '#b8')],
  diag2: [$('#b2', '#b4', '#b6')]
}
console.log(tttWinPattern)

const gameWon = function () {
  // debugger
  if (((playerNow === $('#b0').text()) && (playerNow === $('#b1').text()) && (playerNow === $('#b2').text())) ||
    ((playerNow === $('#b3').text()) && (playerNow === $('#b4').text()) && (playerNow === $('#b5').text())) ||
    ((playerNow === $('#b6').text()) && (playerNow === $('#b7').text()) && (playerNow === $('#b8').text())) ||
    ((playerNow === $('#b0').text()) && (playerNow === $('#b3').text()) && (playerNow === $('#b6').text())) ||
    ((playerNow === $('#b1').text()) && (playerNow === $('#b4').text()) && (playerNow === $('#b7').text())) ||
    ((playerNow === $('#b2').text()) && (playerNow === $('#b5').text()) && (playerNow === $('#b8').text())) ||
    ((playerNow === $('#b0').text()) && (playerNow === $('#b4').text()) && (playerNow === $('#b8').text())) ||
    ((playerNow === $('#b2').text()) && (playerNow === $('#b4').text()) && (playerNow === $('#b6').text()))) {
    $('#game-event').text('Player ' + playerNow + ' - you  won')
    console.log('player won', playerNow)
    return true
  }
  console.log('continue playing')
  return false
}

module.exports = {
  addHandlers
}
