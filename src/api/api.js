
import express from 'express';
var router = express.Router();
var mongojs = require('mongojs');
var ObjectId = require('mongodb').ObjectID;
var db = mongojs('mongodb://ravendra:1234@ds111059.mlab.com:11059/my_task') 

router.get('/task', function(req, res, next){
    db.collection('task').find().toArray(function(err, data){
        if(err) {
            res.send(err)
        } 
        res.json(data)
    })
  })

  router.get('/new_task', function(req, res, next){
    db.collection('new_task').find().toArray(function(err, data){
        if(err) {
            res.send(err)
        } 
        res.json(data)
    })
  })
  
  //Get single Task
  router.get('/task/:id', function(req, res, next){
    db.task.findOne({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Get single Task
  router.delete('/task/:id', function(req, res, next){
    db.task.remove({_id: ObjectId(req.params.id)}, function(err, data){
        if(err) {
            res.send(err)
        }
        res.json(data)
    })
  })

    //Post  Task
  router.post('/task', function(req, res, next){
      var task = req.body
       if (!task){
            return res.status(400).send("Bad Request");
        }
        db.task.save(task, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
  })

   //update task
  router.put('/task/:id', function(req, res, next){
    var task = req.body
    if(!task){
        return res.status(400).send("Bad Request");
    } else {
        db.task.update({_id: ObjectId(req.params.id)}, task, function(err, data){
            if(err) {
                res.send(err)
            }
            res.json(data)
        })
    }
  })

module.exports = router;
