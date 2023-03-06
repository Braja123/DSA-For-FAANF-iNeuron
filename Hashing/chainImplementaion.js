// Not Resolved

function convertToAscii(char) {
  return char.charCodeAt(0);
}

// Hash Function Definition - Chaining Implementaion
class HashTable {
  constructor() {
    this.max = 10;
    // this.arr = [let i of max]
    // [None, None, None, None, None]  - How they do in python need to know
    this.arr = [];
  }
  // hash function method definition
  hash_function(key) {
    let sum = 0;
    // size of the hash table
    // let m = 10;
    for(let char of key) {
      sum += convertToAscii(char);
    }
    // division modulo hash function
    return sum % this.max;
  }

  // addition of an item in the hash table
  // here we use same function name "set()" which is there in "Maps" in JS. But we changed the functionality.
  set(key, value) {
    let found = false;
    let h = this.hash_function(key);
    // for(let [index, element] of this.arr[h]) {
    //   if(element.length == 2 && element[0] == key) {
    //     this.arr[h][index] = (key, value);
    //     found = true;
    //     break;
    //   }
    // }
    if(!found) {
      this.arr[[h]].push(key, value);
    }
  }

  // get any item from the hash table
  // here we use same function name "get()" which is there in "Maps" in JS. But we changed the functionality.
  get(key) {
    let h = this.hash_function(key);
    return this.arr[h];
  }
} 

const obj = new HashTable();
obj.set("March 2020", 234);
obj.set("March 2021", 334);
obj.set("March 2022", 434);
obj.set("March 2023", 534);
let res = obj.get("March 2023");
console.log(res);

const obj1 = new HashTable();
obj1["March 2020"] = 234;
console.log(obj1["March 2020"]);