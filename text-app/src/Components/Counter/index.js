import React, { useState } from "react";

function CounterComponent() {

  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    // This is the function that will be called when the button is clicked
    // This function will increment the countValue by 1
    // This function will call the setCountValue function and pass in the new value of countValue
    setCountValue(countValue + 1);
  };

  return (

    <div className="counter">

      <p>The current count value is : {countValue} </p>

      <button onClick={handleIncrement}>Add 1</button>

    </div>
  );
}

export default CounterComponent;

