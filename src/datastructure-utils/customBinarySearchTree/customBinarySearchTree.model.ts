import { BinarySearchTreeNode } from "./binarySearchTreeNode/binarySearchTreeNode.model";

export interface CustomBinarySearchTree {
    root: BinarySearchTreeNode | undefined,
    add: (this: CustomBinarySearchTree, data: number) => void,
    findMin: (this: CustomBinarySearchTree) => number | undefined,
    findMax: (this: CustomBinarySearchTree) => number | undefined,
    find: (this: CustomBinarySearchTree, data: number) => BinarySearchTreeNode | undefined,
    isPresent: (data: number) => boolean,
    remove: (this: CustomBinarySearchTree, data: number) => void,
    findMinHeight: (this: CustomBinarySearchTree, node: BinarySearchTreeNode | undefined) => number,
    findMaxHeight: (this: CustomBinarySearchTree, node: BinarySearchTreeNode | undefined) => number,
    isBalanced: (this: CustomBinarySearchTree) => boolean,
}