const mongoose = require('mongoose'),
Task = mongoose.model('Task');

module.exports = {
    index: function(req, res){
        Task.find({}, function(err, task){
            if(err){
                console.log("Root error");
                res.json(err);
            }
            else{
                res.json(task);
            }
        })
    },
    showTask: function(req, res){
        Task.findOne({_id: req.params._id}, function(err, task){
            if(err){
                res.json(err);
            }else{
                res.json(task);
            }
        })
    },
    createTask: function(req, res){
        Task.create({title: req.body.title, description: req.body.description, completed: req.body.completed}, function(err, task){
            if(err){
                res.json({message: "Error!", error:err});
            }else{
                res.json({message: "Success!", added: true});
            }
        })
    },
    
    updateTask: function(req, res){
        Task.findById({_id: req.params._id}, function(err, task){
            if(err){
                res.json({message: "Error!", error:err});
            }else{
                if(req.body.title){
                    task.title = req.body.title;
                }
                if(req.body.description){
                    task.description = req.body.description;
                }
                if(req.body.completed){
                    task.completed = req.body.completed;
                }
                task.save(function(err){
                    if(err){
                        res.json(err);
                    }
                    else{
                        res.json(task);
                    }
                })
            }
        })

    },
    deleteTask: function(req, res){
        Task.remove({_id: req.params._id}, function(err, deleted){
            if(err){
                res.json(err);
            }else{
                res.json(deleted);
            }
        })
    }
};
