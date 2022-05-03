class MaxBinaryHeap {
  constructor() {
    this.values = [41, 39, 33, 18, 27, 12, 55];
  }
  insert(element) {
    this.values.push(element);
    this.bubbleUp();
    console.log(this.values);
  }
  bubbleUp() {
    let index = this.values.length - 1;
    const element = this.values[index];
    while (index > 0) {
      let parentIdx = Math.floor((index - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      // swap
      this.values[parentIdx] = element;
      this.values[index] = parent;
      index = parentIdx;
    }
  }
  extractMax() {
    // edge case
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.bubbleDown();
      console.log(this.values);
    }

    return max;
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
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < len) {
        rightChild = this.values[rightChildIndex];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild)
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

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));
console.log(heap.extractMax());

// [41, 39, 33, 18, 27, 12, 55]
