import React from 'react';

const FormInput = ({label, handleChange, ...otherProps}) =>{
    return(
    <div style ={{display: 'flex', flexDirection: 'column'}}>
        {label ? <label>{label}</label>: null}
        <input
         onChange={handleChange}
         {...otherProps}
        />
    </div>
    )
}

export default FormInput;