const express = require("express");
const cors = require('cors');
//celebrate = validation errors = to avoid errors such as 500
const { errors } = require('celebrate');

//import routes from routes.js file
// ./ = the file, just routes means a package ;) 
const routes = require('./routes');

const app = express();

app.use(cors());
//makes responses objects understandable as json format
app.use(express.json());
app.use(routes);
app.use(errors());

//dev environment, only localhost: 
// app.listen(3333);

//route for TDD integration test:
module.exports = app;