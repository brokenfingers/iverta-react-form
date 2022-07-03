import React from 'react';
import classes from './Button.module.css'

interface Props {
    children: React.ReactNode;
    type: 'button' | 'submit' | undefined | 'reset';
    onClick?: () => void
}

const Button = (props: Props) => {

    return (<button className={classes.button} type={props.type} onClick={props.onClick}>{props.children}</button>)
}

export default Button