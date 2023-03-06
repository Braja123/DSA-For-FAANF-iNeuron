// Not Resolved
// Graph cycle detection algorithm: Union by rank and Path Compression algo

class Graph {
  constructor(num_of_v, ) {
    this.num_of_v = num_of_v;
		// this.edges = defaultdict(list);  // dont know how to write in jvascript

  }
}

class Subset {
  constructor(parent, rank) {
    this.parent = parent;
    this.rank = rank;
  }
}

// Path compression technique
const find = (subsets, node) => {
  if(subsets[node].parent != node) {
    // recursion plays a vital role in giving the ultimate parent of that node
    subsets[node].parent = find(subsets, subsets[node].parent)
  }
  return subsets[node].parent;
}

// A function that does the union of two sets
// of u and v(uses union by rank)
const union = (subsets, u, v) => {
  // Attach smaller rank tree under root
	// of high rank tree(Union by Rank)
  if(subsets[u].rank > subsets[v].rank) {
    subsets[v].parent = u;
  } else if(subsets[v].rank > subsets[u].rank) {
    subsets[u].parent = v;
  }

  // If ranks are the same, then make one as
	// root and increment its rank by one
  else {
    subsets[v].parent = u;
    subsets[u].rank += 1;
  }

}



const isCycle = (graph) => {

  // Allocate memory for creating sets
  let subsets = [];

  for(let u of graph.num_of_v) {
    subsets.push(Subset(u, 0))
  }

  // Iterate through all edges of graph,
	// find sets of both vertices of every
	// edge, if sets are same, then there
	// is cycle in graph.
  for(let u of graph.edges) {
    let u_rep = find(subsets, u);

    for(let v of graph.edges[u]) {
      let v_rep = find(subsets, v);

      if(u_rep === v_rep) {
        return true;
      } else {
        union(subsets, u_rep, v_rep);
      }
    }
  }

}


// Driver Code
let g = new Graph(3);

// add edge 0-1
g.add_edge(0, 1)

// add edges 1-2
g.add_edge(1, 2)

// add edge 0-2
g.add_edge(0, 2)

if(isCycle(g)) {
	print('Graph contains cycle');
} else {
	print('Graph does not contain cycle');
}
