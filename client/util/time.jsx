const HOUR_TO_SEC = 60 * 60;
const MIN_TO_SEC = 60;

export const FORMAT_HHMMSS = 1;
export const FORMAT_MMSS = 2;

const leadingZero = (num) => (num.toString().length < 2 ? `0${num}` : num.toString());

export const stringToTime = (string, format = FORMAT_HHMMSS) => {
    let [hour, minute, second] = [0, 0, 0];

    if (format === FORMAT_HHMMSS) {
        [hour, minute, second] = string.split(':');
    } else if (format === FORMAT_MMSS) {
        [minute, second] = string.split(':');
    }

    return (
        parseInt(hour, 10) * HOUR_TO_SEC + parseInt(minute, 10) * MIN_TO_SEC + parseInt(second, 10)
    );
};

export const timeToString = (time, format = FORMAT_HHMMSS) => {
    const hour = Math.floor(time / HOUR_TO_SEC);
    const hourTime = hour * HOUR_TO_SEC;

    const minute = Math.floor((time - hourTime) / MIN_TO_SEC);
    const minuteTime = minute * MIN_TO_SEC;

    const second = time - hourTime - minuteTime;

    const result = [leadingZero(minute), leadingZero(second)];
    if (format === FORMAT_HHMMSS) {
        result.unshift(leadingZero(hour));
    }

    return result.join(':');
};
