# How to implement a Singly Linked List?

L = linkedList

Operations:

- append
- prepend
- insertAt
- remove
- removeAt
- get
- getAt

### InsertAt

```javascript
function insertAt(item, idx)
```

1. Perform initial checks:

- if the index is bigger than the length throw a RangeError.
- if the index is 0 prepend the item and return.
- else if the index is equal to L.length append the item and return.

2. Prepare the data:

- get the current node at the specified index.
- get the previous node before the current node.
- create a new node with the item.

3. Re-arrange Pointers:

- point the new node's next to the current node.
- point the previous node to the new node.

### Remove Node

```javascript
function removeNode(node) {}
```

- decrease the length of the list
- if the length is 0 get the value of the head.

  - set head and tail to undefined.
  - return the head value

- if the node is the head set the the head to be the node's next.
- if the node is the tail set the tail to the previous node.

- if the node has a next node set the previous node's next to the next node.
- set the node's next to undefined
- return the node value
