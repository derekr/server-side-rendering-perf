var React = require('react')
var xrange = require('xrange')

function renderNodes (number) {
  return xrange(number).map(function (i) {
    return (
      <div key={ i }>
        This is node { i }
      </div>
    )
  })
}

module.exports = (
  <div>
    { renderNodes(300) }
  </div>
)
