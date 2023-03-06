// Print binary number from 1 to 10 using Queue
// Add 0 and 1 to the existing number
// O/P - 1, 10, 11, 100, 101, 110, 111, 1000, 1001, 1010


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
  front() {
    // return this.container[-1]; used in python
    return this.container[0];
  }
}

const producebinaryNumber = (num) => {
  q = new Queue(); 
  q.enqueue('1');             //push
  for(let i=0; i<num; i++) {
    let front = q.front();
    console.log(front, " ");
    q.enqueue(front + "0");
    q.enqueue(front + "1");

    q.dequeue();
  }
}
let res = producebinaryNumber(10);
console.log(res);