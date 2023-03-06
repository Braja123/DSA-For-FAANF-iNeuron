// Given three points, check whether they lie on a straight (collinear) or not. [Google]

// Area of Triangle
// area = 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));

// Slope formula
// (y2 - y1) * (x3 - x2) = (x2 - x1) * (y3 - y2)

// Approach 1  - If m1 == m2, then the points are colinear else not
let x1 = 1;
let y1 = 1;
let x2 = 1
let y2 = 6;
let x3 = 0;
let y3 = 9;

// const colinear_points = (x1, y1, x2, y2, x3, y3) => {
//   if( (y3 - y2) * (x2 - x1) == (y2 - y1) * (x3 - x2)) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(colinear_points(x1, y1, x2, y2, x3, y3));

// Approach 2 - Area of triangle and if area == 0, then the points are colinear else non-colinear

const colinear_points = (x1, y1, x2, y2, x3, y3) => {
  let area = 0.5 * (x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2));
  if( area == 0) {
    return true;
  } else {
    return false;
  }
}
console.log(colinear_points(x1, y1, x2, y2, x3, y3));


// Time Complexity: O(1)
// space Complexity: O(1)