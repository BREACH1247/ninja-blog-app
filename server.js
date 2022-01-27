const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => {
    console.log(req.url,req.method);

    //lodash
    const num = _.random(0,50);
    console.log(num);
code
    //loading a function once using loadah
    const greet = _.once(() => {
        console.log('greet function');
    })

    greet();
    // rediredirecting to another path using basic node js
    res.setHeader('Content-Type', 'text/html');

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.setHeader('Location', '/about');
            res.statusCode = 301;
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err);
            res.end();
        }
        res.end(data);
        
    })
    
});

server.listen(3000, 'localhost', () => {
    console.log('listening on port');
});