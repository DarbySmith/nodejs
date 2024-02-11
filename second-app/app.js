
// HTTP module
const http = require('http');

// has all the methods that events --> inherits from EventEmitter
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if (req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

// server.on('connection', (socket) => {
//     console.log('New connection');
// });

server.listen(3000);

console.log('Listening on port 3000... ');





// // REFACTORING EVENTS MODULE TO INCLUDE logger.js

// const Logger = require('./logger');
// const logger = new Logger();

// logger.on('messageLogged', (arg) => {
//     console.log('Listener called', arg);
// });
 
// logger.log('message')





// // EVENTS MODULE

// const EventEmitter = require('events');
// const emitter = new EventEmitter();

// //register a listener that looks for emitted events and runs function    
// // emitter.on('messageLogged', function(arg){ // uses function syntax

// emitter.on('messageLogged', (arg) => { // uses arrow syntax to remove function keyword
//     console.log('Listener called', arg);
// });

// emitter.on('logging', (arg) => {
//     console.log('Eventing logging', arg)
// })

// // // used to raise an event - signalling something has happened
// // emitter.emit('messageLogged', {id: 1, url: 'http://'});

// emitter.emit('logging', {message: 'message'})



// // FS MODULE
// const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

// fs.readdir('./', function(err, files) {
//     if (err) console.log('Error', err);
//     else console.log('Result', files);
// })



// OS MODULE
// const os = require('os');

// var totalMemory = os.totalmem();
// var freeMemory = os.freemem;

// console.log(`Total Memory: ${totalMemory}`);
// console.log('Free Memory: ' + freeMemory);



// PATH MODULE
// const path = require('path');

// var pathObject = path.parse(__filename);

// console.log(pathObject)
// // ==> {
// //     root: '/',
// //     dir: '/Users/darbysmith/Desktop/nodejs/second-app',
// //     base: 'app.js',
// //     ext: '.js',
// //     name: 'app'
// //   }




// LOADING MODULES
// // better to store as a constant than var so don't accidentally reassign
// const logger = require('./logger')

// console.log(logger)

// // calling method in logger.js
// logger.log('message');

// ANOTHER WAY - importing as an object 
// logger('message');




// SCOPES
// console object is goblal scope
// function sayHello(name) {
//     console.log("hello " + name);
//     return name
// }

// sayHello("darby")

// window and document are objects to use in browser
// this will throw an exception
// console.log(window);
