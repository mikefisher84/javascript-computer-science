class Node {
	constructor(val, next) {
		this.val = val;
		this.next = next;
	}
}

var first = new Node(3);

var middle = new Node(5);

first.next = middle;

var last = new Node(7);

middle.next = last;

function printNode(node) {

	while (node != null) {
		console.log(node.val);
		node = node.next;
	}
}

printNode(first);
