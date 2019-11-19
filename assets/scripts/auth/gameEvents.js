'use strict'
// const store = require('../store')
const api = require('./api')
const ui = require('./ui')
let gameBoard = ['', '', '', '', '', '', '', '', '']

const addHandlers = event => {
  $('#create-game').on('click', onCreateGame)
}
let playerNow = 'x'
$('#playerNow').text('x')

const changePlayer = (event) => {
  if ((playerNow === 'x') && ($(event.target).html() === '')) {
    $(event.target).text('x')
  } else if ((playerNow === 'o') && ($(event.target).html() === '')) {
    $(event.target).text('o')
  } else {
    $().text('space already clicked')
    $('#game-event').text('space is already taken')
  }
  // keep track of where an x or o is placed on board
  // using ID put an x or o into the gameBoard
  // using event.target get access to the index
  // using the index put an x or an o into the gameBoard array
  // make sure index is saved, to be able to send to server for udpate
  if (gameWon()) {
    // stop playing, tell player won
    $('.col-4').off('click', changePlayer)
  } else if (!checkTie()) {
    $('#game-event').text('You tied.')
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
  $('.col-4').on('click', changePlayer)
  gameBoard = ['', '', '', '', '', '', '', '', '']
  api.createGame()
    .then(ui.onCreateGameSuccess)
    .catch(ui.onCreateGameFailure)
}

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
const checkTie = () => {
  const arrId = ['#b0', '#b1', '#b2', '#b3', '#b4', '#b5', '#b6', '#b7', '#b8']
  // create an array with the values of the board
  const boardText = arrId.map(id => {
    return $(id).text()
  })
  return boardText.includes('')
}
module.exports = {
  addHandlers
}
