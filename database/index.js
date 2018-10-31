const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/menus', (error) => {
  if (error) {
    throw error;
  }
});
module.exports = db;