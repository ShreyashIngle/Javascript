//destructuring in arrays

const num = [1,2,3]

const [a,b,c] = [1,2,3]
console.log(a)
console.log(b)
console.log(c)

const [p,q,r] = [1,2,[3,4,5]]
console.log(p)
console.log(q)
console.log(r)

//object destructuring
let person = {
    name:'shreyash',
    age:20,
    city:"Paratwada"
}

const {name,age} = person
console.log(name)
console.log(age)