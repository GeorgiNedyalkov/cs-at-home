// class Stack {
//   constructor() {
//     this.top = -1;
//     this.items = {};
//   }

//   get peek() {
//     return this.items[this.top];
//   }

//   push(value) {
//     this.top++;
//     this.items[this.top] = value;
//   }

//   pop() {
//     let lastItem = this.items[this.top];
//     delete this.items[this.top];

//     this.top--;

//     return lastItem;
//   }
// }

// module.exports = Stack;

class Stack {
  constructor() {
    this.length = 0;
    this.head = undefined;
  }

  push(item) {
    const node = { value: item };

    this.length++;
    if (!this.head) {
      this.head = node;
      return;
    }

    node.prev = this.head;
    this.head = node;
  }

  pop() {
    this.length = Math.max(0, this.length - 1);
    if (this.length === 0) {
      const head = this.head;
      this.head = undefined;
      return head?.value;
    }

    const head = this.head;
    this.head = head.prev;

    return head.value;
  }

  peek() {
    return this.head?.value;
  }
}
