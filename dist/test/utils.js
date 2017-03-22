"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ava_1 = require("ava");
const utils_1 = require("../src/utils");
ava_1.default('can toPairs', (tt) => {
    let a = { a: false, b: 'bob' };
    let result = utils_1.default(a);
    tt.deepEqual(result, [['a', false], ['b', 'bob']]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi90ZXN0L3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsNkJBQXVCO0FBQ3ZCLHdDQUFtQztBQUVuQyxhQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsRUFBRTtJQUVuQixJQUFJLENBQUMsR0FBa0MsRUFBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUMsQ0FBQztJQUU1RCxJQUFJLE1BQU0sR0FBRyxlQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDeEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdkQsQ0FBQyxDQUFDLENBQUMifQ==