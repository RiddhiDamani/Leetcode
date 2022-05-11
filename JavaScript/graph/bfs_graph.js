// Use Queue - BFS - First Thing In is First Thing out
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  bfs_recursive(startVertex) {
    let result = [];
    let visitedVertexes = {};
    let queue = [startVertex];
    const adjacencyList = this.adjacencyList;
    visitedVertexes[startVertex] = true;
    bfs();

    function bfs() {
      if (queue.length) {
        let currentVertex = queue.shift();
        result.push(currentVertex);
        adjacencyList[currentVertex].forEach((neighbor) => {
          if (!visitedVertexes[neighbor]) {
            visitedVertexes[neighbor] = true;
            queue.push(neighbor);
          }
        });
        bfs();
      }
    }
    return result;
  }

  bfs_iterative(startVertex) {
    const queue = [startVertex];
    const result = [];
    const visitedVertexes = {};
    let currentVertex;
    visitedVertexes[startVertex] = true;

    while (queue.length > 0) {
      //console.log(stack);
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertexes[neighbor]) {
          visitedVertexes[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }

    return result;
  }
}

let graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "D");
graph.addEdge("C", "E");
graph.addEdge("D", "E");
graph.addEdge("D", "F");
graph.addEdge("E", "F");

console.log(graph.bfs_iterative("A"));
console.log(graph.bfs_recursive("A"));
