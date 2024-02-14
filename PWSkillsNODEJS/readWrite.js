const fs = require('fs')

//read in sync way

// const data = fs.readFileSync('input.txt');
// console.log("Output :" +data)

// read in async way

// const data = fs.readFile("input.txt",(err,data)=>{
//     if(err) return console.log(err)
   
//     console.log("Output: " + data)
// })




//Write into file Sync way
// fs.writeFileSync("output.txt","this is my data")

//Write in Async way
fs.writeFile("output.txt","this is my data shreyash",(err)=>{
    if(err) return console.log(err)
    console.log("done")
})