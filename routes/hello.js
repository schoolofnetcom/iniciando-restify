// const Route = require('restify-better-router')
// const Errors = require('restify-errors')

// module.exports = new Route()
// 	.get('/hello/:name')
// 	.addHandler((req, res, next) => {
// 		if (req.params.name != 'Leonan') {
// 			return next(new Errors.RequestEntityTooLargeError({
// 				code: '400',
// 				message: 'Invalid arguments'
// 			}))
// 		}

// 		res.send('Hello')
// 		return next()
// 	})