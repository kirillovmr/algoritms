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
      let node = queue.pop();
      if (node.num === num) return node;

      node.childs.forEach(child => {
        queue.push(child);
      });
    }
    return false;
  }

  // Creates a tree
  create(n, first, second, values) {
    const siblings = [1];
    const usedIndexes = Array(n).fill(false);

    while(siblings.length) {
      let curNum = siblings.pop();

      const node = this.searchNode(curNum) || new Node(values[curNum - 1], curNum);
      if (!this.root) this.root = node;
      
      // Going through given array of first nodes
      for (let i = 0; i < first.length; i++) {
        if (first[i] === curNum && !usedIndexes[i]) {
          const [num, val] = [second[i], values[second[i] - 1]];
          const pairNode = this.searchNode(num) || new Node(val, num);
          node.childs.push(pairNode);
          usedIndexes[i] = true;
          // first.splice(i, 1);
          // second.splice(i, 1);
          siblings.push(num);
          // i--;
        }
      }
      // Going through given array of second nodes
      for (let i = 0; i < second.length; i++) {
        if (second[i] === curNum && !usedIndexes[i]) {
          const [num, val] = [first[i], values[first[i] - 1]];
          const pairNode = this.searchNode(num) || new Node(val, num);
          node.childs.push(pairNode);
          usedIndexes[i] = true;
          // first.splice(i, 1);
          // second.splice(i, 1);
          siblings.push(num);
          // i--;
        }
      }
    }
  }

  countPrime(rootNode = 1) {
    const headNode = this.searchNode(rootNode);

    const queue = [headNode];
    let primes = 0;

    while(queue.length) {
      const node = queue.pop();
      if (isPrime(node.value))
        primes += 1;
      node.childs.forEach(child => {
        queue.push(child);
      });
    }
    return primes;
  }
}

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return true;
}

function primeQuery(n, first, second, values, queries) {
  const tree = new Tree();
  tree.create(n, first, second, values);

  // Count primes
  return queries.map(head => {
    return tree.countPrime(head);
  })
}

const firstNodes = [6, 8, 3, 6, 4, 1, 8, 5, 1];
const secondNodes = [9, 9, 5, 7, 8, 8, 10, 8, 2];
const values = [17, 29, 3, 20, 11, 8, 3, 23, 5, 15];
const queries = [ 1, 8, 9, 6, 4, 3 ];

const res = primeQuery(values.length, firstNodes, secondNodes, values, queries);
console.log(res);