// CREATE A SIMPLE NODE FOR DEMONSTRATING BLOCKING OR SYNCHRONOUS FORM
var fs=require('fs');
var data = fs.readFileSync('test.txt');
console.log(data.toString());
console.log('ended');