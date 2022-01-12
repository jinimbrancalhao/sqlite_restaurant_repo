const Router = require('express').Router()
const controller = require('../controllers/MenuController')

Router.get('/', controller.getMenus)

module.exports = Router
