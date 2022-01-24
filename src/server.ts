import http from 'http';
const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('content-Type', 'text/plain');
    res.end('Hello!');
});

server.listen(3000,()=>{
    console.log('Server started on http://localhost:3000');
});