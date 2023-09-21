function bubbleSort(arr) {
    // iterate through all elements
    for (let i = 0; i < arr.length; i++) {
        // iterate through two elements decreasing the lengh by 1 and the number of i iterations on every iteration
        for (let j = 0; j < arr.length - i - 1; j++) {
            // if the first element is greater than the second element, swap the elements.
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return the array
    return arr;
}
