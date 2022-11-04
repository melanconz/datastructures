export interface CustomStack {
    count: number,
    storage: {
        [key: number]: any
    },
    peek: (this: CustomStack) => any,
    push: (this: CustomStack,  value: any) => void,
    pop: (this: CustomStack) => any,
    size: (this: CustomStack) => number
}