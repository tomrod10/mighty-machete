// Design a BST with methods

class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this.root;
    }

    let node = this.root;
    while(true) {
      if (val === node.val) return undefined;
      if (val > node.val) {
        if (!node.right) {
          node.right = newNode;
          return this;
        }
        node = node.right
      } else {
        if (!node.left) {
          node.left = newNode;
          return this;
        }
        node = node.left;
      }
    }
  }
}

/*
Example tree

        10
    5      13
  2  7   11  15

*/

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(15);
tree.insert(7);


