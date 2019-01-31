var Express = require("express");
var app = Express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assingment!");
});

app.get("/speak/:animal", function(req, res) {
  let animal = req.params.animal;
  switch (animal) {
    case "pig":
      res.send("Oink!");
      break;
    case "cow":
      res.send("Moo");
      break;
    case "dog":
      res.send("Woof Woof!");
      break;
    default:
      res.send("Sorry, page not found :p");
      break;
  }
});

app.get("/repeat/:word/:num", function(req, res) {
  let word =  req.params.word;
  let back = "";
  let num = req.params.num;
  for(let i = 0; i < num; i++) {
    back += word + " ";
  }
  res.send(back);
});

app.get("*", function (req, res) {
  res.send("Sorry, page not found :p");
});

app.listen(8080, function() {
  console.log("WE'RE LIVE");
});
