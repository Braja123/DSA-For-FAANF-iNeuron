//2. Implement Queue using Stack (Amazon)
// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should
// support a normal queue's functions (push, peek, pop, and empty).
// Implement the MyQueue class:
// ● void push(int x) Pushes element x to the back of the queue.
// ● int pop() Removes the element from the front of the queue and returns it.
// ● int peek() Returns the element at the front of the queue.
// ● boolean empty() Returns true if the queue is empty, false otherwise.
// Input
// ["MyQueue", "push", "push", "peek", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 1, 1, false]
// Explanation
// MyQueue myQueue = new MyQueue();
// myQueue.push(1); // queue is: [1]
// myQueue.push(2); // queue is: [1, 2] (leftmost in front of the queue)
// myQueue.peek(); // return 1
// myQueue.pop(); // return 1, the queue is [2]
// myQueue.empty(); // return false

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  push(val) {
    return this.stack1.push(val);
  }
  pop() {
    while(this.stack1.length > 1) {
      this.stack2.push(this.stack1.pop());
    }
    let popped = this.stack1.shift();
    this.stack1 = this.stack2;
    this.stack2 = [];
    return popped;
  }

}

let obj = new Queue();
obj.push(10);
obj.push(20);
obj.push(30);
console.log(obj.pop());