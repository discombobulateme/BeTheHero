const express = require("express");
const cors = require('cors');

//import routes from routes.js file
// ./ = the file, just routes means a package ;) 
const routes = require('./routes');

const app = express();

app.use(cors());
//makes responses objects understandable as json format
app.use(express.json());
app.use(routes);

app.listen(3333);