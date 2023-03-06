// find the maximum profit
let arr = [7, 1, 5, 4, 6, 10];

const findMaxProfit = (arr) => {
  let minPrice = 100;
  let maxProfit = 0;

  for(let i=0; i<arr.length; i++) {
    if(arr[i] < minPrice) {
      minPrice = arr[i];
    } else if(arr[i] - minPrice > maxProfit) {
      maxProfit = arr[i] - minPrice;
    }
  }
  return maxProfit;
}

console.log(findMaxProfit(arr));