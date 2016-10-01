
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
SinglyList.prototype.append = function(element) {
  var node = new Node(element);
  var currentNode = this.head;

	if(!this.head) {
    this.head = node;
    this.length++;

  } else {
	  while(currentNode.next) {
	    currentNode = currentNode.next;
	  }
	  currentNode.next = node;
	  this.length++;

	}
}


/**
 * SinglyList.prototype.insert - inserts new node at specificied position in list
 *
 * @param  {Node} position position to be inserted at
 * @param  {Node} element  Node to be inserted
 * @return {Node}          returns the inserted node
 */
SinglyList.prototype.insert = function (position, element) {

}


/**
 * SinglyList.prototype.removeAt - description
 *
 * @param  {type} position description
 * @return {type}          description
 */
SinglyList.prototype.removeAt = function(position) {

	if(position > -1 && position < length) {
		var current = this.head;
		var previous;
		var index = 0;

		// remove first item
		if (position === 0) {
			this.head = current.next;
		} else {

			while (index < position) {
				previous = current;
				current = curent.next;
				index++;
			}

			previous.next = current.next;
			this.length--;

			return current.element;
		}
	} else {
		return null;
	}
}




SinglyList.prototype.remove = function () {

};

SinglyList.prototype.indexOf = function (element) {

};

SinglyList.prototype.isEmpty = function () {

};

SinglyList.prototype.size = function () {

};

SinglyList.prototype.toString = function () {

};

SinglyList.prototype.print = function () {

};
