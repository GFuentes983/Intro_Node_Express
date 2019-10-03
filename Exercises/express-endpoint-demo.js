var express = require('express');
var app = express();
var fs = require('fs');
var port = 8080;
app.use(express.static(__dirname));

app.listen(port, () => {
    console.log('Server listening on localhost:%s', port);
});

app.use('/message', (req, res) => {
     console.log('User requested an endpoint!');
     res.send('<h2>Hello from the server endpoint!</h2>');
 });

app.use('/users', (req, res) => {
    fs.readFile('./data1.json', 'utf-8', (err, data) => {
        res.send(data);
    });
});