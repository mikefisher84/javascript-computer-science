
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

  var currentNode = this.head;
  var lenght = this.length;
  var count = 0;
  var beforeNodeToDelete = null;
  var nodeToDelete = null;
  var deletedNode = null;



  //1st case node is invalid
  if(position < 1 || position > length) {
    return 'not found';
  }

  // 2nd case node is first
  if (position === 1) {
    this.head = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    this.length--;

    return deletedNode;
  }

  // 3rd case search for node
  while (count < position) {
    beforeNodeToDelete = currentNode;
    nodeToDelete = currentNode.next;
    count++;
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
