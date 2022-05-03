class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        // Equal value
        if (value === current.value) {
          return undefined;
        }
        // Left Side
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        }
        // Right Side
        else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  // returns the value of the found Node
  find(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    let found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  // return true or false - whether the node is present in the tree.
  contains(value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root;
    //let found = false;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  // Breadth First Search
  BFS() {
    // data - what we will return at the end
    // queue - empty array
    let node = this.root;
    let visitedData = [];
    let queue = [];

    queue.push(this.root);
    
    while (queue.length) {
      // taking node from the beginning of the queue
      node = queue.shift();
      visitedData.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return visitedData;
  }

  // Depth First Search - PreOrder - [10, 6, 3, 8, 15, 20]
  DFSPreOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      visitedData.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedData;
  }

  // Depth First Search - PostOrder - [3, 8, 6, 20, 15, 10]
  DFSPostOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedData.push(node.value);
    }
    traverse(current);
    return visitedData;
  }

  // Depth First Search - InOrder - [3, 6, 8, 10, 15, 20]
  DFSInOrder() {
    let visitedData = [];
    let current = this.root;
    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedData.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(current);
    return visitedData;
  }
}

// Less Verbose Code:

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    var current = this.root;
    while (true) {
      // Equal value
      if (value === current.value) return undefined;
      // Left Side
      if (value < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
      // Right Side
      else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }
}

//     10
//  6      15
//3   8      20
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
console.log(tree);
console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());
tree.find(7);
tree.contains(7);
tree.contains(-1);

// var tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);
