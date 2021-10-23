import Model from '@api/model';

class RuneWord extends Model {
    static fields = {
        category: '',
        items: [],
        name: '',
        runeorder: [],
        stats: [],
    };

    static defaultItem = 'all';
    static items = [];

    static defaultCategory = 'all';
    static categories = [];

    static parseList = (list) => {
        const parsed = list.sort(this.sort).map((entry) => new RuneWord(entry));

        const itemSet = new Set(parsed.reduce((acc, { items }) => [...acc, ...items], []));
        this.items = [this.defaultItem, ...itemSet].sort();

        this.categories = [this.defaultCategory, 'original', '1.10', '1.10 La', '1.11'];

        return parsed;
    };

    static sort = (a, b) => (a.name > b.name ? 1 : -1);

    static validateList =
        ({ filterCategory, filterItem, filterName, filterRune, filterStat }) =>
        ({ category, items, name, runeorder, stats }) => {
            if (filterName) {
                const validName = name.toLowerCase().includes(filterName.toLowerCase());
                if (!validName) {
                    return false;
                }
            }

            if (filterCategory && filterCategory !== this.defaultCategory) {
                const validCategory = category.toLowerCase() === filterCategory.toLowerCase();
                if (!validCategory) {
                    return false;
                }
            }

            if (filterItem && filterItem !== this.defaultItem) {
                const findItems = filterItem.toLowerCase();
                const listItems = items.join(' ').toLowerCase();
                const validItems = listItems.includes(findItems);
                if (!validItems) {
                    return false;
                }
            }

            if (filterStat) {
                const findStats = filterStat.toLowerCase();
                const listStats = stats.join(' ').toLowerCase();
                const validStats = listStats.includes(findStats);
                if (!validStats) {
                    return false;
                }
            }

            if (filterRune) {
                const findRunes = filterRune.toLowerCase().split(' ').filter(entry => entry.length > 0);
                const listRunes = runeorder.join(' ').toLowerCase().split(' ');
                findRunes.forEach(entry => {
                    const index = listRunes.indexOf(entry);
                    if(index >= 0) {
                        listRunes.splice(index, 1);
                    }
                });
                const validRunes = listRunes.length + findRunes.length === runeorder.length;
                if(!validRunes) {
                    return false;
                }
            }

            return true;
        };
}

export default RuneWord;
