/** @jsx element */
var cuid = require('cuid')
// var uuid = require('uuid')
var deku = require('deku')
var renderString = deku.renderString
var tree = deku.tree

var layout = require('./layout.js')

module.exports = function (req, res) {
  console.info(cuid())
  res.send(renderString(tree(layout)))
}
