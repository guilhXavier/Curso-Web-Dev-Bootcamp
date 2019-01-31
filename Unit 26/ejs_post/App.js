var Express = require("express");
var app = Express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addfriend", function(req, res) {
  res.send("you have reached the post route");
});

app.get("/friends", function(req, res) {
  let friends = [ "Tony", "Miranda", "Justin", "Pierre", "Lily" ];
  res.render("friends", { friends: friends });
});

app.listen(8080, function() {
  console.log("WE'RE LIVE");
});
