// Not Resolved
// 6. Remove Nth Node from End of List
// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Need to get the code from Ankan's github


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

  // Not getting what we need to add inside "dummy" variable
  removeNthNode(n) {
    let dummy = new Node(this.next = this.head);
    let temp = this.head;
    let count = 0;
    // count of number of nodes in a linked list
    while(temp) {
      count++;
      temp = temp.next;
    }
    console.log(count);
    let numberOfSteps = count - n;
    temp = dummy;
    // number of steps need to move on towards right
    while(numberOfSteps > 0) {
      temp = temp.next;
      numberOfSteps--;
    }
    let res = temp.next.next;
    temp.next = res;
    return dummy.next;
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
list.removeNthNode(2)