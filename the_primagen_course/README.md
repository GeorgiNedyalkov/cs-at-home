# Algorithms and Data Structures

## Complexity and Big O notation

1. What is Big O?

Big O is a way to categorize your algorithms time or memory requirements based on input.

Big O describes the upper bound of the algorithm.

Example:

O of n - mean the algo grows linearly based on intput?

2. Why do we use it?

It helps make decisions on which data structures and algorithms to use.

3. Important concepts

- Growth is with respect to the input

Simple tricks is to look for loops.

Always drop constants.

## Sorting Algorithms

## Map

Consistent Hash. K(o) always returns K(o).

K => V

## Sources:

_Introduction to Algorithms_

_For Programmers Who Don't Know How To DataStructure and Would like to do other things well too_

### Linked Lists

Linked Lists are used to store values in containing nodes that we use to create pointers
from one node to the next or vice versa.

Node based data structure.

- Singly Linked lists
- Doubly Linked lists

Each node points to the next node.

The first element is called the head.

#### Linked List Operations

- prepend / append: constant time
- insertion in the middle: two operations (traversal and insertion). Costly if traversal is costly.
- deletion from ends: constant time
- deletion from middle: constant time
- get head / tail: constnat time
- get in general: traversal

If we want to get a value, we have to walk the list. There is no indexing.

When we have a defined pointer to head or tail, we can easily get them in a constant time.

Deletion from the front and the end:

- Constant time

Deletion from middle:

- You have to traverse: if the traversal is costly it can be costly.
- You have to delete
