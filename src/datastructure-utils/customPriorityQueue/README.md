# Custom Priority Queue - Documentation

## Overview

A **priority queue** is an abstract data structure similar to a regular queue but with an added feature: each element is associated with a priority. Instead of processing elements in a strict first-in-first-out (FIFO) manner, the priority queue processes elements based on their priority, with higher-priority elements dequeued before lower-priority ones.

### Use Cases

Priority queues are highly useful in scenarios such as:

- **Task Scheduling**: Handling tasks where some are more critical than others (e.g., OS process scheduling).
- **Pathfinding Algorithms**: Implementing Dijkstra's or A\* algorithm for finding the shortest path in graphs.
- **Event Simulation**: Managing events with priorities in a simulation system.
- **Data Streaming**: Processing data where certain entries have higher importance.

---

## Custom Priority Queue

This implementation of a priority queue stores elements as tuples `[value, priority]`, where:

- `value` represents the data stored.
- `priority` is a number that determines the importance of the element (lower numbers indicate higher priority).

---

## Methods and Usage

### `print()`

**Description**: Logs the current queue to the console.

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
pq.enqueue(['Task 1', 3]);
pq.enqueue(['Task 2', 1]);
pq.print(); // Logs: [['Task 2', 1], ['Task 1', 3]]
```

---

### `enqueue(element: [any, number])`

**Description**: Adds an element to the queue based on its priority. Elements with lower priority values are added earlier in the queue.

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
pq.enqueue(['Task 1', 3]);
pq.enqueue(['Task 2', 1]); // Higher priority
pq.enqueue(['Task 3', 2]);
pq.print(); // Logs: [['Task 2', 1], ['Task 3', 2], ['Task 1', 3]]
```

---

### `dequeue()`

**Description**: Removes and returns the element with the highest priority (lowest priority number).

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
pq.enqueue(['Task 1', 3]);
pq.enqueue(['Task 2', 1]);
console.log(pq.dequeue()); // Output: 'Task 2'
```

---

### `front()`

**Description**: Returns the value of the element at the front of the queue (highest priority), without removing it.

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
pq.enqueue(['Task 1', 3]);
pq.enqueue(['Task 2', 1]);
console.log(pq.front()); // Output: 'Task 2'
```

---

### `size()`

**Description**: Returns the number of elements in the queue.

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
pq.enqueue(['Task 1', 3]);
pq.enqueue(['Task 2', 1]);
console.log(pq.size()); // Output: 2
```

---

### `isEmpty()`

**Description**: Returns `true` if the queue is empty; otherwise, returns `false`.

**Usage**:

```javascript
const pq = createCustomPriorityQueue();
console.log(pq.isEmpty()); // Output: true
pq.enqueue(['Task 1', 3]);
console.log(pq.isEmpty()); // Output: false
```

---

## Example Workflow

```javascript
const pq = createCustomPriorityQueue();

// Adding elements
pq.enqueue(['Download file', 2]);
pq.enqueue(['Critical system update', 1]);
pq.enqueue(['User notification', 3]);

// Viewing the queue
pq.print(); // Logs: [['Critical system update', 1], ['Download file', 2], ['User notification', 3]]

// Checking the size
console.log(pq.size()); // Output: 3

// Accessing the front element
console.log(pq.front()); // Output: 'Critical system update'

// Removing the highest-priority element
console.log(pq.dequeue()); // Output: 'Critical system update'

// Checking if the queue is empty
console.log(pq.isEmpty()); // Output: false
```

---

This custom priority queue is simple, efficient for most use cases, and easy to integrate into your JavaScript/TypeScript projects.
