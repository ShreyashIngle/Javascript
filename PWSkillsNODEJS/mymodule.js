// let add = (a, b) => {
//   return a+b;
// };

// let prod = (a,b) =>{
//  return a*b;
// }

// module.exports = add;
// module.exports = prod//this will override the module


// module.exports = {
//     add : add,
//     prod : prod
// }

//OR

exports.add = (a, b) => {
    return a+b;
  };
  
  exports.prod = (a,b) =>{
   return a*b;
  }
  