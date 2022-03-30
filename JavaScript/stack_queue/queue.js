class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(value) {
    var newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  // similar to pop() of stack
  dequeue() {
    if (!this.first) {
      return null;
    }
    var oldNode = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return oldNode;
  }
}

var q = new Queue();
q.enqueue("FIRST");
q.enqueue("SECOND");
q.enqueue("THIRD");
console.log(q.dequeue().value);
console.log(q);
