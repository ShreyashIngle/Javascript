array = [1,2,3,4,5];

console.log(array);

arr1 = new Array()

console.log(arr1)

console.log(array[3])

array.push(100); //end
console.log(array)

array.unshift(999);//front
console.log(array)

array.pop()//end
console.log(array)

array.shift();//front
console.log(array)


let a1 = [1,2,3]
let a2 = [5,6]
let a3 = a1.concat(a2);
console.log(a3)

console.log(array.length)

//slicing of the array

let a = array.slice(1,3);
console.log(a)

//splice
let b = array.splice(2,3)
console.log(b)
console.log(array)//modifies the org array

//reverse
let c = a1.reverse()
console.log(c)

//sorting the array

let d = [1,421,4,53,124]
 d.sort((a,b)=>a-b);//ascending
console.log(d)
d.sort((a,b)=>b-a);//desc
console.log(d)
