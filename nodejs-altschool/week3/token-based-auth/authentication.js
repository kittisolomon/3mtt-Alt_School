require('dotenv').config();

const API_KEY = process.env.API_KEY;

function authenticateUser(req, res) {
    return new Promise((resolve, reject) => {
    let token = req.headers.authorization;
   if(!token){
    reject('Token no providded');
   } 
   token = token.split(" ")[1];
   if(token !== API_KEY){
    reject("Invalid token");
   }
   resolve();
});
}

module.exports = {
    authenticateUser
}