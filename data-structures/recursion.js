function recusiveSum(n) {
  // base case
  if (n === 1) {
    return 1;
  }
  // pre recursion
  let out = n + recusiveSum(n - 1);
  // post recursion
  //   console.log(out);
  return out;
}

const dir = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

function walk(maze, wall, curr, end, seen, path) {
  // 1. base cases:
  // off the map
  if (
    curr.x < 0 ||
    curr.x >= maze[0].length ||
    curr.y < 0 ||
    curr.y >= maze.length
  ) {
    return false;
  }

  // its a wall
  if (maze[curr.y][curr.x] === wall) {
    return false;
  }

  // are we at the end
  if (curr.x === end.x && curr.y === end.y) {
    path.push(end);
    return true;
  }

  // we have seen it
  if (seen[curr.y][curr.x]) {
    return false;
  }

  // 3 recurse
  // pre
  seen[curr.y][curr.x] = true;
  path.push(curr);
  // recurse
  for (let i = 0; i < dir.length; ++i) {
    // we are going in a direction and need to keep a track of our path.
    const [x, y] = dir[i];
    if (
      walk(
        maze,
        wall,
        {
          x: curr.x + x,
          y: curr.y + y,
        },
        end,
        seen,
        path
      )
    ) {
      return true;
    }
  }

  // post
  path.pop();

  return false;
}

function solve(maze, wall, start, end) {
  const seen = [];
  const path = [];

  // create the maze to check
  for (let i = 0; i < maze.length; ++i) {
    seen.push(new Array(maze[0].length).fill(false));
  }

  walk(maze, wall, start, end, seen, path);

  return path;
}

const maze = [
  "XXXXXXXXXX X",
  "X        X X",
  "X        X X",
  "X XXXXXXXX X",
  "X          X",
  "X XXXXXXXXXX",
];

solve(maze, "X", { x: 10, y: 0 }, { x: 1, y: 5 });

module.exports = {
  recusiveSum,
  solve,
};
