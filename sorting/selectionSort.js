function selectionSort(arr) {
    // iterate through all elements
    for (let i = 0; i < arr.length; i++) {
        // set the min index to equal each iteration
        let minIndex = i;

        // in each iteration iterate through all other elements until the end of the array
        for (let j = i + 1; j < arr.length; j++) {
            // if the current number is smaller than the minimum number set the minIndex to the currentIndex
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // in each iteration if the minIdex is not equal to i (the current iteration) swap the elements with the minIndex and the current index
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

const unsortedArr = [5, 2, 1, 4, 9, 7, 8, 3];

console.log(selectionSort(unsortedArr));
