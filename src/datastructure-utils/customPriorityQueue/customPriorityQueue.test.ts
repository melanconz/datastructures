import { createCustomPriorityQueue } from "./customPriorityQueue"

describe('createCustomPriorityQueue', () => {
    test('creates a priority queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        expect(customPriorityQueue.queue).toStrictEqual([]);
    })
})

describe('print', () => {
    test('logs the queue', () => {
        console.log = jest.fn()
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.print();
        expect(console.log).toHaveBeenCalledWith([]);
    });
});

describe('enqueue', () => {
    test('adds element to empty queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test', 2]);
        expect(customPriorityQueue.queue).toStrictEqual([['test', 2]]);
    })

    test('adds element in priority order to queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test2', 2]);
        customPriorityQueue.enqueue(['test3', 3]);
        customPriorityQueue.enqueue(['test1', 1]);

        expect(customPriorityQueue.queue).toStrictEqual([['test1', 1], ['test2', 2], ['test3', 3]]);
    })
});

describe('dequeque', () => {
    test('returns undefined if there is nothing in the queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        expect(customPriorityQueue.dequeue()).toEqual(undefined);
    });

    test('removes first element from the queue and returns the removed element', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test2', 2]);
        customPriorityQueue.enqueue(['test3', 3]);
        customPriorityQueue.enqueue(['test1', 1]);
        expect(customPriorityQueue.dequeue()).toEqual('test1');
        expect(customPriorityQueue.queue).toStrictEqual([['test2', 2], ['test3', 3]])
    });
});

describe('front', () => {
    test('returns element at the front of the queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test2', 2]);
        customPriorityQueue.enqueue(['test3', 3]);
        customPriorityQueue.enqueue(['test1', 1]);
        expect(customPriorityQueue.front()).toEqual('test1');
    });
});

describe('size', () => {
    test('returns size of queue', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test2', 2]);
        customPriorityQueue.enqueue(['test3', 3]);
        customPriorityQueue.enqueue(['test1', 1]);
        expect(customPriorityQueue.size()).toEqual(3);
    });
});

describe('isEmpty', () => {
    test('returns true if queue is empty', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        expect(customPriorityQueue.isEmpty()).toEqual(true);
    });

    test('returns false if queue is not empty', () => {
        const customPriorityQueue = createCustomPriorityQueue();
        customPriorityQueue.enqueue(['test2', 2]);
        customPriorityQueue.enqueue(['test3', 3]);
        customPriorityQueue.enqueue(['test1', 1]);
        expect(customPriorityQueue.isEmpty()).toEqual(false);
    });
});
