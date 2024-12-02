// DEMONSTRATE A READ FILE IN LOCAL HOST USING STREAM
const http=require('http');
const fs=require('fs');

const server = http.createServer((request,response)=>{
    const stream=fs.createReadStream('summer.html');
    stream.pipe(response);
});

server.listen(8081,()=>{
    console.log('server is running');
});