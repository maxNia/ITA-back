const http = require('http');
const users = require('../src/user.ts');

const hostname = '127.0.0.1';
const port = 4000;


const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        res.statusCode = 403;
        res.end();
        return;
    }

    if (req.url === '/addUser') {
        let body = [];

        req.on('data', chunk => {
            body.push(chunk);
        }).on('end', () => {
            users.addUser(Buffer.concat(body).toString());
        });
        
        res.statusCode = 200;
        res.end('okay');
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});