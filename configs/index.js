module.exports = {
	name: 'API RESTIFY SON',
	version: '1.0.0',
	env: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 9000,
	database: {
		url: 'mongodb://localhost:27017/restify_app'
	}
}