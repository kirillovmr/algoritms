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
    if (!this.root) return this.root = new Node(value);
    const newNode = new Node(value);

    let currentNode = this.root;
    while (true) {
      if (value > currentNode.value) {
        if (currentNode.right) 
          currentNode = currentNode.right;
        else 
          return currentNode.right = newNode;
      }
      else if (value < currentNode.value) {
        if (currentNode.left)
          currentNode = currentNode.left;
        else
          return currentNode.left = newNode;
      }
      else
        return false;
    }
  }

  search(value) {
    if(!this.root) return false;

    let currentNode = this.root;
    while(true) {
      if (value > currentNode.value) {
        if (currentNode.right)
          currentNode = currentNode.right;
        else
          return false;
      }
      else if (value < currentNode.value) {
        if (currentNode.left)
          currentNode = currentNode.left;
        else
          return false;
      }
      else
        return currentNode;
    }
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(11);
tree.insert(9);
tree.insert(8);

console.log(JSON.stringify(tree, null, 2));