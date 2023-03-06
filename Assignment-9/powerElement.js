// 3. Pow(x,n) (Facebook)
// Implement pow(x,n) which calculates x raised to the power n (i.e. x^n)
// For example: x = 2.00000, n = -2
// Output: 0.25000
// Explanation: 2^-2 =½^2 = ¼ = 0.25

let a = 2;
let n = -2;

const powerElement = (a, n) => {
  if(n === 0) return 1;

  // Main Logic
  if(n < 0) {
    a = 1/a;
    n = -n;
    return powerElement(a, n);
  }
  if(n == 1) return a;
  // Divide
  let mid = Math.floor(n/2);
  // Conquer
  let b = powerElement(a, mid);
  let res = b*b;

  // Combine
  if(n % 2 != 0) {
    return res * a;
  } else {
    return res;
  }
}
console.log(powerElement(a, n));


// Time Complexity - O(logN)
// Space Complexity - O(1)