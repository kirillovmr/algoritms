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
    const q = new PriorityQueue();
    const distances = {},
          previous  = {},
          path      = [];

    // Initialization of distances & previous
    for(let vertex in this.adjacencyList) {
      const distance = vertex === start ? 0 : Infinity;
      distances[vertex] = distance;
      q.enqueue(vertex, distance);
      previous[vertex] = null;
    }

    while(q.values.length) {
      const vertex = q.dequeue();

      if (vertex.value === finish) {
        // Build Path
        console.log('We are done');
        while(finish !== start) {
          path.push(finish);
          finish = previous[finish];
        }
        path.push(start);
        break;
      }

      this.adjacencyList[vertex.value].forEach(neighbor => {
        const distance = distances[vertex.value] + neighbor.weight;
        if (distance < distances[neighbor.node]) {
          distances[neighbor.node] = distance;
          previous[neighbor.node] = vertex.value;
          q.enqueue(neighbor.node, distance);
        }
      })
    }

    console.log('Previous', previous);
    console.log('Distances', distances);
    return path.reverse();
  }
}

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