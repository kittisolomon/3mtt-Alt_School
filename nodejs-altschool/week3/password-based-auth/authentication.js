const fs = require("fs")
const path = require("path");

const userDbPath = path.join(__dirname, "db", 'users.json');
function getAllUsers() {
    return new Promise((resolve, reject) => {
        fs.readFile(userDbPath, "utf8", (err, users) => {
            if (err) {
                reject(err);
            }
            resolve(JSON.parse(users));
        })
    })
}

function authenticate(req, res) {

    return new Promise((resolve, reject) => {
        //Authentication
        const body = [];

        req.on('data', (chunk) => {
            body.push(chunk)
        });
        req.on('end', async ()=> {
            const parsedBody = Buffer.concat(body).toString();

            if(!parsedBody) {
                reject('Username and Password Required');
            }
        const loginDetails = JSON.parse(parsedBody);

        const users = await getAllUsers();
        const userFound = users.find((user) => {
           return  user.username === loginDetails.username
        });
        if(!userFound) {
            reject('User not Found, please Signup!');
        }

        if(userFound.password !== loginDetails.password) {
            reject('Invalid username or password');
        }

        resolve();

        });
    });
}

module.exports = {
    authenticate
}