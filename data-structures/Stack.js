class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(value) {
    this.top++;
    this.items[this.top] = value;
  }

  pop() {
    let lastItem = this.items[this.top];
    delete this.items[this.top];

    this.top--;

    return lastItem;
  }
}

module.exports = Stack;
