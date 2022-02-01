// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// const linkedListFind = (head, char) => {
//   while (head !== null) {
//     if (head.val === char) {
//       return true;
//     }
//     head = head.next;
//   }
//   return false;
// };

// console.log(linkedListFind(d, "g"));

const linkedListFind = (head, char) => {
  if (head === null) return false;
  if (head.val === char) return true;
  return linkedListFind(head.next, char);
};

console.log(linkedListFind(d, "d"));
