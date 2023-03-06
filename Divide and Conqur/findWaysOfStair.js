// Find how many ways we can reach at a perticular/nth step

// ways(n) = ways(n-1) + ways(n-2);

let n = 7;
const ways = (n) => {
  if(n === 0) {
    return 0;
  } else if(n === 1) {
    return 1;
  } else if(n === 2) {
    return 2;
  } else {
    let res = ways(n-1) + ways(n-2)
    return res;
  }
}

console.log(ways(n));