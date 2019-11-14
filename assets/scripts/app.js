'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  authEvents.addHandlers()
  $('.col-4').on('click', addX)
})

const addX = event => {
  $(event.target).text('x')
  $('.col-4').on('click', addO)
}
const addO = event => {
  $(event.target).text('O')
  $('.col-4').on('click', addX)
    if (addX || add0 === true)

}
