const cors = require('cors')
const db = require('./db')
const express = require('express')
const learnerHandlers = require('./handlers/learners')

const app = express()

app.use(cors())

app.get('/learners', wrapAsyncHandler(learnerHandlers.listLearners))

const server = app.listen(8080, () => {
  console.log('Server started')
})

/**
 * Wrap an async request handler so that it can be passed to express as a
 * middleware function. Errors will be handled by calling the `next` callback.
 */
function wrapAsyncHandler(handler) {
  return (...args) => handler(...args).catch(args[2])
}

function shutDownGracefully() {
  console.log('Shutting down gracefully...')
  server.close(() => {
    db.close()
  })
}

process.on('SIGINT', shutDownGracefully)
process.on('SIGTERM', shutDownGracefully)
