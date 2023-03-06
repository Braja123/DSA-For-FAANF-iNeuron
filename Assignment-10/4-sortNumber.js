// 4. Sort 0s, 1s, and 2s in ascending order in Linked List
// Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to the head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s. 
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


  sort012() {
    // base case condition
    if(!this.head || !this.head.next) return this.head;

    // create three counters to store the count values for 0, 1 and 2
    let count0 = 0;
    let count1 = 0;
    let count2 = 0;

    let curr = this.head;

    // Store the count values
    while(curr) {
      if(curr.val === 0) {
        count0++;
      } else if(curr.val === 1) {
        count1++;
      } else {
        count2++;
      }
      curr = curr.next;
    }

    let temp = this.head;

    // store the data in a sorted manner
    while(temp) {
      if(count0 > 0) {
        temp.val = 0;
        count0--;
      } else if(count1 > 0) {
        temp.val = 1;
        count1--;
      } else {
        temp.val = 2;
        count2--;
      }
      temp = temp.next;
    }
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
lists.sort012()