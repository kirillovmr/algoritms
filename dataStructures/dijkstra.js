class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({node: vertex2, weight});
    this.adjacencyList[vertex2].push({node: vertex1, weight});
  }
  shortestPath(start, finish) {
    const nodes = new PriorityQueue(),
          distances = {},
          previous  = {},
          path      = []; // To return at end
    let   smallest;

    // Making initial state
    for(let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // Goes trough queue
    while(nodes.values.length) {
      smallest = nodes.dequeue().value;

      if (smallest === finish) {

        // Build a path and return
        while(previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for(let neighbor in this.adjacencyList[smallest]) {

          // Find neighbour node
          let nextNode = this.adjacencyList[smallest][neighbor];

          // Calculate new distance to neighbour node
          let candidate = distances[smallest] + nextNode.weight,
              nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // Update the smallest distance to the node
            distances[nextNeighbor] = candidate;
            // Update how we got to neighbour
            previous[nextNeighbor] = smallest;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}

// class Node {
//   constructor(value, priority) {
//     this.valuse   = value;
//     this.priority = priority;
//   }
// }

class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(value, priority) {
    this.values.push({value, priority});
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

const g = new Graph();

g.addVertex('A');
g.addVertex('B');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('F');

g.addEdge('A', 'B', 4);
g.addEdge('B', 'E', 3);
g.addEdge('E', 'D', 3);
g.addEdge('E', 'F', 1);
g.addEdge('D', 'F', 1);
g.addEdge('F', 'C', 4);
g.addEdge('D', 'C', 2);
g.addEdge('C', 'A', 2);

console.log(
  g.shortestPath('A', 'E')
);