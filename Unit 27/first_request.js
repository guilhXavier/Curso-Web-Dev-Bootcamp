var request = require('request');
request('https://steamspy.com/api.php?request=appdetails&appid=730', function(error, response, body) {
  if (error) {
    console.log("Something went wrong!");
    console.log(error);
  } else {
    console.log(body);
  }
});
