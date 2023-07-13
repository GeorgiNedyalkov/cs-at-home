class DoublyLinkedList {
  head;
  length;

  constructor() {
    this.length = 0;
  }

  prepend(item) {
    const node = { value: item };
    this.length++;
    if (!this.head) {
      this.head = node;
    }

    node.next = this.head;
    this.head.prev = node;
    this.head = node;
  }
}
