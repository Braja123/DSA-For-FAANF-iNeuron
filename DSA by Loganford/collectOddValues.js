let arr = [1,2,3,4,5,6];
// O/P - [ 1, 3, 5 ]

const collectOddValues = (arr) => {
  let oddValues = [];
  function helper(helperInput) {
    if(helperInput.length === 0) return;
    if(helperInput[0] % 2 !== 0) {
      oddValues.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(arr);
  return oddValues;
}
console.log(collectOddValues(arr));