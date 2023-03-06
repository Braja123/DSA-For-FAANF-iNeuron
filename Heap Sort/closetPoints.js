// Euclidean's Distance = sqrt((x2-x1) + (y2 - y1) )


let points = [[3, 3], [5, -1], [-2, 4]];
let k = 2;

const get_dist = (x, y) => {
  return Math.sqrt(x**2 + y**2);
}

const kClosetPoints = (points, k) => {
  let min_heap = [];
  let n = points.length;
  for(let i=0; i<n; i++) {
    let x = points[i][0];
    let y = points[i][1];

    heappush(min_heap, (get_dist(x, y)), points[i]);
  }
  let result = [];
  for(let i=0; i<k; i++) {
    result.append(heappop(min_heap)[1]);
  }
  return result;
}

console.log(kClosetPoints(points, k));