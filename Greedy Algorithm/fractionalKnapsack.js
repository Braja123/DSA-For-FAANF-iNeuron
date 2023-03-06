// Not Resolved
// refer lect: 32

let M = 37;
let arr = [[25, 5], [70, 10], [100, 12], [50, 4], [45, 7], [90, 9], [30, 3]];

const fractionalKnapsack = (arr, M) => {
  let proByWeight = [];
  let storeMaxProfit= [];
  // let maxProfit = 0;
  for(let [profit, weight] of arr) {
    proByWeight.push(Math.floor(profit/weight));
    // if(Math.floor(profit/weight) > 0) {

    // }
  }
  // sort descending on the basis of profit/weight
  proByWeight.sort((a, b) => b-a);
  let count = 0;
  for(let [profit, weight] of arr) {
    console.log();
    if(proByWeight[count] == Math.floor(profit/weight))
    //Math.floor(profit/weight) == proByWeight
    // data.push([profit, weight])
    storeMaxProfit.push([profit, weight])
    count++;
  }
  console.log(storeMaxProfit);
  // let maxProfit = 0

  // for(let [profit, weight] in proByWeight) {

  // }

  // console.log(proByWeight);
}
fractionalKnapsack(arr, M);