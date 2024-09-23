import React from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  let userObject = {
    name: "Rishi",
    age: 26,
  };

  let secondUser = {
    name: "ankit",
    age: 23,
  };

  return (
    <div>
      <div>Home Page</div>
      <div style={{}}>
        <span>
          <button
            onClick={() => {
              navigate("/childone", 
              { state: { userObject,secondUser } });
            }}
          >
            Child One
          </button>
        </span>
        <span>
          <button
            onClick={() => {
              navigate("/childtwo");
            }}
          >
            Child Two
          </button>
        </span>
      </div>
    </div>
  );
}

export default Home;
