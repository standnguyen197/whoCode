module.exports = (io) => { 
    var express = require('express');
    var mongoose = require('mongoose');
    var urlencode = require('urlencode');
    var moment = require('moment-timezone');
    // MODEL
    var liveSettingModel = require('../../models/LiveSetting');
    var orderProductModel = require('../../models/OrderProduct');

    var CartPerson = [];

    // LẤY NGƯỜI DỰ BỊ
    async function checkSubstituteLive(idUser){
       return await liveSettingModel.find({_idUser: idUser}).exec();
    }

  // LƯU ĐƠN HÀNG

    io.on('connection', function(socket){
        console.log('Socket Random Connected');
        // Gửi random về client!

        socket.on('getNumberOrder' , function(mes){
          socket.emit('replyGetNumberOrder');
        });  

      socket.on('getListOrder' , function(mes){
        socket.emit('replyGetListOrder');
      }); 

        var randomQuery = require("randomstring");
        var randomNumber = randomQuery.generate({
          length: 4,
          charset: 'hex',
          capitalization: 'uppercase'
        });
        socket.emit('randomNumber', { randomNumber });
      
        socket.on('pingMessage' , function(mes){
            var messageFB = mes.messageFB;
            var nameFB = mes.nameFB;
            var avatarFB = mes.avatarFB;
            var idFB = mes.idFB;
            socket.emit('replyPingMessage', { messageFB , nameFB , avatarFB , idFB });
        });
        socket.on('replyRandom',async function(msg){
          var idUserFB = msg.idUser;
          const queryLiveSetting = await checkSubstituteLive(idUserFB);

          var substituteLive = queryLiveSetting[0].substituteLive;
          var totalPersonOrder = parseInt(substituteLive) + parseInt(1); //Số nghười dự bị + 1 Người chính 

          var upMessage = msg.messageFB;
          var uppercaseMes = upMessage.toUpperCase();
          var randomCheckMessage = uppercaseMes.indexOf(randomNumber);
          
          if(randomCheckMessage != '-1'){
            
            CartPerson.push(msg);
            
            if(CartPerson.length == totalPersonOrder){

              // var valueListOrder = CartPerson.shift(); // Người đầu tiên mua hàng
              // console.log(valueListOrder);
              
              // console.log(randomNumber);
              CartPerson.forEach(function (valueListOrder, i) {
               var linkFB = valueListOrder.idFB;
               var idFB = valueListOrder.idFBSys;
               var avatarFB = valueListOrder.avatarFB;
               var nameFB = valueListOrder.nameFB;
               var codeProduct = randomNumber;
               var nowTimeOrder = moment().tz("Asia/Ho_Chi_Minh").format('X');

                if(i == 0){
                  var dataFirstOrder = new orderProductModel({
                    idFB,
                    linkFB,
                    nameFB,
                    avatarFB,
                    codeProduct,
                    statusOrder: '1',
                    timeOrder: nowTimeOrder
                  });
                
                  try{
                    
                  dataFirstOrder.save();
                  
                  socket.emit('replyGetNumberOrder',{totalNumberOrder: '1'});

                
                  } catch (err){
                      console.log(err);
                    
                  }

                }else{

                  var dataFirstOrder = new orderProductModel({
                    idFB,
                    linkFB,
                    nameFB,
                    avatarFB,
                    codeProduct,
                    statusOrder: '0',
                    timeOrder: nowTimeOrder
                  });

                  try{

                    dataFirstOrder.save();
                
                  } catch (err){
                      console.log(err);
                    
                  }

                }   
            });

              console.log(CartPerson);
              randomNumber = randomQuery.generate({
                length: 4,
                charset: 'hex',
                capitalization: 'uppercase'
              });
              CartPerson = [];
              socket.emit('randomNumber', { randomNumber });
            }

          }
        });
      });
      
    return;
}
    