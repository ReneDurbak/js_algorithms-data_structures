const LinkedList = require("./linked_list_w_tail");

class LinkedListQueue {
  constructor() {
    this.list = new LinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue(value) {
    this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}


const queue = new LinkedListQueue()

console.log(queue.isEmpty()) // true
queue.enqueue(10)
queue.enqueue(30)
queue.enqueue(45)
queue.print() // 10 30 45
console.log(`Peek is:`,queue.peek()) // Peek is: 10
queue.dequeue()
queue.print() // 30 45
console.log(`Peek is:`,queue.peek()) // Peek is: 30
console.log(queue.getSize()) // 2
console.log(queue.isEmpty()) // false