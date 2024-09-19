import React from "react";
import ChildTwo from "./ChildTwo";

function Child(props) {
  // function Child({name}) {
  const { name, Number, setCount } = props;

  return (
    <div
      style={{
        marginTop: "20px",
      }}
    >
      <div>Child Component</div>
      <div>The Props From the parent :&nbsp;{name}</div>
      <button
        type="button"
        // The execution of callback event in child component
        onClick={() => {
          setCount(Number + 5);
        //   setString("ABCD");
        }}
      >
        Change Count
      </button>
      <ChildTwo FirstName={props.name} setCount={setCount} />
    </div>
  );
}

export default Child;
