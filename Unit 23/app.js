var Express = require("express");
var app = Express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
  res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
  res.send("Goodbye!!");
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res){
  res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
  let subreddit = req.params.subredditName;
  res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!");
});

app.get("/r/:subredditName/comments/:id/:title", function(req, res){
  console.log(req.params);
  res.send("WELCOME TO THE COMMENTS PAGE!");
});

//must be the last one!!!!
app.get("*", function(req, res){
  res.send("WE EAT LIKE STARS");
});

// start server
app.listen(8080, function() {
  console.log("WERE LIVE");
});
