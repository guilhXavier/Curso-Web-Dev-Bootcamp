var Express = require("express");
var app = Express();

app.use(Express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

// fallInLoveWith/rusty
app.get("/fallInLoveWith/:thing", function(req, res) {
  let thing = req.params.thing;
  res.render("love", { thingLet: thing });
});

app.get("/posts", function(req, res) {
  let posts = [
    { title: "Post 1", author: "guilh" },
    { title: "Post 2", author: "gui" },
    { title: "Post 3", author: "g" }
  ];

  res.render("posts.ejs", { posts: posts });
});

app.listen(8080, function () {
  console.log("WE'RE LIVE");
});
