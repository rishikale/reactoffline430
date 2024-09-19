import React, { createContext } from "react";
import ContextChildOne from "./ContextChildOne";
import ContextChildTwo from "./ContextChildTwo";

export const FirstContext = createContext();
// const SecondContext=createContext()
// used to create a network

function ContextParent() {
    const [finalData, setFinalData] = React.useState({
      value: "",
    });
    const [array, setArray] = React.useState([1, 2, 3]);
  const Name = "Rishi";
  // where we are creating network and sharing data to childs
  return (
    <FirstContext.Provider value={{ setArray, array, Name }}>
      <div>
        <div>Context Parent</div>
        <ContextChildOne  />
        <ContextChildTwo  />
      </div>
    </FirstContext.Provider>
  );
}

export default ContextParent;
