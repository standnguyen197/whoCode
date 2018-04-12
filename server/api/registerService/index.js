var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var RegisterServiceModel = require('../../models/RegisterService');
var jwt = require('jsonwebtoken');

/* GET ALL AuthS */
router.get('/', verifyToken, function(req, res, next) {
  jwt.verify(req.token, 'thekingstand',(err,authData) => {
    if(err){
        res.sendStatus(403);
    }else{
      RegisterServiceModel.find(function (err, users) {
            if (err|| !users){
                return next(err);
            }else{
                res.json(users);
            } 
           
        });
    }
  })  
});

/* GET SINGLE Auth BY ID */
router.post('/', function(req, res, next) {
  var bodyData = req.body;
  var bodyUserID = req.body.userID;
  
  RegisterServiceModel.findOneAndUpdate({userID: bodyUserID}, {$set: bodyData}, {upsert: true,new: true}, function(err, doc){
    if(err){
        console.log("Something wrong when updating data!");
    }else{
      res.json(doc);
    }
   
});
});

/* GET SINGLE Auth BY ID */
router.get('/:id', function(req, res, next) {
  RegisterServiceModel.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
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
/* UPDATE Auth */
router.put('/:id', function(req, res, next) {
  console.log(req.body);
  RegisterServiceModel.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Auth */
router.delete('/:id', function(req, res, next) {
  RegisterServiceModel.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
