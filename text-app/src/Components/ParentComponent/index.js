import React from 'react';
import ChildComponent from '../ChildComponent';

//You know this is a parent component because it is rendering a component in its return on line 10

function ParentComponent() {

    const message = "This is the message from the parent component";

    return (
        <div>
        {/* This is where the props are being passed down in "message={message}" */}
        {/* This is because ChildComponent is being rendered inside this ParentComponent */}
            <ChildComponent message={message} />
        </div>
    );
}

export default ParentComponent