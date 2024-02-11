function hello(){
    let name ="shreyash"
    console.log(name)
}

// hello()
// hello()
// hello()
// hello()

function outerfn(){
    let outterVar = "shreyash"
    function innerFn(){
        console.log(outterVar)
    }
    return innerFn
}
let fn = outerfn
fn()