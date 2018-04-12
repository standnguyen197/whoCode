module.exports = (io) => { 
    var express = require('express');
    var mongoose = require('mongoose');
    var urlencode = require('urlencode');
    var liveSettingModel = require('../../models/liveSettings');
    var CartPerson = [];

    // LẤY NGƯỜI DỰ BỊ
    async function checkSubstituteLive(idUser){
       return await liveSettingModel.find({_idUser: idUser}).exec();
    }

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
          var substituteLive = queryLiveSetting[0].substituteLive + 1;
          var upMessage = msg.messageFB;
          var uppercaseMes = upMessage.toUpperCase();
          var randomCheckMessage = uppercaseMes.indexOf(randomNumber);
          
          if(randomCheckMessage != '-1'){
            
            CartPerson.push(msg);
            
            if(CartPerson.length == substituteLive){
              var firstPersonOrder = CartPerson.shift(); // Người đầu tiên mua hàng
              console.log(firstPersonOrder);
              var linkFB = firstPersonOrder.idFB;
              var idFB = firstPersonOrder.idFBSys;
              var avatarFB = firstPersonOrder.avatarFB;
              var nameFB = firstPersonOrder.nameFB;
              var codeProduct = randomNumber;
              console.log(randomNumber);
              var dataFirstOrder = {
                idFB,
                linkFB,
                nameFB,
                avatarFB,
                codeProduct,
                statusOrder: '1',
                timeOrder: ''
              }

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
    