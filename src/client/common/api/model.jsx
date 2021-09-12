import { deepFreeze } from '@util/object';

class Model {
    static fields = {};

    static parse(sortData, rawData){ return { ...rawData, ...sortData }; }

    constructor(rawData) {
        const staticFields = this.constructor.fields;

        const sortData = Object.keys(staticFields).reduce((acc, key) => ({
            ...acc,
            [key]: rawData[key],
        }), {});

        const parsedData = this.constructor.parse(sortData, rawData);

        Object.keys(parsedData).forEach(key => {
            this[key] = parsedData[key];
        });
        this._rawData = rawData;

        deepFreeze(this);
    }
}

export default Model;
