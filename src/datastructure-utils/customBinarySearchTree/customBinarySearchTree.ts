import { createBinarySearchTreeNode } from "./binarySearchTreeNode/binarySearchTreeNode";
import { BinarySearchTreeNode } from "./binarySearchTreeNode/binarySearchTreeNode.model";
import { CustomBinarySearchTree } from "./customBinarySearchTree.model";

const removeNode = (node: BinarySearchTreeNode | undefined, data: number) => {
    if (!node) {
        return;
    }

    if (data === node.data) {
        if (!node.left && !node.right) {
            return;
        }

        if (!node.left) {
            return node.right;
        }

        if (!node.right) {
            return node.left;
        }

        let tempNode = node.right;
        while (tempNode.left) {
            tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data)
        return node;
    } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
    } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
    }
}

const searchTree = (node: BinarySearchTreeNode, data: number): BinarySearchTreeNode => {
    if (data < node.data) {
        if (!node.left) {
            node.left = createBinarySearchTreeNode(data);
            return node;
        } else if (node.left) {
            searchTree(node.left, data);
        }
    } else if (data > node.data) {
        if (!node.right) {
            node.right = createBinarySearchTreeNode(data);
            return node;
        } else if (node.right) {
            searchTree(node.right, data);
        }
    }

    return node
}

const add = function(this: CustomBinarySearchTree, data: number) {
    const node = this.root
    if (!node) {
        this.root = createBinarySearchTreeNode(data);
    } else {
        this.root = searchTree(node, data);
    }
}

const findMin = function(this: CustomBinarySearchTree) {
    if (!this.root) return;
    let currentNode = this.root
    while(currentNode?.left) {
        currentNode = currentNode.left
    }
    return currentNode.data
}


const findMax = function(this: CustomBinarySearchTree) {
    if (!this.root) return;
    let currentNode = this.root
    while(currentNode?.right) {
        currentNode = currentNode.right
    }
    return currentNode.data
}

const find = function(this: CustomBinarySearchTree, data: number) {
    let currentNode = this.root

    while (currentNode?.data !== data) {
        if (currentNode?.data) {
            if (data < currentNode.data) {
                currentNode = currentNode.left
            } else {
                currentNode = currentNode.right
            }
        } else {
            break;
        }
    }

    return currentNode
}

const isPresent = function(this: CustomBinarySearchTree, data: number) {
    let currentNode = this.root
    while (currentNode) {
        if (data === currentNode.data) {
            return true
        }
        if (data < currentNode.data) {
            currentNode = currentNode.left
        } else {
            currentNode = currentNode.right
        }
    }
    return false;
}

const remove = function(this: CustomBinarySearchTree, data: number) {
    this.root = removeNode(this.root, data);
}

const findMinHeight = function(this: CustomBinarySearchTree, node: BinarySearchTreeNode | undefined) {
    if (!node) {
        return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
        return left + 1;
    } else {
        return right + 1;
    }
}

const findMaxHeight = function(this: CustomBinarySearchTree, node: BinarySearchTreeNode | undefined) {
    if (!node) {
        return -1;
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
        return left + 1;
    } else {
        return right + 1;
    }
}

const isBalanced = function(this: CustomBinarySearchTree) {
    return this.findMinHeight(this.root) >= this.findMaxHeight(this.root) - 1;
}

export const createCustomBinarySearchTree = (): CustomBinarySearchTree => {
    return {
        root: undefined,
        add,
        findMin,
        findMax,
        find, 
        isPresent,
        remove,
        findMinHeight,
        findMaxHeight,
        isBalanced
    }
}