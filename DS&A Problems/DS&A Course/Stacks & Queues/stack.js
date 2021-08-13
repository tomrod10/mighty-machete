// Designing a Stack

// You can use arrays to function as a stack
let stack = [];

stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop()); // 3
console.log(stack.pop()); // 2
console.log(stack.pop()); // 1

// You can also use a LinkedList as a stack
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  pop() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    return temp.val;
  }
}

let stack = new Stack();

stack.push(1);
stack.push(2);
stack.push(3);

stack.pop(); // 3
stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // null