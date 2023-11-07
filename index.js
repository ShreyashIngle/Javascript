// let x = `Shreyash`;
// let y = `Ingle`;

// const name = `Hello My name is ${x} ${y} `;

// console.log(`MY name: ${name}`);

// let z = "2412";

// console.log(z.endsWith(1));

// let s = "2412";
// console.log(s.endsWith(1));

// let a = "2412";
// console.log(a.indexOf(1));

// let b = "2412";
// console.log(b.toString(1));

// let v = "2412";
// console.log(v[2]);

// let d = "2412";
// console.log(d.includes(1));

// let e = "Shreyash Ingle";
// console.log(e.substring(0,5));

// let r = "Shreyash Ingle";
// console.log(e.split("r"));

// let o = "Shreyash Ingle";
// console.log(o.toUpperCase());

// let p = "Shreyash Ingle";
// console.log(o.substr(3,6));

// let t = "Shreyash Ingle";
// console.log(e.replace("Ingle","Shetty"));

// let i = "Shreyash Ingle";
// console.log(i.length);

// DOM Manupulation

// let s = " my name is Shreyash Ingle";

// let heading = document.getElementById("myHeading");

// console.log(heading);

// heading.innerText = s;

// heading.style.background = "red";
// heading.style.color = "white";

// let IceCream = 20;

// if ((IceCream == 10)) {
//   console.log("Ice cream is vanilla");
// }
// else{
//     console.log("IceCream is chocolate")
// }

// let IceCream = Number(prompt("Enter the Number:"));

// if (IceCream == 20) {
//     console.log("IceCream is 20 rs")
// }
// else if (IceCream == 30)
// {
//     console.log("IceCreame is 30rs")
// }

// switch (IceCream) {
//     case 20:
//         console.log("IceCream is 20 rs");
//         break;
//     case 30:
//         console.log("IceCream is 30 rs");
//         break;

//     default:
//         break;
// }

// for (let i = 1; i < 10; i++) {
//   console.log(2 + " X " + "" + i + " = " + i * 2);
// }
// let i = 0
// while (i<10) {
//     console.log(i);
//     i++;
// }

// let i = 0;

// do {
//     console.log(i);
//     ++i;
// } while (i<10);

//ARRAYS

// let arr =[13,412,51,53,24,1,4];
// let arr1 =["shreyash","Ingle"];

// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element)
// }

// console.log(arr1[1]);

// let arr3 = new Array(1,2,3,4,5,6,7);

// arr3.push(8);
// arr3.push(9);
// arr3.push(10);

// let newarray = arr3.slice(1,4);
// console.log(newarray);

// arr3.splice(2,3)//deletes 3 4 5
// arr3.reverse();
// arr3.shift()//removes first element form array
// arr3.shift()//removes second element form array
// console.log(arr3);

// const arr = {
//   0: "shreyash",
//   1: "Rajesh",
//   2: "Ingle",
//   male: true,
//   name: "shreyash",
// };

// arr.college = "PICT"; //to add new key in an array

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr.male);
// console.log(arr.name);
// console.log(arr.college);

// const myfunc = function addition(x ,y) {
//     let add = x+y;
//     console.log(add);
// }

// addition(24,13)

// function Even(arr) {

//     for (let i  = 0; i  < arr.length; i ++) {
//         const element = arr[i];
//         if (arr[i]%2 == 0) {
//             console.log("Even: "+arr[i])
//         }
//         else{
//             console.log("Odd: "+arr[i])
//         }
//     }
// };

// let arr = [1,2,3,4,5,6,7,8,9,10]

// Even(arr);

// function totalArray(arr1 = []){

//     let total = 0;
//     for (let i = 0; i < arr1.length; i++) {
//        total = total + arr1[i];
//     }

//     return total;
// }

// console.log(totalArray([1,2,3,4,5]))

//VAR can be used outside the function and LET cannot be used outside it is local to the function

//DOM MANUPULATION ADVANCED
// console.log(thisone)
// console.log(document.getElementById("thisone"))

// console.log(document.getElementsByClassName("hi"))

// console.log(document.getElementsByName("name"))