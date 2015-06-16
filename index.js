var cluster = require('cluster')

var server = require('./server.js')

if (cluster.isMaster) {
  var cpuCount = require('os').cpus().length
  // var cpuCount = 2

  for (var i = 0; i < cpuCount; i += 1) {
    cluster.fork()
  }
} else {
  server()
}
