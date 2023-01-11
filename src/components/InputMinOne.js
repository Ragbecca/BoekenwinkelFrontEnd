import React from 'react';

const InputMinOne = (props) => {
    let inputClassName = props.classes;
    if (props.hasError !== undefined) {
        inputClassName += props.hasError ? ' is-invalid' : ' is-valid';
    };

    return (
        <div>
            {props.label && <label className={props.labelClass}>{props.label}</label>}
            <input
                name={props.name}
                className={inputClassName}
                type={props.type || 'text'}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.onChange}
                min='1'
                required
            />
            {props.hasError && (
                <span className="invalid-feedback">{props.error}</span>
            )}
        </div>
    );
};

InputMinOne.defaultProps = {
    onChange: () => { }
};

export default InputMinOne;