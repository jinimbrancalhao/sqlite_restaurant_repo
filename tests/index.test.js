const { Restaurant, Menu, MenuItem } = require('../models/index')
const { db } = require('../db/db')

//restaurant class

describe('Restaurant Class', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  test('restaurant has name', async () => {
    const testRestaurant = await Restaurant.create({
      name: 'Applebees'
    })

    expect(testRestaurant.name).toBe('Applebees')
  })

  test('restaurant has location', async () => {
    const testRestaurant = await Restaurant.create({
      name: 'Unos',
      location: 'Boston'
    })

    expect(testRestaurant.location).toBe('Boston')
  })

  test('restaurant can have many menus', async () => {
    const testRestaurant = await Restaurant.create({
      name: 'Via',
      location: 'New York'
    })
    const testMenu1 = await Menu.create({ course: 'Breakfast' })
    const testMenu2 = await Menu.create({ course: 'Lunch' })
    const testMenu3 = await Menu.create({ course: 'Dinner' })

    await testRestaurant.addMenu(testMenu1)
    await testRestaurant.addMenu(testMenu2)
    await testRestaurant.addMenu(testMenu3)

    const menus = await testRestaurant.getMenus()

    expect(menus.length).toBe(3)
    console.log(testMenu1)
  })
})

//menu class

describe('Menu Class', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  test('menu has course', async () => {
    const testMenu = await Menu.create({ course: 'Breakfast' })

    expect(testMenu.course).toBe('Breakfast')
  })

  test('menu can have many menuItems', async () => {
    const testMenu = await Menu.create({ course: 'Breakfast' })
    const testMenuItem1 = await MenuItem.create({ name: 'Eggs', price: 10 })
    const testMenuItem2 = await MenuItem.create({ name: 'Bacon', price: 10 })
    const testMenuItem3 = await MenuItem.create({ name: 'Sausage', price: 10 })

    await testMenu.addMenuItem(testMenuItem1)
    await testMenu.addMenuItem(testMenuItem2)
    await testMenu.addMenuItem(testMenuItem3)

    const menuItems = await testMenu.getMenuItems()

    expect(menuItems.length).toBe(3)
  })
})

//menuitem class

describe('MenuItem Class', () => {
  beforeAll(async () => {
    await db.sync({ force: true })
  })

  test('menuitem has name', async () => {
    const testMenuItem = await MenuItem.create({ name: 'Chicken Parm' })

    expect(testMenuItem.name).toBe('Chicken Parm')
  })

  test('menuitem has price', async () => {
    const testMenuItem = await MenuItem.create({
      name: 'Chicken Parm',
      price: 20
    })

    expect(testMenuItem.price).toBe(20)
  })
})
