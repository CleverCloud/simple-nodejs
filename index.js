const http = require('http')

const server = http.createServer(function (req, res) {
  res.end('PONG')
})


server.listen(process.env.PORT)
