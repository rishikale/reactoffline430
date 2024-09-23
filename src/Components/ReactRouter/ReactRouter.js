import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

function ReactRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/childone" element={<ChildOne />} />
          <Route path="/childtwo" element={<ChildTwo />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ReactRouter;

// 4 . React - router

// 1 . It is Firstly used for navigating between pages .
// 2. We can pass the data to the page we are navigationg on .

// Page One : Parent Page ,

// Child One  : Path="/childone" : Paths used for navigation .

// Child Two  : path="/childtwo" :Paths used for navigation .

//    useNavigate() : Hook : Provided by React-router and used for navigation .
//    We can pass some data in the form of state while navigationg . { state:{dataObject || Somethong that you have pass to child }}

//  Landing Page  : "/"
//  Error Page    :"*"

// For istallation : npm install react-router-dom . || because its dependency .

// Layout : where we are defining paths and the components .

{
  /* <BrouserRouter>
  <Routes>
    <Route path="/childone" element={<ChildOne />} />
  </Routes>
</BrouserRouter>; */
}

// For using or accessing the data passed from parent :
//       React router Provides a hook : useLocation();
