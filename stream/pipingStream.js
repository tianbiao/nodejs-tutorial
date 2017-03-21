const fs = require("fs");

const readerStream = fs.createReadStream('input.txt');

const writerStream = fs.createWriteStream('pipingOutput.txt');

readerStream.pipe(writerStream);

console.log("Program Ended");
