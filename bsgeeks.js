function binarySearch(v, To_Find) {
  let lo = 0;
  let hi = v.length - 1;
  let mid;

  // This below check covers all cases , so need to check
  // for mid=lo-(hi-lo)/2
  while (hi - lo > 1) {
    let mid = (hi + lo) / 2;

    if (v[mid] < To_Find) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  if (v[lo] == To_Find) {
    console.log("Found At Index " + lo);
  } else if (v[hi] == To_Find) {
    console.log("Found At Index " + hi);
  } else {
    console.log("Not Found");
  }
}
v = [1, 3, 4, 5, 6];
let To_Find = 1;
binarySearch(v, To_Find);
To_Find = 6;
binarySearch(v, To_Find);
To_Find = 10;
binarySearch(v, To_Find);
