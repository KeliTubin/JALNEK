import http from 'http';
import App from './app';

// const server = http.createServer((req, res) =>{
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello!');
// });
// let message: String = 'Hello!';

// server.listen(3000,()=>{
//     console.log('Server started on http://localhost:3000');
// });

const httpServer = http.createServer(App)
httpServer.listen(3000,()=>{
    console.log('Server started on http://localhost:3000');
});