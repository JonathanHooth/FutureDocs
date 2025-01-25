import { useState } from "react";

import "./NavBar.css"

function NavBar(){



  return(
    <>
    <div className="navBarContainer">
      <div className="title">
        SwampHacks
      </div>

      <div className="rightSided">
        <div className="account">
          <button className="button">
            Sign In
          </button>
        </div>
        <div className="time">
          11:06 AM
        </div>
        <div className="date">
          26 Jan 2025
        </div>
      </div>

    </div>
    
    </>
  )

}


export default NavBar