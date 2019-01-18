class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return null;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return null;
    const head = this.head;
    this.head = head.next;
    this.length -= 1;
    return head;
  }

  unshift(val) {
    const newNode = new Node(val);
    if(!this.head)
      this.tail = newNode;
    else
      newNode.next = this.head;
    this.head = newNode;
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let i = 0;
    let element = this.head;
    while (i !== index) {
      element = element.next;
      i++;
    }
    return element;
  }

  set(index, value) {
    let element = this.get(index);
    if (!element) return false;
    element.val = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let prev = this.get(index - 1);
    let next = prev.next;
    const newNode = new Node(value);
    prev.next = newNode;
    newNode.next = next;
    this.length += 1;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift(index);
    if (index === this.length - 1) return this.pop(index);
    const prev = this.get(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this.length -= 1;
    return removed;
  }

  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;

    let node = this.head;
    [this.head, this.tail] = [this.tail, this.head];

    let prev = null,
        next;
    
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print() {
    const arr = [];
    let cur = this.head;
    while(cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log(arr);
  }
}

const list = new SinglyLinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(4);

list.print();
// console.log('\n', list.remove(1, 'Hey'));
// console.log('\n', list.get(1, 'Hey'));
list.reverse();

list.print();