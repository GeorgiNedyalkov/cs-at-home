const arr = [1, 2, 3, 4, 5, 6, 7, 9];

function recursiveBinarySearch(target, start, end) {
    if (start > end) {
        return "Not Found";
    }

    const middle = Math.floor((start + end) / 2);

    if (arr[middle] === target) {
        return "Target found at index " + middle;
    }

    if (arr[middle] > target) {
        return recursiveBinarySearch(target, start, middle - 1);
    }

    if (arr[middle] < target) {
        return recursiveBinarySearch(target, middle + 1, end);
    }
}

console.log(recursiveBinarySearch(7, 0, arr.length));
