function selectionSort(arr: number[]): number[] {
    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }

        if (minIndex != i) {
            swap(arr, minIndex, i);
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

const nums = [9, 0, 1, 5, 2, 8, 4];
console.log(selectionSort(nums));
