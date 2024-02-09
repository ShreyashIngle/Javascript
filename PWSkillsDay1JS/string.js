const { log } = require("console");
const { stringify } = require("querystring");

let name = "shreyash";

let city = "paratwada";
console.log(name);

console.log(typeof city);

// accessing character in String

console.log(name[2]);
console.log(name[6]);
console.log(name[4]);

// length of the stirng
let fname = "shreyash";

let mname = "rajesh";

let lname = "ingle";

let fullname = fname.concat(" " + lname);

console.log(fullname);

//convert into uppercase

console.log(fullname.toUpperCase());

//char at

console.log(fullname.charAt(5));

//slicing
console.log(fullname);
console.log(fullname.slice(1));
console.log(fullname.slice(2, 5)); //2---n-1  i.e 2---5-1
console.log(fullname.slice(-5)); //starts form end -1,-2,-3...

//indexOf

console.log(name.indexOf("s"));


//trim

var name2 = "   shreyash   "

console.log(name2.trim()) // removes the left and right characters

//split

console.log(fullname.split(" "))