// Steps to implementing quick sort
// 1. implement a partition function
// 2. implement a swap function
// 3. implement a quick sort function

function quickSort(arr, left = 0, right = arr.length - 1) {
    // base case
    if (left >= right) {
        return;
    }

    let pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);

    return arr;
}

/**
 * @param {Array} arr
 * @param {Number} left index part of an array
 * @param {Number} right index part of an array
 */
function partition(arr, left, right) {
    let pivotValue = arr[right];
    let partitionIndex = left;

    for (let i = left; i < right; i++) {
        if (arr[i] < pivotValue) {
            swap(arr, i, partitionIndex);
            partitionIndex++;
        }
    }

    swap(arr, right, partitionIndex);
    return partitionIndex;
}

/**
 * swaps two elements in an array
 * @param {Array} arr an array of unsorted numbers
 * @param {Number} firstIndex the firstIndex of the elements to swap
 * @param {Number} secondIndex the secondIndex of the elements to swap
 * @returns {Array} an array of sorted numbers.
 */
function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    return arr;
}

const unsortedArr = [5, 1, 2, 8, 7, 4, 0, 9];

console.log(quickSort(unsortedArr));
