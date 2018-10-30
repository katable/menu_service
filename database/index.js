const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/menus', (error, result) => {
  if (error) {
    console.log('unable to connect to DB');
  } else {
    console.log('DB is now connected');
  }
});
module.exports = db;