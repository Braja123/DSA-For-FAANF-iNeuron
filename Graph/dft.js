// storing the data like Adjacency List in the Graph
let graph = {
  '5': ['3', '7'],
  '3': ['2', '4'],
  '7': ['8'],
  '2': [],
  '4': ['8'],
  '8': []
}

// visited set to keep track of all the visited nodes
let visited = new Set();

// Method Definition for depth first traverse
const depth_first_traversal = (visited, graph, node) => {
  if(!visited.has(node)) {
    console.log(node);
    visited.add(node);
    // Traverse all the adjacent element correspond to that Node 
    for(adjacent_node of graph[node]) {
      depth_first_traversal(visited, graph, adjacent_node)
    }
  }
}

// driver code
depth_first_traversal(visited, graph, '5');