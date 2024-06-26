class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  // Add elements to top of stack and return position of added element
  push(element) {
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  // Return and remove top element in stack
  // Return undefined if stack is empty
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.items[this.count - 1];
    this.count--;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }

  // Check top element in stack
  peek() {
    console.log(`Top element is ${this.items[this.count - 1]}`);
    return this.items[this.count - 1];
  }

  // Check if stack is empty
  isEmpty() {
    console.log(this.count == 0 ? "Stack is empty" : "Stack is NOT empty");
    return this.count == 0;
  }

  // Check size of stack
  size() {
    console.log(
      `${this.count} ${this.count == 1 ? "element" : "elements"} in stack`
    );
    return this.count;
  }

  // Print elements in stack
  print() {
    console.log(`All elements: ${this.items.join(",")}`);
  }

  // Clear stack
  clear() {
    this.items = [];
    this.count = 0;
    console.log("Stack cleared");
    return this.items;
  }
}

const stack = new Stack();

stack.isEmpty();

stack.push(100);
stack.push(200);
stack.push(300);

stack.peek();

stack.pop();
stack.pop();

stack.size();

stack.print();

stack.isEmpty();

stack.clear();
