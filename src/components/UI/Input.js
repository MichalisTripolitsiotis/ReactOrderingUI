import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.input.id}> {props.label}</label>
            {/* all key value pairs are added as props to input. 
                if we have {type: 'text'}, then <input type="text" />
            */}
            <input {...props.input} />
        </div>
    )
};

export default Input;