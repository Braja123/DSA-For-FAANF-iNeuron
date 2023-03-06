// 3.Write a function to check whether a given linked list is palindrome or not
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


  isPllindrome() {
    let stack = [];
    let temp = this.head;
    while(temp) {
      stack.push(temp.val);
      temp = temp.next
    }
    // console.log(stack);
    temp = this.head;
    console.log("temp:", temp);
    // for(let i=0; i<stack.length/2; i++) {
    for(let i=0; i<stack.length; i++) {
      let res = stack.pop();
      if(res == temp.val) {
        temp = temp.next;
      } else {
        return false;
      }
    }
    return true;
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

lists.isPllindrome();
if(lists.isPllindrome()) {
  console.log("It is a Pallindrome");
} else {
  console.log("It is not a Pallindrome");
}