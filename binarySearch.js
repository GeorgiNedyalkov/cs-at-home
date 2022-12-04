const sortedArr = [-1, 0, 3, 5, 9, 12];
const find = 9;

function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;
  let middle;

  while (high - low > 1) {
    let middle = (low + high) / 2;

    if (arr[middle] < target) {
      low = middle + 1;
    } else {
      high = middle;
    }
  }

  if (arr[low] == target) {
    console.log("Found at Index " + low);
  } else if (arr[high] == target) {
    console.log("Found at Index " + high);
  } else {
    console.log("Not found");
  }
}

binarySearch(sortedArr, find);

v = [1, 3, 4, 5, 6];
let To_Find = 1;
binarySearch(v, To_Find);
To_Find = 6;
binarySearch(v, To_Find);
To_Find = 10;
binarySearch(v, To_Find);
