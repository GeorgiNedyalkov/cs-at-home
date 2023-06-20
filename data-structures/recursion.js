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

recusiveSum(10);

module.exports = {
  recusiveSum,
};
