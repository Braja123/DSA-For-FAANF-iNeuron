// Need to check by me - check with Ankan's github code
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
  
  insertAtTop(val) {
  const newNode = new Node(val);
  
  if(!this.head) {
  this.head = newNode;
  return;
  }
  
  newNode.next = this.head;
  this.head = newNode;
  }
  
  convertToCircular() {
    let temp = this.head;
    
    while(temp.next){
      temp = temp.next;
    }
  
    temp.next = this.head;
  }
  
  printList() {
  let temp = this.head;
  
  while(temp){
  console.log(temp.val);
  temp = temp.next;
  }
  }
  
  printCircularList() {
    let temp = this.head;
    
    if(!temp) return;
    
    console.log(temp.val);
    temp = temp.next;
    
    while(temp !== this.head) {
      console.log(temp.val);
      temp = temp.next;
    }
  }
}
  
  const ll = new LinkedList();
  
  ll.insertAtTop(100);
  ll.insertAtTop(200);
  ll.insertAtTop(300);
  ll.insertAtTop(400);
  
  // ll.printList();
  
  ll.convertToCircular();
  
  ll.printCircularList();