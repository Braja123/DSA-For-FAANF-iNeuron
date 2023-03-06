// 1.Given a singly linked list, give me the reversal of the linked list.
// For example 
// Input - 1 -> 2 -> 3 -> 4 -> 5
// Output - 5 -> 4 -> 3 -> 2 -> 1

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyList {
  constructor() {
    this.head = null;
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

  // Print the linked list
  printLinkedList() {
    let temp = this.head;
    while(temp) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}

let list = new SinglyList();
list.insertAtEnd(10);
list.insertAtEnd(20);
list.insertAtEnd(30);
let res = list.reverseList();
console.log(res);