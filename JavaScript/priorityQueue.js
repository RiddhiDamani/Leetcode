// Minimum priority value = high priority
// 1 = highest priority; 2 = next highest priority

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubbleUp();
    console.log(this);
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      // max binary heap <=

      if (element.priority >= parent.priority) break;
      // swap
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }
  dequeue() {
    // edge case
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
    }

    return min;
  }
  bubbleDown() {
    let index = 0;
    const len = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      // making sure the child nodes are not out of bounds
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIndex < len) {
        leftChild = this.values[leftChildIndex];
        // max binary heap > and min binary heap <
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];
        if (
          // max binary heap > and min binary heap <
          (swap === null && rightChild.priority < element.priority) ||
          (swap !== null && rightChild.priority < leftChild.priority)
        ) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) break;
      this.values[index] = this.values[swap];
      this.values[swap] = element;
      index = swap;
    }
  }
}

let er = new PriorityQueue();
console.log(er.enqueue("gunshot wound", 1));
console.log(er.enqueue("common cold", 5));
console.log(er.enqueue("high fever", 4));
console.log(er.enqueue("broken arm", 2));
console.log(er.enqueue("glass in foot", 3));

// [41, 39, 33, 18, 27, 12, 55]
