const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://twu:wu8899@ds157853.mlab.com:57853/mongo_menu', (error) => {
  if (error) {
    throw error;
  }
});
module.exports = db;