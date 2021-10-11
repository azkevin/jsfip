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

// 7.5 //
// if a statement starts with 'function', is it a function declaration or function expression?
function id(x) { // function declaration
    return x;
}
const id2 = function me(x) { // function expression (right side of = )
    return x;
};
// if a statement starts with '{', is it a object literal or a code block?
const obj2 = {}; // object literal
{} // empry code block (a statement)
(function (x) { console.log(x) })('abc'); // wrap in () for JS to interpret as an expression

// 7.6 //
const func = () => {}; // ends with a semicolon because it's an embedded arrow function expression
while (_tmp > 0); // loops can have an empty body by just adding a ;

// 7.7 //
// one possible pitfall of not using ASI and writing ;. JS protects against accidently returning a value after return
return // return;
{
    first: 'jane' // first: 'jane';
};
// ;
// several pitfalls relying on ASI, ex. is unintended function call. always write semicolons.
a = b + c // a = b + c(d + e).print();
(d + e).print()

// 7.9 //
// put 'use strict'; on the top to switch to strict mode, generally recommended.
function functionInStrictMode() { // can also enable strict mode just for one function
    'use strict';
}

// TODO: strict mode not working
function sloppyFunc() {
    undeclaredVar1 = 123; // created global variable `undeclaredVar1`
    {
        function foo() { return 123 }
    }
    return foo();
    true.prop = 1; // fails silently
    return true.prop;
}
sloppyFunc();
console.log(undeclaredVar1)
function strictFunc() {
    'use strict';
    undeclaredVar2 = 123; // 7.9.2.1 throws a ReferenceError, does not create global var
    {
        function foo() { return 123 }
    }
    return foo(); // 7.9.2.2 throws a ReferenceError, functions are block-scoped
    true.prop = 1; // 7.9.2.3 throws a TypeError, changing immutable data
}
strictFunc()