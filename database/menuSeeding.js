const Menu = require('./Menu.js');
const faker = require('faker');

const generateDishNameAndPrice = () => {
  return {
    item: faker.lorem.words() + ' ' + faker.lorem.words(),
    price: '$' + faker.commerce.price().toString()
  };
};

const generateSectionName = () => {
  var sections = 
    ['Salads', 'House Specialties', 'Shareables', 'Appetizers', 'Starters', 'Sushi', 'Entrees', 'Dessert', 'Pasta', 'Drinks', 'Hot Beverages', 'Soups', 'Tandoori', 'Seafood Entrée', 'Biryani & Rice', 'Vegetarian Entrée', 'Breads', 'Pizzas', 'Cheeses', 'Sides', 'Antipasti‎', 'Contorni‎', 'Primi‎', 'Secondi‎'];
  return faker.helpers.randomize(sections);
};

const generateSection = () => {
  return {
    sectionType: generateSectionName(),
    dishes: Array(18).fill(null).map(() => generateDishNameAndPrice())
  };
};

const generateMenu = (season) => {
  return {
    menuSeason: season,
    sections: Array(3).fill(null).map(() => generateSection())
  };
};

const generateMenusSet = (restaurantId) => {
  return {
    restaurantId: restaurantId,
    menus: [generateMenu('Dinner'), generateMenu('Lunch'), generateMenu('Christmas\'s Eve')]
  };
};

const seedSampleMenus = () => {
  for (var i = 1; i <= 100; i++) { //for loop is not async
    var newMenu = new Menu(generateMenusSet(i));
    newMenu.save((err) => {
      if (err) {
        console.log('unable to save to DB');
      } else {
        dropSomeSampleMenus();
      }
    });
  }
};

const dropSomeSampleMenus = () => {
  for (var i = 10; i <= 100; i += 10) {
    Menu.findOneAndDelete({restaurantId: i}, (err) => {
      if (err) {
        throw err;
      }
    });
  }
};

seedSampleMenus();
