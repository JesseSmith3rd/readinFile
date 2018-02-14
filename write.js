var fs = require('fs');

var data = "I am going to be the best at this game son!!";

fs.writeFile('temp.txt', data, function(err, data) {
  if(err) console.log(err);
  console.log("successfully written to file");
})
