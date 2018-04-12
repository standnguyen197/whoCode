var mongoose = require('mongoose');

var PriceUserSchema = new mongoose.Schema({
  userID: String,
  nowPrice: { type: String, default: 0 },
  typePrice: { type: String, default: 'VND' },
  statusPrice: { type: Number, default: 0 }, // 0 Chưa khóa
  created_date: { type: Date, default: Date.now },
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('PriceUser', PriceUserSchema);
