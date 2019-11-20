'use strict'

const store = require('../store')

const onCreateGameSuccess = (response) => {
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

module.exports = {
  onCreateGameSuccess,
  onEndGameSuccess
}
