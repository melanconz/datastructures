## Stack in Programming

A **stack** is a data structure that follows the **Last In, First Out (LIFO)** principle, meaning the last item added is the first to be removed. It's similar to a stack of plates: the plate added last is the first one you can take off.

### Key Operations:

- **createStack**:Create the stack
- **push**: Add an item to the top of the stack.
- **pop**: Remove the item from the top of the stack.
- **peek**: Look at the item on top of the stack without removing it.
- **size**: Check the size od the stack.
- **count**: The current stack count.
- **structure**: The stack's structure.

### Example :

```
import { createStack } from './customStack'

const stack = createStack()

# Push items onto the stack
stack.push(1)
stack.push(2)
stack.push(3)

# Pop item from the stack
const topItem = stack.pop()  # topItem will be 3, stack is now [1, 2]
console.log(stack.peek()) # will log 2
const currentStackSize = stack.size() # will be 2
console.log(stack.count) # will log 2
console.log(stack.structure) # will log stack's structure
```

---

## When to Use a Stack:

### 1. Function Call Management (Call Stack)

- Many programming languages use a stack to manage function calls. Each function call is **pushed** onto the stack and **popped** off once it completes.
- Useful for **recursion** and **nested function calls**.

### 2. Undo/Redo Features

- Applications (like text editors) use stacks to implement undo/redo functionality.
  - Actions are **pushed** onto a stack (for undo).
  - When an undo is performed, it’s **pushed** to another stack (for redo).

### 3. Depth-First Search (DFS)

- **DFS** algorithms in graphs or tree traversal use stacks to explore nodes deeply before backtracking.
- Stacks store the nodes to backtrack efficiently.

### 4. Balancing Symbols

- Stacks can check if parentheses, brackets, or braces are balanced in expressions, e.g., `([{}])`.
  - Push opening symbols onto the stack and pop when matching closing symbols are encountered.

### 5. Reversing Data

- Since stacks operate in **LIFO** order, they are used to reverse sequences of data.
  - Push elements onto a stack and then pop them to get the reverse order.

---

## Real-world Example:

### Web Browser Back/Forward Navigation

- When navigating web pages:
  - The **back stack** stores pages visited in reverse order.
  - The **forward stack** stores pages for redo navigation.
  - Clicking "back" pushes the current page onto the forward stack and pops the previous page from the back stack.
