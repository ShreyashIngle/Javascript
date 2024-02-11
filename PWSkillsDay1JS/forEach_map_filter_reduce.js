player = ["virat","dhoni","yuvi","rohit"]

player.forEach((palyer)=>console.log(palyer))

//map
arr= [1,2,3,4,5]
cube = arr.map((x)=>x**3)
console.log(cube)

//filter
let arr1 = [1,2,3,4,5,6,7,8,9]
let even = arr1.filter((x)=>x%2==0)
let odd = arr1.filter((x)=>x%2==1)
console.log("Even:"+even)
console.log("Odd:"+odd)


//reduce
const sum  = [1,2,3,4,5,6,7,8,9].reduce((x,y)=>x+y)
console.log(sum)


