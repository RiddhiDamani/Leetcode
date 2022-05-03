class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const print = (root) => {
  let list = [];
  let queue = [root];

  while (queue.length) {
    //console.log(queue);
    let current = queue.shift();
    list.push(current.value);

    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }

  return list;
};

let tree = new Node(1);
tree.left = new Node(2);
tree.right = new Node(3);
tree.left.left = new Node(4);
tree.left.right = new Node(5);
tree.right.left = new Node(6);
tree.right.right = new Node(7);

//console.log(tree);
//console.log(print(tree));
/*
                1
              /    \
            2        3
          /   \    /   \
        4      5  6     7
*/

/*
                1
              /    \
            3        2
          /   \    /   \
        7      6  5     4
*/

var invertTree = function (root) {
  if (root === null) return;

  // traverse to the end of left root
  invertTree(root.left);
  // traverse to the end of right root
  invertTree(root.right);

  let temp = root.right;
  root.right = root.left;
  root.left = temp;

  return root;
};

console.log("Input:");
console.log(print(tree));
console.log("-----------------");
console.log("Output:");
console.log(print(invertTree(tree)));

