// Singly Linked List
// Node - piece of data - val
//      - reference to next node - next

// Node Definition
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push - insert at the end
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      //console.log("this.tail.next:", this.tail.next);
      this.tail = newNode;
      //console.log("this.tail:", this.tail);
    }
    this.length++;
    return this;
  }

  // one way of traversing
  // traverse() {
  //   var current = this.head;
  //   while (current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  get(indexVal) {
    if (indexVal < 0 || indexVal >= this.length) {
      return null;
    }
    let counter = 0;
    var current = this.head;
    while (counter !== indexVal) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(indexVal, value) {
    let foundNode = this.get(indexVal);
    if (foundNode) {
      //console.log("Hi! I am in here!");
      foundNode.val = value;
      return true;
    }
    return false;
  }

  insert(indexVal, value) {
    if (indexVal < 0 || indexVal > this.length) {
      return false;
    }
    if (indexVal === this.length) {
      this.push(value);
      return true; // OR both these statements can also be written as !!this.push(val)
    }
    if (indexVal === 0) {
      this.unshift(value);
      return true;
    }
    let newNode = new Node(value);
    let prev = this.get(indexVal - 1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(indexVal) {
    if (indexVal < 0 || indexVal > this.length) {
      return undefined;
    }
    if (indexVal === this.length - 1) {
      this.pop();
      return true; // OR both these statements can also be written as !!this.pop()
    }
    if (indexVal === 0) {
      this.shift();
      return true;
    }
    let prev = this.get(indexVal - 1);
    let removed = prev.next;
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // remove node from end of the Linked List
  pop() {
    if (!this.head) {
      return undefined;
    }
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    //console.log(current.val);
    //console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // remove a node from beginning of the linked list.
  shift() {
    if (!this.head) {
      return undefined;
    }
    var oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return oldHead;
  }

  // add node at the beginning of the linked list.
  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
}

var list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
list.insert(0, "FIRST");
console.log(list);
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("!");
//list.traverse();
// console.log(list.set(1, "Riddhi"));
// console.log(list);
//console.log(list);

// var first = new Node("Hi");
// first.next = new Node("There!");
// first.next.next = new Node("How");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you?");

// console.log(first);
