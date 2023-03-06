// 5. Given a linked list, detect the loop inside the linked list.
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const hasCycle = (head) => {
  let hare = head;
  let tortoise = head;
  
  while(hare && tortoise && hare.next) {
    hare = hare.next.next;
    tortoise = tortoise.next
    if(tortoise == hare) {
      return true;
    }
  }
  return false;
};
  
  
  const head = new Node(3);
  const headTwo = new Node(2);
  const headThree = new Node(0);
  const headFour = new Node(4);
  
  head.next = headTwo;
  headTwo.next = headThree;
  headThree.next = headFour;
  headFour.next = headTwo;
  
  console.log(hasCycle(head));
  