import { createBinarySearchTreeNode } from "./binarySearchTreeNode"

describe('createBinarySearchTreeNode', () => {
    test('creates a BinarySearchTreeNode with the data provided', () => {
        const bstNode = createBinarySearchTreeNode(1)
        expect(bstNode.data).toBe(1);
    })
})