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
}

const list = new SinglyLinkedList();
list.push(3);
list.push(4);
// list.push(2);

console.log('Before', list);
console.log(list.unshift(1));
console.log('After', list);