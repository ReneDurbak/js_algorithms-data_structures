class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Linked_list {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
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

  prepend(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }

    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.size++
  }

  removeFromFront(index) {}

  removeFromEnd(value) {}
}

const list = new Linked_list();

//---------------------------------------
// PREPEND & APPEND

list.prepend(10);
list.print(); // 10

list.prepend(20);
list.append(30);
list.print(); // 20 10 30

//---------------------------
// INSERT

// list.insert(10, 0);
// list.print(); // 10
// list.insert(20, 0);
// list.print(); // 20 10
// list.insert(30, 1);
// list.print(); // 20 30 10
// list.insert(40, 2);
// list.print(); // 20 30 40 10

// console.log(list.getSize());
