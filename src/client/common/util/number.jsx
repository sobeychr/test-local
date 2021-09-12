const leadingZero = (number, len = 2) => {
    const str = number.toString();
    return `${'0'.repeat(len - str.length)}${str}`;
};

export { leadingZero };
