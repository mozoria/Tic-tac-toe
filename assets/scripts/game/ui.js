'use strict'

const store = require('../store')

const onSuccess = message => {
  $('#message')
    .removeClass('failure')
    .addClass('success')
    .text(message)
    .fadeOut(message)
  $('form').trigger('reset')
}

const onCreateGameSuccess = (response) => {
  onSuccess('New Game Created!')
  $('#game-event').text('New Game Created!')
  store.game = response.game
  $('.gameBoard').show()
  $('.col-4').text('')
}

const onEndGameSuccess = winner => {
  if (winner === 'x') {
    $('#game-event').text('Player X Wins')
  } else if (winner === 'o') {
    $('#game-event').text('Player O Wins')
  } else {
    $('#game-event').text('You tied.')
  }
}

const onGetGamesSuccess = (response) => {
  onSuccess('Game Stats!')
  $('#games-played').text(` Games Played ${response.games.length}`)
}

module.exports = {
  onCreateGameSuccess,
  onEndGameSuccess,
  onGetGamesSuccess
}
