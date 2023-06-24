# JavaScript

## Table of Contents

## Main

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

Now, let's come to the most important part of dealing with variables, which is operations on them.

## Operations

The operations on the variables are similar to any other programming language, but there are some special cases in JS.

**Addition**

```javascript
const a = 10;
const b = 20;
console.log(a + b); // prints 30 to the console
```

We can also perform addition on strings, which is called as concatenation.

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
var a = 10;
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

Arrays are a type of datatypes(advanced), which can be store any kind of datatype of in it. Arrays are mutable, meaning the content of the array can be changed at any point in time.

They are defined by the square bracket notation and also as a object notation. One of the advantage of the array datatype is, if you know the location(index) of the element, then you can access it by constant-time operation.

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

If a empty array is defined, then the array is filled with `undefined` values.

This datatype also has some special properties, we can also apply stack and queue operations on it.

**Stack Operations**
```javascript
var arr = [1, 2, 3, 4, 5];
arr.push(6); // push operation
console.log(arr); // prints [1, 2, 3, 4, 5, 6] to the console
arr.pop(); // pop operation
arr.pop();
console.log(arr); // prints [1, 2, 3, 4] to the console
```

**Queue Operations**
```javascript
var arr = [1, 2, 3, 4, 5];
console.log(arr.shift()); // dequeue operation (prints 1 to the console)
arr.unshift(6); // enqueue operation(to the first index)
console.log(arr); // prints [6, 2, 3, 4, 5] to the console
```

**Slicing an Array**
```javascript
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var slice = arr.slice(2, 5); // slice(start_index, count)
console.log(slice); // prints [3, 4, 5, 6, 7] to the console
console.log(arr); // prints [1, 2, 8, 9]
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

Loops are used to perform a set of operations multiple times. There are three types of loops in JS. The syntax of loops is similar to other compile time programming languages.

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

javascript
function callback() {
    console.log("Callback function");
}

function parentFunction(callback) {
    console.log("Parent function");
    callback();
}


If the callback is an anonymous function, then we can also directly call the function at the time of parent call.

javascript
function parentFunction(callback) {
    console.log("Parent function");
    callback();
}

parentFunction(function() {
    console.log("Callback function");
});


## Arrow functions

These are a type of functions that are used to write the functions in a short way. They are anonymous functions, with a special syntax.

It is named an arrow function, because of the arrow symbol `=>` in the syntax.

javascript
var functionName = (param1, param2, ...) => {
    // function body
    return value;
}


If the function has only one statement, then we can remove the curly braces and the return keyword.

javascript
var functionName = (param1, param2, ...) => statement;


If the function has only one parameter, then we can remove the parenthesis.

javascript
var functionName = param1 => {
    // function body
    return value;
}


They are generally used with JS's native functions like `map`, `filter`, `reduce`, etc. When we need to apply the same operation to a set of values.

## Promises

These are the basics of asynchronous programming in JS. A promise is an object that may produce a single value some time in the future. Either a resolved value or a reason that it's not resolved.

javascript



```javascript
var name = prompt("Enter your name");

console.log(name);
```

