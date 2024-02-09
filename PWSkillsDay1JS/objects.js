const user = {
  name: " shreyash",
  age: 20,
  city: "Paratwada",
};

console.log(user);
console.log(user.name);
console.log(user["name"]);
console.log(user.age);

//adding data
user.country = "india";
user["continent"] = "Asia";
console.log(user);

//delete
delete user.continent;
console.log(user);

delete user["continet"];
console.log(user);

let person = {
  name: "shreyash",
  age: 20,
  address: {
    city: "paratwada",
    country: "india",
    state: "Maharashtra",
  },
};

for (let i in person) {
    console.log(i, "=>",person[i])
}


console.log(Object.keys(person))
console.log(Object.values(person))

//get both key and value
console.log(Object.entries(person))