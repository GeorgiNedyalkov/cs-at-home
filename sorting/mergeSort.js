function mergeSort(arr) {
    const mid = arr.length / 2;

    if (arr.length === 1) {
        return arr;
    }

    const left = arr.splice(0, mid);
    return merge(mergeSort(left), mergeSort(arr));
}

function merge(firstArr, secondArr) {
    const arr = [];

    while (firstArr.length && secondArr.length) {
        if (firstArr[0] > secondArr[0]) {
            arr.push(secondArr.shift());
        } else {
            arr.push(firstArr.shift());
        }
    }

    return [...arr, ...firstArr, ...secondArr];
}

const unsortedArray = [7, 2, 5, 4, 1, 6, 0, 3];

console.log(mergeSort(unsortedArray));
