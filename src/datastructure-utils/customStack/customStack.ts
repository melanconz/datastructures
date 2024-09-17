import { CustomStack } from './customStack.model';

const peek = function (this: CustomStack) {
  return this.storage[this.count - 1];
};

const push = function (this: CustomStack, item: any) {
  this.storage[this.count] = item;
  this.count++;
};

const pop = function (this: CustomStack) {
  if (this.count === 0) {
    return;
  }
  this.count--;
  const lastIn = this.storage[this.count];
  delete this.storage[this.count];
  return lastIn;
};

const size = function (this: CustomStack) {
  return this.count;
};

export const createStack = (): CustomStack => {
  return {
    count: 0,
    storage: {},
    peek,
    push,
    pop,
    size,
  };
};
