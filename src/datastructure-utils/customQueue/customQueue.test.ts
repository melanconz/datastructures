import { createCustomQueue } from "./customQueue";

describe('createCustomQueue', () => {
    test('instantiates a custom queue', () => {
        let customQueue = createCustomQueue()
        expect(customQueue.queue).toStrictEqual([])
    });
});

describe('print', () => {
    test('logs the queue', () => {
        console.log = jest.fn()
        let customQueue = createCustomQueue();
        customQueue.print();
        expect(console.log).toHaveBeenCalledWith([]);
    });
});


describe('enqueque', () => {
    test('adds element to the queue', () => {
        let customQueue = createCustomQueue();
        customQueue.enqueue('a');
        expect(customQueue.queue).toStrictEqual(['a']);
    });
});

describe('dequeque', () => {
    test('removes first element from the queue and returns the removed element', () => {
        let customQueue = createCustomQueue();
        customQueue.enqueue('a');
        customQueue.enqueue('b');
        expect(customQueue.dequeue()).toEqual('a');
        expect(customQueue.queue).toStrictEqual(['b'])
    });
});

describe('front', () => {
    test('returns the first element in the queue', () => {
        let customQueue = createCustomQueue();
        customQueue.enqueue('a');
        customQueue.enqueue('b');
        expect(customQueue.front()).toEqual('a');
    });
});

describe('size', () => {
    test('returns the size of the queue', () => {
        let customQueue = createCustomQueue();
        customQueue.enqueue('a');
        customQueue.enqueue('b');
        expect(customQueue.size()).toEqual(2);
    });
});


describe('isEmpty', () => {
    test('returns whether or not the queue is empty', () => {
        let customQueue = createCustomQueue();
        customQueue.enqueue('a');
        expect(customQueue.isEmpty()).toEqual(false);
        customQueue.dequeue();
        expect(customQueue.isEmpty()).toEqual(true);
    });
});