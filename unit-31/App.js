var bodyParser =  require('body-parser');
var mongoose = require('mongoose');
var express = require('express');

var app = express();

mongoose.connect("mongodb://localhost:8080/restful_blog_app");

// app config
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// schema
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: { type: Date, default: Date.now }
});
var Blog = mongoose.model("Blog", blogSchema);

// routes
app.get("/", function(req, res) {
    res.redirect("/blogs");
});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        console.log(typeof req.next);
        if (err) {
            console.log("ERROR!");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

app.listen(5000, () => {
    console.log("WE'RE LIVE!");
});
