import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref) => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label}</label>
            {/* all key value pairs are added as props to input. 
                if we have {type: 'text'}, then <input type="text" />
            */}
            <input ref={ref} {...props.input} />
        </div>
    )
});

export default Input;