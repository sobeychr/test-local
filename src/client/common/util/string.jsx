const chunk = (string, len = 2) =>
    string
        .split(/\s*/)
        .reduce((acc, val, index) => {
            const i = Math.floor(index / 2);
            acc[i] = acc[i] ? acc[i].concat(val) : val;
            return acc;
        }, [])
        .join(' ');

export { chunk };
