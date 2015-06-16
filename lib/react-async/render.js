var cuid = require('cuid')
// var uuid = require('uuid')
var React = require('react')
var reactAsync = require('react-async')

var layout = require('./layout.jsx')

module.exports = function (req, res) {
  console.info(cuid())
  reactAsync.renderToStringAsync(layout, function (err, markup) {
    res.send(markup)
  })
}
