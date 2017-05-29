const restify = require('restify')
const configs = require('./configs')
const mongoose = require('mongoose')

const server = restify.createServer({
	name: configs.name,
	version: configs.version
})

server.pre(restify.pre.sanitizePath())

server.use(restify.jsonBodyParser({ mapParams: true }))
server.use(restify.queryParser({ mapParams: true }))
server.use(restify.fullResponse())
// server.use(restify.bodyParser())

require('./routes/')(server)

server.listen(configs.port, () => {
	console.log('Server has been created')

	mongoose.connect(configs.database.url)

	mongoose.connection.on('open', () => {
		console.log('A new connection has been pluged')
	})
})