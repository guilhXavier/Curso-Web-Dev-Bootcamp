let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:8080/blog-demo");

// POST - title, content
let postSchema = new mongoose.Schema({
    title: String,
    content: String
});

let postModel = mongoose.model("Post", postSchema);

// USER - email, name
let userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});

let User = mongoose.model("User", userSchema);

let newUser = new User({
    email: "hermione@hogwash.edu",
    name: "hermitao"
});

newUser.posts.push({
    title: "How to brew juice",
    content: "step 1: ??"
});

newUser.save(function(err, user){
    if (err) {
        console.log(err);
    } else {
        console.log(user);
    }
});

// let newPost = new Post({
//     title: "charlie's post",
//     content: "roses are red"
// });
// newPost.save(function(err, post){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({ name: "hermitao" }, function(err, user) {
    if (err) {
        console.log(err);
    } else {
        user.posts.push({
            title: "3 things i hate",
            content: "backend backend backend"
        });
        user.save(function(err, user) {
            if (err) {
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});