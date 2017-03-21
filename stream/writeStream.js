const fs = require("fs");
const data = 'Simply Easy Learning';

const writerStream = fs.createWriteStream('output.txt');

writerStream.write(data, 'UTF8');

writerStream.end();

writerStream.on('finish', function() {
  console.log("write completed.");
});

writerStream.on('error', function(err) {
  console.log(err.stack);
});

console.log("Program Ended");
