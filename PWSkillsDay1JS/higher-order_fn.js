const { getDefaultHighWaterMark } = require("stream");

// function that take function as a parameter
function operation(operationfn,a,b){
    return operationfn(a,b);
}

function add(a,b) {
    return (a+b)
}

let result = operation(add,2,3);

console.log(result)


function getgreetmethod(){
    return function(){
        console.log("hello world")
    }
}

let res = getgreetmethod()
res()
console.log(typeof res) ;