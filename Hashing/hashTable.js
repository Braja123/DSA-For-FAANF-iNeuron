

// Create a class of hash table in which we will be able to perform the below operation:
// 1. Addition of an item in the hash table
// 2. Extraction of any item in the hash table
// 3. Creation of any hash function

function convertToAscii(char) {
  return char.charCodeAt(0);
}

// Hash Function Definition - Division Modulo Approach
class HashTable {
  constructor() {
    this.max = 10;
    // this.arr = [let i of max]
    // [None, None, None, None, None]  - How they do in pyhon need to know
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
    let h = this.hash_function(key);
    this.arr[h] = value;
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

const obj2 = new HashTable();
obj.set('march 5', 234);
// here we are not handling any collision thats why '334' value override with '434'
obj2.set('march 6', 334);
obj2.set('march 17', 434);
