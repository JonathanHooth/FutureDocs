import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Example state for user login status

  return (
    <>
      <div className="navBarContainer">
        <Link className="navLink" to="/">
          <div className="title">SwampHacks</div>
        </Link>

        <div className="rightSided">
          <div className="account">
            <Link className="navLink" to="/auth">
              <button className="button">
                {isLoggedIn ? "Log Out" : "Sign In"}
              </button>
            </Link>
          </div>
          <div className="time">11:06 AM</div>
          <div className="date">26 Jan 2025</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
