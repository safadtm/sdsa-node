// DEMONSTRATE READING FILE WITH NODE JS
const fs=require('fs');

fs.readFile('test.txt',function(err,data){
    if(err){
        console.log(err);
        return;
    }

    console.log(data.toString());
});