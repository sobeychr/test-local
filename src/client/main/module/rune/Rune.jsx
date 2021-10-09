import Model from '@api/model';

class Rune extends Model {
    static fields = {
        armor: [],
        level: 0,
        name: 0,
        weapon: [],
    };

    static parseList = (list) => list.map((entry) => new Rune(entry));
}

export default Rune;
