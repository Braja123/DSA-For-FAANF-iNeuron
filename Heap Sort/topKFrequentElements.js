
// Assignment 6
// Not Resolved


// let arr = [1,1,1,2,2,3];
let arr = ['priya', 'bhatia', 'akshay', 'arpit', 'priya', 'arpit'];
let k = 2;

const topKFrequentElements = (arr1) => {
  let arr = arr1.sort((a, b) => {
    return a > b;
  });
  console.log(arr);
  // if(arr.length === k) return arr;
  let freq = {};
  for(let i of arr) {
    freq[i] = (freq[i] || 0) + 1;
  }
  let max = 0;
  let res = [];
  for(let key in freq) {
    max = Math.max(freq[key]);
  }
  console.log(max);

  for(let key in freq) {
    if(max == freq[key]) {
      res.push(key);
    }
  }

  return res;



  //   let counter = 0;
  //   for(let i in freq) {
  //   let maxVal = freq[i];
  //   if(counter < maxVal ) {
  //     counter = maxVal;
  //   }
  //   // console.log("Max val is", Math.max(freq[i]));
  // }
  // console.log("counter is " , Math.max(counter));

  console.log(freq);
}
console.log(topKFrequentElements(arr));