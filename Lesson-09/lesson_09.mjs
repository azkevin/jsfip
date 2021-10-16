// 9.1 //
import * as assert from 'assert/strict'; // need to set to .mjs to use import
assert.equal(3 + 5, 8);

// 9.2 //
function id(x) {
    return x;
}
assert.equal(id('abc'), 'abc');

// 9.3 //
// assert.equal({foo: 1}, {foo: 1}); // uses ===, object is only equal to itself
assert.notEqual({foo: 1}, {foo: 1}); // uses !==
assert.deepEqual({foo: 1}, {foo: 1}); // compares content/properties, not object identities
assert.notEqual(['a', 'b', 'c'], ['a', 'b', 'c']);
assert.deepEqual(['a', 'b', 'c'], ['a', 'b', 'c']);

// 9.4.1 //
assert.equal(3 + 3, 6);
assert.notEqual(3 + 3, 22);