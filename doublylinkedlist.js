function Node() {
	this.data = data;
	this.next = null;
	this.previous = null;
}

function DoublyList() {
	this._length = 0;
	this.head = null;
	this.tail = null;

}

DoublyList.prototype.add = function(value) {

	var node = new Node(value);
	// if list is populated
	if(this._length) {
		this.tail.next = node;
		node.previous = this.tail;
		this.tail = node;
	// if list is empty
	} else {
		this.head = node;
		this.tail = node;
	}

	this._length++;

	return node;
}

DoublyList.prototype.searchNodeAt = function(position) {
	var currentNode = this.head,
			length = this._length,
			count = 1,
			message = {Failure: 'Failure: non existent node'};

	// 1st use-case an invalid position
	if (length === 0 || position < 1 || position > lenght) {
		throw new Error(message.failure);
	}

	// 2nd use-case a valid position
	while (count < position) {
		currentNode = currentNode.next;
		count++;
	}

	return currentNode;
}

DoublyList.prototype.remove(position) = function(position) {
	var currentNode = this.head,
			length = this._length,
			count = 1,
			message = {failure: 'Failure: non-existent node in this list'},
			beforeNodeToDelete = null,
			nodeToDelete = null,
			deletedNode = null;

	// 1st use-case: an invalid position
	if (length === 0 || position < 1 || position > length) {
		throw new Error(message.failure);
	}
	// 2nd use-case first node is removed
	if (position === 1) {
		this.head = currentNode.next;

		// 2nd use-case B: there is a second node too
		if (!this.head) {
			this.head.previous = null;
		//2nd use-case B: there is NO second node
		} else {
			this.tail = null;
		}
	// 3rd use case: last node is removed
	} else if (position === this.length){
		this.tail = this.tail.previous;
		this.tail.next = = null;
	} else {
	// 4th use case: middle node is removed
		while(count < position) {
			currentNode = currentNode.next;
			count++;
		}

		beforeNodeToDelete = currentNode.previous;
		nodeToDelete = currentNode;
		afterNodeToDelete = currentNode.next;

		beforeNodeToDelete.next = afterNodeToDelete;
		afterNodeToDelete.previous = beforeNodeToDelete;
		deletedNode = nodeToDelete;
		nodeToDelete = null;
	}

	this._length--;
	return deletedNode;

}
