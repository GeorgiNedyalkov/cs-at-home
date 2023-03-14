const unsortedList = [2, 4, 5, 8, 1, 6, 7, 9];

function selectionSort(list) {
  for (let i = 0; i < list.length - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < list.length; j++) {
      if (list[minIndex] > list[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      swap(i, minIndex, list);
    }
  }

  return list;
}

function swap(a, b, arr) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;

  return arr;
}

console.log(selectionSort(unsortedList));
