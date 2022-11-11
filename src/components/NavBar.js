import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return(
        <nav>
          <NavLink
          to={"/"}
          activeStyle={{color: "cultured"}}
          >
            Home
          </NavLink>

          <NavLink
          to={"/categories"}
          activeStyle={{color: "cultured"}}
          >
            Categories
          </NavLink>

          <img src=""/>
       </nav>

    )
}

export default Navbar;