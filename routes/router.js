const route = require('express').Router()
const Controller = require('../controllers/controller')
const newsRoutes = require('./news')

route.use('/news', newsRoutes)

route.get('/', Controller.sayHi)
route.post('/register', Controller.register)
route.post('/signinwithgoogle', Controller.signInWithGoogle)

module.exports = route
