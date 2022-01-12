// import dependencies that will help me parse my json file
const path = require('path')
const fs = require('fs').promises //will help me resolve and/or reject promises as we use sequelize methods.

//import our database
//import our model

const { Restaurant, MenuItem, Menu } = require('../models')
const { db } = require('../db/db')

//all sequelize methods return promises (resolve or reject)

//define our seed function
const seed = async () => {
  //clear out our tables to not have duplicate data
  await db.sync({ force: true })

  //find json file -> parse data -> JS object -> access the array -> create a new row with each element of the array

  const seedPath = path.join(__dirname, 'restaurants.json')
  const seedPath2 = path.join(__dirname, 'menus.json')
  const seedPath3 = path.join(__dirname, 'menuItems.json')
  // ^ this is the same as using the file pathway but sometimes the file may be deeply nested so it is easier to use this

  //games
  const buffer = await fs.readFile(seedPath) //reads info that lives in the path
  const { data } = JSON.parse(String(buffer)) // we have access to data array

  //users
  const buffer2 = await fs.readFile(seedPath2)
  const { data2 } = JSON.parse(String(buffer2))

  const buffer3 = await fs.readFile(seedPath3)
  const { data3 } = JSON.parse(String(buffer3))

  const restaurantPromises = data.map((restaurant) => {
    Restaurant.create(restaurant)
  })

  const menuPromises = data2.map((menu) => {
    Menu.create(menu)
  })

  const menuItemPromises = data3.map((menuItem) => {
    MenuItem.create(menuItem)
  })

  await Promise.all(restaurantPromises) // the Promise.all() method takes all promises and returns a single promise that resolves or rejects
  await Promise.all(menuPromises)
  await Promise.all(menuItemPromises)

  console.log(
    'All of our restaurants, menus, and menu items have successfully populated'
  )
}

seed()

module.exports = seed
