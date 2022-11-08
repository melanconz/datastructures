export interface CustomPriorityQueue {
    queue: Array<[any, number]>,
    print: (this: CustomPriorityQueue) => void,
    enqueue: (this: CustomPriorityQueue, element: [any, number]) => void,
    dequeue: (this: CustomPriorityQueue) => any, 
    front: (this: CustomPriorityQueue) => any,
    size: (this: CustomPriorityQueue) => number,
    isEmpty: (this: CustomPriorityQueue) => boolean
}