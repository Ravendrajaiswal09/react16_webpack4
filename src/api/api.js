
import express from 'express';
var router = express.Router();
var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectID;
//var db = mongojs('mongodb://ravendra:1234@ds111059.mlab.com:11059/my_task') 
var db = mongojs('mongodb://localhost:27017/my_newDB')


router.get('/task', function(req, res, next){
    db.collection('users').find().toArray(function(err, data){
        if(err) {
            res.send(err)
        } 
        res.json(data)
    })
  })
  
  //Get single Task
  router.get('/task/:id', function(req, res, next){
    db.users.findOne({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Delete single Task
  router.delete('/task/:id', function(req, res, next){
    db.users.remove({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Post  Task
  router.post('/task', function(req, res, next){
      var body = req.body
       if (!body){
            return res.status(400).send("Bad Request");
        }
         db.users.save(body, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
  })

   //update task
  router.put('/task/:id', function(req, res, next){
    var body = req.body
    if(!body){
        return res.status(400).send("Bad Request");
    } else {
        db.users.update({_id: ObjectId(req.params.id)}, body, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
    }
  })

module.exports = router;
