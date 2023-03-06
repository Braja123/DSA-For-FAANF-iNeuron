// Unique Binary Search Tree
// I/O - n = 3
// O/P - 5

const numTrees = (n) => {
  let sum = 0;
  let i=0;
  let j=n-1;
  // base case condition
  if(n==0 || n==1) {
    return 1;
  }
  while(i <= n-1 && j >= 0) {
    sum += numTrees(i) * numTrees(j);
    i++;
    j++;
  }
  return sum;
}
console.log(numTrees(3));

// We can do it by memoization also please try