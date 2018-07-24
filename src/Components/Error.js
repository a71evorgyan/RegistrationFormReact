import React from 'react';

export const FormErrors = ({showError}) => {
    return(
    <div> 
    {
        !showError ? <span style={{color: "red"}}>Not valid</span> : ''
    }
    </div>)
}
 
