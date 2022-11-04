export interface CustomSet {
    collection: Array<any>,
    has: (this: CustomSet, element: any) => any,
    values: (this: CustomSet) => Array<any>,
    add: (this: CustomSet) => boolean,
    remove: (this: CustomSet, element: any) => boolean,
    size: (this: CustomSet) => number,
    union: (this: CustomSet, otherSet: Array<any>) => Array<any>,
    intersection: (this: CustomSet, otherSet: Array<any>) => Array<any>,
    difference: (this: CustomSet, otherSet: Array<any>) => Array<any>,
    subset: (this: CustomSet, otherSet: Array<any>) => Array<any>
}