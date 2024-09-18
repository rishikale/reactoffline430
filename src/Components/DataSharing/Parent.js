import React from "react";
import Child from "./Child";

function Parent() {
  const [count, setCount] = React.useState(10);
  const [string, setString] = React.useState("");

  const Name = "Rishi";

  return (
    <div>
      <div>The count From Parent is :&nbsp;{count}</div>
      <Child name={Name} Number={count} setCount={setCount} />
    </div>
  );
}

export default Parent;

// Data sharing within components in  React js

// 1 . props . : unidirectional : Parent to child data sharing .

// 2 Callback : unidirectional : Child to parent Data sharing .

// 3 Context API : Provided by React js itself : Bi Directional : Parent to child and viceversa data sharing

{
  /* <provider value={{number}}>
    
     <compOne>
     useContext(number)
     </compOne>

     <compTwo></compTwo>

     <compTwo></compTwo>

     <compTwo></compTwo>

     <compTwo></compTwo>
    
   </provider> */
}

//    const [number,setNumber]=React.useState(0)

// 4 React Router : Dependency . : Unidirectional : Navigation use : while navigating
//                                 we can share data or we can pass on the data available in parent to the child we are navigating on .

{
  /* <route component={ChildOne} state={}/> */
}

// state={} : form of data in parent .
// useLocation() : data using : React router provides a hook called useLocation() :

// 5 Redux Toolkit : Dependency .

// where we are creating a Global Store .

// because the store is created in src directory and passed to the app.js .

// for accessing the state or global store : useSelector();

// for modifying the global state : dispatch();

// global store is available to every component present in the application .

// we are creating functions called reducers to modify the global state .
