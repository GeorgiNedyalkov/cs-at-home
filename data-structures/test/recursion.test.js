const { recusiveSum } = require("../recursion");

describe("recursiveSum", () => {
  it("should sum all numbers together recursively", () => {
    let sum = recusiveSum(10);

    expect(sum).toBe(55);
  });
});
