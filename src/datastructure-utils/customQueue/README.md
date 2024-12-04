# Custom Queue - Documentation

## Overview

A **queue** is a linear data structure that operates on a **first-in, first-out (FIFO)** principle. This means the first element added to the queue is the first one to be removed, just like a line at a store or a queue in a scheduling system.

### Use Cases

Queues are highly useful in scenarios such as:

- **Task Scheduling**: Managing tasks or processes in a sequential order.
- **Data Buffers**: Storing and processing data streams.
- **Breadth-First Search (BFS)**: Traversing graphs and trees.
- **Order Processing**: Ensuring items are processed in the order they arrive.

---

## Custom Queue

This implementation of a queue stores elements in a simple array and provides methods to manage the queue's behavior effectively.

---

## Methods and Usage

### `print()`

**Description**: Logs the current queue to the console.

**Usage**:

```javascript
const queue = createCustomQueue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
queue.print(); // Logs: ['Task 1', 'Task 2']
```

---

### `enqueue(element: any)`

**Description**: Adds an element to the back of the queue.

**Usage**:

```javascript
const queue = createCustomQueue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
queue.print(); // Logs: ['Task 1', 'Task 2']
```

---

### `dequeue()`

**Description**: Removes and returns the element at the front of the queue.

**Usage**:

```javascript
const queue = createCustomQueue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
console.log(queue.dequeue()); // Output: 'Task 1'
queue.print(); // Logs: ['Task 2']
```

---

### `front()`

**Description**: Returns the element at the front of the queue without removing it.

**Usage**:

```javascript
const queue = createCustomQueue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
console.log(queue.front()); // Output: 'Task 1'
queue.print(); // Logs: ['Task 1', 'Task 2']
```

---

### `size()`

**Description**: Returns the number of elements in the queue.

**Usage**:

```javascript
const queue = createCustomQueue();
queue.enqueue('Task 1');
queue.enqueue('Task 2');
console.log(queue.size()); // Output: 2
```

---

### `isEmpty()`

**Description**: Returns `true` if the queue is empty; otherwise, returns `false`.

**Usage**:

```javascript
const queue = createCustomQueue();
console.log(queue.isEmpty()); // Output: true
queue.enqueue('Task 1');
console.log(queue.isEmpty()); // Output: false
```

---

## Example Workflow

```javascript
const queue = createCustomQueue();

// Adding elements
queue.enqueue('Download file');
queue.enqueue('Process request');
queue.enqueue('Send notification');

// Viewing the queue
queue.print(); // Logs: ['Download file', 'Process request', 'Send notification']

// Checking the size
console.log(queue.size()); // Output: 3

// Accessing the front element
console.log(queue.front()); // Output: 'Download file'

// Removing the front element
console.log(queue.dequeue()); // Output: 'Download file'

// Checking if the queue is empty
console.log(queue.isEmpty()); // Output: false

// Viewing the queue after dequeuing
queue.print(); // Logs: ['Process request', 'Send notification']
```

---

This custom queue provides an intuitive and efficient way to manage FIFO data structures in your JavaScript/TypeScript projects. It is simple, lightweight, and well-suited for tasks that require sequential processing.
