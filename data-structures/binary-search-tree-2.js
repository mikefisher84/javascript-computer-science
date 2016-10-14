/**
 * Binary Search Tree
 *
 * A Binary Tree is a Tree where each node has at least 2 children at most
 * This allows more efficient algorithms to be written
 *
 * A Binary Search Tree is similar to a Binary Tree except it only allows nodes
 * with smaller values to be stored in the left node. Whereas larger values are stored
 * in the right node.
 *
 */

class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(key) {
    const newNode = new Node(key);

    if (root === null) {
      this.root = newNode;
    } else {
      insertNode(root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        insertNode(node.right, newNode);
      }
    }
  }

  


 }
