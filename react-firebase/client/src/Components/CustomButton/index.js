import React from 'react';

const CustomButton = ({label, ...otherProps}) =>{
    return(
    <div>
        <button {...otherProps}>{label}</button>
    </div>
    )
}

export default CustomButton;