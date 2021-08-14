// Binary Tree Breadth First Search

/*
  Example binary tree

         10
      6     15
    3  8      20
*/
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

  find(val) {
    if (!this.root) return false;
    let node = this.root;
    let found = false;
    while(node && !found) {
      if (val > node.val) {
        node = node.right;
      } else if (val < node.val) {
        node = node.left;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return node;
  }

  contains(val) {
    if (!this.root) return false;
    let node = this.root;
    while(node) {
      if (val > node.val) {
        node = node.right;
      } else if (val < node.val) {
        node = node.left;
      } else {
        return true;
      }
    }
    return false;
  }

  bfs() {
    let queue = [];
    let result = [];
    let node = this.root
    queue.push(node);

    while(queue.length) {
      node = queue.shift();
      result.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

let result = tree.bfs();
console.log(result);

