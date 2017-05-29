const mongoose = require('mongoose')

const Person = new mongoose.Schema({
	name: String,
	age: Number
})

module.exports = mongoose.model('Person', Person)