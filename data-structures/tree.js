import Queue from './queue';

function Node(data) {
  this.data = data;
  this.parent = null;
  this.children = [];
}

function Tree(data) {
  const node = new Node(data);
  this.root = node;
}

Tree.prototype.traverseDF = function (callback) {
  // this is a recurse and immediately invoking function
  (function recurse(currentNode) {
    // step 2
    for (let i = 0, length = currentNode.children.length; i < length; i++) {
      // step 3
      recurse(currentNode.children[i]);
    }
    // step 4
    callback(currentNode);
  // step 1
  }(this.root));
};

Tree.prototype.traverseBF = function (callback) {
  const queue = new Queue();

  queue.enqueue(this.root);

  let currentNode = queue.dequeue();

  while (currentNode) {
    for (let i = 0, length = currentNode.children.length; i < length; i++) {
      queue.enqueue(currentNode.children[i]);
    }

    callback(currentNode);
    currentNode = queue.dequeue();
  }
};

Tree.prototype.contains = function (callback, traversal) {
  traversal.call(this, callback);
};

const tree = new Tree('html');

tree.contains((node) => {
  if (node.data === 'two') {
    console.log(node);
  }
}, tree.traverseBF);

Tree.prototype.add = function (data, toData, traversal) {
  const child = new Node(data);
  let parent = null;
  const callback = function (node) {
    if (node.data === toData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    parent.children.push(child);
    child.parent = parent;
  } else {
    throw new Error('Cannot add to non-existent parent');
  }
};

Tree.prototype.remove = function (data, fromData, traversal) {
  let tree = this;
  let parent = null;
  let childToRemove = null;
  let index;

  const callback = function (node) {
    if (node.data === fromData) {
      parent = node;
    }
  };

  this.contains(callback, traversal);

  if (parent) {
    index = findIndex(parent.children, data);

    if (index === undefined) {
      throw new Error('Node to remove does not exist');
    } else {
      childToRemove = parent.children.splice(index, 1);
    }
  } else {
    throw new Error('parent does not exist');
  }

  return childToRemove;
};
