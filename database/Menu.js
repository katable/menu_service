const db = require('./index.js');
const mongoose = require('mongoose');

const resturantMenuSchema = new mongoose.Schema({
  resturantName: String,
  resturantID: String,
  menus:
  [
    {
      menuSeason: String,
			sections: [
				{
					sectionType: String,
					dishes: [
						{
							item: String,
							price: String
						}
					]
				}
			]
		}
	]
});

const RestaurantMenu = mongoose.model('Menu', resturantMenuSchema);

module.exports = RestaurantMenu;
