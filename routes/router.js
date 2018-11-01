const route = require('express').Router()
const Controller = require('../controllers/controller')

route.get('/', Controller.sayHi)
route.post('/register', Controller.register)
route.post('/signinwithgoogle', Controller.signInWithGoogle)

module.exports = route
