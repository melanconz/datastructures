import { createStack } from './customStack';

describe('createStack', () => {
    test('returns last item in stack', () => {
        let stack = createStack();
        expect(stack.count).toBe(0);
        expect(stack.storage).toStrictEqual({});
    });
});

describe('peek', () => {
    test('returns undefined if there are no items in the stack', () => {
        let stack = createStack();
        expect(stack.peek()).toBe(undefined)
    })
    test('returns last value in the stack', () => {
        let stack = createStack();
        stack.push('test')
        expect(stack.peek()).toBe('test')
    });
});

describe('push', () => {
    test('updates the count and add item to storage', () => {
        let stack = createStack();
        stack.push('test');
        expect(stack.count).toBe(1);
        expect(stack.storage).toStrictEqual({0: 'test'})
    })
})

describe('pop', () => {
    test('does nothing if stack has a count of zero', () => {
        let stack = createStack();
        expect(stack.count).toBe(0);
        expect(stack.storage).toStrictEqual({});
        stack.pop();
        expect(stack.count).toBe(0);
        expect(stack.storage).toStrictEqual({});
    });

    test('removes the last item from the stack and return it', () => {
        let stack = createStack();
        stack.push('test1');
        stack.push('test2');
        expect(stack.count).toBe(2);
        expect(stack.storage).toStrictEqual({
            0: "test1",  1: "test2",
        });
        const lastIn1 = stack.pop();
        expect(stack.count).toBe(1);
        expect(lastIn1).toBe("test2");
        const lastIn2 = stack.pop();
        expect(stack.count).toBe(0);
        expect(lastIn2).toBe("test1");
    });
});

describe('size', () => {
    test('returns the size of the stack', () => {
        let stack = createStack();
        expect(stack.size()).toBe(0);
        stack.push('test1');
        expect(stack.size()).toBe(1);
    })
})