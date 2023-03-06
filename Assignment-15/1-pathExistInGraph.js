// 1. Find if Path Exists in Graph
// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive).
// The edges in the graph are represented as 2D integer array edges, where each edge[i] = [ui, vi]
// denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at
// most one edge, and no vertex has an edge to itself.
// You want to determine if there is a valid path that exists from the vertex source to the vertex
// destination.
// Given edges and the integers n, source, and destination, return true if there is a valid path from source
// to destination, or false otherwise.
// Example 1:
// Input: n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2
// Output: true
// Explanation: There are two paths from vertex 0 to vertex 2:
// - 0 → 1 → 2
// - 0 → 2

// Breadth First Traversal Implemented to Find the path

// storing the data like Adjacency List in the Graph
// True
let graph = {
  0: [1, 2],
  1: [0, 2]
}

// False Condition 
// let graph = {
//   0: [1, 2],
//   1: [0],
//   2: [0],
//   3: [5, 4],
//   4: [3, 5],
//   5: [3, 4]
// }
// let source = 0;
// let destination = 5;

// visited set to keep track of all the visited nodes
let visited = new Set();
// To store in queue
let queue = [];
// source from where it starts
let source = 0;
// Destination- To where it will go
let destination = 2;

const validPath = (graph, visited, source, destination) => {
  visited.add(source);
  // Apply Queue based data structure - FIFO
  queue.push(source);
  while(queue.length !== 0) {
    let node = queue.shift();
    // Important condition
    // To check whether direct path exist or not
    if(node === destination) {
      return true;
    }
    // Traverse all the adjacent element correspond to that Node 
    for(let adjacent_node of graph[node]) {
      if(!visited.has(adjacent_node)) {
        visited.add(adjacent_node);
        queue.push(adjacent_node);
      }
    }
  }
  return false;
}

if(validPath(graph, visited, source, destination)) {
  console.log("Reached at the destination");
} else {
  console.log("Not Reached at the destination");
}

// Time Complexity - O(V+E)