const express = require('express');
const Menu = require('../database/Menu.js');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/../client/dist'));

app.get('/restaurants/:restaurant_id/menu', (req, res) => {
  var restaurantId = req.params.restaurant_id;
  Menu.findOne({restaurantId: restaurantId}, (err, result) => {
    if (err) {
      throw err;
    } else {
      res.send(result);
    }
  });
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));
