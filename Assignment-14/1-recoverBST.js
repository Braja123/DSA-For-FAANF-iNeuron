// 1. Recover Binary Search Tree
// You are given the root of a binary search tree (BST), where the values of exactly two nodes of the
// tree were swapped by mistake. Recover the tree without changing its structure.

// Examples:
// Input: root = [1,3, null, null,2]
// Output: [3,1, null, null,2]
// Explanation: 3 cannot be a left child of 1 because 3 > 1. Swapping 1 and 3
// makes the BST valid.
class Node {
  constructor(val) {
    this.left = null;
    this.right = null;
    this.val = val;
  }
}
// * Delcaring four pointers: first, mid, last & prev globally.
let first= null;
let mid= null;
let last= null;
let prev= null;

// * This function traverses the tree in Inorder manner & check where are the mistakes.
const traverseAndCheckInorderError = (root) => {
    // * If the root is null then simply return.
    if(!root) return;

    // * Here we go towards the left first
    traverseAndCheckInorderError(root.left);

    // * If the prev is not null and prev's value is greater than current root's val, then someting is wrong.
    if(prev !== null && prev.val > root.val) {
        // * Now if the first has not yet been found then we can simply assign the first as prev and if there is a case where the nodes were adjacent, so to keep track of that we assign the mid as root.
        if(!first){
            first = prev;
            mid = root;
        }

        // * Else, here the second node was not adjacent so we assign last as root
        else last = root;
    }
    // * Here we assign the root to the prev pointer, to keep the track of previous pointer visited.
    prev = root;

    // * Finally, we go towards the right.
    traverseAndCheckInorderError(root.right);
    return root;
}

// * This function calls the main traverse & mark function and correct the values.
const recoverTree = (root) => {
    // * Here we call for the inorder & check function with root.
    traverseAndCheckInorderError(root);

    // * Case(Non-Adjacent Nodes) -> If the first is not null & last is also not null then we can simply swap their values.
    if(first !== null && last !== null) {
        const tempVal = first.val;
        first.val = last.val;
        last.val = tempVal;
    }
    // * Case(Adjacent-Nodes) -> Else if the the first is not null & mid is also not null then we can simply swap their values.
    else if(first !== null && mid !== null){
        const tempVal = first.val;
        first.val = mid.val;
        mid.val = tempVal;
    }

    // * Finally we reset first, mid, last & prev to null for further use cases.
    // first = null;
    // mid = null;
    // last = null;
    // prev = null;

  return root;

}

let root = new Node(3);
root.left = new Node(1);
root.right = new Node(4);
root.right.left = new Node(2);

console.log(recoverTree(root));