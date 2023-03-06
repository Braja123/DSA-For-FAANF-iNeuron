// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

let str = "anagram";
let str1 = "gramana";

// const validAnagram = (str, str1) => {

//   if(str.length !== str1.length) return false;

//   let freq = {};
//   let freq1 = {};

//   for(let char of str) {
//     freq[char] = (freq[char] || 0) + 1;
//   }
//   for(let char of str1) {
//     freq1[char] = (freq1[char] || 0) + 1;
//   }
  
//   console.log(freq, freq1);

//   for(let key in freq) {
//     if(!(key in freq1)) {
//       return false;
//     }
//     if(freq1[key] !== freq[key]) {
//       return false;
//     }
//   }
//   return true;

// }
const validAnagram = (str, str1) => {

  if(str.length !== str1.length) return false;

  let lookup = {};

  for(let i=0; i<str.length; i++) {
    let letter = str[i];
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }

  for(let i=0; i<str1.length; i++) {
    let letter = str1[i];
    if(!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;

}
console.log(validAnagram(str, str1));


// Time Complexity - 0(N)
// Space Cmplexity - 0(1)