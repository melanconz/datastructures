import { CustomQueue } from "./customQueue.model"

const print = function(this: CustomQueue ) {
    console.log(this.queue)
}

const enqueue = function(this: CustomQueue, element: any) {
    this.queue.push(element)
}

const dequeue = function(this: CustomQueue) {
    return this.queue.shift();
}

const front = function(this: CustomQueue) {
    return this.queue[0];
}

const size = function(this: CustomQueue) {
    return this.queue.length
}

const isEmpty = function(this: CustomQueue) {
    return this.queue.length === 0;
}

export const createCustomQueue= (): CustomQueue => {
    return {
       queue: [],
       print,
       enqueue,
       dequeue,
       front,
       size,
       isEmpty
    }
}