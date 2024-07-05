class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked_list {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  // O(1)
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  // O(n)
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }

    this.size++;
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Cannot insert into list");
      return;
    }

    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }

      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let listValues = "";
      while (curr) {
        listValues += `${curr.value} `;
        curr = curr.next;
      }
      console.log(listValues);
    }
  }
}

const list = new Linked_list();

console.log(list.isEmpty()); // true
console.log(list.getSize()); // 0
list.print(); // List is empty

// PREPEND & APPEND

// list.prepend(10);
// list.print(); // 10

// list.prepend(20);
// list.append(30);
// list.print(); // 20 10 30


// INSERT

// list.insert(10, 0)
// list.print() // 10
// list.insert(20, 0)
// list.print() // 20 10
// list.insert(30, 1) 
// list.print() // 20 30 10
// list.insert(40, 2)
// list.print()

// console.log(list.getSize());