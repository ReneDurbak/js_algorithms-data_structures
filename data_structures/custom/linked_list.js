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

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Cannot delete from list");
      return null;
    }

    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev;
      prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }

    this.size--;
    return removedNode.value;
  }

  removeValue(value) {
    if (this.isEmpty()) {
      return null;
    }

    if (this.head.value === value) {
      this.head = this.head.next;
      this.size--;
      return value;
    } else {
      let prev = this.head;

      while (prev.next && prev.next.value !== value) {
        prev = prev.next;
      }
      if (prev.next) {
        let removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
        return value;
      }

      return null;
    }
  }

  search(value) {
    if (this.isEmpty()) {
      console.log("Cannot search for a value, list is empty");
      return -1;
    }
    let i = 0;
    let curr = this.head;

    while (curr) {
      if (curr.value === value) {
        console.log(`Item found at index ${i}`);
        return i;
      }

      curr = curr.next;
      i++;
    }
    console.log(`Item not found`);
    return -1;
  }

  reverse() {
    if (this.isEmpty()) {
      console.log("Cannot reverse an empty list");
      return -1;
    } else {
      let curr = this.head;
      let prev = null;
      while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
      }

      this.head = prev;
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

//---------------------------------------
// PREPEND & APPEND

// list.prepend(10);
// list.print(); // 10

// list.prepend(20);
// list.append(30);
// list.print(); // 20 10 30

//---------------------------
// INSERT

list.insert(10, 0);
list.print(); // 10
list.insert(20, 0);
list.print(); // 20 10
list.insert(30, 1);
list.print(); // 20 30 10
list.insert(40, 2);
list.print(); // 20 30 40 10

// console.log(list.getSize());

//---------------------------------
// REVERSE

list.reverse();
list.print();

//-----------------------------------
// DELETE WITH INDEX

// console.log(`Deleted value: ${list.removeFrom(1)}`); // Deleted value: 30
// list.print(); // 20 40 10
// console.log(`Deleted value: ${list.removeFrom(0)}`); // Deleted value: 20
// list.print(); // 40 10
// console.log(list.getSize()); // 2

//-----------------------------------
// DELETE WITH VALUE

// console.log(`Deleted value: ${list.removeValue(20)}`); // Deleted value: 20
// list.print(); // 30 40 10
// console.log(`Deleted value: ${list.removeValue(40)}`); // Deleted value: 40
// list.print(); // 30 10
// console.log(`Deleted value: ${list.removeValue(140)}`); // Deleted value: null
// list.print(); // 30 10

//-----------------------------
// SEARCH

// const testList = new Linked_list();
// list.search(400); // Item not found
// list.search(10); // Item found at index 3
// testList.search(20); // Cannot search for a value, list is empty
