// module wrapper function
// (function (exports, require, module, __filename, __dirname) {

console.log(__filename);
console.log(__dirname);

var url = 'http://mylogger.io/log';

function log(message) {
    //send http request
    console.log(message);
}

// only want to export the subset of functions needed outside the module
module.exports.log = log;

// ANOTHER OPTION - exports an object 
// module.exports = log;

// can change the name of the import function to endPoint
module.exports.endPoint = url;
// })