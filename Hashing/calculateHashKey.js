// const res = new Map([
//   ['firstName', 'gopal'],
//   ['lastName', 'das'],
//   ['age', 23],
//   ['isValid', true]
// ]);
// for(let [key, item] of res) {
//   if(key === 'lastName') {
//     console.log(item);
//   }
// }
// console.log(res);
// let index = 'a';
// console.log(index.charCodeAt(0));




// Hash function code
function convertToAscii(char) {
  return char.charCodeAt(0);
}
const hashFunction = (key) => {
  let sum = 0;
  // size of the hash table
  let m = 10
  for(let char of key) {
    sum += convertToAscii(char);
  }
  // division modulo hash function
  return sum % m;
}
let res = hashFunction('March 2020');
console.log(res);
