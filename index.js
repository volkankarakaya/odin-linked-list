class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(data) {
    let node = new Node(data);
    let current;
    //add data end of the list
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  prepend(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  head() {
    let first = this.head;
    return first;
  }

  at(index) {
    let count = 0;
    let current = this.head;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  pop() {
    if (this.head === null) return;

    let current = this.head;
    let previous;

    while (current.next) {
      previous = current;
      current = current.next;
    }
    previous.next = null;
    this.size--;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data == value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (current.data === value) {
        return count;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  toString() {
    let string = "";
    let current = this.head;

    while (current !== null) {
      string = string + current.data + " -> ";
      current = current.next;
    }

    string = string + "null";
    return string;
  }

  insertAt(value, index) {
    let previous;
    let current = this.head;
    let count = 0;

    if (index === 0) {
      this.head = new Node(value, current);
      return;
    }

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }

    const node = new Node(value);

    previous.next = node;
    node.next = current;
  }

  removeAt(index) {
    let previous;
    let current = this.head;
    let count = 0;

    if (index > this.size || index < 0) {
      return "index is out of range";
    }

    if (index === 0) {
      this.head = current.next;
      return;
    }

    while (count < index) {
      count++;
      previous = current;
      current = current.next;
    }
    previous.next = current.next;
  }
}

const ll = new LinkedList();
ll.append(100);
ll.append(200);
ll.append(300);
ll.append(400);

// console.log(ll);
// console.log(ll.size)
ll.insertAt(600, 0);
ll.removeAt(4);

console.log(ll.toString());
// 600 -> 100 -> 200 -> 300 -> null