import { CustomPriorityQueue } from "./customPriorityQueue.model"

const print = function(this: CustomPriorityQueue) {
    console.log(this.queue);
}

const enqueue = function(this: CustomPriorityQueue, element: [any, number]) {
    if (this.isEmpty()) {
        this.queue.push(element)
    } else {
        let added = false;
        for (let index = 0; index < this.queue.length; index++) {
            if (element[1] < this.queue[index][1]){
                this.queue.splice(index,0,element);
                added = true;
                break;
            }
        }

        if (!added) {
            this.queue.push(element);
        }
    }
}

const dequeue = function(this: CustomPriorityQueue) {
    const dequeuedElement = this.queue.shift()
    return dequeuedElement && dequeuedElement[0]
}

const front = function(this: CustomPriorityQueue) {
    return this.queue[0][0];
}

const size = function(this: CustomPriorityQueue) {
    return this.queue.length;
}

const isEmpty = function(this: CustomPriorityQueue) {
    return this.queue.length === 0;
}

export const createCustomPriorityQueue = (): CustomPriorityQueue => {
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