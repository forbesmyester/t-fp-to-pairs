import test from 'ava';
import toPairs from '../src/utils';

test('can toPairs', (tt) => {

    let a: {[k: string]: boolean|string} = {a: false, b: 'bob'};

    let result = toPairs(a);
    tt.deepEqual(result, [['a', false], ['b', 'bob']]);

});
