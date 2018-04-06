var mongoose = require('mongoose');

var AuthSchema = new mongoose.Schema({
  _id: String,
  name: String,
  email: String,
  cover: String,
  natinalID: String,
  phone: String,
  role_id: String,
  serviceStatus: {type: Number, default: 0},
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Auth', AuthSchema);
