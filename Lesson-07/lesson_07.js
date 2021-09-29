// 7.1.1 //
// single-line comment
/*
Comment with
multiple lines
*/
true;
false;
1.141;
-123;
17n; // bigints for integers larger than 53 bits
-49n;

var assert = require('assert'); // node.js assert module
assert.equal(7 + 1, 8); // if expected is different, it throws an error
assert.equal(10 / 4, 2.5);
assert.equal(10n / 4n, 2n); // no floats so rounds down
assert.equal('abc' === 'abc', true); // use strict equality instead of ==
assert.equal('abc' !== 'def', true);

const num = 42;
console.log(`String with interpolated values: ${num}`); // backticks
console.log('I see ' + 3 + ' monkeys');
console.error("this is an error message!"); // printing error info

const x = 8;
// x = 9; // causes a TypeError because const creates immutable var bindings
let y = 8;
y = 3 * 5; // let creates mutable variable bindings

function add1(a, b) {
    return a + b;
}
assert.equal(add1(5, 2), 7);
const add2 = (a, b) => { return a + b };
const add3 = (a, b) => a + b; // arrow function expressions instead of functions
assert.equal(add2(5, 2), 7);
assert.equal(add3(5, 2), 7);

const obj = { // plain object via object literal
    first: 'Jane', // field property
    last: 'Doe',
    getFullName() { // method property
        return this.first + ' ' + this.last;
    }
}
obj.first = 'Janey'; // setting property value
console.log(obj.getFullName()); // calling the property method

const arr = ['a', 'b', 'c'];
arr.push('d');
console.log("arr length: " + arr.length);
if (arr.length === 4) {
    let test = '';
    for (const element of arr) { // for-of loop
        test = test + element + ', ';
    }
    console.log(test);
}

// 7.1.3 //
class Person { // classes
    constructor(name) {
        this.name = name;
    }
    describe() {
        return `Person named ${this.name}`;
    }
    static logNames(persons) {
        for (const person of persons) {
            console.log(person.name);
        }
    }
}
class Employee extends Person { // inheritance
    constructor(name, title) {
        super(name);
        this.title = title;
    }
    describe() {
        return super.describe() + ` (${this.title})`;
    }
}
const jane = new Employee('Jane', 'CTO');
console.log(jane.describe());

// 7.1.4 //
function throwsException() { // exception handling in Node.js
    throw new Error('Throwing a test exception.');
}
function catchesException() {
    try {
        throwsException();
    } catch (err) {
        assert.ok(err instanceof Error);
        console.log(err.message);
    }
}
catchesException();

// 7.1.8 //
arr.map((_x, i) => i); // starts with _ means parameter is not used
// this._value = value; // starts with _ means property is considered private

// 7.3.1 //
const ε = 0.0001; // legal identifiers/variable names
const строка = '';
let _tmp = 0;
const $foo2 = true;

// 7.4 //
let myStr = 'Yes'; // statement: performs some kind of action
let myBool = true || false; // expression: produces a value
function bar() {
    'ab' + 'cd', Number('123');
}
function f() {
    console.log(bar()); // bar() is an expression
    bar(); // bar(); is an expression statement
}