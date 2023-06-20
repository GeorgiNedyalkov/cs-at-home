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
    for (let item of this.items) {
      console.log(item);
    }
  }
}

const queue = new Queue();

describe("queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("should be initialised with an empty array", () => {
    expect(queue.items.length).toBe(0);
    expect(queue.items).toEqual([]);
    expect(queue.isEmpty()).toBe(true);
  });

  it("should enqueue an item to the queue", () => {
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");

    let head = queue.peek();

    expect(head).toBe("A");
  });

  it("should deque an item from the ", () => {
    queue.enqueue("A");
    queue.enqueue("B");
    queue.enqueue("C");

    let firstOut = queue.dequeue();

    expect(firstOut).toBe("A");
  });
});

// TODO: implement without using Arrays
