
class Queue {
  constructor() {
    // this.container = null; - In python they used null - need to check
    this.container = [];
  }
  // insert an element inside the stack
  enqueue(val) {
    return this.container.push(val);
  }
  // return the top most element from the stack
  // detele the last element from the stack
  dequeue() {
    return this.container.shift();
  }
  // check whether the stack is empty or not
  is_Empty() {
    return this.container.length === 0
  }
  // check the size of the stack
  size() {
    return this.container.length;
  }
}

// create an object of stack class
let stt = new Queue();
stt.enqueue(10);
stt.enqueue(20);
stt.enqueue(30);
// console.log(stt.dequeue());
// console.log(stt.is_Empty());
console.log(stt.size());