const Router = require('express').Router()
const controller = require('../controllers/RestaurantController')

Router.get('/', controller.getRestaurants)
Router.get('/:id', controller.getRestaurantById)
Router.post('/', controller.createRestaurant)
Router.delete('/:id', controller.deleteRestaurant)
Router.put('/:id', controller.updateRestaurant)

module.exports = Router
