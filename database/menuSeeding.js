const db = require('./index.js');
const Menu = require('./Menu.js');
const faker = require('faker');
var generateDishNameAndPrice = function() {
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

var generateMenu = function(season) {
  return {
    menuSeason: season,
    sections: [
      {
        sectionType: generateSectionName(),
        dishes: [
        generateDishNameAndPrice(), generateDishNameAndPrice(), generateDishNameAndPrice(),generateDishNameAndPrice(), generateDishNameAndPrice(), generateDishNameAndPrice(),generateDishNameAndPrice(), generateDishNameAndPrice(), generateDishNameAndPrice()
        ]
      }
    ]
  }
}

var generateMenusSet = function(resturantID) {
  return {
    resturantID: resturantID,
    menus: [ generateMenu('Dinner'), generateMenu('Lunch'), generateMenu('Valentine\'s Day')]
  }
}

var seedSampleMenu = function() {
  for (var i = 1; i <= 100; i++) {
    var newMenu = new Menu(generateMenusSet(i));
    newMenu.save( (err) => {
      if (err) {
        console.log('unable to save to DB');
      } else {
        console.log('all done');
      }
    });
  }
}

seedSampleMenu();