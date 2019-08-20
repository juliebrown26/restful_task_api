const Task = require('../models/task.model')

exports.showAll = (req, res) => {
    console.log("showing all tasks");
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
}

exports.showOne = (req, res) => {
    console.log("showing one task");
    Task.findOne({_id: req.params.id})
    .then(task => res.json(task))
    .catch(err => res.json(err))
}

exports.newTask = (req, res) => {
    console.log("creating new task");
    const task = new Task(req.body);
    task.save()
        .then(task => res.json(task))
        .catch(err => res.json(err))
}

exports.removeTask = (req, res) => {
    console.log("removing a task");
    Task.deleteOne({_id: req.body._id}, req.body)
        .then(task => res.json(task))
        .catch(err => res.json(err))
}

exports.updateTask = (req, res) => {
    console.log("updating a task");
    Task.findOneAndUpdate({_id: req.body._id}, req.body, {new: true})
    .then(task => res.json(task))
    .catch(err => res.json(err));
}