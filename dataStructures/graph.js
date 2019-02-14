class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex])
      this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  }

  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
      const i1 = this.adjacencyList[vertex1].indexOf(vertex2);
      i1 > -1 ? this.adjacencyList[vertex1].splice(i1, 1) : null;

      const i2 = this.adjacencyList[vertex2].indexOf(vertex1);
      i2 > -1 ? this.adjacencyList[vertex2].splice(i2, 1) : null;
    }
  }

  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      [...this.adjacencyList[vertex]].forEach(v2 => {
        this.removeEdge(vertex, v2);
      });
      delete this.adjacencyList[vertex];
    }
  }

  depthFirstTraversal(vertex) {
    if (!this.adjacencyList[vertex]) return null;
    const queue   = [vertex],
          visited = [];

    while(queue.length) {
      const v = queue.pop();
      console.log('Visiting', v);
      visited.push(v);
      this.adjacencyList[v].forEach(sibling => {
        if (visited.indexOf(sibling) === -1 && queue.indexOf(sibling) === -1) {
          queue.push(sibling);
        }
      });
    }
  }
}

const g = new Graph;

g.addVertex('A');
g.addVertex('C');
g.addVertex('E');
g.addVertex('J');
g.addVertex('M');
g.addVertex('D');
g.addVertex('F');
g.addVertex('K');

g.addEdge('A', 'C');
g.addEdge('C', 'E');
g.addEdge('E', 'D');
g.addEdge('D', 'F');
g.addEdge('F', 'K');
g.addEdge('K', 'M');
g.addEdge('M', 'A');
g.addEdge('E', 'J');
g.addEdge('J', 'A');

console.log(g.adjacencyList);

g.depthFirstTraversal('A');

// g.removeVertex('Tokyo');

// console.log(g.adjacencyList);