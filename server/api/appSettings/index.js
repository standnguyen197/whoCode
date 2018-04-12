var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var liveSettingsModel = require('../../models/liveSettings');
var jwt = require('jsonwebtoken');


/* POST LIVESETTINGS */
router.post('/liveSettings', verifyToken, function(req, res, next) {
  var bodyData = req.body;
  var bodyUserID = req.body._idUser;
  jwt.verify(req.token, 'thekingstand',(err,authData) => {
        if(err){
            res.sendStatus(403);
        }else{
               liveSettingsModel.findOneAndUpdate({_idUser: bodyUserID}, {$set: bodyData}, {upsert: true,new: true}, function(err, result){
                 if(err){
                     console.log("Something wrong when updating data!");
                 }else{

                   res.json(result);
                 }
   
            });
            
        }
  });

});
/* GET LIVESETTINGS */
router.post('/getliveSettings', verifyToken, function(req, res, next) {
    var bodyData = req.body;
    var bodyUserID = req.body._idUser;
    jwt.verify(req.token, 'thekingstand',(err,authData) => {
          if(err){
              res.sendStatus(403);
          }else{
                 liveSettingsModel.find({_idUser: bodyUserID}, function(err, result){
                   if(err || result == [] || !result){
                            res.status(203).send({resultStatus : 'notsuccess'});
                   }else{
                        var resultData = result[0];
                        res.status(200).send({resultStatus : 'success',resultData});
                       
                   }
     
              });
              
          }
    });
  
  });
  

function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];
    // Check if bearer is undefined
    if(typeof bearerHeader !== 'undefined'){
        //Split at the space
        const bearer = bearerHeader.split(' ');
        // Get totken from array
        const bearerToken = bearer[1];
        // Set the token
        req.token = bearerToken;
        // Next middleware
        next();
    }else{
        // Forbidden
        res.sendStatus(403);
    }
}

module.exports = router;
