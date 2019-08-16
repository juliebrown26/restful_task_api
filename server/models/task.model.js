const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ""},
    completed: {type: Boolean, default: false},
}, {timestamps: true});
module.exports = mongoose.model('Task', TaskSchema);