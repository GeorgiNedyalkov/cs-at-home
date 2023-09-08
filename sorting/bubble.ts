function bubbleSortTS(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

function swap(arr: number[], i: number, j: number): number[] {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    return arr;
}

let unsorted = [9, 1, 4, 5, 0, 2, 12];
let sorted = bubbleSortTS(unsorted);

console.log(sorted);
