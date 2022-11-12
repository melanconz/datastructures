import { createCustomBinarySearchTree } from "./customBinarySearchTree"

describe('createCustomBinarySearchTree', () => {
    test('creates a CustomBinarySearchTree', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree).toBeDefined()
    })
})

describe('add', () => {
    test('creates a new root node if it does not yet exist', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.root?.data).toBe(1)
    })

    test('adds a new node to left if the data provided is less than the node\'s data and the left value is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.root?.data).toBe(2)
        expect(customBinarySearchTree.root?.left?.data).toBe(1)
    })

    test('recursively adds a new node to left if the data provided is less than the node\'s data and the left value is not null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.root?.data).toBe(3)
        expect(customBinarySearchTree.root?.left?.data).toBe(2)
        expect(customBinarySearchTree.root?.left?.left?.data).toBe(1)
    })

    test('adds a new node to right if the data provided is more than the node\'s data and the right value is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(1)
        customBinarySearchTree.add(2)
        expect(customBinarySearchTree.root?.data).toBe(1)
        expect(customBinarySearchTree.root?.right?.data).toBe(2)
    })

    test('recursively adds a new node to right if the data provided is more than the node\'s data and the right value is not null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(1)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        expect(customBinarySearchTree.root?.data).toBe(1)
        expect(customBinarySearchTree.root?.right?.data).toBe(2)
        expect(customBinarySearchTree.root?.right?.right?.data).toBe(3)
    })
})

describe('findMin', () => {
    test('returns undefined if the root is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree.findMin()).toBe(undefined)
    })

    test('returns the minimum number in the tree', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        customBinarySearchTree.add(2)
        expect(customBinarySearchTree.findMin()).toBe(1)
    })
})

describe('findMax', () => {
    test('returns undefined if the root is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree.findMax()).toBe(undefined)
    })

    test('returns the minimum number in the tree', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.findMax()).toBe(3)
    })
})

describe('find', () => {
    test('returns undefined if the root is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree.find(2)).toBe(undefined)
    })

    test('returns the left node if number is less than the root of the tree', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.find(1)).toBe(customBinarySearchTree?.root?.left)
    })

    test('returns the right node if number is more than the root of the tree', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.find(3)).toBe(customBinarySearchTree?.root?.right)
    })
})

describe('isPresent', () => {
    test('returns false if the root is null', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree.isPresent(2)).toBe(false)
    })

    test('returns false if the number is not present', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.isPresent(4)).toBe(false)
    })

    test('returns true if the number is present', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.isPresent(3)).toBe(true)
    })
})

describe('remove', () => {
    test('returns undefined if the tree root is undefined', () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        expect(customBinarySearchTree.remove(3)).toBe(undefined);
    });

    test('removes correct node when more than root',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        customBinarySearchTree.remove(3)
        expect(customBinarySearchTree.root).toStrictEqual({right: undefined, left: {data: 1}, data: 2})
    });

    test('removes correct node when less than root',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        customBinarySearchTree.remove(1)
        expect(customBinarySearchTree.root).toStrictEqual({right: {data: 3}, left: undefined, data: 2})
    });

    test('removes correct node when equal to root',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(4)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(5)
        customBinarySearchTree.add(1)
        customBinarySearchTree.remove(4)
        expect(customBinarySearchTree.root).toStrictEqual({data: 5, left: {data: 2, left: {data: 1}, right: {data: 3}}, right: undefined})
    });
});

describe('findMinHeight', () => {
    test('correctly calculated the min height',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(4)
        customBinarySearchTree.add(2)
        expect(customBinarySearchTree.findMinHeight(customBinarySearchTree.root)).toBe(1)
    });
})


describe('findMaxHeight', () => {
    test('correctly calculated the max height',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(4)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(5)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.findMaxHeight(customBinarySearchTree.root)).toBe(2)
    });
})

describe('isBalanced', () => {
    test('returns true if balanced',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(4)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(5)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.isBalanced()).toBe(true)
    });

    test('returns false if not balanced',  () => {
        const customBinarySearchTree = createCustomBinarySearchTree();
        customBinarySearchTree.add(5)
        customBinarySearchTree.add(4)
        customBinarySearchTree.add(2)
        customBinarySearchTree.add(3)
        customBinarySearchTree.add(1)
        expect(customBinarySearchTree.isBalanced()).toBe(true)
    });
})

