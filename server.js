// Import
const express = require("express");
const app = express();
const mongoose = require('mongoose');
//Config
require('./server/routes/mongoose');
app.use(express.static(__dirname + "/public/dist/public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//Routes
require('./server/routes/task.routes')(app);
//Port
app.listen(8000, () => console.log("listening on port 8000"));