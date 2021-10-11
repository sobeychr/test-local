import Model from '@api/model';

class Rune extends Model {
    static fields = {
        armor: [],
        level: 0,
        name: '',
        weapon: [],
    };

    static parseList = (list) => list.map((entry) => new Rune(entry));

    static validateList =
        (filter) =>
        ({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase());
}

export default Rune;
