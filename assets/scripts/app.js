'use strict'

const authEvents = require('./auth/events')
const gameEvents = require('./auth/gameEvents')

$(() => {
  authEvents.addHandlers()
  gameEvents.addHandlers()
})
