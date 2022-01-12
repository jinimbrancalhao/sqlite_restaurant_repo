const { Restaurant } = require('../models')

const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.findAll()
    res.send(restaurants)
  } catch (error) {
    throw error
  }
}

const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findByPk(req.params.id)
    res.send(restaurant)
  } catch (error) {
    throw error
  }
}

const createRestaurant = async (req, res) => {
  try {
    Restaurant.create(req.body)
    res.send('Created Successfully')
  } catch (error) {
    throw error
  }
}

const deleteRestaurant = async (req, res) => {
  Restaurant.destroy({
    where: { id: req.params.id }
  })
  res.send('Deletion Successful')
}

const updateRestaurant = async (req, res) => {
  Restaurant.update(req.body, {
    where: { id: req.params.id }
  })
  res.send('Update Successful')
}

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant,
  deleteRestaurant,
  updateRestaurant
}
