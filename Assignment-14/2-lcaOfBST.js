// 2. Lowest Common Ancestor of a Binary Search Tree

// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes
// in the BST.
// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between
// two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a
// node to be a descendant of itself).”
// Examples:
// Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
// Output: 6
// Explanation: The LCA of nodes 2 and 8 is 6.

class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
let p = 2;
let q = 8;

const insertBST = (root, key) => {
  let newNode = new Node(key);
  // Tree is empty
  if(!root) {
    return newNode;
  } else {
    if(root.val === key) {
      return root;
    } else if(root.val < key) {
      // recursive call for right node
      root.right = insertBST(root.right, key);
    } else {
      // recursive call for left node
      root.left = insertBST(root.left, key);
    }
  }
  return root;
}

// Method Definition for LCA
const lowestCommonAncestor = (root, p, q) => {
  let parent_val = root.val;
  // let p_val = p.val;
  let p_val = p;
  // let q_val = q.val;
  let q_val = q;

  // Check if node val is greater than parent then move to right node
  if(p_val > parent_val && q_val > parent_val) {
    return lowestCommonAncestor(root.right, p, q);

  // Check if node val is lesser than parent then move to left node
  } else if(p_val < parent_val && q_val < parent_val) {
    return lowestCommonAncestor(root.left, p, q);

    // If the value of P and Q lies between left and right node then print the root node
  } else {
    return root.val;
  }
}

// Driver Code
let root = new Node(6);
insertBST(root, 2);
insertBST(root, 8);
insertBST(root, 0);
insertBST(root, 4);
insertBST(root, 7);
insertBST(root, 9);
// insertBST(root, null);
// insertBST(root, null);
insertBST(root, 3);
insertBST(root, 5);

console.log(lowestCommonAncestor(root, p, q));