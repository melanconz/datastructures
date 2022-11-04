import { createCustomSet } from './customSet'

describe('createCustomSet', () => {
    test('instantiates a custom set', () => {
        let set = createCustomSet()
        expect(set.collection).toStrictEqual([])
    });
});

describe('has', () => {
    test('returns false if the element does not exist in the set', () => {
        const set = createCustomSet()
        expect(set.has('test')).toBe(false)
    })

    test('returns true if the element does exist in the set', () => {
        const set = createCustomSet()
        set.add('test')
        expect(set.has('test')).toBe(true)
    })
})

describe('values', () => {
    test('returns the vaues of the set', () => {
        const set = createCustomSet()
        set.add('a')
        expect(set.values()).toStrictEqual(['a'])
    })
})

describe('add', () => {
    test('adds element to set and returns true if the element does not exist in the set already', () => {
        const set = createCustomSet()
        const isAdded = set.add('a')
        expect(isAdded).toBe(true)
        expect(set.values()).toStrictEqual(['a'])
    })

    test('does not add element to set and returns false if the element exists in the set already', () => {
        const set = createCustomSet()
        set.add('a')
        const isAdded = set.add('a')
        expect(isAdded).toBe(false)
        expect(set.values()).toStrictEqual(['a'])
    })
})

describe('remove', () => {
    test('removes element of set and returns true if the element exists in the set', () => {
        const set = createCustomSet()
        set.add('a')
        const isRemoved = set.remove('a')
        expect(isRemoved).toBe(isRemoved)
        expect(set.values()).toStrictEqual([])
    })

    test('returns false if the element does not exists in the set', () => {
        const set = createCustomSet()
        set.add('a')
        const isRemoved = set.remove('b')
        expect(isRemoved).toBe(false)
        expect(set.values()).toStrictEqual(['a'])
    })
})

describe('size', () => {
    test('returns the size of the set', () => {
        const set = createCustomSet()
        set.add('a')
        expect(set.size()).toStrictEqual(1)
    })
})

describe('union', () => {
    test('returns the union of two sets', () => {
        const set1 = createCustomSet();
        const set2 = createCustomSet();
        set1.add('a')
        set1.add('b')
        set1.add('c')
        set2.add('1')
        set2.add('b')
        set2.add(3)
        const unionSet = set1.union(set2)
        expect(unionSet.values()).toStrictEqual(["a", "b", "c", "1", 3])
    })
})

describe('intersection', () => {
    test('returns the intersection of two sets', () => {
        const set1 = createCustomSet();
        const set2 = createCustomSet();
        set1.add('a')
        set1.add('b')
        set1.add('c')
        set2.add('a')
        set2.add('b')
        set2.add(3)
        const unionSet = set1.intersection(set2)
        expect(unionSet.values()).toStrictEqual(["a", "b"])
    })
})

describe('difference', () => {
    test('returns the difference of two sets', () => {
        const set1 = createCustomSet();
        const set2 = createCustomSet();
        set1.add('a')
        set1.add('b')
        set1.add('c')
        set2.add('a')
        set2.add('b')
        set2.add(3)
        const unionSet = set1.difference(set2)
        expect(unionSet.values()).toStrictEqual(["c", 3])
    })
})


describe('subset', () => {
    test('returns false if provided set is not a subset of the set', () => {
        const set1 = createCustomSet();
        const set2 = createCustomSet();
        set1.add('a')
        set1.add('b')
        set1.add('c')
        set2.add('a')
        set2.add('b')
        set2.add(3)
        const isSubset = set1.subset(set2)
        expect(isSubset).toBe(false)
    })

    test('returns true if provided set is a subset of the set', () => {
        const set1 = createCustomSet();
        const set2 = createCustomSet();
        set1.add('a')
        set1.add('b')
        set1.add('c')
        set2.add('a')
        set2.add('b')
        const isSubset = set1.subset(set2)
        expect(isSubset).toBe(true)
    })
})