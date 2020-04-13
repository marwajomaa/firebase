import React from 'react';

const FormInput = ({label, handleChange, ...otherProps}) =>{
    return(
    <div>
        <input
         onChange={handleChange}
         {...otherProps}
        ></input>
    </div>
    )
}

export default FormInput;