const config = require('../config')
const store = require('../store')

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

const updateGame = (index, value) => {
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        }
      }
    }
  })
}

const endGame = () => {
  return $.ajax({
    url: config.apiUrl + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: {
      'game': {
        'over': true
      }
    }
  })
}

const getGames = () => {
  return $.ajax({
    url: config.apiUrl + 'games',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}

module.exports = {
  createGame,
  updateGame,
  endGame,
  getGames
}
