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

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});
  });

  it("can push to the top", () => {
    stack.push("🥑");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🥑");
  });

  it("can pop off", () => {
    stack.push("🍏");
    stack.push("🍎");

    let result = stack.pop();

    expect(stack.top).toBe(0);
    expect(result).toBe("🍎");
    expect(stack.peek).toEqual("🍏");
  });
});
