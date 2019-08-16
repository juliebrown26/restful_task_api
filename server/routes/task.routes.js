module.exports = app => {
    const taskController = require('../controllers/tasks.controllers');
        app.get('/api/tasks', taskController.showAll);
        app.get('/api/tasks/:id', taskController.showOne);
        app.post('/api/tasks', taskController.newTask);
        app.put('/api/tasks/:id', taskController.updateTask);
        app.delete('/api/tasks/:id', taskController.removeTask);
};