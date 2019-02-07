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

// index route
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log("ERROR!");
        } else {
            res.render("index", { blogs: blogs });
        }
    });
});

// new route
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

// create route
app.post("/blogs", function(req, res) {
    // create blog
    Blog.create(req.body.blog, function(err, newBlog) {
        if (err) {
            res.render("new");
        } else {
            // then redirect to index
            res.redirect("/blogs");
        }
    });
});

// show route
app.get("/blogs/:id", function(req, res) {
    Blog.findById(req.params.id, function(err, foundBlog) {
        if (err) {
            res.redirect("/blogs");
        } else {
            res.render("show", { blog: foundBlog });
        }
    });
});

// edit route
app.get("/blogs/:id/edit", function(req, res) {
    res.render("edit");
});

app.listen(5000, () => {
    console.log("WE'RE LIVE!");
});
