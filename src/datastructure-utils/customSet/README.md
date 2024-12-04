# Custom Set - Documentation

## Overview

A **set** is a data structure that stores unique values without any particular order. Sets are useful for managing collections where duplicates are not allowed, and they support operations like unions, intersections, and differences.

### Use Cases

Sets are highly useful in scenarios such as:

- **Data De-duplication**: Removing duplicates from a collection of elements.
- **Set Operations**: Performing mathematical operations like union, intersection, and difference on data sets.
- **Membership Testing**: Efficiently checking if an element exists in a collection.
- **Subset Checking**: Determining if one set is a subset of another.

---

## Custom Set

This implementation of a set stores unique elements in an array and provides methods for common set operations.

---

## Methods and Usage

### `has(element: any)`

**Description**: Checks if an element exists in the set.

**Usage**:

```javascript
const set = createCustomSet();
set.add('a');
console.log(set.has('a')); // Output: true
console.log(set.has('b')); // Output: false
```

---

### `values()`

**Description**: Returns all the elements of the set as an array.

**Usage**:

```javascript
const set = createCustomSet();
set.add('a');
set.add('b');
console.log(set.values()); // Output: ['a', 'b']
```

---

### `add(element: any)`

**Description**: Adds an element to the set if it does not already exist. Returns `true` if the element was added, and `false` otherwise.

**Usage**:

```javascript
const set = createCustomSet();
console.log(set.add('a')); // Output: true
console.log(set.add('a')); // Output: false
```

---

### `remove(element: any)`

**Description**: Removes an element from the set if it exists. Returns `true` if the element was removed, and `false` otherwise.

**Usage**:

```javascript
const set = createCustomSet();
set.add('a');
console.log(set.remove('a')); // Output: true
console.log(set.remove('b')); // Output: false
```

---

### `size()`

**Description**: Returns the number of elements in the set.

**Usage**:

```javascript
const set = createCustomSet();
set.add('a');
set.add('b');
console.log(set.size()); // Output: 2
```

---

### `union(otherSet: CustomSet)`

**Description**: Returns a new set that is the union of the current set and another set. The union of two sets contains all elements that are in either set.

**Usage**:

```javascript
const setA = createCustomSet();
setA.add('a');
setA.add('b');

const setB = createCustomSet();
setB.add('b');
setB.add('c');

const unionSet = setA.union(setB);
console.log(unionSet.values()); // Output: ['a', 'b', 'c']
```

---

### `intersection(otherSet: CustomSet)`

**Description**: Returns a new set that is the intersection of the current set and another set. The intersection of two sets contains only the elements that are in both sets.

**Usage**:

```javascript
const setA = createCustomSet();
setA.add('a');
setA.add('b');

const setB = createCustomSet();
setB.add('b');
setB.add('c');

const intersectionSet = setA.intersection(setB);
console.log(intersectionSet.values()); // Output: ['b']
```

---

### `difference(otherSet: CustomSet)`

**Description**: Returns a new set that contains elements that are in either set but not in both.

**Usage**:

```javascript
const setA = createCustomSet();
setA.add('a');
setA.add('b');

const setB = createCustomSet();
setB.add('b');
setB.add('c');

const differenceSet = setA.difference(setB);
console.log(differenceSet.values()); // Output: ['a', 'c']
```

---

### `subset(otherSet: CustomSet)`

**Description**: Returns `true` if the current set is a subset of another set. A subset is defined as a set where all its elements are also in the other set.

**Usage**:

```javascript
const setA = createCustomSet();
setA.add('a');
setA.add('b');

const setB = createCustomSet();
setB.add('a');
setB.add('b');
setB.add('c');

console.log(setA.subset(setB)); // Output: true
console.log(setB.subset(setA)); // Output: false
```

---

## Example Workflow

```javascript
const setA = createCustomSet();
setA.add('x');
setA.add('y');
setA.add('z');

const setB = createCustomSet();
setB.add('y');
setB.add('z');
setB.add('w');

// Union
const unionSet = setA.union(setB);
console.log(unionSet.values()); // Output: ['x', 'y', 'z', 'w']

// Intersection
const intersectionSet = setA.intersection(setB);
console.log(intersectionSet.values()); // Output: ['y', 'z']

// Difference
const differenceSet = setA.difference(setB);
console.log(differenceSet.values()); // Output: ['x', 'w']

// Subset
console.log(setB.subset(setA)); // Output: false
```

---

This custom set implementation is simple, efficient, and well-suited for operations requiring uniqueness and set theory functionality in JavaScript/TypeScript projects.
