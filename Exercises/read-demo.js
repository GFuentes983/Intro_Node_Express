const fs = require('fs');
fs.readFile('./data1.json', 'utf-8', (err, data) => {
    console.log(data);
});
console.log(data);
console.log(data.name);