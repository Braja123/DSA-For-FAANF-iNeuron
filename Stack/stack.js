// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

class Stack {
  constructor() {
    this.container = [];
  }
  // insert an element inside the stack
  push(val) {
    return this.container.push(val);
  }
  
  // return the top most element from the stack
  peek() {
    // return this.container(-1);
    return this.container.at(-1);
  }
  // check whether the stack is empty or not
  is_Empty() {
    return this.container.length === 0;
  }
  // check the size of the stack
  size() {
    return this.container.length;
  }
  // return the top most element from the stack
  // detele the last element from the stack
  pop() {
    if(this.is_Empty()) {
      return "Stack is already empty";
    } else {
      return this.container.pop();
    }
  }
}

// create an object of stack class
let stt = new Stack();
stt.push(10);
stt.push(20);
stt.push(30);

// console.log(stt.pop());
// console.log(stt.peek());
// console.log(stt.is_Empty());
console.log(stt.size());