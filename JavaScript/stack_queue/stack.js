// Linked List implementation of Stack - push() and pop()
// In stack, push and pop has to be in constant time O(1)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(value) {
    let newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    return ++this.size;
  }

  pop() {
    if (this.size === 0) {
      return null;
    }
    var oldNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldNode.value;
  }
}

var stack = new Stack();
stack.push("10");
stack.push("20");
stack.push("30");
console.log(stack);
console.log(stack.pop());

// 'use strict'

// class Node {
//     constructor(val) {
//         this.val = val;
//         this.next = null;
//     }
// }
// class Stack {
//     constructor() {
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     push(val) { // unshift in SLL
//         let newNode = new Node(val);
//         if (!this.first) this.first = this.last = newNode;
//         else {
//             newNode.next = this.first;
//             this.first = newNode;
//         }
//         return ++this.size;
//     }
//     pop() { // shift in SLL
//         if (!this.first) return null;
//         let removed = this.first;
//         this.first = removed.next;
//         removed.next = null;
//         this.size--;
//         if (this.size === 0) this.first = this.last = null;
//         return removed;
//     }
// }

// let stack = new Stack();

// console.log(stack.push(1));
// console.log(stack.push(2));
// console.log(stack.push(3));

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// console.log(stack);
