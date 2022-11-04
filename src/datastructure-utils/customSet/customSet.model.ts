export interface CustomSet {
    collection: Array<any>,
    has: (this: CustomSet, element: any) => any,
    values: (this: CustomSet) => Array<any>,
    add: (this: CustomSet, element: any) => boolean,
    remove: (this: CustomSet, element: any) => boolean,
    size: (this: CustomSet) => number,
    union: (this: CustomSet, otherSet: CustomSet) => CustomSet,
    intersection: (this: CustomSet, otherSet: CustomSet) => CustomSet,
    difference: (this: CustomSet, otherSet: CustomSet) => CustomSet,
    subset: (this: CustomSet, otherSet: CustomSet) => boolean
}