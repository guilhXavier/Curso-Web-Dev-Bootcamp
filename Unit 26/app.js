var Express = require("express");
var app = Express();

app.get("/", function(req, res){
  res.render("home.ejs");
});

// fallInLoveWith/rusty
app.get("/fallInLoveWith/:thing", function(req, res) {
  let thing = req.params.thing;
  res.send("You fell in love with " + thing);
});

app.listen(8080, function () {
  console.log("WE'RE LIVE");
});
