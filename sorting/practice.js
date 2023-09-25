function bubbleSort(arr) {
    // iterate through all elements
    for (let i = 0; i < arr.length; i++) {
        // iterate through two elements decreasing the lengh by 1 and the number of i iterations on every iteration
        for (let j = 0; j < arr.length - i - 1; j++) {
            // if the first element is greater than the second element, swap the elements.
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
    // return the array
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            swap(arr, minIndex, i);
        }
    }

    return arr;
}

function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j = i;

        while (j > 0 && arr[j - 1] > arr[j]) {
            swap(arr, j - 1, j);
            j--;
        }
    }

    return arr;
}

const unsortedArr = [9, 4, 8, 7, 2, 0, 1, 5];

const sortedArr = insertionSort(unsortedArr);

console.log(sortedArr);

function swap(arr, firstIndex, secondIndex) {
    let temp = arr[firstIndex];
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;

    return arr;
}
