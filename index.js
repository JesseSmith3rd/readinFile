var fs = require('fs');

fs.readFile('temp.txt', 'UTf-8' ,function(err, buf) {
  console.log(buf.toString());
});
