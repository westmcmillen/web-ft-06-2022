"use strict";
// const enum Directions {
//   up = 1,
//   down = 1,
//   left = 1,
//   right = 1,
// }
// const right = Directions.left | Directions.right;
var States;
(function (States) {
    States[States["California"] = 0] = "California";
    States[States["Hawaii"] = 1] = "Hawaii";
})(States || (States = {}));
const CA = States[0];
