import React from 'react';
import { Button as BootButton } from 'react-bootstrap';

const Button = ({ isOn, isOff, isUnique, label, ...rest }) => {
    const classes = [isOn && 'on', isOff && 'off', isUnique && 'unique'];
    const variant = (isOn && 'success') || (isOff && 'warning');
    return (
        <BootButton className={classes} size='sm' variant={variant} {...rest}>
            {label}
        </BootButton>
    );
};

const ButtonRow = ({ func, label, on, off, onClick: onClickParam }) => {
    const onClick = (isEncode) => () => onClickParam(func, label, isEncode);

    const isUnique = (on && !off) || (!on && off);
    return (
        <li>
            {on && <Button isOn isUnique={isUnique} label={label} onClick={onClick(true)} />}
            {off && <Button isOff isUnique={isUnique} label={label} onClick={onClick(false)} />}
        </li>
    );
};

export default ButtonRow;
