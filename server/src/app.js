const cors = require('cors')
const express = require('express')
const learnerHandlers = require('./handlers/learners')

const app = express()

app.use(cors())

app.get('/learners', wrapAsyncHandler(learnerHandlers.listLearners))

app.listen(8080, () => {
  console.log('Server started')
})

/**
 * Wrap an async request handler so that it can be passed to express as a
 * middleware function. Errors will be handled by calling the `next` callback.
 */
function wrapAsyncHandler(handler) {
  return (...args) => handler(...args).catch(args[2])
}
