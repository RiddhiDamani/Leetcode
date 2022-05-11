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

  dfs_recursive(startVertex) {
    let result = [];
    let visitedVertexes = {};
    const adjacencyList = this.adjacencyList;
    dfs(startVertex);

    function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visitedVertexes[vertex] = true;
      result.push(vertex);
      //console.log(adjacencyList[vertex]);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visitedVertexes[neighbor]) {
          return dfs(neighbor);
        }
      });
    }
    return result;
  }

  dfs_iterative(startVertex) {
    const stack = [startVertex];
    const result = [];
    const visitedVertexes = {};
    let currentVertex;
    visitedVertexes[startVertex] = true;

    while (stack.length > 0) {
      //console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach((neighbor) => {
        if (!visitedVertexes[neighbor]) {
          visitedVertexes[neighbor] = true;
          stack.push(neighbor);
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

//console.log(graph.adjacencyList);
console.log(graph.dfs_recursive("A"));
console.log(graph.dfs_iterative("A"));
