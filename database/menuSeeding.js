const db = require('./index.js');
const Menu = require('./Menu.js');
const faker = require('faker');
var generateDishName = function() {
  return {
    item: faker.lorem.words() + ' ' + faker.lorem.words(),
    price: '$' + faker.commerce.price().toString()}
}

var generateSectionName = function() {
  var sections = ['Salads', 'House Specialties', 'Shareables', 'Appetizers',
  'Starters', 'Sushi', 'Entrees', 'Dessert', 'Pasta', 'Drinks', 
  'Hot Beverages', 'Soups', 'Tandoori', 'Seafood Entrée', 'Biryani & Rice',
  'Vegetarian Entrée', 'Breads', 'Pizzas', 'Cheeses', 'Sides', 'Antipasti‎',
  'Contorni‎', 'Primi‎', 'Secondi‎']
  return faker.helpers.randomize(sections);
}


console.log('random is ',faker.helpers.randomize(a));

var sampleMenu = {
  resturantID: String,
  menus:
  [
    {
      menuSeason: faker.helpers.randomize(['Breakfast', 'Lunch', 'Dinner', 'Brunch']),
      sections: [
        {
          sectionType: generateSectionName(),
          dishes: [
          generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName(),generateDishName()
          ]
        }
      ]
    }
  ]
}