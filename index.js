const { createServer } = require('node:http');

// const hostname = 'localhost';
const port = 3004;

const server = createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('node push project updated');
});

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});