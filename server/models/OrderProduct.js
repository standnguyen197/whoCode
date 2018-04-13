var mongoose = require('mongoose');
var moment = require('moment-timezone');
var nowTimeOrder = moment().tz("Asia/Ho_Chi_Minh").format('X');

var OrderProductSchema = new mongoose.Schema({
  _idUser: String, // Có thể là chủ shop hoặc doanh nghiệp shop
  idFB: String, // ID NGƯỜI MUA
  nameFB: String, // TÊN NGƯỜI MUA
  avatarFB: String, // ẢNH ĐẠI DIỆN
  codeProduct: String, // MÃ SẢN PHẨM MUA
  statusOrder: {type: String, default: '0'}, // LÀ NGƯỜI MUA ĐẦU HAY DỰ BỊ
  timeOrder: String, // THỜI GIAN MUA
  created_date: { type: String, default: nowTimeOrder }
});

module.exports = mongoose.model('OrderProduct', OrderProductSchema);
