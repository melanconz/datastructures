import { CustomSet } from "./customSet.model"

const has = function(this: CustomSet, element: any) {
    return this.collection.includes(element);
}

const values = function(this: CustomSet): Array<any> {
    return this.collection
}

const add = function(this: CustomSet, element: any) {
    if (!this.has(element)) {
        this.collection.push(element);
        return true;
    }
    return false;
}

const remove = function(this: CustomSet, element: any) {
    if (this.has(element)) {
        this.collection = this.collection.filter(item => item !== element)
        return true
    }
    
    return false
}

const size = function(this: CustomSet) {
    return this.collection.length
}

const union = function(this: CustomSet, otherSet: CustomSet) {
    const unionSet = createCustomSet()
    const collectionValues = this.values()
    const otherSetValues = otherSet.values()
    collectionValues.forEach((element: any) => {
        unionSet.add(element)
    });
    otherSetValues.forEach(element => {
        unionSet.add(element)
    });
    return unionSet
}

const intersection = function(this: CustomSet, otherSet: CustomSet) {
    const intersectionSet = createCustomSet()
    const collectionValues = this.values()
    collectionValues.forEach((element) => {
        otherSet.has(element) && intersectionSet.add(element)
    })
    return intersectionSet
}

const difference = function(this: CustomSet, otherSet: CustomSet) {
    const differenceSet = createCustomSet();
    const collectionValues = this.values();
    const otherSetValues = otherSet.values();
    collectionValues.forEach((element) => {
        !otherSet.has(element) && differenceSet.add(element)
    })
    otherSetValues.forEach((element) => {
        !this.has(element) && differenceSet.add(element)
    })
    return differenceSet
}

const subset = function(this: CustomSet, otherSet: CustomSet) {
    const otherSetValues = otherSet.values()
    for (const element of otherSetValues) {
        if (!this.has(element)) {
            return false
        }
    }
    return true
}

export const createCustomSet = () => {
    return {
        collection: [],
        has,
        values,
        add,
        remove,
        size,
        union,
        intersection,
        difference,
        subset
    }
}