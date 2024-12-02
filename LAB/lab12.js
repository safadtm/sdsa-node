// CREATE A SIMPLE NODE FOR DEMONSTRATING HTTP CONNECTION ESTABLISHMENT
const http=require('http');

const server = http.createServer((request,response)=>{
    response.end('Hello...Welcome..');
});

server.listen(8081,()=>{
    console.log('server is running');
});