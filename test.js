const test = require('tape');
const happy = require('./happy');

test('Assertion with separated numbers', t => {
    const expected = 2;
    const actual = happy.separate(22);
    const msg = 'This should be 2';

    t.equal(actual.length, expected, msg);
    t.end();
});

test('Assertion with pow numbers', t => {
    const expected = [4, 4];
    const actual = happy.powNumbers([2, 2]);
    const msg = 'This should be [4, 4]';

    t.deepEqual(actual, expected, msg);
    t.end();
});

test('Assertion with sum numbers', t => {
    const expected = 8;
    const actual = happy.sumNumbers([4, 4]);
    const msg = 'This should be 8';

    t.deepEqual(actual, expected, msg);
    t.end();
});

test('Assertion with happy numbers', t => {
    const expected = true;
    const actual = happy.happNumber(1);
    const msg = 'This should be 8';

    t.deepEqual(actual, expected, msg);
    t.end();
});