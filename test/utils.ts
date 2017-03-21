import test from 'ava';
import toPairs from '../src/utils';

test('can toPairs', (tt) => {

    let a: {[k: string]: boolean|string} = {a: false, b: 'bob'};

    tt.deepEqual(toPairs(a), [['a', false], ['b', 'bob']]);

});
