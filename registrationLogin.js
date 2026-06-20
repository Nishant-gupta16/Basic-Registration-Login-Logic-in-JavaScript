# JavaScript Registration and Login Example

This program demonstrates a simple Registration and Login system using JavaScript.

## Code

```js
// Registration

let Name = prompt("Enter Name ");
let pass = Number(prompt("Create Password"));

console.log(Name);
console.log(pass);

alert("Registration Successful");

// Login

let user = prompt("Enter User Name");
let password = prompt("Enter Password");

// Validation

if (user == Name && password == pass) {
    alert("Welcome " + Name);
} else {
    alert("Invalid Password or User Name");
}

// Check Data Type

console.log(typeof user);
```

---

## Step 1: Registration

User enters a name and password.

```js
let Name = prompt("Enter Name ");
let pass = Number(prompt("Create Password"));
```

### Example Input

```
Name: Nishant
Password: 123
```

---

## Step 2: Registration Success Message

```js
alert("Registration Successful");
```

### Output

```
Registration Successful
```

---

## Step 3: Login

User enters username and password again.

```js
let user = prompt("Enter User Name");
let password = prompt("Enter Password");
```

### Example Input

```
User Name: Nishant
Password: 123
```

---

## Step 4: Validation

```js
if (user == Name && password == pass) {
    alert("Welcome " + Name);
} else {
    alert("Invalid Password or User Name");
}
```

### Condition

- Username should match the registered name.
- Password should match the registered password.

### Successful Login

```
Welcome Nishant
```

### Failed Login

```
Invalid Password or User Name
```

---

## Step 5: typeof Operator

```js
console.log(typeof user);
```

### Output

```
string
```

### Why?

`prompt()` always returns data as a string.

Example:

```js
let age = prompt("Enter Age");

console.log(age);
console.log(typeof age);
```

Output:

```
20
string
```

---

## Important Note

In your code:

```js
let pass = Number(prompt("Create Password"));
let password = prompt("Enter Password");
```

`pass` is a Number and `password` is a String.

A better approach is:

```js
let password = Number(prompt("Enter Password"));
```

Then comparison becomes:

```js
if (user == Name && password == pass)
```

Both values will be Numbers.

---

## Concepts Used

- Variables (`let`)
- `prompt()`
- `alert()`
- `console.log()`
- `Number()`
- `if...else`
- Comparison Operators (`==`)
- Logical AND (`&&`)
- `typeof`

---

## Learning Outcome

After completing this example, you will understand:

1. User Input using `prompt()`
2. Showing messages using `alert()`
3. Registration and Login Logic
4. Data Type Conversion using `Number()`
5. Conditional Statements (`if-else`)
6. `typeof` Operator
7. Logical Operators (`&&`)
