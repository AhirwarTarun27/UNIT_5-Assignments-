//linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("A");
const b = new Node("B");
const c = new Node("C");
const d = new Node("D");

a.next = b;
b.next = c;
c.next = d;

// const printValues = (head) => {
//   let arr = [];
//   let current = head;
//   while (current !== null) {
//     arr.push(current.val);
//     current = current.next;
//   }
//   return arr;
// };

// console.log(printValues(a));

const printValues = (head) => {
  let arr = [];
  fillArray(head, arr);
  return arr;
};

function fillArray(head, arr) {
  if (head === null) return;
  arr.push(head.val);
  fillArray(head.next, arr);
}

console.log(printValues(a));
