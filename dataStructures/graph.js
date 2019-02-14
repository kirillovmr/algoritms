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
    console.log(this.adjacencyList[vertex]);
    if (this.adjacencyList[vertex]) {
      [...this.adjacencyList[vertex]].forEach(v2 => {
        this.removeEdge(vertex, v2);
      });
      delete this.adjacencyList[vertex];
    }
  }
}

const g = new Graph;

g.addVertex('Chicago');
g.addVertex('Tokyo');
g.addVertex('Boston');

g.addEdge('Chicago', 'Tokyo');
g.addEdge('Chicago', 'Boston');

console.log(g.adjacencyList);

g.removeVertex('Tokyo');

console.log(g.adjacencyList);