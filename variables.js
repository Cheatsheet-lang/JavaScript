// @ts-check

const integer = 10; // Integer variable
const string = "Hello World"; // String variable
const float = 10.5; // Float variable
const boolean = true; // Boolean variable

const arr = [1, 2, 3, 4, 5]; // Array variable
const obj = { name: "John", age: 20 }; // Object variable (similar to dict in python)

let nd_var;
console.log(nd_var); // prints undefined to the console

const null_var = null;
console.log(null_var);

const const_var = 10;
let let_var = 10;

const_var = 20; // throws an error in the JavaScript
let_var = 20; // works fine

const str = "Hello World";
console.log(str.length); // prints 11 to the console
console.log(str.toUpperCase()); // prints HELLO WORLD to the console
console.log(str.toLowerCase()); // prints hello world to the console

const str = "Hello World";
console.log(str[0]); // prints H to the console
console.log(str.at(0)); // prints H to the console
console.log(str.at(-1)); // prints d to the console

const str = "Hello World";
console.log(str.substring(0, 5)); // prints Hello to the console
console.log(str.substring(6)); // prints World to the console

const name = "John";
console.log(`Hello ${name}`); // prints Hello John to the console

const num = 10000;
console.log(num.toString()); // prints 10000 to the console

const num = 100_000_000;
// is same as 100000000

const str = "100";
console.log(Number.parseInt(str, 10)); // 100, the second argument is the base of the number

const str = "100px";
console.log(Number.parseInt(str, 10)); // 100
// It ignores the px at the end