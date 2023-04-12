import React from 'react';
import classes from './MyButtons.module.css'
const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.MyBtn}>
            {children}
        </button>
    );
};

export default MyButton