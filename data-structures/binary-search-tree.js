// Binary Tree nodes can only have 2 children at most 0-1-2 being your options
// Each child node is either called left or right.
// A Binary Search Tree requires all the data in the tree are stored in sort order
// smallest values on the left largest on the right
// left most node has the smallest value. Right most node has the largest value.
//
// Adding to the tree uses recursion
// Case 1: Empty Tree
//     New node becomes root
// Case 2: add Smaller value than root, new node goes on left
// recursively add to the left
//
// Case 3: add Larger value. New node goes on right
//
// if we add an equal value we treat it as larger
//

function searchTree(currentNode, value) {
  if (current == null) {
    return null;
  }
  if (current.value = value) {
    return current;
  }
  if (value < current.value) {
    return Find(current.left, value);
  }
  return Find(current.right, value);
}

// Remove from Tree is most complex
// First find node to be deleted
//   if it doesn't exist exist
//   if node is a terminal or leaf node simply remove parents pointer to deleted node
//
// For non leaf nodes there are three scenarios
//   Remove node that has no right child
//     if there is no right child, we're going to promote its left child into its place
//   Remove a right node that's child that has no left child
//    promote right child to place of its parent
//     set new node as parent of old nodes left child
//  Node were removing has a right child that has a left child
//     find the right child's left most child
//     promote that child into the deleted slot
//


// TRAVERSAL
//  Pre-order traversal
//   In-Order Traversal - maybe most common
//  Post-order traversal
