// Designing a linked list and its methods

class Node {
  constructor(val) {
    this.val = val;
    this.next = null
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // Add to the end of the list
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  // Delete at the end of the list
  pop() {
    let current = this.head;
    let newTail = this.head;

    if (!this.head) return undefined;

    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.lenght--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // Delete the first element of the list
  shift() {
    if (!this.head) return undefined;

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  // Add to the beginning (head) of the list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail =  newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // Retrieve or get a node from the list
  get(index) {
    if (index >= this.length || index < 0) return null;

    let currIndex = 0
    let node = this.head;
    while(currIndex !== index) {
      node = node.next;
      currIndex++;
    }
    return node;
  }

  // Update a node's value
  set(val, index) {
    if (index >= this.length || index < 0) return null;

    let node = this.get(index)
    if (node) {
      node.val = val;
      return true;
    }
    return false
  }

  // Add node at a specific position
  insert(val, index) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    let currIndex = 0;
    let  node = this.head;
    let newNode = new Node(val);
    while(currIndex !== index - 1) {
      node = node.next;
      currIndex++;
    }
    newNode.next = node.next;
    node.next = newNode;
    this.length++;
    return true;
  }

  // Remove node at a specific position
  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let prev = this.get(index - 1);
    let removed = prev.next;
    prev.next = removed.next;
    return removed;
  }

  reverse() {

  }
}