function bubbleSort(arr) {
    // iterate through the elements in the array
    for (let i = 0; i < arr.length; i++) {
        // iterate through the elements in the array minus the current index
        for (let j = 0; j < arr.length - 1 - i; j++) {
            // if the left number is bigger than the right number swap the numbers
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // return the arr
    return arr;
}

const unsortedArr = [23, 0, 12, 2902, 1, 8, -2];

const sortedArr = bubbleSort(unsortedArr);

console.log(sortedArr);
