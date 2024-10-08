/* eslint no-console: 0 */

const path = require('path')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./config/webpack.config.js')

// const isDeveloping = process.env.NODE_ENV !== 'production'
const isDeveloping = false
const port = 8000
const app = express()

if (isDeveloping) {
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: '/',
    contentBase: 'src',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false,
      warnings: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler))
  app.get('/', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')))
    res.end()
  })

  app.get('/about', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/company.html')))
    res.end()
  })

  // app.get('/test', function response(req, res) {
  //   res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/test.html')));
  //   res.end();
  // });
} else {
  app.use(express.static(__dirname + '/dist'))
  app.get('/', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
  })

  app.get('/about', function response(req, res) {
    res.sendFile(path.join(__dirname, 'dist/about.html'))
  })

  // app.get('/hello', (req, res) => {
  //   res.send('hello world');
  // });
}

app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err)
  }
  console.info(
    '==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.',
    port,
    port
  )
})
