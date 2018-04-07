var mongoose = require('mongoose');

var RegisterServiceSchema = new mongoose.Schema({
  userID: Number,
  priceService: String,
  startTimeService: Number,
  endTimeService: Number,
  typeService: { type: Number, default: 1},
  statusService: {type: Number, default: 0},
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RegisterService', RegisterServiceSchema);
