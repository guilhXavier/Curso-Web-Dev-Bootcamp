var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:8080/cat_app");

let catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

let Cat = mongoose.model("Cat", catSchema);

// adding a new cat
let george = new Cat({
  name: "George",
  age: 11,
  temperament: "Grouchy"
});

// george.save(function(err, cat) {
//   if (err) {
//     console.log("SOMETHING WENT WRONG!");
//   } else {
//     console.log("A CAT WAS SAVED TO THE DB");
//     console.log(cat);
//   }
// });

Cat.create({
  name: "Snow",
  age: 15,
  temperament: "Nice"
}, function(err, cat) {
    if (err) {
        console.log("SOMETHING WENT WRONG!");
        console.log(err)
    } else {
      console.log("A CAT WAS SAVED TO THE DB");
      console.log(cat);
    }
});

// retrieving all cats
Cat.find({}, function(err, cats) {
  if (err) {
    console.log("OH NO");
    console.log(err);
  } else {
    console.log("ALL OF THEM");
    console.log(cats);
  }
});
