class LinkedList {
  head;
  tail;
  length;

  constructor() {
    this.length = 0;
  }

  prepend(item) {
    const node = { value: item };
    this.length++;

    if (!this.head) {
      this.head = this.tail = node;
      return;
    }

    node.next = this.head;
    this.head = node;
  }

  append(item) {
    const node = { value: item };
    this.length++;

    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }

    this.tail.next = node;
    this.tail = node;
  }

  insertAt(item, idx) {
    if (idx > this.length) {
      throw new RangeError(
        "Cannot insert item at an index bigger than the length of the list."
      );
    }

    if (idx === this.length) {
      this.append(item);
      return;
    } else if (idx === 0) {
      this.prepend(item);
      return;
    }

    const curr = this.getAt(idx);
    const prev = this.getAt(idx - 1);
    const node = { value: item };

    node.next = curr;
    prev.next = node;

    this.length++;
  }

  removeAt(idx) {
    const node = this.getAt(idx);

    if (!node) {
      return undefined;
    }

    this.removeNode(node);
  }

  removeNode(node) {
    this.length--;
    if (this.length === 0) {
      const result = this.head?.value;
      this.head = undefined;
      return result;
    }

    if (node.next) {
      let prev;
      let curr = this.head;

      for (let i = 0; i < this.length; ++i) {
        curr = curr.next;

        if (curr === node) {
          prev = this.getAt(i);
          break;
        }
      }

      prev.next = node.next;
      node.next = undefined;

      return node.value;
    }
  }

  getAt(idx) {
    let curr = this.head;
    for (let i = 0; i < idx; ++i) {
      curr = curr.next;
    }

    return curr;
  }

  get(idx) {
    return this.getAt(idx).value;
  }
}

const linkedList = new LinkedList();

linkedList.length;

const nodeA = "A";
const nodeB = "B";
const nodeC = "C";
const nodeD = "D";

linkedList.prepend(nodeA);
linkedList.prepend(nodeB);
linkedList.prepend(nodeC);
linkedList.append(nodeD);

// console.log(linkedList.get(3));
// console.log(linkedList.getAt(1));
// console.log(linkedList.insertAt("G", 10));
// console.log(linkedList.insertAt("X", 0));
// console.log(linkedList.insertAt("G", 1));
// console.log(linkedList.insertAt("Z", linkedList.length));

console.log(linkedList.removeAt(0));

console.log(linkedList);
