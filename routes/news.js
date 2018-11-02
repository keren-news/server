const route = require('express').Router()
const NewsController = require('../controllers/NewsController')

route.get('/', NewsController.getAll)
route.get('/search', NewsController.getFilter)

module.exports = route
