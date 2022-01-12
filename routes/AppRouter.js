const Router = require('express').Router()
const RestaurantRouter = require('./RestaurantRouter')
const MenuRouter = require('./MenuRouter')
const MenuItemRouter = require('./MenuItemRouter')

Router.use('/restaurant', RestaurantRouter)
Router.use('/menu', MenuRouter)
Router.use('/menuitem', MenuItemRouter)

module.exports = Router
