var fs = require('fs');
const phoneNumber = (err, data) => {
    console.log('data', data)
}

fs.readdir('../', phoneNumber);
console.log("This code is last");