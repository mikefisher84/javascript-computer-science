
/**
 * Node - Node constructor
 * @param  {any} data data held in the node
 */
function Node(data) {
  this.data = data;
  this.next = null;
}

/**
 * SinglyList - Single LinkedList constructor function
 */
function SinglyList() {
  this.length = 0;
  this.head = null;
}

/**
 * SinglyList.prototype.append - adds new item to end of the list
 * @param  {Node} element the element to be added
 */
SinglyList.prototype.append = function append(element) {
  const node = new Node(element);
  let currentNode = this.head;

  if (!this.head) {
    this.head = node;
    this.length++;
  } else {
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.length++;
  }
};

/**
 * SinglyList.prototype.insert - inserts new node at specificied position in list
 *
 * @param  {Node} position position to be inserted at
 * @param  {Node} element  Node to be inserted
 */
SinglyList.prototype.insert = function insert(position, element) {
  if (position >= 0 && position <= this.length) {
    const node = new Node(element);
    let current = this.head;
    let previous;
    let index = 0;

    if (position === 0) {
      node.next = current;
      this.head = node;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }
      node.next = current;
      previous.next = node;
    }
    this.length++;

    return true;
  }
  return false;
};

/**
 * SinglyList.prototype.removeAt - description
 *
 * @param  {type} position description
 * @return {type}          description
 */
SinglyList.prototype.removeAt = function removeAt(position) {
  if (position > -1 && position < this.length) {
    let current = this.head;
    let previous;
    let index = 0;

    // remove first item
    if (position === 0) {
      this.head = current.next;
    } else {
      while (index < position) {
        previous = current;
        current = current.next;
        index++;
      }

      previous.next = current.next;
      this.length--;

      return current.element;
    }
  }
  return null;
};

SinglyList.prototype.remove = function remove() {

};

/**
 * SinglyList.prototype.indexOf - Searches LinkedList for element and returns the index of it
 *
 * @param  {String} element the element to return for
 * @return {Number}         returns the index of the element or -1 if not found
 */
SinglyList.prototype.indexOf = function indexOf(element) {
  let current = this.head;
  let index = -1;

  while (current) {
    if (element === current.data) {
      return index;
    }
    index++;
    current = current.next;
  }
  return -1;
};

SinglyList.prototype.isEmpty = function isEmpty() {

};

SinglyList.prototype.size = function size() {

};

/**
 * SinglyList.prototype.oString - stringifies the LinkedList object
 *
 * @return {String}  string of LinkedList object
 */
SinglyList.prototype.toString = function toString() {
  let current = this.head;
  let string = '';

  while (current) {
    string += current.data + (current.next ? 'n' : '');
    current = current.next;
  }
  return string;
};

SinglyList.prototype.print = function isEmpty() {

};
