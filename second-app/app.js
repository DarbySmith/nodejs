// better to store as a constant than var so don't accidentally reassign
const logger = require('./logger')

console.log(logger)

// calling method in logger.js
logger.log('message');

// ANOTHER WAY - importing as an object 
// logger('message');

// console object is goblal scope
// function sayHello(name) {
//     console.log("hello " + name);
//     return name
// }

// sayHello("darby")

// window and document are objects to use in browser
// this will throw an exception
// console.log(window);
