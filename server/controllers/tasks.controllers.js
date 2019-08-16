const Task = require('../models/task.model')

exports.showAll = (req, res) => {
    console.log("showing all tasks");
    Task.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
}

exports.showOne = (req, res) => {
    console.log("showing one task");
    Task.findOne({title: req.params.title})
    .then(task => res.json(task))
    .catch(err => res.json(err))
}

exports.newTask = (req, res) => {
    console.log("creating new task");
    const task = new Task();
    task.title = req.params.title;
    task.save()
        .then(tasks => res.redirect('/api/tasks'))
        .catch(err => res.json(err))
}

exports.removeTask = (req, res) => {
    console.log("removing a task");
    Task.findOne({title: req.params.title}) 
    .then(task => {
        Task.remove({title: req.params.title})
            .then(title => res.redirect('/api/tasks'))
            .catch(err => res.json(err))
    .catch(err => res.json(err))
    })
}

exports.updateTask = (req, res) => {
    console.log("updating a task");
    Task.findOne({title: req.params.title})
    .then(task => {
        task.title = req.params.title;
        task.description = req.params.description;
        task.completed = req.params.completed;
        return task.save();
    })
    .then(saveResult => res.json(saveResult))
    .catch(err => res.json(err));
}