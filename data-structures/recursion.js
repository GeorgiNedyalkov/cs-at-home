function recusiveSum(n) {
  // base case
  if (n === 1) {
    return 1;
  }

  return n + recusiveSum(n - 1);
}

console.log(recusiveSum(10));
