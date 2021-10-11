import Model from '@api/model';

class RuneWord extends Model {
    static fields = {
        category: '',
        items: [],
        name: '',
        runeorder: [],
        stats: [],
    };

    static parseList = (list) => list.sort(this.sort).map((entry) => new RuneWord(entry));

    static sort = (a, b) => (a.name > b.name ? 1 : -1);

    static validateList =
        ({ filterName, filterRune, filterStat }) =>
        ({ name, runeorder, stats }) => {
            const validation = [];

            if(filterName) {
                validation.push(
                    name.toLowerCase().includes(filterName.toLowerCase()),
                );
            }

            if(filterRune) {
                const findRunes = filterRune.toLowerCase().split(' ');
                const listRunes = runeorder.join(' ').toLowerCase().split(' ');
                const intersectRunes = findRunes.map(entry => listRunes.includes(entry) && entry).filter(Boolean);

                validation.push(
                    intersectRunes.length === findRunes.length,
                );
            }

            if(filterStat) {
                const findStats = filterStat.toLowerCase();
                const listStats = stats.join(' ').toLowerCase();
                validation.push(
                    listStats.includes(findStats),
                );
            }

            return !validation.includes(false);
        };
}

export default RuneWord;
