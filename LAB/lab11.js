// DEMONSTRATE WRITING FILE WITH NODE JS
const fs=require('fs');
const content = 'some content here!!!!';
fs.writeFile('test.txt',content,function(err,data){
    if(err){
        console.log(err);
        return;
    }

    console.log('file written succesfully');
});