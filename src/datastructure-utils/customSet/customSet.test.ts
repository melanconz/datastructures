import { createCustomSet } from './customSet'

describe('createCustomSet', () => {
    test('instantiates a custom set', () => {
        let set = createCustomSet()
        expect(set.collection).toStrictEqual([])
    });
});

describe('has', () => {
    test('returns false if the element does not exist in the set', () => {
        let set = createCustomSet()
        expect(set.has('test')).toBe(false)
    })
})