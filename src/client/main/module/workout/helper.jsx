const splitCalc = (distance, time) => {
    const meter = parseInt(distance, 10);
    const splitMeter = meter / 500;
    return parseFloat((time / splitMeter).toFixed(3));
};

export { splitCalc };
