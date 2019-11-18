'use strict'

const config = require('../config')
const store = require('../store')

const signUp = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}

const signIn = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: formData
  })
}

const changePassword = formData => {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const signOut = formData => {
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: formData
  })
}

const createGame = () => {
  return $.ajax({
    url: config.apiUrl + '/game',
    method: 'POST',
    headers: {
      Authorization: `Token token=${store.user.token}`
    },
    data: ''
  })
}
module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  createGame
}
