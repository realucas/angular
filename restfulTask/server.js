const express = require("express");
const app = express();
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('express-flash');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/restfulTaskAPI', {useNewUrlParser: true});
require("./server/config/mongoose.js");

app.use(bodyParser.json());
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: true}));
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));


require('./server/config/routes.js')(app);

app.listen(8000, () => console.log("listening on port 8000"));



