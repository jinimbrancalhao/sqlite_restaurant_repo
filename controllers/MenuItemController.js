const { MenuItem } = require('../models')

const getMenuItems = async (req, res) => {
  try {
    const menuItems = await MenuItem.findAll()
    res.send(menuItems)
  } catch (error) {
    throw error
  }
}

module.exports = { getMenuItems }
