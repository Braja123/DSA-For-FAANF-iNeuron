//1.  Implement Stack using Queues(Amazon and Microsoft)
// Implement a LIFO stack using only two queues. The implemented stack should support all the
// functions of a usual stack (push, pop, top, empty)
// Implement MyStack class:
// ● void push(int x) Pushes element x to the top of the stack.
// ● int pop() Removes the element on the top of the stack and returns it.
// ● int top() Returns the element on the top of the stack.
// ● boolean empty() Returns true if the stack is empty, false otherwise.
// Input
// ["MyStack", "push", "push", "top", "pop", "empty"]
// [[], [1], [2], [], [], []]
// Output
// [null, null, null, 2, 2, false]

// Explanation
// MyStack myStack = new MyStack();
// myStack.push(1);
// myStack.push(2);
// myStack.top(); // return 2
// myStack.pop(); // return 2
// myStack.empty(); // return False
class Stack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }
  push(val) {
    return this.queue1.push(val);
  } 
  pop() {
    while(this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
      console.log(this.queue2);
    }
    console.log("outside pop");
    let popped = this.queue1.shift();
    this.queue1 = this.queue2;
    this.queue2 = [];
    return popped;
  }
  top() {
    return this.queue1[this.queue1.length-1];
  }
  empty() {
    return this.queue1.length ? false : true;
  }
  
}

let obj = new Stack();
obj.push(10);
obj.push(20);
obj.push(30);
obj.push(40);
obj.pop();
console.log(obj.pop());
console.log(obj.top());
