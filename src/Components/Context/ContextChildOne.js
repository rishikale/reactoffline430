import React, { useContext } from "react";
import { FirstContext } from "./ContextParent";

function ContextChildOne(){

    const {Name}=useContext(FirstContext)
    console.log("The context Name values are :",Name);
    
    return (
        <div>
            <div>Context Child One </div>
            {/* <ChildThree Name={Name} /> */}
            <div>The name from the context parent is :{Name}</div>
        </div>
    )
}

export default ContextChildOne;