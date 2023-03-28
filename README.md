# Algorithms

The purpose of this repo is to learn about algorithms and data structures from home.

## Binary Search

### What is Binary Search?

Binary Search Aloright is a "_Divide & Conquer_" algorithmic paradigm.

### Recursive implementation

_Problem_: Given an array of integers `nums` which is sorted in ascending order,
and an integer `target`, write a function to search `target` in `nums`. If `target` exists, then return its index. Otherwize, return -1.

Spec: You must write an algorithm in `0(log n)` runtime complexity.

_Example 1:_

```
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
```

### Selection Sort

The time complexity of selection sort is O(n^2) or "Big O squared". Since this algorithm has a loop nested inside another loop. It iterates through each element n times

The best-case scenario for this algorithm is O(n).
The worst-case scenario for this algorith is (n^2 - n) / 2 comparisons and swaps
To calculate the number of comparisons and swaps that the selection sort algorithm will perform, we need to consider the number of iterations of the inner and outer loops.

For comparisons, each iteration of the outer loop selects a single element, and each iteration of the inner loop compares it with the remaining unsorted elements to find the smallest element. Therefore, the total number of comparisons is the sum of the first n-1 integers, which is (n-1) + (n-2) + ... + 1, or (n^2 - n) / 2. This is the worst-case scenario when the input array is in reverse order.

For swaps, each swap exchanges two elements, and the number of swaps depends on the number of times the smallest element is found in the inner loop. If the smallest element is already in its correct position, no swap is needed. Therefore, the total number of swaps is at most n-1. This happens when the input array is in reverse order and the algorithm performs a swap for each comparison.

Note that the number of comparisons and swaps may vary depending on the input array, but the worst-case scenario gives an upper bound on the number of operations that the algorithm will perform.

## Data Structures

- Lists:
  - Arrays
  - Linked Lists (Singly Linked Lists, Doubly Linked Lists)
- Stack
- Queue
- Hash tables
- Trees:
  - Binary Tree
  - Segment Tree
- Heap
- Graph

### Queue

Task: Implement a _Queue_ using TDD.
