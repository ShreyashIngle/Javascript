function greet(name,callback){
    const greeting = " hello "+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Shreayash",displayGreeting)

//callback Hell | pyramid doom