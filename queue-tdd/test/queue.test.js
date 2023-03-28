class Queue {
  constructor() {
    this.front = 0;
    this.back = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.back] = element;
    this.back += 1;
  }

  dequeue() {
    // check if the queue is empty
    if (this.isEmpty) {
      return null;
    }

    // save the value of the first item in the queue
    const firstItem = this.items[this.front];
    // delete the first items in the queue
    delete this.items[this.front];
    // modify the front index
    this.front++;

    return firstItem;
  }

  get peek() {
    return this.items[this.front];
  }

  get size() {
    return this.back;
  }

  get isEmpty() {
    return this.front === this.back;
  }

  print() {
    console.log(this);
  }
}

describe("My Queue", () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it("is created empty", () => {
    expect(queue.front).toBe(0);
    expect(queue.items).toEqual({});
    expect(queue.isEmpty).toBe(true);
    expect(queue.size).toBe(0);
  });

  // enqueue
  it("adds and element at the back (tail)", () => {
    queue.enqueue("Element One");
    expect(queue.back).toBe(1);
    expect(queue.peek).toBe("Element One");
    expect(queue.isEmpty).toBe(false);
    expect(queue.size).toBe(1);
    queue.print();
    queue.enqueue("Element Two");
    expect(queue.back).toBe(2);
    expect(queue.peek).toBe("Element One");
    expect(queue.isEmpty).toBe(false);
    expect(queue.size).toBe(2);
    queue.print();
  });

  // dequeue
  it("removes an element from the front", () => {
    queue.enqueue("Element One");
    queue.enqueue("Element Two");
    let lastItem = queue.dequeue();

    expect(queue.back).toBe(2);
    expect(lastItem).toBe("Element One");
    lastItem = queue.dequeue();
    expect(lastItem).toBe("Element Two");
    queue.print();
  });
});
