import React from "react";

//parentMessage is the props being passed down from the parent component

function ChildComponent(parentMessage) {

  return (

    <div>
      <h2>This is the child component</h2>
      {/* the reason its parentMessage.message is because we called it message in the parent component "<ChildComponent message={message} />" */}
      <p>{parentMessage.message}</p>
    </div>
  );
}

export default ChildComponent;
