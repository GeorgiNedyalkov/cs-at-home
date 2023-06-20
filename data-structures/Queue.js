class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    return this.items.shift();
  }

  peek() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  print() {
    let result = "";
    for (let item of this.items) {
      result += item + "\n";
    }

    return result;
  }
}

module.exports = Queue;
