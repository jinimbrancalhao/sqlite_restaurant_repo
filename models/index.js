const { db, DataTypes, Model } = require('../db/db')

// restaurant model

class Restaurant extends Model {}

Restaurant.init(
  {
    name: DataTypes.STRING,
    location: DataTypes.STRING
  },
  {
    sequelize: db
  }
)

//menu model

class Menu extends Model {}

Menu.init(
  {
    course: DataTypes.STRING
  },
  {
    sequelize: db
  }
)

//menuitem model

class MenuItem extends Model {}

MenuItem.init(
  {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER
  },
  {
    sequelize: db
  }
)

// associations

Restaurant.hasMany(Menu)
Menu.hasMany(MenuItem)

module.exports = {
  Restaurant,
  Menu,
  MenuItem
}
