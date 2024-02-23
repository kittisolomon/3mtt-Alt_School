const http = require('http');
const fs = require('fs');
const path = require('path');

const bookDbPath = path.join(__dirname, 'db', 'books.json');

const PORT = process.env.PORT || 3000;
const HOST_NAME = 'localhost';

function requestHandler(req, res) {

    if(req.url === '/books' && req.method === 'GET') {
        getAllBooks(req, res);
    }else if (req.url === '/books' && req.method === 'POST') {
        addBook(req, res);
    }else if (req.url === '/books' && req.method === 'PUT') {
        updateBook(req, res);
    }else if (req.url === '/books' && req.method === 'DELETE') {
        deleteBook(req, res);
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            message: 'Method Not Supported'
        }));
    }
}

function getAllBooks(req, res) {
    fs.readFile(bookDbPath, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            res.writeHead(400);
            res.end('Opps An Error Occured');
        }
        res.end(data);
    });
}

function addBook(req, res) {
    const body = []

   req.on('data', (chunk) => {
    body.push(chunk);
   });

   req.on('end', () => {
    const parsedBook = Buffer.concat(body).toString();
    const newBook = JSON.parse(parsedBook);
    fs.readFile(bookDbPath, 'utf8', (err, data) => {
        if(err){
            console.log(err);
            res.writeHead(400);
            res.end('Opps An Error Occured');
        }
    const oldBooks = JSON.parse(data);
    const allBooks = [...oldBooks, newBook];
    console.log(allBooks);

    fs.writeFile(bookDbPath, JSON.stringify(allBooks), (err) => {
        if(err){
            console.log(err);
            res.writeHead(500);
            res.end(JSON.stringify({
                message: 'Internal Server Error. Could not save Book to the database'
            }));
        }
        res.writeHead(201);
        res.end(JSON.stringify(newBook));
    });

    });
    
   });

}

function updateBook(req, res) {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const detailsToUpdate = JSON.parse(parsedBody);
        const bookID = detailsToUpdate.id;

        fs.readFile(bookDbPath, 'utf8', (err, books) => {
            if(err){
                console.log(err);
                res.writeHead(400);
                res.end('Opps An Error Occured');
            }
        const booksArray = JSON.parse(books);
        const bookIndex = booksArray.findIndex((book) => {
            return book.id === bookID;
        });
            if(bookIndex === -1) {
                res.writeHead(404)
                res.end(JSON.stringify({
                    message: 'Book not found'
                }));
                return;
            }
        const updateBook = {...booksArray[bookIndex], ...detailsToUpdate};
        console.log(updateBook);
        booksArray[bookIndex] = updateBook;
        fs.writeFile(bookDbPath, JSON.stringify(booksArray), (err) => {
            if(err){
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Internal Server Error. Could not update Book to the database'
                }));
            }
            res.writeHead(200);
            res.end('Book updated sucessfully');
        });

        });
       
    });
}

function deleteBook(req, res) {
    const body = [];

    req.on('data', (chunk) => {
        body.push(chunk);
    });

    req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const detailsToUpdate = JSON.parse(parsedBody);
        const bookID = detailsToUpdate.id;

        fs.readFile(bookDbPath, 'utf8', (err, books) => {
            if(err){
                console.log(err);
                res.writeHead(400);
                res.end('Opps An Error Occured');
            }
        const booksArray = JSON.parse(books);
        const bookIndex = booksArray.findIndex((book) => {
            return book.id === bookID;
        });
            if(bookIndex === -1) {
                res.writeHead(404)
                res.end(JSON.stringify({
                    message: 'Book not found'
                }));
                return;
            }
       booksArray.splice(bookIndex, 1);    
        console.log(booksArray);
        fs.writeFile(bookDbPath, JSON.stringify(booksArray), (err) => {
            if(err){
                console.log(err);
                res.writeHead(500);
                res.end(JSON.stringify({
                    message: 'Internal Server Error. Could not delete Book to the database'
                }));
            }
            res.writeHead(200);
            res.end('Book deleted sucessfully');
        });

        });
       
    });
}

const server = http.createServer(requestHandler);
server.listen(PORT, HOST_NAME, () => {
    bookDB = JSON.parse(fs.readFileSync(bookDbPath, 'utf8'));
    console.log(`Server is listening on ${HOST_NAME}:${PORT}`);
}); 