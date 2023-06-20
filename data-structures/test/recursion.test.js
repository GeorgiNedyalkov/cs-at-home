const { recusiveSum, solve } = require("../recursion");

describe("recursiveSum", () => {
  it("should sum all numbers together recursively", () => {
    let sum = recusiveSum(10);

    expect(sum).toBe(55);
  });
});

describe("solve", () => {
  it("should find the right path of a maze", () => {
    const maze = [
      "XXXXXXXXXX X",
      "X        X X",
      "X        X X",
      "X XXXXXXXX X",
      "X          X",
      "X XXXXXXXXXX",
    ];
    //  solve(maze, wall, start, end)
    expect(solve(maze, "X", { x: 10, y: 0 }, { x: 1, y: 5 })).toEqual([
      { x: 10, y: 0 },
      { x: 10, y: 1 },
      { x: 10, y: 2 },
      { x: 10, y: 3 },
      { x: 10, y: 4 },
      { x: 9, y: 4 },
      { x: 8, y: 4 },
      { x: 7, y: 4 },
      { x: 6, y: 4 },
      { x: 5, y: 4 },
      { x: 4, y: 4 },
      { x: 3, y: 4 },
      { x: 2, y: 4 },
      { x: 1, y: 4 },
      { x: 1, y: 5 },
    ]);
  });
});
