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

  /**
   * Breadth first search
   * Going through tree horisontally by syblings
   */
  bfs() {
    if (!this.root) return [];

    const queue = [this.root],
          visited = [];

    while(queue.length) {
      const node = queue.shift();
      visited.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return visited;
  }

  /**
   * Depth first search - PreOrder
   * Going through tree vertically down
   */
  dfs() {
    if (!this.root) return [];
    const visited = [];

    (function loop(node) {
      visited.push(node.value);
      if (node.left) loop(node.left);
      if (node.right) loop(node.right);
    })(this.root);

    return visited;
  }
}

const tree = new BinarySearchTree();

tree.insert(10);
tree.insert(6);
tree.insert(3);
tree.insert(8);
tree.insert(15);
tree.insert(20);

// console.log(JSON.stringify(tree, null, 2));

console.log('BFS:', tree.bfs());
console.log('DFS:', tree.dfs());