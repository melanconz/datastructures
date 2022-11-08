export interface CustomQueue {
    queue: Array<any>,
    print: () => void
    enqueue: (this: CustomQueue, element: any) => void,
    dequeue: (this: CustomQueue) => CustomQueue,
    front: (this: CustomQueue) => any,
    size: (this: CustomQueue) => number,
    isEmpty: (this: CustomQueue) => boolean,
}