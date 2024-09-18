import React from "react";

function ChildTwo({FirstName,setCount}){
    return(
        <div>
            <div>Child Two</div>
            <div>As First Name Props :&nbsp;{FirstName}</div>
            <button onClick={()=>{
                setCount(20)
            }}>Increment</button>
        </div>
    )
}

export default ChildTwo