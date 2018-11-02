const route = require('express').Router()
const TranslateController = require('../controllers/translateController.js')

route.post('/', TranslateController.translate)

module.exports = route
