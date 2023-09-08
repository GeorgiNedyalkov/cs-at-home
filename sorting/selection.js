function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minimumIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minimumIndex] > arr[j]) {
                minimumIndex = j;
            }
        }

        if (minimumIndex != i) {
            swap(arr, minimumIndex, i);
        }
    }
    return arr;
}

const unsortedArr = [9, 2, 7, 1, 3, 6, 8];

console.log(selectionSort(unsortedArr));

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}
