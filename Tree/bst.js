// Binary Search Tree
// Create a class of Node in a Binary Search Tree
class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

// Insertion of a node in a Binary Search Tree
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


// Searching of an element is a Binary Search Tree
const searchBST = (root, searchData) => {
  // base case condition
  if(!root) return root;
  // if(!root || root.val === searchData) {
  if(root.val === searchData) {
    return root;
  } else if(root.val > searchData) {
    // left recursion
    return searchBST(root.left, searchData);
  } else {
    // right recursion
    return searchBST(root.right, searchData);
  }
}

// This Code is for display [] or all the nodes after get the search node
// const searchBst = (root, sData) => {
//   if(!root) return [];
//   if(root.val === sData) {
//     if(root.left && root.right) {
//       return [root.val, root.left.val, root.right.val];
//     } else if(root.left) {
//       return [root.val, root.left.val];
//     } else if(root.right) {
//       return [root.val, root.right.val];
//     } else {
//       return [root.val];
//     }
//   } else if(root.val < sData){
//     return searchBst(root.right, sData);
//   } else {
//     return searchBst(root.left, sData);
//   }
// }


// Best/Average case Time Complexity: O(logN)
// Worst case Time Complexity: O(N)
const deleteNode = (root, key) => {
  if(!root) {
    return root;
  }
  // If the root value is greater than key
  if(root.val > key) {
    root.left = deleteNode(root.left, key)
  } else if(root.val < key) {
    root.right = deleteNode(root.right, key);

    // finally if root.val === key
  } else {
    // if the node is a leaf node then simply return null
    if(!root.left && !root.right) {
      return null;

      // Now if it has one child then we can return that child and replace the current node
    } else if(!root.left) {
      return root.right;
    } else if(!root.right) {
      return root.left;
    } else {
      const maxOnLeft = findMaxLeftInOrderPredecessor(root.left);
      root.val = maxOnLeft;
      root.left = deleteNode(root.left, maxOnLeft);
      return root;
    }
  }
  return root;
}

const findMaxLeftInOrderPredecessor = (root) => {
  if(!root.right) {
    return root.val;
  } else {
    return findMaxLeftInOrderPredecessor(root.right);
  }
}

// Inorder traversal of the tree
const inOrder = (root) => {
  if(root) {
    inOrder(root.left);
    console.log(root.val);
    inOrder(root.right);
  }
}



// Driver Code
let root = new Node(50);
insertBST(root, 40);
insertBST(root, 70);
insertBST(root, 60);
insertBST(root, 80);

// If after doing inOrder traversal, sorted array
// It is a Binary Search Tree
// inOrder(root);

deleteNode(root, 60);

let searchData = 70;
console.log(searchBST(root, searchData));
// if(searchBST(root, searchData)) {
//   console.log("Search Data is present in BST");
// } else {
//   console.log("Search Data is not present in BST");
// }

// But after getting a sorted array for inOrder(), it is not possible to again build the same BST.

// Time Complexity for Insertion and Searching - In Best/Average case: O(logn) - Because when it tries to add any node either it will go to left side or right side thats how it will skipped one side.
// In worst case it is - O(N)