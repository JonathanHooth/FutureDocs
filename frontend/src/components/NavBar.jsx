import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for user login status

<<<<<<main

import { Date } from "./ClockTime/Date"
import { Clock } from "./ClockTime/Clock"

function NavBar(){



  return(
    <>
    <div className="navBarContainer">
      <Link className="navLink" to="/" >
      <div className="title">
        SwampHacks
      </div>
      </Link>

      <div className="rightSided">
        <div className="account">
          <button className="button">
            Sign In
          </button>
        </div>
        <div className="time">
         <Clock />
        </div>
        <div className="date">
          <Date />
        </div>
      </div>
    </>
  );
}

export default NavBar;
