const charcodeToStr = (str) => {
    const result = [];
    const len = str.length;
    let j = 2;
    let c;
    for (let i = 0; i < len; i += j) {
        j = 3;
        c = parseInt(str.substr(i, j), 10);
        if (c > 255) {
            j = 2;
            c = parseInt(str.substr(i, j), 10);
        }
        result.push(String.fromCharCode(c));
    }
    return result.join('');
};

const strToCharcode = (str) =>
    str
        .split('')
        .map((char) => char.charCodeAt(0))
        .join('');

export const base64 = (str, encode = true) => (encode ? btoa(str) : atob(str));

export const charcode = (str, encode = true) => (encode ? strToCharcode(str) : charcodeToStr(str));

// export const jsonencode = (str, encode = true) => (encode ? pretty(str) : minify(str));

// export const jsonrichencode = (str, encode = true) => (encode ? prettyRich(str) : minifyRich(str));

export const urlencode = (str, encode = true) => str;
