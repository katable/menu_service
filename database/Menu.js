const db = require('./index.js');
const mongoose = require('mongoose');

const restaurantMenuSchema = new mongoose.Schema({
  restaurantName: String,
  restaurantId: String,
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
              price: String,
              _id: false
            }
          ],
          _id: false
        }
      ],
      _id: false
    }
  ]
}, { versionKey: false });

const RestaurantMenu = mongoose.model('Menu', restaurantMenuSchema);

module.exports = RestaurantMenu;
