import React, { useState } from 'react';

//This is not a parent component because it is not rendering another component in its return

function InputComponent() {

    const [inputValue, setInputValue] = useState('')

    const handleChange = (event) => {
        //this will access the value of a HTML form element
        //for example whatever is typed in the input
        setInputValue(event.target.value)
    }


    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />    
            <p>{inputValue}</p>
        </div>
    );
}

export default InputComponent
