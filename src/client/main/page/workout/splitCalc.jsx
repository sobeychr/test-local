const splitCalc = ({ distance, minute, second }) => {
    const meter = parseInt(distance, 10);
    const splitMeter = meter / 500;

    const time = parseInt(minute, 10) * 60 + parseInt(second, 10);
    return time / splitMeter;
};

export default splitCalc;
