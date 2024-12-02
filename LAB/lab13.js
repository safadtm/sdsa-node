// CREATE A SIMPLE NODE FOR DEMONSTRATING HTTP HEADERS
const http=require('http');

const server = http.createServer((request,response)=>{
    response.setHeader('Content-Type','text/html');
    response.end('<h1>Hello World</h1>');
});

server.listen(8081,()=>{
    console.log('server is running');
});