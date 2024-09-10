import React, { useState } from "react";

function FirstComponent() {
  // variables

  // 1  var : it can be varied throughout the application .
  // 2  let : it can only be varied in perticular block / block scope variable .
  // 3  const : defined a single time and cannot be modified .

  //   useState : react hook used to create state variables/changing variables .
  // which  can be modified anywhere in the application using the setState function .

  // declaration of state variable

  const [number, setNumber] = useState(0);
  const [string, setString] = useState("abc");
  const [array, setArray] = useState([]);
  const [object, setObject] = useState({
    name: "Rishi",
    age: 25,
  });
  const [boolean, setBoolean] = useState(true);
  
  //   const [myArr, modifyMyArr] = useState([]);
  //       0->1->2

  // let numbers=0;

  // number=10

  //    number  : The actual variable we are using ;
  //    setNumber : setNumber is a function provided by useState hook to modify the state .
  //    useState(0) : after component goes or renders in user interfaces the
  //     initial state of your variable will be 0

  var a = 10;

  function LetVariable() {
    let variable = 10;
  }

  function incrementNumber() {
    if (number !== 20) {
      setNumber(number + 10);
    }
  }

  function modifyString() {
    setString(string + "MNO");
  }

  function resetString() {
    setString("");
  }

  console.log("the state variable is :", string, number);

  return (
    <div>
      <div>First Component..!</div>
      <button
        onClick={() => {
          LetVariable();
        }}
      >
        Vary
      </button>
      <button
        onClick={() => {
          incrementNumber();
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          modifyString();
        }}
      >
        Modify String
      </button>
      <button
        onClick={() => {
          resetString();
        }}
      >
        Reset String
      </button>
    </div>
  );
}

export default FirstComponent;

// Var
// Let
// Const

// useState() : React hook .
