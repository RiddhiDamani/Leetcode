class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  // L - R - Root
  dfs_postorder_recursive(root) {
    if (root === null) {
      return;
    }
    let res = [];
    traverse(root);
    function traverse(node) {
      if (node === null) return;
      traverse(node.left);
      traverse(node.right);
      res.push(node.value);
    }
    return res;
  }

  dfs_postorder_iterative(root) {
    if (root === null) {
      return;
    }
    let stack = [];
    let currentNode = root;
    let res = [];

    while (currentNode !== null || stack.length !== 0) {
      if (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else {
        let tempNode = stack[stack.length - 1].right;
        if (tempNode === null) {
          tempNode = stack.pop();
          res.push(tempNode.value);
          while (stack.length !== 0 && tempNode === stack[stack.length - 1].right) {
            tempNode = stack.pop();
            res.push(tempNode.value);
          }
        } else {
          currentNode = tempNode;
        }
      }
    }

    return res;
  }
}

Array.prototype.peek = function () {
  if (this.length === 0) {
    throw new Error("Array Index Out of Bounds");
  }
  return this[this.length - 1];
};

// Tree
//      10
//    /   \
//   8    15
//  / \   / \
// 7   9  14  16
// O/P : [7,9,8,14,16,15,10]

let tree = new Tree();
tree.root = new Node(1);
tree.root.right = new Node(2);
tree.root.right.left = new Node(3);
//tree.root = new Node(10);
// tree.root.left = new Node(8);
// tree.root.left.left = new Node(7);
// tree.root.left.right = new Node(9);
// tree.root.right = new Node(15);
// tree.root.right.left = new Node(14);
// tree.root.right.right = new Node(16);
console.log(tree);
console.log(tree.dfs_postorder_iterative(tree.root));
