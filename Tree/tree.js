// Create a node which contains data, left pointer and right pointer of a node
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
const preOrder = (root) => {
  if(root) {
    console.log(root.val);
    preOrder(root.left);
    preOrder(root.right);
  }
}
const inOrder = (root) => {
  if(root) {
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }
}
const postOrder = (root) => {
  if(root) {
    postOrder(root.left);
    postOrder(root.right);
    console.log(root.val);
  }
}

const list = new Node(1);
list.left = new Node(2); 
list.right = new Node(3); 
list.left.left = new Node(4); 
list.left.right = new Node(5); 


// preOrder(list);
// inOrder(list);
postOrder(list);

// Time Complexity: O(N)
// Space Complexity: O(log N) - Best Case, O(N) - Worst Case
