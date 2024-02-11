
const EventEmitter = require('events');

class Logger extends EventEmitter {
    // don't need function keyword for methods inside class
    log(message) {
        //send http request
        console.log(message);
        this.emit('messageLogged', {id: 1, url: 'http://'});
    }
}

module.exports = Logger;

// only want to export the subset of functions needed outside the module
// module.exports.log = log;

// ANOTHER OPTION - exports an object 
// module.exports = log;

// can change the name of the import function to endPoint
// module.exports.endPoint = url;
// })