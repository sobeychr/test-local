const REG_NON_NUM = /[^\d]+/g;
const stripNonNumber = (input) => input.replace(REG_NON_NUM, '');

export { stripNonNumber };
