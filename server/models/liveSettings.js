var mongoose = require('mongoose');

var LiveSettingsSchema = new mongoose.Schema({
  _idUser: String,
  typeLiveModel: String,
  idFanpageLive: String,
  typeQualityLive: String,
  typeRandomLive: String,
  substituteLive: String,
  created_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LiveSettings', LiveSettingsSchema);
