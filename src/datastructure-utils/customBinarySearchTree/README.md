# Custom Binary Search Tree - README

## Overview

This project implements a **Custom Binary Search Tree** (BST) using TypeScript. A Binary Search Tree is a type of binary tree in which each node has at most two children, and the left child contains a value smaller than its parent node, while the right child contains a value greater than its parent. This property allows for efficient searching, insertion, and deletion operations.

### When is a Binary Search Tree Useful?

- **Efficient Searching**: The primary advantage of a BST is that it allows for searching in O(log n) time on average, which is faster than searching in an unsorted list or array.
- **Sorted Data**: A BST inherently maintains elements in a sorted order. This makes it useful for tasks that require maintaining an ordered set, such as range queries and sorted list traversals.
- **Efficient Insertions and Deletions**: In a balanced BST, inserting and deleting elements also occur in O(log n) time, making it more efficient than array-based implementations when you need frequent updates to the data structure.

## Methods

### 1. `add(data: number)`

Adds a new node with the given `data` to the tree. If the tree is empty, it sets the root node; otherwise, it finds the correct position to insert the new node by recursively traversing the tree.

- **Parameters**: `data` (number) - The data to be added.
- **Returns**: None.

### 2. `findMin()`

Returns the minimum value stored in the tree. It traverses the leftmost path from the root until it reaches a leaf node.

- **Returns**: The minimum value (`number`) or `undefined` if the tree is empty.

### 3. `findMax()`

Returns the maximum value stored in the tree. It traverses the rightmost path from the root until it reaches a leaf node.

- **Returns**: The maximum value (`number`) or `undefined` if the tree is empty.

### 4. `find(data: number)`

Finds and returns the node that contains the given `data`. It searches through the tree by comparing the `data` with the current node's data, and recursively moves either left or right based on the comparison.

- **Parameters**: `data` (number) - The value to search for.
- **Returns**: The node containing the data or `undefined` if not found.

### 5. `isPresent(data: number)`

Checks whether a node with the given `data` is present in the tree.

- **Parameters**: `data` (number) - The value to check for.
- **Returns**: `true` if the data is present in the tree, `false` otherwise.

### 6. `remove(data: number)`

Removes the node with the given `data` from the tree. If the node has two children, it finds the smallest node in the right subtree (inorder successor), copies its data to the node to be deleted, and then removes that smallest node.

- **Parameters**: `data` (number) - The value to remove.
- **Returns**: None.

### 7. `findMinHeight(node: BinarySearchTreeNode | undefined)`

Calculates and returns the minimum height of the tree, which is the shortest path from the root to any leaf node. This function uses recursion to calculate the height of the left and right subtrees.

- **Parameters**: `node` (BinarySearchTreeNode | undefined) - The starting node (usually the root).
- **Returns**: The minimum height (`number`).

### 8. `findMaxHeight(node: BinarySearchTreeNode | undefined)`

Calculates and returns the maximum height of the tree, which is the longest path from the root to any leaf node. It is also computed using recursion.

- **Parameters**: `node` (BinarySearchTreeNode | undefined) - The starting node (usually the root).
- **Returns**: The maximum height (`number`).

### 9. `isBalanced()`

Determines if the tree is balanced. A binary tree is considered balanced if the difference between the heights of the left and right subtrees of every node is no more than 1. This method checks if the tree is balanced by comparing the minimum and maximum heights.

- **Returns**: `true` if the tree is balanced, `false` otherwise.

### 10. `removeNode(node: BinarySearchTreeNode | undefined, data: number)`

This is a helper function used internally by the `remove` method to recursively remove a node from the tree. It handles the three cases of node removal:

1. The node has no children (leaf node).
2. The node has one child.
3. The node has two children (requires finding the inorder successor).

- **Parameters**:
  - `node` (BinarySearchTreeNode | undefined) - The current node being processed.
  - `data` (number) - The value of the node to remove.
- **Returns**: The updated node (after removal) or `undefined` if the node was not found.

### 11. `searchTree(node: BinarySearchTreeNode, data: number)`

This is a helper function used by the `add` method to find the correct spot in the tree to insert a new node. It searches recursively for the appropriate position based on the value of the `data`.

- **Parameters**:
  - `node` (BinarySearchTreeNode) - The current node being processed.
  - `data` (number) - The value to insert.
- **Returns**: The updated node after insertion.

## Data Structure

The binary tree is represented using the `BinarySearchTreeNode` model, which is structured as follows:

```typescript
export interface BinarySearchTreeNode {
  data: number;
  left?: BinarySearchTreeNode;
  right?: BinarySearchTreeNode;
}
```

- `data`: Stores the value of the node.
- `left`: Points to the left child node.
- `right`: Points to the right child node.

The `CustomBinarySearchTree` structure contains:

```typescript
export interface CustomBinarySearchTree {
  root?: BinarySearchTreeNode;
  add: (data: number) => void;
  findMin: () => number | undefined;
  findMax: () => number | undefined;
  find: (data: number) => BinarySearchTreeNode | undefined;
  isPresent: (data: number) => boolean;
  remove: (data: number) => void;
  findMinHeight: (node: BinarySearchTreeNode | undefined) => number;
  findMaxHeight: (node: BinarySearchTreeNode | undefined) => number;
  isBalanced: () => boolean;
}
```

- `root`: The root of the binary search tree.
- `add()`: Method to add a node to the tree.
- `findMin()`: Method to find the minimum value in the tree.
- `findMax()`: Method to find the maximum value in the tree.
- `find()`: Method to find a node by its data value.
- `isPresent()`: Method to check if a node with a certain value exists in the tree.
- `remove()`: Method to remove a node from the tree.
- `findMinHeight()`: Method to calculate the minimum height of the tree.
- `findMaxHeight()`: Method to calculate the maximum height of the tree.
- `isBalanced()`: Method to check if the tree is balanced.

## Example Usage

```typescript
const bst = createCustomBinarySearchTree();

bst.add(10);
bst.add(5);
bst.add(15);
bst.add(3);
bst.add(7);

console.log(bst.findMin()); // Output: 3
console.log(bst.findMax()); // Output: 15
console.log(bst.isBalanced()); // Output: true

bst.remove(5);
console.log(bst.findMin()); // Output: 3
```

## Conclusion

This implementation of a binary search tree offers a robust set of functionalities for adding, searching, and removing nodes, as well as determining tree properties such as balance and height. It provides an efficient and structured way to store and manipulate data in sorted order.
