const route = require('express').Router()
const Controller = require('../controllers/controller')
const newsRoutes = require('./news')
const translateRoutes = require('./translate')

route.use('/news', newsRoutes)
route.use('/translate', translateRoutes)

route.get('/', Controller.sayHi)
route.post('/register', Controller.register)
route.post('/signinwithgoogle', Controller.signInWithGoogle)
route.post('/login', Controller.login)

route.post('/getCountries',Controller.getCountries)
module.exports = route
