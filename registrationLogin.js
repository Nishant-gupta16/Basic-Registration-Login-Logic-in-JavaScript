let Name = prompt("Enter Name");
let pass = Number(prompt("Create Password"));

alert("Registration Successful");

let user = prompt("Enter User Name");
let password = Number(prompt("Enter Password"));

if (user == Name && password == pass) {
    alert("Welcome " + Name);
} else {
    alert("Invalid Password or User Name");
}

console.log(typeof user);
console.log(typeof password);
