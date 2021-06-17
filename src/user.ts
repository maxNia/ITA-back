const fs = require('fs');

const addUser = (body) => {
    const data = JSON.parse(body);
    const name = data.firstName.toLowerCase();
    const userData = `name: ${name[0].toUpperCase() + name.slice(1)} email: ${data.email.toLowerCase()}\n`;

    if (fs.existsSync('./users.txt')) {
        fs.appendFile('./users.txt', userData, (error) => logError(error));
    } else {
        fs.writeFile("users.txt", userData, (error) => logError(error));
    }
} 

const logError = (error) => {
    console.log(error);
}
    
module.exports = { 
    addUser: addUser
};