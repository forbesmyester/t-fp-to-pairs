"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can toPairs', (tt) => {
    let a = { a: false, b: 'bob' };
    tt.deepEqual(utils_1.default(a), [['a', false], ['b', 'bob']]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFtQztBQUVuQyxhQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRTtJQUVuQixJQUFJLENBQUMsR0FBa0MsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztJQUU1RCxFQUFFLENBQUMsU0FBUyxDQUFDLGVBQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUUzRCxDQUFDLENBQUMsQ0FBQyJ9