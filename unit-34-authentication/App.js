let express               = require('express'),
    mongoose              = require('mongoose'),
    passport              = require('passport'),
    bodyParser            = require('body-parser'),
    localStrategy         = require('passport-local'),
    passportLocalMongoose = require('passport-local-mongoose');

mongoose.connect('mongodb://localhost:8080/auth-demo-app');
let app = express();

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
    res.render('home');
});

app.get("/secret", function(req, res) {
    res.render("secret");
});

app.listen(5000, function() {
    console.log("WE'RE LIVE");
});