import { CustomSet } from "./customSet.model"

export const has = function(this: CustomSet, element: any) {
    return this.collection.includes(element);
}

export const values = function(this: CustomSet) {
    return this.collection
}

export const createCustomSet = () => {
    return {
        collection: [],
        has,
        values
    }
}