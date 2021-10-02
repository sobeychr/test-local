const leadingZero = (number, len = 2) => {
    const str = number.toString();
    const length = len > str.length ? len - str.length : 0;
    return `${'0'.repeat(length)}${str}`;
};

export { leadingZero };
