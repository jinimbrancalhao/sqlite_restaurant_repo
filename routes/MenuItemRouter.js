const Router = require('express').Router()
const controller = require('../controllers/MenuItemController')

Router.get('/', controller.getMenuItems)

module.exports = Router
