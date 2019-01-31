class Node {
  constructor(value, num) {
    this.value = value;
    this.num = num ? num : null;
    this.childs = [];
  }
}

class Tree {
  constructor(value) {
    this.root = value ? new Node(value, 1) : null;
  }

  // Search in tree for node by it's num. Returns node or false
  searchNode(num) {
    if (!this.root) return false;
    const queue = [this.root];

    while(queue.length) {
      let node = queue.shift();
      if (node.num === num) return node;

      node.childs.forEach(child => {
        queue.push(child);
      });
    }
    return false;
  }

  create(n, first, second, values) {

    const siblings = [1];

    while(siblings.length) {
      let curNum = siblings.pop();

      const node = this.searchNode(curNum) || new Node(values[curNum - 1], curNum);
      if (!this.root) this.root = node;
      
      // Going through given array of nodes
      for (let i = 0; i < first.length; i++) {
        if (first[i] === curNum) {
          const [num, val] = [second[i], values[second[i] - 1]];
          const pairNode = this.searchNode(num) || new Node(val, num);
          node.childs.push(pairNode);
          first.splice(i, 1);
          second.splice(i, 1);
          siblings.push(num);
          i--;
        }
      }
      for (let i = 0; i < second.length; i++) {
        if (second[i] === curNum) {
          const [num, val] = [first[i], values[first[i] - 1]];
          const pairNode = this.searchNode(num) || new Node(val, num);
          node.childs.push(pairNode);
          first.splice(i, 1);
          second.splice(i, 1);
          siblings.push(num);
          i--;
        }
      }
    }
  }
}

function primeQuery(n, first, second, values, queries) {
  const tree = new Tree();
  tree.create(n, first, second, values);

  console.log('Tree', JSON.stringify(tree, null, 2));
}

const firstNodes = [6, 8, 3, 6, 4, 1, 8, 5, 1];
const secondNodes = [9, 9, 5, 7, 8, 8, 10, 8, 2];
const values = [17, 29, 3, 20, 11, 8, 3, 23, 5, 15];

primeQuery(values.length, firstNodes, secondNodes, values);

// const tr = new Tree(13);
// tr.root.childs.push(new Node(47, 2));
// tr.root.childs.push(new Node(51, 6));
// tr.root.childs[0].childs.push(new Node(11, 3));
// console.log(JSON.stringify(tr, null, 2));

// console.log(tr.searchNode(3));