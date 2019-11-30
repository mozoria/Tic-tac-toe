'use strict'

const gameApi = require('../game/api')
const ui = require('./ui')

let gameBoard = Array(9).fill('')
let playerNow = 'x'
let count = 0
let gameOver = false

const onCreateGame = function (event) {
  event.preventDefault()
  gameOver = false
  resetGameBoard()
  gameApi.createGame()
    .then(ui.onCreateGameSuccess /* Update Add UI event */)
    .catch(/* TODO Add UI event */)
}

const onUpdateGame = event => {
  if (count >= 5) {
  }
  if ($(event.target).text() || gameOver) {
    return // TODO UI message
  }
  const index = event.target.id
  gameApi.updateGame(index, playerNow).then(/* TODO Add UI event */).catch(/* TODO Add UI event */)
  gameBoard.splice(index, 1, playerNow)
  count++
  $(event.target).text(playerNow)
  if (playerNow === 'x') {
    playerNow = 'o'
  } else {
    playerNow = 'x'
  }
  winPattern()
  $('#game-event').text(` ${playerNow} - your  move`)
}

const winPattern = () => {
  if (count === 9) {
    gameOver = true
    onEndGame('')
    return 'tie game'
  }
  // Array of winning indexes
  const winningScenarios = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < winningScenarios.length; i++) {
    const [a, b, c] = winningScenarios[i]
    // checks to make sure each index matches with each other in order to determine winner
    if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      gameOver = true
      onEndGame(gameBoard[a])
      return
    }
  }
}

const onEndGame = (winCondition) => {
  gameOver = true
  resetGameBoard()
  gameApi.endGame()
    .then(() => ui.onEndGameSuccess(winCondition))
}

const resetGameBoard = () => {
  gameBoard = Array(9).fill('')
  count = 0
}

const onGetGames = () => {
  event.preventDefault()
  console.log('clicked')
  gameApi.getGames()
    .then(ui.onGetGamesSuccess)
}

const addHandlers = event => {
  $('#create-game').on('click', onCreateGame)
  $('.col-4').on('click', onUpdateGame)
  $('#games-played').on('click', onGetGames)
}

module.exports = {
  addHandlers
}
