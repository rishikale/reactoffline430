import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ChildOne() {
  const location = useLocation();
  const navigate = useNavigate();
  console.log("The location state is :", location.state.userObject);
  console.log("The location state is Two :", location.state["secondUser"]);

  return (
    <div>
      <div>Child One Component</div>
      <button
        onClick={() => {
        //   navigate("/");
        navigate(-1)
        }}
      >
        Home
      </button>
    </div>
  );
}

export default ChildOne;
