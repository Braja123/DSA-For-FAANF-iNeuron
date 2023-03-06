// 2. Invert Binary Tree
// Given the root of a binary tree, invert the tree, and return its root.
// Example 1:
// Input: root = [4,2,7,1,3,6,9]
// Output: [4,7,2,9,6,3,1]

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}

const invertTree = (root) => {
  // * First we check if the root is null then return null.
  if(!root) return null;
  if(root) {
    //Now we store the root of the left subtree and the right subtree in two variables.
    let rightSubTree = invertTree(root.right);
    let leftSubTree = invertTree(root.left);

     //Then swap the stored values by assigning root.left as leftSubtreeRoot(prviously right subtree root) & root.right as rightSubtreeRoot(prviously left subtree root).
    //  actual meaning of inversion
     root.left = rightSubTree;
     root.right = leftSubTree;
 
     //Finally return root.
     return root;
  }
}

let root = new Node(4);
root.left = new Node(2);
root.right = new Node(7);
root.left.left = new Node(1);
root.left.right = new Node(3);
root.right.left = new Node(6);
root.right.right = new Node(9);

console.log(invertTree(root));