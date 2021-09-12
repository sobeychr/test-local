import { leadingZero } from './number';

const getTimestampDate = (ts) => {
    const date = new Date(ts);
    return [
        leadingZero(date.getFullYear(), 4),
        leadingZero(date.getMonth()),
        leadingZero(date.getDate()),
    ].join('-');
};

const getTimestampTime = (ts) => {
    const date = new Date(ts);
    return [
        leadingZero(date.getHours()),
        leadingZero(date.getMinutes()),
        leadingZero(date.getSeconds()),
    ].join(':');
};

const getTimestampFullDate = (ts) => `${getTimestampDate(ts)} ${getTimestampTime(ts)}`;

const timestampToString = (ts) => {
    const hours = Math.floor(ts / 60 / 60);
    const minutes = Math.floor((ts - hours * 60 * 60) / 60);
    const seconds = Math.floor((ts - minutes * 60) / 60);
    return [hours && `${hours}h`, minutes && `${minutes}m`, seconds && `${seconds}m`]
        .filter(Boolean)
        .join(' ');
};

export { getTimestampDate, getTimestampFullDate, getTimestampTime, timestampToString };
