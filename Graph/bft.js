// Breadth First Traversal Implementation

// storing the data like Adjacency List in the Graph
let graph = {
  'A': ['B', 'C', 'D'],
  'B': ['E'],
  'C': ['E', 'F'],
  'D': ['F'],
  'E': ['G'],
  'F': ['G'],
  'G': []
}

// visited set to keep track of all the visited nodes
let visited = new Set();
let queue = [];

const bread_first_search = (graph, visited, node) => {
  visited.add(node);
  // Apply Queue based data structure - FIFO
  queue.push(node);
  while(queue.length !== 0) {
    let popped = queue.shift();
    console.log(popped);
    // Traverse all the adjacent element correspond to that Node 
    for(let adjacent_node of graph[popped]) {
      if(!visited.has(adjacent_node)) {
        visited.add(adjacent_node);
        queue.push(adjacent_node);
      }
    }
  }
}

bread_first_search(graph, visited, 'A');


// Adjacency List for BFT
// BFT -> V+2E -> where V is number of nodes(inside while loop) and E is Sum of Degree
// So the Time Complexity for BFT in Adjacency List is - O(V+E)

// Adjacency Matrix
// Time Complexity: V+V^^2 = O(V^^2)