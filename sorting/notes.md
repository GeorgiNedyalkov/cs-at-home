# Sorting Algorithms

-   Bubble
-   Insertion
-   Selection
-   Merge
-   Heap
-   Quick

## Bubble Sort

Iterate through all elements in an usorted array. Compare two elements and swap them if the left one is bigger than the right. The highest number will bubble to the end of the array.

It works by comparing adjacent elements and swaps them if they are in the wrong order.

```javascript
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}
```

Trick: nest two loops. In the second loop the length should exclude 1 and the current iteration i.

#### Analysis

Bubble sort has a quadratic time complexity O($n^2$), which is slower than more efficient algorithms with time complexity of O(n log n).

Bubble sort is **adaptive**. This means that when elements in the array are mostly sorted it may outperform other sorting algorithms like quicksort.

Although bubble sort is one of the simplest sorting algorithms to understand and implement, its O(n2) complexity means that its efficiency decreases dramatically on lists of more than a small number of elements. Even among simple O(n2) sorting algorithms, algorithms like insertion sort are usually considerably more efficient.

Bubble sort is asymptotically equivalent in running time to insertion sort in the worst case, but the two algorithms differ greatly in the number of swaps necessary. Experimental results such as those of Astrachan have also shown that insertion sort performs considerably better even on random lists.

Bubble sort also interacts poorly with modern CPU hardware. It produces at **least twice as many writes as insertion sort, twice as many cache misses, and asymptotically more branch mispredictions.** Experiments by Astrachan sorting strings in Java show bubble sort to be roughly one-fifth as fast as an insertion sort and 70% as fast as a selection sort.[6]

Bubble sort is a **stable** sort algorithm, like insertion sort.

Nested for loop
Worst performance: O($n^2$) or quadratic time
Average performance: O($n^2$)
Best performance: O(n)

Wost-case space

## Selection Sort

Selection sort is an **in-place comparison** sorting algorithm.

The algorithm divides the input list into two parts: sorted sublist and unsorted sublist. At the beginning, or the right of the list, are the sorted elements,
and in the left side are the unsorted elements. Each iteration we find the smallest number and swap it with the leftmost element of the unsorted sublist.

### Analysis

Worst-case performance: O($n^2$) or quadratic time. It is O($n^2$) comparisons and O(n) swaps.
Average-case performance: O($n^2$) or quadratic time. It is O($n^2$) comparisons and O(n) swaps.
Best-case performance: O($n^2$), O(1) swap.

Worst-case space complexity: O(1) auxilary.

The algorithm is inefficient in large lists and performs worse than isertion sort.
When auxilary memory is limited the algorithm has performance advantages and its simpler.

## Resources

-   [Toptal Sorting](https://www.toptal.com/developers/sorting-algorithms)
-   [Fireship Sorting Algorithms Video](https://www.youtube.com/watch?v=RfXt_qHDEPw&t=337s)
-   [Fireship Sorting Algorithms Github](https://github.com/fireship-io/sorting-algorithms/blob/main/src/quick.js)
