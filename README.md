# JavaScript

JavaScript is a high-level, interpreted, programming language that conforms to the ECMAScript specification. It is a multi-paradigm language, supporting object-oriented, imperative, and functional programming styles.

## Table of Contents

## Main

1. [Print](https://github.com/Cheatsheet-lang/JavaScript#print)
2. [Variables](https://github.com/Cheatsheet-lang/JavaScript#variables)
3. [Operations](https://github.com/Cheatsheet-lang/JavaScript#operations)
4. [Arrays](https://github.com/Cheatsheet-lang/JavaScript#arrays)
5. [Objects](https://github.com/Cheatsheet-lang/JavaScript#objects)
6. [Conditional Statements](https://github.com/Cheatsheet-lang/JavaScript#conditions)
7. [Loops](https://github.com/Cheatsheet-lang/JavaScript#loops)
8. [Functions](https://github.com/Cheatsheet-lang/JavaScript#functions)
9. [Prompts](https://github.com/Cheatsheet-lang/JavaScript#prompts)
10. [Callbacks](https://github.com/Cheatsheet-lang/JavaScript#callbacks)
11. [Arrow Functions](https://github.com/Cheatsheet-lang/JavaScript#arrow-functions)
12. [Promises](https://github.com/Cheatsheet-lang/JavaScript#promises)
13. [Async/Await](https://github.com/Cheatsheet-lang/JavaScript#asyncawait)
14. [Classes](https://github.com/Cheatsheet-lang/JavaScript#classes)
15. [Function Context](https://github.com/Cheatsheet-lang/JavaScript#function-context)
16. [Inheritance](https://github.com/Cheatsheet-lang/JavaScript#inheritance)
17. [Destructing](https://github.com/Cheatsheet-lang/Javascript#destructing)

## Print

One of the basic functions which we need to know is the print of the language, which helps us in many ways to debug the code and to know the output of the code.

```javascript
console.log("Hello World");
```

## Variables

Like any other programming language, JS also has variables, by the variables in JS we can store any type of data in it, and we can use it later in the code. These are loosely typed variables, which means that you don't have to specify the data type of the variable.

```javascript
const integer = 10; // Integer variable
const string = "Hello World"; // String variable
const float = 10.5; // Float variable
const boolean = true; // Boolean variable
```

There are also two more advanced datatypes in JS, which are `Array` and `Object`.

```javascript
const arr = [1, 2, 3, 4, 5]; // Array variable
const obj = { name: "John", age: 20 }; // Object variable (similar to dict in python)
```

Another two value types in JS are `null` and `undefined`.

`undefined` is a type, when a variable is used but not defined.
`null` is a type, when a variable is defined but has no value.

```javascript
const nd_var;
console.log(nd_var); // prints undefined to the console
```

```javascript
const null_var = null;
console.log(null_var); // prints null to the console
```

There are two ways to declare a variable in JS, one is `const` and the other is `let`. The difference between them is that the `const` variables cannot be reassigned, but the `let` variables can be reassigned.

```javascript
const const_var = 10;
let let_var = 10;

const_var = 20; // throws an error in the JavaScript
let_var = 20; // works fine
```

For the const datatype, if you have assigned an array or an object, you can change the values of the array or the object, you can add additional elements and many more, but you cannot reassign the variable.

### Strings

Some of the default string functions and properties are:

```javascript
const str = "Hello World";
console.log(str.length); // prints 11 to the console
console.log(str.toUpperCase()); // prints HELLO WORLD to the console
console.log(str.toLowerCase()); // prints hello world to the console
```

Individual characters in the strings can be accessed by knowing the index, using two methods square bracket notation and `.at()` method.

One thing to note is that the index of the string starts from 0. One advantage of using `.at()` method is that we can use negative indices to access the characters from the end of the string.

```javascript
const str = "Hello World";
console.log(str[0]); // prints H to the console
console.log(str.at(0)); // prints H to the console
console.log(str.at(-1)); // prints d to the console
```

Getting a part of the strings is one of the useful things in programming, which can be done by using the `.substring()` method.

```javascript
const str = "Hello World";
console.log(str.substring(0, 5)); // prints Hello to the console
console.log(str.substring(6)); // prints World to the console
```

The second argument is always optional, if you don't specify it, it will assume that the second argument is the length of the string.

After this, another useful thing is to know about the template literals, which are used to print the variables in the strings. The template strings are enclosed within the backtick symbol "`".

```javascript
const name = "John";
console.log(`Hello ${name}`); // prints Hello John to the console
```

### Numbers

Numbers are one of the most important things in programming, and JS has a lot of functions and properties to deal with numbers.

```javascript
const num = 10000;

console.log(num.toString()); // prints 10000 to the console
```

Large and Long numbers can be represented with `_` using the underscore notation, to avoid confusion in reading them.

```javascript
const num = 100_000_000;
// is same as 100000000
```

When you want to convert a string into a number, you can use `parseInt()` method.

```javascript
const str = "100";
console.log(Number.parseInt(str, 10)); // 100, the second argument is the base of the number
```

There is also one usage of the above function. When the string starts with a number and ends with a non-numeric character, still the `parseInt()` function will return the number.

```javascript
const str = "100px";
console.log(Number.parseInt(str, 10)); // 100
// It ignores the px at the end
```

Now, let's come to the most important part of dealing with variables, which is operations on them.

## Operations

The operations on the variables are similar to any other programming language, but there are some special cases in JS.

**Addition**

```javascript
const a = 10;
const b = 20;
console.log(a + b); // prints 30 to the console
```

We can also perform addition on strings, which is called concatenation.

```javascript
const a = "Hello";
const b = "World";
console.log(a + b); // prints HelloWorld to the console
```

Some other operations are subtraction, multiplication, division, modulus, etc.

```javascript
const a = 10;
const b = 20;
console.log(a - b); // prints -10 to the console
console.log(a * b); // prints 200 to the console
console.log(a / b); // prints 0.5 to the console
console.log(a % b); // prints 10 to the console
```

There is also a shorthand notation of the operations, which is used to perform operations on the same variable.

```javascript
let a = 10;
a += 10; // a = a + 10
console.log(a); // prints 20 to the console
// Similarly, there are other operations like -=, *=, /=, %=
```

For more complex arithmetic operations, we can use the `Math` library.

```javascript
console.log(Math.pow(2, 3)); // prints 8 to the console
console.log(Math.sqrt(4)); // prints 2 to the console
console.log(Math.abs(-10)); // prints 10 to the console
console.log(Math.ceil(10.5)); // prints 11 to the console
console.log(Math.floor(10.5)); // prints 10 to the console
console.log(Math.round(10.5)); // prints 11 to the console
// and many more
```

## Arrays

Arrays are a type of datatype(advanced), which can store any kind of datatype in it. Arrays are mutable, meaning the content of the array can be changed at any point in time.

They are defined by the square bracket notation and also as an object notation. One of the advantages of the array datatype is, if you know the location(index) of the element, then you can access it by constant-time operation.

**Defining an Array**
```javascript
const arr = [1, 2, 3, 4, 5]; // Square bracket notation
const arr = new Array(1, 2, 3, 4, 5); // Object notation
```

**Accessing an Array**
```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr[0]); // prints 1 to the console
```

```javascript
const arr;
arr[2] = 10;
console.log(arr); // prints [undefined, undefined, 10] to the console
```

If an empty array is defined, then the array is filled with `undefined` values.

This datatype also has some special properties, we can also apply stack and queue operations on it.

**Stack Operations**
```javascript
let arr = [1, 2, 3, 4, 5];
arr.push(6); // push operation
console.log(arr); // prints [1, 2, 3, 4, 5, 6] to the console
arr.pop(); // pop operation
arr.pop();
console.log(arr); // prints [1, 2, 3, 4] to the console
```

When running a push operation, it will return the length of the array.

**Queue Operations**
```javascript
let arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // dequeue operation (prints 1 to the console)
arr.unshift(6); // enqueue operation(to the first index)
console.log(arr); // prints [6, 2, 3, 4, 5] to the console
```

**Slicing an Array**
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let slice = arr.slice(2, 5); // slice(start_index, count)
console.log(slice); // prints [3, 4, 5, 6, 7] to the console
console.log(arr); // prints [1, 2, 8, 9]
```

To apply a specific operation on each element of the array, we can use the `forEach()` method.

```javascript
let arr = [1, 2, 3, 4, 5];

arr.forEach((element) => {
    console.log(element);
});
```

Filtering on the array can be done, using the `filter()` method. It will return a new array, which contains the elements which satisfy the condition.

```javascript
let arr = [11, 25, 13, 42, 54, 6, 78];

let filtered = arr.filter((element) => {
    return element > 25;
});
console.log(filtered); // prints [42, 54, 78] to the console
// Here you can see that only elements greater than 25 are returned
```

The next method, which we are going to learn is the find method. It will return the first element which satisfies the condition. If no element is matched then, it will return `undefined`.

```javascript
let arr = [11, 25, 13, 42, 54, 6, 78];

let filtered = arr.find((element) => {
    return element > 25;
});
console.log(filtered); // prints 42 to the console
```

The main, difference between the `filter()` and `find`() methods is the return datatype of the methods, `filter()` returns an array, whereas `find()` returns the element.

* Filter will always return an array, even if there is only one element or no element in the array.
* Find will return the element, if there is only one element in the array, otherwise it will return undefined.

To apply an operation on the array, we can use the `map()` method. It will return a new array, which contains the result of the operation.

```javascript
let arr = [1, 2, 3, 4, 5];

let mapped = arr.map((element) => {
    return element * 2;
});
console.log(mapped); // prints [2, 4, 6, 8, 10] to the console
//doubles each and every element of the array
```

To check the presence of an element in the array, we use the `includes()` method. It will return a boolean value, based on the presence of the element.

```javascript
let arr = ["Anurag", "Peddi", "Anuhya", "Chinnu"];

console.log(arr.includes("Anurag")); // prints true to the console
console.log(arr.includes("Anu")); // prints false to the console
```

To merge, all the elements of the array, with a comma separating them, we can use the `.toString()` method.

```javascript
let arr = ["Anurag", "Peddi", "Anuhya", "Chinnu"];

console.log(arr.toString()); // prints Anurag,Peddi,Anuhya,Chinnu to the console
```

If you have a different delimiter other than comma, then you can use the `.join()` method.

```javascript
let arr = ["Anurag", "Peddi", "Anuhya", "Chinnu"];

console.log(arr.join("$")); // prints Anurag$Peddi$Anuhya$Chinnu to the console
```

## Objects

The JavaScript also has the properties of the object-oriented programming language. The objects are defined using the curly braces.

```javascript
let obj = {} // empty object
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
}
```

You can access the members of the object using the dot operator.

```javascript
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
}

console.log(person.firstName); // prints Anurag to the console
```

One another way to access the members of the object is using the square brackets.

```javascript
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
}

console.log(person["firstName"]); // prints Anurag to the console
```

The main difference between the dot operator and the square brackets is that, the dot operator will not work if the property name contains the special characters, whereas the square brackets will work.

### Iteration

You can iterate over the object using the `for-in` loop.

```javascript
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
    job: "Student",
    age: 24,
    country: "India"
}

for (var mem in person) {
    console.log("Value of " + mem + " is " + person[mem]);
}

// prints
// Value of firstName is Anurag
// Value of lastName is Peddi
// Value of job is Student
// Value of age is 24
// Value of country is India
```

### Conversions

The objects can be converted to the string using the `JSON.stringify()` method.

```javascript
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
    job: "Student",
    age: 24,
    country: "India"
}

console.log(JSON.stringify(person));
// prints {"firstName":"Anurag","lastName":"Peddi","job":"Student","age":24,"country":"India"} to the console
```

The keys and values of the object can be converted into the array using the `Object.keys()` and `Object.values()` methods.

```javascript
let person = {
    firstName: "Anurag",
    lastName: "Peddi"
    job: "Student",
    age: 24,
    country: "India"
}

console.log(Object.keys(person)); // prints ["firstName", "lastName", "job", "age", "country"] to the console
console.log(Object.values(person)); // prints ["Anurag", "Peddi", "Student", 24, "India"] to the console
console.log(Object.entries(person)); // prints [["firstName", "Anurag"], ["lastName", "Peddi"], ["job", "Student"], ["age", 24], ["country", "India"]] to the console
```

## Conditions

Conditions are used to check whether a condition is true or false, and based on that we can perform some operations.

**If-Else**
```javascript
const a = 10;

if (a == 10) {
    console.log("Value is 10");
} else {
    console.log("Value is not 10");
}
```

The general syntax for the if-else condition looks like above. The else part is optional, if you don't want to use it, then you can just use the if part.

Compared to other programming languages, JS has a lot of operators, which can be used to check the conditions.

**Comparison Operators**
```javascript
const a = 10;
const b = "10";

console.log(a == b); // prints true to the console
console.log(a === b); // prints false to the console
```

The difference between `==` and `===` is that, `==` checks only the value of the variable, whereas `===` checks the value and the datatype of the variable.

The negation of the above is `!=` and `!==`.

**Inequality Operators**
```javascript
const a = 10;
const b = 20;

console.log(a > b); // prints false to the console
console.log(a < b); // prints true to the console
console.log(a >= b); // prints false to the console
console.log(a <= b); // prints true to the console
```

The above operators are used to check the relation between two variables.

**Logical Operators**
```javascript
const a = 10;
const b = 20;
const c = 30;

console.log(a < b && b < c); // prints true to the console AND operator
console.log(a < b || b > c); // prints true to the console OR operator
console.log(!(a < b)); // prints false to the console NOT operator
```

**Switch Case**
```javascript
var a = 1;

switch (a) {
    case 1:
        console.log("Value is 1");
        break;
    case 2:
        console.log("Value is 2");
        break;
    default:
        console.log("Value is not 1 or 2");
        break;
}
```

## Loops

Loops are used to perform a set of operations multiple times. There are three types of loops in JS. The syntax of loops is similar to other compile-time programming languages.

**For Loop**
```javascript
for (var i = 0; i < 10; i++) {
    console.log(i);
}

// prints 0 to 9 to the console
```

**While Loop**
```javascript
var i = 0;

while (i < 10) {
    console.log(i);
    i++;
}

// prints 0 to 9 to the console
```

**Do-While Loop**
```javascript
var i = 0;

do {
    console.log(i);
    i++;
} while (i < 10);

// prints 0 to 9 to the console
```

## Functions

The syntax of functions is given below, the function name should be in camelCase and this is a named function.

```javascript
function functionName(param1, param2, ...) {
    // function body
    return value;
}
```

There is also one more type of function, which is an anonymous function. This function is assigned to a variable and the variable name is used to call the function.

```javascript
var functionName = function(param1, param2, ...) {
    // function body
    return value;
}
```

## Prompts
There are three types of prompts in JS, which are `alert`, `confirm` and `prompt`.

**Alert**
Just displays a message to the user. It doesn't return any value to the user.

```javascript
alert("Hello World");
```

**Confirm**
Displays a message to the user and returns a boolean value to the user. If the user clicks on the `OK` button, then it returns `true` to the user, else it returns `false`.

```javascript
var result = confirm("Are you sure?");

if (result) {
    console.log("User clicked on OK");
} else {
    console.log("User clicked on Cancel");
}
```

**Prompt**
Displays a message to the user and also takes input from the user. It returns the input value to the user.

## Callbacks

Callbacks are JavaScript's way of implementing asynchronous programming. A callback is a function that is passed as an argument to another function and is executed after its parent function has been completed.

```javascript
function callback() {
    console.log("Callback function");
}

function parentFunction(callback) {
    console.log("Parent function");
    callback();
}
```

If the callback is an anonymous function, then we can also directly call the function at the time of parent call.

```javascript
function parentFunction(callback) {
    console.log("Parent function");
    callback();
}

parentFunction(function() {
    console.log("Callback function");
});
```

## Arrow functions

These are a type of functions that are used to write the functions in a short way. They are anonymous functions, with a special syntax.

It is named an arrow function, because of the arrow symbol `=>` in the syntax.

```javascript
var functionName = (param1, param2, ...) => {
    // function body
    return value;
}
```

If the function has only one statement, then we can remove the curly braces and the return keyword.

```javascript
var functionName = (param1, param2, ...) => statement;
```

If the function has only one parameter, then we can remove the parenthesis.

```javascript
var functionName = param1 => {
    // function body
    return value;
}
```

They are generally used with JS's native functions like `map`, `filter`, `reduce`, etc. When we need to apply the same operation to a set of values.

## Promises

These are the basics of asynchronous programming in JS. A promise is an object that may produce a single value some time in the future. Either a resolved value or a reason that it's not resolved.

```javascript
function asyncFunc() {
    const output = fetch("result");

    result.then(function(status) {
        console.log("The Status of the output is " + status);
    });
}
```

In the above function, the output variables are created later in time, and the result is not available immediately. So, we use promises to handle such cases.

Promises can also be written in another way, Promise Object is created and then the `then` method is called on the object.

See here, we are using an arrow function to create a promise.

```javascript
function asyncFunct() {
    return new Promise((resolve, reject) => {
        const output = fetch("result");

        if (output) {
            resolve("Success");
        } else {
            reject("Failure");
        }
    });
}

asyncFunct().then((status) => {
        console.log("The status of the output is " + status);
    });
```

## Async/Await

Async and Await are the new way of writing the code asynchronously. It is the same as the promises, but the syntax is different. They have a concept which is called coroutines.

Coroutine is a function, which will wait until the function is run, and return the control to the main loop, once the event occurred then the function will be resumed.

The `await` is a special keyword that tells the JS to wait until the promise is returned. It can resolve or reject depending on the promise. And await keyword can only be used inside async function. `async` functions only return a promise, they don't return the actual value. To get the actual value, we need to `await` for the `async` function. The syntax for the `async` function is given below.

```javascript
async function asyncFunc() {
    const output = await fetch("result");
    return output;
}
```

The `async` function implicitly returns a promise, so we can use the `then` method to get the value later.

## Classes

Similar to languages like C++, Java, Python etc. JavaScript also supports classes. We use the keyword `new` to create an object of the class. The syntax of the class is given below.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printDetails = function() {
        console.log(this.name + " " + this.age);
    }
}

var person = new Person("John", 20);
person.printDetails();
```

There is also one more way to create a object, without using the `new` keyword. This is called the factory method.

```javascript
var person = {
    name: "Anurag",
    age: 20,
    printDetails: function () {
        console.log(this.name + " " + this.age);        
    }
}

console.log(person.name);
person.printDetails();
```

Both methods can be used to create an object, but the only difference is in the second method we directly create an object named person without creating a class.

## Function Context

All javascript functions run under a specific context/scope, for example, all the functions which are run in the browser are run under the `window` context. This keyword is used to access the context of the function.

But we can change the context of the function using the `bind` method. The `bind` method returns a new function with the context changed.

```javascript
var person = {
    name: "Anurag",
}

function printName() {
    console.log(this.name);
}

// We cannot call the printName function directly, because the context of the function is not set.

var printNameWithContext = printName.bind(person);
```

There is also another function, which is called `call` function. It is somewhat similar to `bind` but instead of returning the function, it directly calls the function with context.

The same example can be written using the `call` function.

```javascript
printName.call(person);
```

In simple terms, you can think of call as the automatic execution of the bind function.

```javascript
printName.call(person)
printName.bind(person)();
```

Both are same in terms of results. Another example:

```javascript
var printNameContext = printName.bind(person);
var printNameCall = function () {
    printName.call(person);
}
// both are same
```

## Inheritance

An important concept of the object-oriented programming language is inheritance. JavaScript supports inheritance in many different ways. One of the ways is using the `prototype` property of the function.

Every object in the javascript has a property called `prototype`

### Prototypes

Above under the classes section, you can see how to define a class without using any of the inheritance concepts. Now, let me give an example using the prototype property.

```javascript
function Person(firstName, lastName) {
    this.firstname = firstName;
    this.lastname = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

var person = new Person("Anurag", "Peddi");
console.log(person.getFullName()); // Anurag Peddi
```

You can also define an empty class and then add the methods using prototypes.

```javascript
var Person = function() {}

Person.prototype.names = function(firstm last) {
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

var person = new Person();

person.names("Anurag", "Peddi");
console.log(person.getFullName()); // Anurag Peddi
```

Some inheritance examples:

```javascript
var Person = function() {}

Person.prototype.names = function(first, last) {
    this.firstName = first;
    this.lastName = last;
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

var anotherPerson = function() {};
anotherPerson.prototype = new Person();

anotherPerson.prototype.same = function() {
    return "Same";
}

var person = new anotherPerson();
person.names("Anurag", "Peddi");
console.log(person.getFullName()); // Anurag Peddi
console.log(person.same()); // Same
```

## Destructing

Destructing is a new way to extract values from objects and arrays. We can use this to extract the values from a deeper level.

```javascript
// Consider this object
var person = {
    name: "Anurag",
    age: 20,
    address: {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
}

// We can extract the values like this
var { name, age } = person;
console.log(name, age); // Anurag 20
```

This concept can also be used for arrays.

```javascript
var arr = [1, 2, 3, 4, 5];

var [a, b, c, d, e] = arr;
console.log(a, b, c, d, e); // 1 2 3 4 5
```