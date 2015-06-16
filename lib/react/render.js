var cuid = require('cuid')
// var uuid = require('uuid')
var React = require('react')

var layout = require('./layout.jsx')

module.exports = function (req, res) {
  console.info(cuid())
  var markup = React.renderToString(layout)
  res.send(markup)
}
