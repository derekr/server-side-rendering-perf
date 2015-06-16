/**
 * This is the webserver init code. Named `app.js` because connect/express
 * standards are typically named `app`.
 *
 * We register babel which allows us to use es6 syntax as well as
 * JSX. Environment variables are loaded via `dotenv`. Depending on
 * your machine's `NODE_ENV` variable the various `.env.*` files will
 * be loaded accordingly.
 */
require('babel/register')

/**
 * Dependencies
 */
var express = require('express')

module.exports = function () {
  var app = express()

  /**
   * Inits the nerd-layout middlware so other request handlers
   * can access as needed.
   */
  // app.use('/', require('./lib/middleware/nerd-layout'))

  /**
   * This is the main serverside renderer/req handler for your react app.
   * All required store data should be fetched by this point and accessible
   * via `req.locals.data`.
   */
  app.use(
    '/react',
    require('./lib/react/render.js')
  )

  app.use(
    '/react-async',
    require('./lib/react-async/render.js')
  )

  app.use(
    '/react-static-markup',
    require('./lib/react-static-markup/render.js')
  )

  app.use(
    '/deku',
    require('./lib/deku/render.js')
  )

  /**
   * This actually starts up the server.
   */
  var port = process.env.PORT || 8080
  app.listen(port)

  console.info('started -> http://0.0.0.0:' + port)
}
