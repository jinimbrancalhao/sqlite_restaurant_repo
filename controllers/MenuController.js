const { Menu } = require('../models')

const getMenus = async (req, res) => {
  try {
    const menus = await Menu.findAll()
    res.send(menus)
  } catch (error) {
    throw error
  }
}

module.exports = { getMenus }
