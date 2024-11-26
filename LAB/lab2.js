//  CREATE A SIMPLE NODE FOR DEMONSTRATING NON- BLOCKING OR ASYNCHRONOUS FORM
var fs=require('fs');
const { setTimeout } = require('timers');
fs.readFile('test.txt',function(err,data){
    if(err){
        console.log(err);
    }
    setTimeout(()=>{
        console.log("Display after 5 second");
        console.log(data.toString());
    },5000);
});
console.log("Start here")