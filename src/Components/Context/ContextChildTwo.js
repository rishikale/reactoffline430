import React, { useContext } from "react";
import { FirstContext } from "./ContextParent";

function ContextChildTwo(){
    const {array,setArray}=useContext(FirstContext)
    console.log("The context values are :",array);
    return (
        <div>
            <div>Context Child Two</div>
        </div>
    )
}

export default ContextChildTwo;