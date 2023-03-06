class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  } 
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // insert the new node at the begining of the Linked List
  insertAtTheBegining(val) {
    // create a new node for the new data
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      // 
      return;
    } 
    // insert at the begining of the linked list
    newNode.next = this.head;
    this.head = newNode;
  }

  // insert the new node at the end of the Linked List
  insertAtEnd(val) {
    let newNode = new Node(val);
    if(!this.head) {
      this.head = newNode;
      return;
    } 
    let temp = this.head;
    while(temp.next) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  // insert the new node after any of the previous node
  insertAfterNode(prevNode, val) {
    if(!prevNode) {
      console.log("Given node must be available in your linked list");
      return;
    }
    // create a new linked list
    let newNode = new Node(val);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
  }

  // reverse the Linked list
  reverseList() {
    let curr = this.head;
    let nextPtr = null;
    let prevPtr = null;

    while(curr) {
      nextPtr = curr.next;
      curr.next = prevPtr;
      prevPtr = curr;
      curr = nextPtr;
    }
    this.head = prevPtr;
  }

  // delete node at any given position
  deleteNode(pos) {
    // If we don't have node
    if(!this.head) return;
    let temp = this.head;
    for(let i=0; i<pos-1; i++) {
      temp = temp.next;
      // if we have more position number than node
      if(temp == null) {
        return;
      }
    }
    let tempPtr = temp.next.next;
    temp.next = null;
    temp.next = tempPtr;
  }
  // Time Complexity(Worst Case - End): O(n)
  // Time Complexity(Best Case - Begining): O(1)

  // count the number of nodes in the linked list
  countNodes() {
    let count = 0;
    let temp = this.head;
    while(temp) {
      count++;
      temp = temp.next;
    }
    // return count;
    console.log("count of number of nodes in the given linked list is: ", count);
  }
  // Time Complexity - O(n)

  // search for a given node inside the linked list
  // If node is present return True otherwise return false
  searchNode(nodeData) {
    let temp = this.head;
    while(temp) {
      console.log(temp.val);
      if(temp.val == nodeData) {
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
  // Time Complexity - O(n)

  // Print the linked list
  printLinkedList() {
    let temp = this.head;
    while(temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

// Not Resolved
// merge two sorted linked list
function mergeLists(head1, head2) {
  let temp = null;
  // list1 is empty
  if(!head1) return head2;
  // list2 is empty
  if(!head2) return head1;
  if(head1.val <= head2.val) {
    temp = head1;
    temp.next = mergeLists(head1.next, head2);
  } else {
    temp = head2;
    temp.next = mergeLists(head1, head2.next);
  }
  return temp;
}
// Time Complexity - O(n)

let list = new LinkedList();
list.insertAtTheBegining(20);
list.insertAtTheBegining(30);
list.insertAtTheBegining(40);
list.insertAtTheBegining(50);
// list.insertAfterNode(list.head.next, 25);

// still need to resolve the mergeLists()
// let list1 = new LinkedList();
// let list2 = new LinkedList();
// let list3 = new LinkedList();
// list1.insertAtTheBegining(30);
// list1.insertAtTheBegining(20);
// list1.insertAtTheBegining(10);
// list2.insertAtTheBegining(50);
// list2.insertAtTheBegining(33);
// list2.insertAtTheBegining(12);
// list3.head = mergeLists(list1, list2);
// let res = list3.head;
// console.log(res);