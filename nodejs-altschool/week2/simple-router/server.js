const http = require('http');
const {authors, books } = require('./fixtures.js');

const PORT = process.env.PORT || 3000;
const HOST_NAME = 'localhost';


function requesHandler(req, res) {
    switch(req.url){
        case '/authors':
            res.writeHead(200)
            res.end(JSON.stringify(
                authors
            ));
            break;
        case '/books':
            res.writeHead(200)
            res.end(JSON.stringify(
                books
            ));
            break;
        default:
            res.writeHead(404)
            res.end('Route not found!')
            break;
    }
    
}

const server = http.createServer(requesHandler);
server.listen( PORT, HOST_NAME, () => {
    console.log(`Server is running on: ${HOST_NAME}:${PORT}`);
    
});