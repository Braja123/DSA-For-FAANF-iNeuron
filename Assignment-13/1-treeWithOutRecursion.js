// 1. Implement inOrder, preOrder, and postOrder traversal algorithms already discussed in live sessions without using recursion(as you already know implementation using recursion is already done in live sessions, so am looking at the code without recursion only, if you did the implementation using recursion, your solution will be marked as incorrect)

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

// Iterative approach to implement preOrder Traversal 
// Time Complexity: O(N)
// Space Complexity: O(N)
const preOrder = (root) => {
  if(!root) return;
  let stack = [];
  // push the root node in the stack
  stack.push(root);
  while(stack.length > 0) {
    let popped = stack.pop();
    console.log(popped.val);
    if(popped.right) {
      stack.push(popped.right);
    }
    if(popped.left) {
      stack.push(popped.left);
    }

  }
}

// Iterative approach to implement postOrder Traversal
// Time Complexity: O(N)
// Space Complexity: O(N)
const postOrder = (root) => {
  if(!root) return;

  let stack = [];
  let stack2 = [];
  stack.push(root);
  while(stack.length > 0) {
    let popped = stack.pop();
    stack2.push(popped);
    if(popped.left) {
      stack.push(popped.left);
    }
    if(popped.right) {
      stack.push(popped.right);
    }
  }
  // console.log();
  while(stack2.length > 0) {
    let popped = stack2.pop();
    console.log(popped.val);
  }
}

// Iterative approach to implement inOrder Traversal without using recursion
// Time Complexity: O(N)
// Space Complexity: O(N)
const inOrder = (root) => {
  if(!root) return;

  let current = root;
  let stack = [];
  while(true) {
    if(current) {
      stack.push(current);
      current = current.left;
    } else if(stack.length > 0) {
      let popped = stack.pop();
      console.log(popped.val);
      current = popped.right;
    } else {
      break;
    }
  }
}

// Driver Code
const root = new Node(10);
root.left = new Node(20); 
root.right = new Node(30); 
root.left.left = new Node(40); 
root.left.right = new Node(50); 
root.right.left = new Node(60); 
root.right.right = new Node(70); 


// preOrder(root);
inOrder(root);
// postOrder(root);