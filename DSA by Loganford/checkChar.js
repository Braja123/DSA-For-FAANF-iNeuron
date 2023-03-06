// const charCount = (str) => {
//   let obj = {};
//   for(let i=0; i<str.length; i++) {
//     let char = str[i].toLowerCase();
//     if(/[0-9a-z]/.test(char)) {
//       if(obj[char] > 0) {
//         obj[char]++;
//       } else {
//         obj[char] = 1;
//       }
//     }
//   }
//   console.log(obj);
// }
const charCount = (str) => {
  // let str = str1.toLowerCase();
  let obj = {};
    for(let char of str) {
      // let char = char1.toLowerCase();
      // if(/[0-9a-z]/.test(char)) {
      //   obj[char] = (obj[char] || 0) + 1;
      // }
      // let char = char1.toLowerCase();
      if(isAlphanumeric(char)) {
        let char1 = char.toLowerCase();
        obj[char1] = (obj[char1] || 0) + 1;
      }
    }
  return obj;
}

const isAlphanumeric = (char) => {
  let code = char.charCodeAt(0);
  if(!(code > 47 && code < 58) &&  //numeric (0 - 9)
  !(code > 64 && code < 91) &&     // upper alpha ( A - Z )
  !(code > 96 && code < 123)       // lower alpha ( a - z)
  ) {
    return false;
  }
  return true;
}

console.log(charCount("Hello There!"));


// Time Complexity - 0(N)
// Space Cmplexity - 0(1)