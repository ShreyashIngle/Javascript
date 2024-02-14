//to call the module here

// const add = require('./mymodule');

// console.log(add(5,5)) 

const operation = require('./mymodule');

console.log( typeof operation) // object

console.log(operation.add(5,5))
console.log(operation.prod(5,5))