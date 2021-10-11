// 8.2.1 //
console.log('abc', 123, true); // multi values
console.log(); // new line
console.log('Test: %s %j', 123, 'abc'); // string substitution
console.log('%o', {foo: 123, bar: 'abc'}); // %o = string representation of an object
console.log('%j', {foo: 123, bar: 'abc'}); // %j = convert to JSON string
console.log('%s%%', 99); // %% inserts a single %
console.log(JSON.stringify({first: 'Jane', last: 'Doe'}, null, 1)); //JSON.stringify() useful to print nested objects