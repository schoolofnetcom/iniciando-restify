const Route = require('restify-router').Router

/** ENPOINTS */
const hello = require('./hello')
const people = require('./people')

module.exports = (server) => {
	people.applyRoutes(server, '/api')
}
