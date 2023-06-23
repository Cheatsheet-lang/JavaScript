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
const arr = [1, 2, 3, 4, 5];
arr.push(6); // push operation
console.log(arr); // prints [1, 2, 3, 4, 5, 6] to the console
arr.pop(); // pop operation
arr.pop();
console.log(arr); // prints [1, 2, 3, 4] to the console
```

**Queue Operations**
```javascript
const arr = [1, 2, 3, 4, 5];
arr.shift(); // dequeue operation
```




