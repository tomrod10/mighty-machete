// Design a queue data structure

// You could use an array but you would not be
// able to work around re-indexing every element
// in the array.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enq(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = this.last.next;
    }
    return ++this.size;
  }

  deq() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
  }
}

let queue = new Queue();

queue.enq(1);
queue.enq(2);
queue.enq(3);

queue.deq(); // 1
queue.deq(); // 2
queue.deq(); // 3
queue.deq(); // null

