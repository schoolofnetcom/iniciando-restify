const Router = require('restify-router').Router
const Errors = require('restify-errors')
const router = new Router()

const Person = require('./../models/Person')

router.post('/people', (req, res, next) => {
	console.log('dasjdksdjakla')
	Person
		.create(req.body)
		.then((person) => {
			res.json({
				status: true,
				code: 201,
				person
			})
		})
		.catch((error) => {
			return next(new Errors.InternalServerError())			
		})
})

router.get('/people', (req, res, next) => {
	Person
		.find({})
		.then((people) => {
			if (!people) {
				return next(new Errors.NotFoundError())
			}

			res.json({
				status: true,
				code: 200,
				people
			})

			// return next()
		})
		.catch((error) => {
			return next(new Errors.InternalServerError())
		})
})

router.get('/people/:id', (req, res, next) => {
	Person
		.findById(req.params.id)
		.then((person) => {
			if (!person) {
				return next(new Errors.NotFoundError())
			}

			res.json({
				status: true,
				code: 200,
				person
			})

			// return next()
		})
		.catch((error) => {
			return next(new Errors.InternalServerError())
		})	
})

router.del('/people/:id', (req, res, next) => {
	Person
		.findByIdAndRemove(req.params.id, req.body)
		.then((person) => {
			res.json({
				status: true,
				code: 204,
				person: {}
			})
		})	
		.catch((error) => {
			return next(new Errors.InternalServerError())			
		})
})

router.put('/people/:id', (req, res, next) => {
	Person
		.findByIdAndUpdate(req.params.id, req.body)
		.then((person) => {
			res.json({
				status: true,
				code: 204,
				person: {}
			})
		})	
		.catch((error) => {
			return next(new Errors.InternalServerError())			
		})
})

module.exports = router