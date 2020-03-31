const app = require('./app');

//Using Heroku to deploy needs to have an open door
app.listen(process.env.PORT || 3333);