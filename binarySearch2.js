function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length;

  do {
    const middle = Math.floor(low + (high - low) / 2);
    const value = arr[middle];

    if (value === target) {
      return true;
    } else if (value > target) {
      high = middle;
    } else {
      low = middle + 1;
    }
  } while (low < high);
}
