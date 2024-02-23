const HTTP = require('http');

const HOSTNAME = 'localhost';
const PORT = 5000;

function requestHandler (req, res) {
    //  console.log(req);
    res.writeHead(200);
    res.write('Hello This is NODEJS\n');
    res.write('THis is a test response\n');
    res.end('Hello from the server');
}

const server = HTTP.createServer(requestHandler);

server.listen(PORT, HOSTNAME, () => {
    console.log(`Server running at: http://${HOSTNAME}:${PORT}/`);
});
