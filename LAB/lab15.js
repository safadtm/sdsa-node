// DEMONSTRATE HTTP REQUEST METHODS-GET METHOD
const http = require('http');
const fs = require('fs');

const s = http.createServer((request, response) => {
    if (request.method == "GET") {
        response.writeHead(200, { "content-type": "text/html" });
        fs.createReadStream("index.html", "utf-8").pipe(response);
    } else if (request.method == "POST") {
        var body = "\n";
        request.on("data", function (ch) {
            body = body + ch;
        });
        request.on("end", function () {
            response.writeHead(200, { "content-type": "text/html" });
            response.end(body);
        });
    }
});

s.listen(8081, () => {
    console.log('Server is running...');
});
