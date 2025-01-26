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
          {!isLoggedIn && (
            <>
              <div className="account">
                <Link className="navLink" to="/auth">
                  <button className="button">Log In</button>
                </Link>
              </div>
              <div className="account">
                <Link className="navLink" to="/auth">
                  <button className="button">Sign In</button>
                </Link>
              </div>
            </>
          )}
          {isLoggedIn && (
            <div className="account">
              <button
                className="button"
                onClick={() => {
                  setIsLoggedIn(false); // Simulate logout
                  alert("Logged out successfully!");
                }}
              >
                Log Out
              </button>
            </div>
          )}
          <div className="time">11:06 AM</div>
          <div className="date">26 Jan 2025</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
