const splitCalc = ({ distance, duration }) => {
    const splitMeter = +distance / 500;
    return parseFloat((+duration / splitMeter).toFixed(3));
};

export { splitCalc };
